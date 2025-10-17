import { Button } from '@/components/ui/button';
import { Brain } from 'lucide-react';

interface OpenChatButtonProps {
  onClick: () => void;
}

export function OpenChatButton({ onClick }: OpenChatButtonProps) {
  return (
    <Button 
      size="lg" 
      variant="outline" 
      className="text-lg px-10 py-6 border-primary/30"
      onClick={onClick}
    >
      <Brain className="w-6 h-6 mr-2" />
      Découvrir l'IA
    </Button>
  );
}
