import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, Eye, BookOpen, TrendingUp, Clock } from 'lucide-react';

const Blog = () => {
  const articles = [
    {
      title: "Как подготовить автомобиль к зиме",
      excerpt: "Полное руководство по подготовке автомобиля к зимнему сезону. Что нужно проверить и заменить.",
      author: "Алексей Петров",
      date: "20 января 2025",
      views: 1250,
      category: "Сезонное обслуживание",
      image: "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=400",
      readTime: "5 мин"
    },
    {
      title: "Признаки износа тормозных колодок",
      excerpt: "Как понять, что пора менять тормозные колодки. Основные признаки и рекомендации по замене.",
      author: "Михаил Сидоров",
      date: "18 января 2025", 
      views: 890,
      category: "Безопасность",
      image: "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=400",
      readTime: "3 мин"
    },
    {
      title: "Выбор моторного масла: синтетика или полусинтетика",
      excerpt: "Разбираемся в типах моторных масел и выбираем оптимальный вариант для вашего автомобиля.",
      author: "Дмитрий Козлов",
      date: "15 января 2025",
      views: 1450,
      category: "Обслуживание",
      image: "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=400",
      readTime: "7 мин"
    },
    {
      title: "Диагностика двигателя: когда обращаться к специалистам",
      excerpt: "Основные симптомы проблем с двигателем и когда стоит обратиться в автосервис.",
      author: "Алексей Петров",
      date: "12 января 2025",
      views: 720,
      category: "Диагностика",
      image: "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=400",
      readTime: "4 мин"
    },
    {
      title: "Уход за кузовом автомобиля в зимний период",
      excerpt: "Как защитить кузов от соли и реагентов. Советы по мойке и обработке автомобиля зимой.",
      author: "Сергей Белов",
      date: "10 января 2025",
      views: 650,
      category: "Кузовной ремонт",
      image: "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=400",
      readTime: "6 мин"
    },
    {
      title: "Экономия на ремонте: что можно сделать самому",
      excerpt: "Простые операции по обслуживанию автомобиля, которые можно выполнить самостоятельно.",
      author: "Михаил Сидоров",
      date: "8 января 2025",
      views: 980,
      category: "Советы",
      image: "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=400",
      readTime: "8 мин"
    }
  ];

  const categories = [
    "Все статьи",
    "Обслуживание", 
    "Ремонт",
    "Диагностика",
    "Безопасность",
    "Советы",
    "Сезонное обслуживание"
  ];

  const popularArticles = [
    "Как часто менять масло в двигателе",
    "Признаки неисправности АКПП",
    "Подготовка к техосмотру",
    "Выбор зимних шин",
    "Проблемы с аккумулятором зимой"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Блог автосервиса
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Полезные статьи и советы по обслуживанию автомобиля. 
              Экспертные рекомендации от наших мастеров.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {articles.map((article, index) => (
                  <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="relative">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <Badge className="absolute top-4 left-4 bg-indigo-600">
                        {article.category}
                      </Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg hover:text-indigo-600 transition-colors">
                        {article.title}
                      </CardTitle>
                      <CardDescription>{article.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <User className="h-4 w-4" />
                            <span>{article.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{article.date}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Eye className="h-4 w-4" />
                            <span>{article.views}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{article.readTime}</span>
                          </div>
                        </div>
                      </div>
                      <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                        Читать полностью
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BookOpen className="h-5 w-5 text-indigo-600" />
                    <span>Категории</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {categories.map((category, index) => (
                      <Button 
                        key={index} 
                        variant={index === 0 ? "default" : "ghost"} 
                        className="w-full justify-start"
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                    <span>Популярные статьи</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {popularArticles.map((article, index) => (
                      <div key={index} className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                        <div className="text-sm font-medium text-gray-900">{article}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-indigo-600 text-white">
                <CardHeader>
                  <CardTitle>Подписка на новости</CardTitle>
                  <CardDescription className="text-indigo-100">
                    Получайте новые статьи на email
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-indigo-100 mb-4 text-sm">
                    Еженедельная рассылка с полезными советами по уходу за автомобилем
                  </p>
                  <Button className="w-full bg-white text-indigo-600 hover:bg-gray-100">
                    Подписаться
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;