import { NavLink, useLocation } from 'react-router-dom';
import { BookOpen, CheckCircle, Lock } from 'lucide-react';
import { categories } from '@/data/courses';
import { isLessonCompleted } from '@/utils/progress';
import { cn } from '@/lib/utils';

export function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 bg-sidebar border-r border-sidebar-border h-screen sticky top-0 overflow-y-auto">
      {/* Logo */}
      <div className="p-6 border-b border-sidebar-border">
        <NavLink to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center glow-primary">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-sidebar-foreground">CryptoLearn</h1>
            <p className="text-xs text-muted-foreground">Hub</p>
          </div>
        </NavLink>
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
                const isCompleted = isLessonCompleted(lessonId);
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
