import { Button } from '@/components/ui/button';
import { ProgressBar } from '@/components/ProgressBar';
import { Card } from '@/components/ui/card';
import { BookOpen, TrendingUp, Brain, Coins } from 'lucide-react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/courses';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-dark border-b border-border">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(124,58,237,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        
        <div className="relative max-w-4xl mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-primary font-medium">Plateforme éducative crypto</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Apprends la crypto<br />à ton rythme
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Cours interactifs, quiz, et progression personnalisée pour maîtriser le trading crypto entre amis
          </p>
          
          <Link to="/lesson/6-rules-of-trading">
            <Button size="lg" className="gradient-primary glow-primary text-lg px-8">
              <BookOpen className="w-5 h-5 mr-2" />
              Commencer les cours
            </Button>
          </Link>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Progress Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Tes Statistiques</h2>
          <ProgressBar />
        </div>

        {/* Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Catégories de cours</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => {
              const icons = {
                basics: BookOpen,
                technical: TrendingUp,
                fundamental: Brain,
                misc: Coins
              };
              const Icon = icons[category.id as keyof typeof icons];

              return (
                <Card
                  key={category.id}
                  className="p-6 bg-card border-border shadow-card hover:shadow-lg transition-smooth hover:border-primary/50 group cursor-pointer"
                >
                  <Link to={`/lesson/${category.lessons[0]}`}>
                    <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:glow-primary transition-smooth">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-smooth">
                      {category.icon} {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {category.lessons.length} cours disponibles
                    </p>
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 bg-card border-border shadow-card">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <BookOpen className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Cours structurés</h3>
            <p className="text-sm text-muted-foreground">
              18 leçons complètes couvrant les bases du trading jusqu'aux stratégies avancées
            </p>
          </Card>

          <Card className="p-6 bg-card border-border shadow-card">
            <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
              <TrendingUp className="w-5 h-5 text-secondary" />
            </div>
            <h3 className="font-semibold mb-2">Quiz interactifs</h3>
            <p className="text-sm text-muted-foreground">
              Valide tes connaissances avec des quiz à chaque fin de leçon
            </p>
          </Card>

          <Card className="p-6 bg-card border-border shadow-card">
            <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center mb-4">
              <Brain className="w-5 h-5 text-success" />
            </div>
            <h3 className="font-semibold mb-2">Suivi de progression</h3>
            <p className="text-sm text-muted-foreground">
              Ta progression est automatiquement sauvegardée pour reprendre où tu t'es arrêté
            </p>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border mt-20">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              CryptoLearn Hub © 2025 — Site éducatif non financier
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="https://coinmarketcap.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                CoinMarketCap
              </a>
              <a
                href="https://www.tradingview.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                TradingView
              </a>
              <a
                href="https://academy.binance.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                Binance Academy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
