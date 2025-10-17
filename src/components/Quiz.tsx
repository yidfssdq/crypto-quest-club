import { useState } from 'react';
import { QuizQuestion } from '@/types/course';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle, XCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

interface QuizProps {
  questions: QuizQuestion[];
  onComplete: (score: number) => void;
  lessonId: string;
}

export function Quiz({ questions, onComplete, lessonId }: QuizProps) {
  const { t } = useLanguage();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const handleAnswerSelect = (index: number) => {
    if (!showResult) {
      setSelectedAnswer(index);
    }
  };

  const handleNext = () => {
    if (selectedAnswer === null) return;

    const isCorrect = selectedAnswer === questions[currentQuestion].correctAnswer;
    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);

    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      const finalScore = isCorrect ? score + 1 : score;
      const percentage = Math.round((finalScore / questions.length) * 100);
      setShowResult(true);
      onComplete(percentage);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnswers([]);
  };

  if (showResult) {
    const percentage = Math.round((score / questions.length) * 100);
    const passed = percentage >= 70;

    return (
      <Card className="p-8 bg-card border-border shadow-card">
        <div className="text-center space-y-6">
          <div className={cn(
            "w-20 h-20 rounded-full mx-auto flex items-center justify-center",
            passed ? "bg-success/20" : "bg-destructive/20"
          )}>
            {passed ? (
              <CheckCircle className="w-12 h-12 text-success" />
            ) : (
              <XCircle className="w-12 h-12 text-destructive" />
            )}
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-2">
              {passed ? t('quiz.congrats') : t('quiz.keepLearning')}
            </h3>
            <p className="text-muted-foreground mb-4">
              {t('quiz.score')
                .replace('{score}', score.toString())
                .replace('{total}', questions.length.toString())
                .replace('{percentage}', percentage.toString())}
            </p>
            {passed ? (
              <p className="text-success font-medium">
                {t('quiz.passed')}
              </p>
            ) : (
              <p className="text-destructive">
                {t('quiz.failed')}
              </p>
            )}
          </div>

          <div className="flex gap-3 justify-center">
            <Button onClick={resetQuiz} variant="outline">
              {t('quiz.retry')}
            </Button>
            {passed && (
              <Button onClick={() => window.scrollTo(0, 0)} className="gradient-primary">
                {t('quiz.next')}
              </Button>
            )}
          </div>
        </div>
      </Card>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <Card className="p-6 bg-card border-border shadow-card space-y-6">
      {/* Progress */}
      <div>
        <div className="flex justify-between text-sm text-muted-foreground mb-2">
          <span>{t('quiz.question')
            .replace('{current}', (currentQuestion + 1).toString())
            .replace('{total}', questions.length.toString())}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full gradient-primary transition-smooth"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div>
        <h3 className="text-xl font-semibold mb-4">{question.question}</h3>
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              className={cn(
                "w-full text-left p-4 rounded-lg border-2 transition-smooth",
                selectedAnswer === index
                  ? "border-primary bg-primary/10"
                  : "border-border bg-card hover:border-primary/50 hover:bg-muted/50"
              )}
            >
              <div className="flex items-start gap-3">
                <div className={cn(
                  "w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5",
                  selectedAnswer === index
                    ? "border-primary bg-primary"
                    : "border-muted-foreground"
                )}>
                  {selectedAnswer === index && (
                    <div className="w-2 h-2 bg-white rounded-full" />
                  )}
                </div>
                <span className="flex-1">{option}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-end">
        <Button
          onClick={handleNext}
          disabled={selectedAnswer === null}
          className="gradient-primary"
        >
          {currentQuestion < questions.length - 1 ? t('quiz.nextBtn') : t('quiz.finish')}
        </Button>
      </div>
    </Card>
  );
}
