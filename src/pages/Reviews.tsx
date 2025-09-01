import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, User, Calendar, CheckCircle, MessageSquare } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      name: "Алексей Иванов",
      rating: 5,
      date: "15 января 2025",
      service: "Ремонт двигателя",
      text: "Отличный сервис! Быстро диагностировали проблему и качественно отремонтировали двигатель. Цены адекватные, мастера профессиональные. Рекомендую!",
      verified: true
    },
    {
      name: "Мария Петрова", 
      rating: 5,
      date: "12 января 2025",
      service: "Замена масла",
      text: "Очень быстро поменяли масло, всего за 15 минут. Удобная зона ожидания, вежливый персонал. Обязательно приеду еще.",
      verified: true
    },
    {
      name: "Дмитрий Сидоров",
      rating: 4,
      date: "8 января 2025", 
      service: "Тормозная система",
      text: "Заменили тормозные колодки и диски. Работу выполнили качественно, но пришлось немного подождать. В целом доволен результатом.",
      verified: false
    },
    {
      name: "Елена Козлова",
      rating: 5,
      date: "5 января 2025",
      service: "Подвеска",
      text: "Отремонтировали подвеску после ДТП. Машина теперь едет как новая! Спасибо мастерам за профессионализм и качественную работу.",
      verified: true
    },
    {
      name: "Игорь Морозов",
      rating: 5,
      date: "2 января 2025",
      service: "Электрика",
      text: "Долго не мог найти причину проблем с электрикой. Здесь быстро нашли неисправность и устранили. Отличные диагносты!",
      verified: true
    },
    {
      name: "Анна Волкова",
      rating: 4,
      date: "28 декабря 2024",
      service: "Кузовной ремонт",
      text: "Покрасили бампер после небольшого ДТП. Цвет подобрали идеально, качество покраски на высоте. Немного дороговато, но результат того стоит.",
      verified: true
    }
  ];

  const stats = [
    { value: "4.8", label: "Средняя оценка", icon: Star },
    { value: "500+", label: "Отзывов", icon: MessageSquare },
    { value: "95%", label: "Довольных клиентов", icon: CheckCircle },
    { value: "2 дня", label: "Среднее время ответа", icon: Calendar }
  ];

  const platforms = [
    { name: "Google", rating: "4.9", reviews: "156 отзывов" },
    { name: "Яндекс", rating: "4.8", reviews: "203 отзыва" },
    { name: "2ГИС", rating: "4.7", reviews: "89 отзывов" },
    { name: "Авито", rating: "4.9", reviews: "52 отзыва" }
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Отзывы клиентов
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мнения наших клиентов - лучшая реклама нашей работы. 
              Читайте честные отзывы о качестве наших услуг.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-all">
                  <CardContent className="pt-6">
                    <IconComponent className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Последние отзывы</h2>
              <div className="space-y-6">
                {reviews.map((review, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                            <User className="h-6 w-6 text-blue-600" />
                          </div>
                          <div>
                            <div className="flex items-center space-x-2">
                              <span className="font-semibold text-gray-900">{review.name}</span>
                              {review.verified && (
                                <Badge className="bg-green-100 text-green-800 text-xs">
                                  Проверен
                                </Badge>
                              )}
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="flex space-x-1">
                                {renderStars(review.rating)}
                              </div>
                              <span className="text-sm text-gray-500">{review.date}</span>
                            </div>
                          </div>
                        </div>
                        <Badge variant="outline">{review.service}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{review.text}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Оставить отзыв</CardTitle>
                  <CardDescription>
                    Поделитесь своим опытом обслуживания
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-yellow-600 hover:bg-yellow-700">
                    Написать отзыв
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Мы на других платформах</CardTitle>
                  <CardDescription>
                    Наши рейтинги на популярных сервисах
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {platforms.map((platform, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <div className="font-semibold text-gray-900">{platform.name}</div>
                          <div className="text-sm text-gray-600">{platform.reviews}</div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="font-bold text-gray-900">{platform.rating}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-blue-600 text-white">
                <CardHeader>
                  <CardTitle>Гарантия качества</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-100 mb-4">
                    Если вы не довольны качеством наших услуг, 
                    мы исправим все недочеты бесплатно.
                  </p>
                  <Button className="w-full bg-white text-blue-600 hover:bg-gray-100">
                    Связаться с нами
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-4">Ваше мнение важно для нас!</CardTitle>
              <CardDescription className="text-yellow-800 text-lg">
                Помогите нам стать еще лучше - оставьте свой отзыв
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="text-2xl font-bold">5 мин</div>
                  <div className="text-yellow-800">Время на отзыв</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">500 ₽</div>
                  <div className="text-yellow-800">Скидка за отзыв</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">24 часа</div>
                  <div className="text-yellow-800">Ответ на отзыв</div>
                </div>
              </div>
              <Button size="lg" className="bg-gray-900 text-white hover:bg-gray-800">
                Оставить отзыв и получить скидку
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reviews;