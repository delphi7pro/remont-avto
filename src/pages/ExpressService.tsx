import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Zap, Droplets, Battery, Wrench, CheckCircle } from 'lucide-react';

const ExpressService = () => {
  const expressServices = [
    {
      icon: Droplets,
      title: "Замена масла",
      description: "Быстрая замена моторного масла и фильтра",
      price: "2 500 ₽",
      duration: "15 мин",
      popular: true
    },
    {
      icon: Battery,
      title: "Замена аккумулятора", 
      description: "Установка нового аккумулятора, утилизация старого",
      price: "от 5 000 ₽",
      duration: "10 мин",
      popular: false
    },
    {
      icon: Wrench,
      title: "Шиномонтаж",
      description: "Замена шин, балансировка колес",
      price: "1 500 ₽",
      duration: "20 мин",
      popular: true
    },
    {
      icon: Zap,
      title: "Замена ламп",
      description: "Замена ламп головного света, габаритов",
      price: "500 ₽",
      duration: "5 мин",
      popular: false
    }
  ];

  const advantages = [
    "Без предварительной записи",
    "Ожидание в комфортной зоне",
    "Фиксированные цены",
    "Гарантия на работы",
    "Оплата картой",
    "Быстрое обслуживание"
  ];

  const workingHours = [
    { day: "Понедельник", hours: "8:00 - 20:00" },
    { day: "Вторник", hours: "8:00 - 20:00" },
    { day: "Среда", hours: "8:00 - 20:00" },
    { day: "Четверг", hours: "8:00 - 20:00" },
    { day: "Пятница", hours: "8:00 - 20:00" },
    { day: "Суббота", hours: "9:00 - 18:00" },
    { day: "Воскресенье", hours: "9:00 - 18:00" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-16 bg-gradient-to-br from-orange-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-orange-100 text-orange-800">Быстро и удобно</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Экспресс-сервис
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Быстрое обслуживание без записи. Замена масла, шин, аккумулятора 
              и другие услуги за 30 минут или меньше.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {expressServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className={`relative hover:shadow-xl transition-all duration-300 ${service.popular ? 'ring-2 ring-orange-500' : ''}`}>
                  {service.popular && (
                    <Badge className="absolute -top-2 -right-2 bg-orange-500 hover:bg-orange-600">
                      Популярно
                    </Badge>
                  )}
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-3 bg-orange-100 rounded-full w-fit">
                      <IconComponent className="h-8 w-8 text-orange-600" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <div className="space-y-2">
                      <div className="text-xl font-bold text-orange-600">{service.price}</div>
                      <div className="flex items-center justify-center space-x-2">
                        <Clock className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-500">{service.duration}</span>
                      </div>
                    </div>
                    <Button className="w-full bg-orange-600 hover:bg-orange-700">
                      Заказать
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="h-6 w-6 text-orange-600" />
                  <span>Преимущества экспресс-сервиса</span>
                </CardTitle>
                <CardDescription>
                  Почему клиенты выбирают наш экспресс-сервис
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {advantages.map((advantage, index) => (
                    <div key={index} className="flex items-center space-x-2 p-3 bg-orange-50 rounded-lg">
                      <CheckCircle className="h-4 w-4 text-orange-500 flex-shrink-0" />
                      <span className="text-gray-700">{advantage}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-6 w-6 text-blue-600" />
                  <span>Режим работы</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {workingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center p-2 rounded">
                      <span className="text-gray-700">{schedule.day}</span>
                      <span className="font-semibold text-gray-900">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="bg-gradient-to-br from-orange-600 to-orange-700 text-white">
              <CardHeader>
                <CardTitle className="text-2xl">Замена масла за 15 минут</CardTitle>
                <CardDescription className="text-orange-100">
                  Самая популярная услуга экспресс-сервиса
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-orange-200" />
                    <span>Масла ведущих производителей</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-orange-200" />
                    <span>Оригинальные фильтры</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-orange-200" />
                    <span>Проверка уровней жидкостей</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-orange-200" />
                    <span>Утилизация отработанного масла</span>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-white text-orange-700 hover:bg-gray-100">
                  Записаться на замену масла
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Комфортная зона ожидания</CardTitle>
                <CardDescription>
                  Пока мы работаем с вашим автомобилем
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img 
                  src="https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=500" 
                  alt="Зона ожидания"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-gray-700">Бесплатный Wi-Fi</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-gray-700">Кофе и чай</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-gray-700">Удобные кресла</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-gray-700">Телевизор</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ExpressService;