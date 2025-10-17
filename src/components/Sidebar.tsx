import { useState, useEffect } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import { BookOpen, CheckCircle, Lock, User, LogOut } from 'lucide-react';
import { categories } from '@/data/courses';
import { isLessonCompleted } from '@/utils/progressSync';
import { cn } from '@/lib/utils';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface UserProfile {
  username: string;
  avatar_url: string | null;
}

export function Sidebar() {
  const location = useLocation();
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);

  useEffect(() => {
    checkUser();
    loadCompletedLessons();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        loadProfile(session.user.id);
        loadCompletedLessons();
      } else {
        setProfile(null);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const loadCompletedLessons = async () => {
    const allLessons = categories.flatMap(cat => cat.lessons);
    const completed = [];
    for (const lessonId of allLessons) {
      if (await isLessonCompleted(lessonId)) {
        completed.push(lessonId);
      }
    }
    setCompletedLessons(completed);
  };

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    setUser(user);
    if (user) {
      loadProfile(user.id);
    }
  };

  const loadProfile = async (userId: string) => {
    const { data } = await supabase
      .from('profiles')
      .select('username, avatar_url')
      .eq('id', userId)
      .single();
    
    if (data) {
      setProfile(data);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast.success('Déconnecté avec succès');
  };

  return (
    <aside className="w-64 bg-sidebar border-r border-sidebar-border h-screen sticky top-0 overflow-y-auto">
      {/* Logo */}
      <div className="p-6 border-b border-sidebar-border">
        <NavLink to="/" className="flex items-center gap-2 mb-4">
          <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center glow-primary">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-sidebar-foreground">CryptoLearn</h1>
            <p className="text-xs text-muted-foreground">Hub</p>
          </div>
        </NavLink>

        {/* Auth Section */}
        {user && profile ? (
          <div className="space-y-3">
            <Link to="/profile">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-sidebar-accent cursor-pointer transition-smooth">
                <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-sidebar-foreground truncate">
                    {profile.username}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Profil
                  </p>
                </div>
              </div>
            </Link>
            <Button
              onClick={handleLogout}
              variant="outline"
              size="sm"
              className="w-full"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Déconnexion
            </Button>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <Link to="/auth">
              <Button className="w-full gradient-primary text-sm">
                Inscription
              </Button>
            </Link>
            <Link to="/auth">
              <Button variant="outline" className="w-full text-sm">
                Connexion
              </Button>
            </Link>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-6">
        {categories.map((category) => (
          <div key={category.id}>
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-2">
              {category.icon} {category.name}
            </h3>
            <ul className="space-y-1">
              {category.lessons.map((lessonId) => {
                const isCompleted = completedLessons.includes(lessonId);
                const isActive = location.pathname === `/lesson/${lessonId}`;
                
                return (
                  <li key={lessonId}>
                    <NavLink
                      to={`/lesson/${lessonId}`}
                      className={cn(
                        "flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-smooth",
                        isActive
                          ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                          : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                      )}
                    >
                      {isCompleted ? (
                        <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                      ) : (
                        <Lock className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      )}
                      <span className="truncate capitalize">
                        {lessonId.replace(/-/g, ' ')}
                      </span>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
