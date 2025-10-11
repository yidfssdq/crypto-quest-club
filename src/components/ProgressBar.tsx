import { getProgress, getCompletionPercentage, getTotalScore } from '@/utils/progress';
import { Trophy, Star, Target } from 'lucide-react';

export function ProgressBar() {
  const progress = getProgress();
  const percentage = getCompletionPercentage();
  const avgScore = getTotalScore();

  const getLevelColor = () => {
    switch (progress.level) {
      case 'Expert':
        return 'text-success';
      case 'Intermédiaire':
        return 'text-secondary';
      default:
        return 'text-muted-foreground';
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-card">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-primary" />
          <h3 className="font-semibold">Ta Progression</h3>
        </div>
        <span className={`text-sm font-medium ${getLevelColor()}`}>
          Niveau : {progress.level}
        </span>
      </div>

      {/* Main progress bar */}
      <div className="mb-4">
        <div className="flex justify-between text-sm text-muted-foreground mb-2">
          <span>{progress.completedLessons.length}/18 cours terminés</span>
          <span>{percentage}%</span>
        </div>
        <div className="h-3 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full gradient-primary transition-smooth glow-primary"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center gap-2">
          <Star className="w-4 h-4 text-primary" />
          <div>
            <p className="text-xs text-muted-foreground">Score moyen</p>
            <p className="font-semibold">{avgScore}%</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Target className="w-4 h-4 text-secondary" />
          <div>
            <p className="text-xs text-muted-foreground">Objectif</p>
            <p className="font-semibold">100%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
