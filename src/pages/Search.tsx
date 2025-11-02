import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { getCategories, getLessonById } from '@/data/translations';
import { Search as SearchIcon, BookOpen } from 'lucide-react';

const Search = () => {
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const categories = getCategories(language);

  const allLessons = useMemo(() => {
    return categories.flatMap(category =>
      category.lessons.map(lessonId => {
        const lesson = getLessonById(lessonId, language);
        return lesson ? { ...lesson, categoryName: category.name, categoryIcon: category.icon } : null;
      }).filter(Boolean)
    );
  }, [categories, language]);

  const filteredLessons = useMemo(() => {
    if (!searchQuery.trim()) return allLessons;
    
    const query = searchQuery.toLowerCase();
    return allLessons.filter(lesson => 
      lesson?.title.toLowerCase().includes(query) ||
      lesson?.objective.toLowerCase().includes(query) ||
      lesson?.content.toLowerCase().includes(query) ||
      lesson?.categoryName.toLowerCase().includes(query)
    );
  }, [searchQuery, allLessons]);

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">
          {language === 'fr' ? 'Rechercher un cours' : 'Search for a course'}
        </h1>
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder={language === 'fr' ? 'Rechercher par titre, catégorie...' : 'Search by title, category...'}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 py-6 text-lg"
          />
        </div>
      </div>

      <div className="space-y-4">
        {filteredLessons.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center text-muted-foreground">
              <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>
                {language === 'fr' 
                  ? 'Aucun cours trouvé pour cette recherche' 
                  : 'No courses found for this search'}
              </p>
            </CardContent>
          </Card>
        ) : (
          filteredLessons.map((lesson) => (
            <Link key={lesson.id} to={`/lesson/${lesson.id}`}>
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{lesson.title}</CardTitle>
                      <CardDescription className="line-clamp-2">{lesson.objective}</CardDescription>
                    </div>
                    <Badge variant="secondary" className="flex-shrink-0">
                      {lesson.categoryIcon} {lesson.categoryName}
                    </Badge>
                  </div>
                </CardHeader>
              </Card>
            </Link>
          ))
        )}
      </div>

      <div className="mt-8 text-center text-muted-foreground">
        {filteredLessons.length} {language === 'fr' ? 'cours trouvé(s)' : 'course(s) found'}
      </div>
    </div>
  );
};

export default Search;
