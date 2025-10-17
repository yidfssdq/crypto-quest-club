import { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { getLessonById } from '@/data/courses';
import { Quiz } from '@/components/Quiz';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Target, CheckCircle, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import { markLessonComplete, isLessonCompleted } from '@/utils/progressSync';
import { useToast } from '@/hooks/use-toast';

export default function LessonPage() {
  const { lessonId } = useParams<{ lessonId: string }>();
  const { toast } = useToast();
  const [isCompleted, setIsCompleted] = useState(false);
  
  useEffect(() => {
    const checkCompletion = async () => {
      if (lessonId) {
        const completed = await isLessonCompleted(lessonId);
        setIsCompleted(completed);
      }
    };
    checkCompletion();
  }, [lessonId]);

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

  const handleQuizComplete = async (score: number) => {
    await markLessonComplete(lessonId, score);
    setIsCompleted(true);
    
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
