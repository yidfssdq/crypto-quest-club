import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ProgressBar } from '@/components/ProgressBar';
import { Card } from '@/components/ui/card';
import { BookOpen, TrendingUp, Brain, Coins } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GeminiChat } from '@/components/GeminiChat';
import { OpenChatButton } from '@/components/OpenChatButton';
import { useLanguage } from '@/contexts/LanguageContext';
import { getCategories } from '@/data/translations';

export default function Home() {
  const [chatOpen, setChatOpen] = useState(false);
  const { language, t } = useLanguage();
  const categories = getCategories(language);

  return (
    <>
      <GeminiChat isOpen={chatOpen} onOpenChange={setChatOpen} />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-dark border-b border-border">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(263_70%_60%/0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(199_89%_55%/0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(280_65%_60%/0.1),transparent_50%)]" />
        
        <div className="relative max-w-5xl mx-auto px-6 py-24 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8 transition-bounce hover:scale-105">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-glow" />
            <span className="text-sm text-primary font-semibold tracking-wide">{t('hero.badge')}</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-black mb-6 text-gradient leading-tight" dangerouslySetInnerHTML={{ __html: t('hero.title') }} />
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            {t('hero.subtitle')}<br/>
            <span className="text-secondary font-semibold">{t('hero.subtitle2')}</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/lesson/6-rules-of-trading">
              <Button size="lg" className="gradient-primary glow-primary-lg text-lg px-10 py-6 font-bold">
                <BookOpen className="w-6 h-6 mr-2" />
                {t('hero.cta')}
              </Button>
            </Link>
            <OpenChatButton onClick={() => setChatOpen(true)} />
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-sm">50+</div>
              <span>{t('hero.lessons')}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-full gradient-secondary flex items-center justify-center text-white font-bold text-sm">200+</div>
              <span>{t('hero.quizzes')}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center text-white font-bold text-sm">24/7</div>
              <span>{t('hero.assistant')}</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Progress Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">{t('stats.title')}</h2>
          <ProgressBar />
        </div>

        {/* Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">{t('categories.title')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => {
              const icons = {
                basics: BookOpen,
                technical: TrendingUp,
                fundamental: Brain,
                strategies: TrendingUp,
                misc: Coins
              };
              const Icon = icons[category.id as keyof typeof icons];

              return (
                <Link key={category.id} to={`/lesson/${category.lessons[0]}`}>
                  <Card className="p-6 gradient-card border border-border/50 shadow-card cursor-pointer relative overflow-hidden h-full">
                    <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-4 shadow-inner">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 line-clamp-2 min-h-[3.5rem]">
                      {category.icon} {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {category.lessons.length} {t('categories.courses')} • {t('categories.interactive')}
                    </p>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="p-8 gradient-card border border-primary/20 shadow-card group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 glow-primary">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">{t('features.courses.title')}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t('features.courses.desc')}
              </p>
            </div>
          </Card>

          <Card className="p-8 gradient-card border border-secondary/20 shadow-card group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl gradient-secondary flex items-center justify-center mb-4 shadow-glow">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">{t('features.quiz.title')}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t('features.quiz.desc')}
              </p>
            </div>
          </Card>

          <Card className="p-8 gradient-card border border-accent/20 shadow-card group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center mb-4 shadow-glow">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">{t('features.ai.title')}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t('features.ai.desc')}
              </p>
            </div>
          </Card>
        </div>

        {/* CTA Section */}
        <Card className="p-12 gradient-card border border-primary/30 shadow-card-hover relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-black mb-4 text-gradient">
              {t('cta.title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t('cta.desc')}
            </p>
            <Link to="/lesson/6-rules-of-trading">
              <Button size="lg" className="gradient-primary glow-primary-lg text-lg px-12 py-6 font-bold">
                <BookOpen className="w-6 h-6 mr-2" />
                {t('cta.button')}
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
              {t('footer.copyright')}
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="https://coinmarketcap.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground"
              >
                CoinMarketCap
              </a>
              <a
                href="https://www.tradingview.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground"
              >
                TradingView
              </a>
              <a
                href="https://academy.binance.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground"
              >
                Binance Academy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}
