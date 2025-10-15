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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(263_70%_60%/0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(199_89%_55%/0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(280_65%_60%/0.1),transparent_50%)]" />
        
        <div className="relative max-w-5xl mx-auto px-6 py-24 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8 transition-bounce hover:scale-105">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-glow" />
            <span className="text-sm text-primary font-semibold tracking-wide">🚀 Plateforme éducative crypto</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-black mb-6 text-gradient leading-tight">
            Maîtrise le trading crypto<br />comme un pro
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Cours détaillés • Quiz interactifs • IA assistant • Suivi de progression<br/>
            <span className="text-secondary font-semibold">Apprends à ton rythme, entre amis 🎯</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/lesson/6-rules-of-trading">
              <Button size="lg" className="gradient-primary glow-primary-lg text-lg px-10 py-6 hover:scale-105 transition-bounce font-bold">
                <BookOpen className="w-6 h-6 mr-2" />
                Commencer gratuitement
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-lg px-10 py-6 border-primary/30 hover:bg-primary/10 hover:border-primary transition-smooth">
              <Brain className="w-6 h-6 mr-2" />
              Découvrir l'IA
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-white font-bold">50+</div>
              <span>Leçons complètes</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full gradient-secondary flex items-center justify-center text-white font-bold">200+</div>
              <span>Quiz interactifs</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full gradient-accent flex items-center justify-center text-white font-bold">24/7</div>
              <span>Assistant IA</span>
            </div>
          </div>
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
                  className="p-6 gradient-card border border-border/50 shadow-card hover:shadow-card-hover transition-bounce hover:border-primary/50 hover:scale-105 group cursor-pointer relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-smooth" />
                  <Link to={`/lesson/${category.lessons[0]}`} className="relative z-10 block">
                    <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:glow-primary transition-bounce group-hover:scale-110 shadow-inner">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 group-hover:text-gradient transition-smooth">
                      {category.icon} {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-smooth">
                      {category.lessons.length} cours • Interactif
                    </p>
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="p-8 gradient-card border border-primary/20 shadow-card hover:shadow-card-hover transition-bounce hover:scale-105 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-smooth" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 glow-primary">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-smooth">📚 Cours structurés</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                50+ leçons complètes du niveau débutant aux stratégies avancées avec explications détaillées
              </p>
            </div>
          </Card>

          <Card className="p-8 gradient-card border border-secondary/20 shadow-card hover:shadow-card-hover transition-bounce hover:scale-105 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl group-hover:bg-secondary/20 transition-smooth" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl gradient-secondary flex items-center justify-center mb-4 shadow-glow">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2 group-hover:text-secondary transition-smooth">✅ Quiz interactifs</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Valide tes connaissances avec 200+ questions de quiz à chaque fin de leçon
              </p>
            </div>
          </Card>

          <Card className="p-8 gradient-card border border-accent/20 shadow-card hover:shadow-card-hover transition-bounce hover:scale-105 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-smooth" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center mb-4 shadow-glow">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2 group-hover:text-accent transition-smooth">🤖 Assistant IA</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Gemini IA spécialisé en crypto disponible 24/7 pour répondre à tes questions
              </p>
            </div>
          </Card>
        </div>

        {/* CTA Section */}
        <Card className="p-12 gradient-card border border-primary/30 shadow-card-hover relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-black mb-4 text-gradient">
              Prêt à devenir un pro du trading crypto ? 🚀
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Rejoins la plateforme et commence ton apprentissage dès maintenant. C'est 100% gratuit et sans engagement.
            </p>
            <Link to="/lesson/6-rules-of-trading">
              <Button size="lg" className="gradient-primary glow-primary-lg text-lg px-12 py-6 hover:scale-105 transition-bounce font-bold">
                <BookOpen className="w-6 h-6 mr-2" />
                Débuter mon parcours
              </Button>
            </Link>
          </div>
        </Card>
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
