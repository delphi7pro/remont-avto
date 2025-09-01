import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Paintbrush, Shield, Sparkles, Car, CheckCircle, Camera } from 'lucide-react';

const BodyRepair = () => {
  const services = [
    {
      icon: Paintbrush,
      title: "Покраска автомобиля",
      description: "Полная и частичная покраска, подбор цвета",
      price: "от 25 000 ₽",
      duration: "3-7 дней"
    },
    {
      icon: Shield,
      title: "Рихтовка кузова",
      description: "Устранение вмятин, восстановление геометрии",
      price: "от 8 000 ₽", 
      duration: "1-3 дня"
    },
    {
      icon: Sparkles,
      title: "Полировка и детейлинг",
      description: "Восстановление блеска, защитные покрытия",
      price: "от 5 000 ₽",
      duration: "1 день"
    },
    {
      icon: Car,
      title: "Замена деталей кузова",
      description: "Крылья, двери, бамперы, пороги",
      price: "от 15 000 ₽",
      duration: "2-5 дней"
    }
  ];

  const paintingSteps = [
    {
      step: 1,
      title: "Подготовка",
      description: "Мойка, демонтаж деталей, защита элементов"
    },
    {
      step: 2, 
      title: "Шпатлевка",
      description: "Выравнивание поверхности, устранение дефектов"
    },
    {
      step: 3,
      title: "Грунтовка", 
      description: "Нанесение грунта, подготовка к покраске"
    },
    {
      step: 4,
      title: "Покраска",
      description: "Нанесение базы и лака в покрасочной камере"
    },
    {
      step: 5,
      title: "Полировка",
      description: "Финишная обработка, придание блеска"
    }
  ];

  const damageTypes = [
    "Царапины и сколы",
    "Вмятины от града",
    "ДТП повреждения",
    "Коррозия и ржавчина",
    "Выгорание краски",
    "Повреждения бампера"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-16 bg-gradient-to-br from-pink-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Кузовной ремонт и покраска
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Восстановим внешний вид вашего автомобиля. Современная покрасочная камера 
              и опытные мастера гарантируют идеальный результат.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-3 bg-pink-100 rounded-full w-fit">
                      <IconComponent className="h-8 w-8 text-pink-600" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <div className="space-y-2">
                      <div className="text-xl font-bold text-pink-600">{service.price}</div>
                      <Badge variant="outline">{service.duration}</Badge>
                    </div>
                    <Button className="w-full bg-pink-600 hover:bg-pink-700">
                      Заказать
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Paintbrush className="h-6 w-6 text-pink-600" />
                  <span>Процесс покраски</span>
                </CardTitle>
                <CardDescription>
                  Профессиональная покраска в 5 этапов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {paintingSteps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-pink-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Camera className="h-6 w-6 text-blue-600" />
                  <span>Типы повреждений</span>
                </CardTitle>
                <CardDescription>
                  Устраняем любые повреждения кузова
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {damageTypes.map((damage, index) => (
                    <div key={index} className="flex items-center space-x-2 p-3 bg-blue-50 rounded-lg">
                      <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0" />
                      <span className="text-gray-700">{damage}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">
                  Оценить повреждения
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {seasonalServices.map((season, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="text-4xl mb-2">{season.icon}</div>
                  <CardTitle className="text-xl">{season.season}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {season.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="text-sm text-gray-600">
                        {service}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-r from-pink-600 to-pink-700 text-white">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-4">Покрасочная камера</CardTitle>
              <CardDescription className="text-pink-100 text-lg">
                Современная покрасочно-сушильная камера с системой фильтрации
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold">60°C</div>
                  <div className="text-pink-200">Температура сушки</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">99.9%</div>
                  <div className="text-pink-200">Фильтрация воздуха</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">2 года</div>
                  <div className="text-pink-200">Гарантия на покраску</div>
                </div>
              </div>
              <div className="text-center">
                <Button size="lg" className="bg-white text-pink-700 hover:bg-gray-100">
                  Записаться на покраску
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BodyRepair;