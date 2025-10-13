import { useParams, Navigate } from 'react-router-dom';
import { getLessonById } from '@/data/courses';
import { Quiz } from '@/components/Quiz';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Target, CheckCircle, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import { markLessonComplete, isLessonCompleted } from '@/utils/progress';
import { useToast } from '@/hooks/use-toast';

export default function LessonPage() {
  const { lessonId } = useParams<{ lessonId: string }>();
  const { toast } = useToast();
  
  if (!lessonId) {
    return <Navigate to="/" />;
  }

  const lesson = getLessonById(lessonId);
  
  if (!lesson) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Leçon introuvable</h1>
          <Link to="/">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour à l'accueil
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const isCompleted = isLessonCompleted(lessonId);

  const handleQuizComplete = (score: number) => {
    markLessonComplete(lessonId, score);
    
    if (score >= 70) {
      toast({
        title: "🎉 Bravo !",
        description: `Leçon "${lesson.title}" validée avec ${score}% !`,
      });
    }
  };

  return (
    <div className="min-h-screen py-8 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link to="/">
            <Button variant="outline" size="sm" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour
            </Button>
          </Link>
          
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold mb-2">{lesson.title}</h1>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Target className="w-4 h-4" />
                <p>{lesson.objective}</p>
              </div>
            </div>
            {isCompleted && (
              <div className="flex items-center gap-2 px-4 py-2 bg-success/10 border border-success/20 rounded-lg">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-sm font-medium text-success">Complété</span>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <Card className="p-8 mb-8 bg-card border-border shadow-card">
          <div className="prose prose-invert max-w-none">
            {lesson.content.split('\n\n').map((paragraph, index) => {
              // Check if it's a heading (starts with **)
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                const text = paragraph.replace(/\*\*/g, '');
                return (
                  <h2 key={index} className="text-2xl font-bold mt-8 mb-4 text-foreground">
                    {text}
                  </h2>
                );
              }
              
              // Check if it's a subheading (starts with ** but contains more text)
              if (paragraph.includes('**')) {
                // Replace **text** with <strong>text</strong>
                const parts = paragraph.split('**');
                return (
                  <p key={index} className="mb-4 text-foreground/90 leading-relaxed">
                    {parts.map((part, i) => 
                      i % 2 === 0 ? part : <strong key={i} className="text-foreground font-semibold">{part}</strong>
                    )}
                  </p>
                );
              }
              
              return (
                <p key={index} className="mb-4 text-foreground/90 leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </Card>

        {/* Video Resources Section */}
        {lesson.videos && lesson.videos.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                <Youtube className="w-4 h-4 text-accent-foreground" />
              </div>
              <h2 className="text-2xl font-bold">Ressources vidéo</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Clique pour regarder ces vidéos sélectionnées sur YouTube.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {lesson.videos.map((video, index) => {
                // Extract YouTube video ID properly
                let videoId = '';
                try {
                  if (video.url.includes('youtube.com/watch')) {
                    const url = new URL(video.url);
                    videoId = url.searchParams.get('v') || '';
                  } else if (video.url.includes('youtu.be/')) {
                    videoId = video.url.split('youtu.be/')[1]?.split('?')[0] || '';
                  }
                } catch (e) {
                  console.error('Error parsing video URL:', e);
                }
                
                const thumbnailUrl = videoId 
                  ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
                  : '/placeholder.svg';
                
                return (
                  <a
                    key={index}
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <Card className="overflow-hidden transition-all hover:shadow-elegant hover:border-accent/50 cursor-pointer">
                      <div className="aspect-video relative overflow-hidden bg-muted">
                        <img 
                          src={thumbnailUrl} 
                          alt={video.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            // Fallback to standard quality if max resolution fails
                            const target = e.target as HTMLImageElement;
                            if (videoId && !target.src.includes('hqdefault')) {
                              target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                            }
                          }}
                        />
                        <div className="absolute inset-0 bg-background/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center glow-accent">
                            <Youtube className="w-8 h-8 text-accent-foreground" />
                          </div>
                        </div>
                      </div>
                      <div className="p-4 bg-card">
                        <h3 className="font-semibold text-sm group-hover:text-accent transition-colors line-clamp-2">
                          {video.title}
                        </h3>
                        <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                          <Youtube className="w-3 h-3" />
                          Regarder sur YouTube
                        </p>
                      </div>
                    </Card>
                  </a>
                );
              })}
            </div>
          </div>
        )}

        {/* Quiz Section */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
              <span className="text-white font-bold">?</span>
            </div>
            <h2 className="text-2xl font-bold">Quiz de validation</h2>
          </div>
          <p className="text-muted-foreground mb-6">
            Réponds correctement à au moins 70% des questions pour valider cette leçon.
          </p>
          <Quiz
            questions={lesson.quiz}
            onComplete={handleQuizComplete}
            lessonId={lessonId}
          />
        </div>
      </div>
    </div>
  );
}
