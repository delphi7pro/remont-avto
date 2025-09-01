import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Wrench, CheckCircle, Clock, Shield, Droplets, Filter } from 'lucide-react';

const Maintenance = () => {
  const maintenancePackages = [
    {
      title: "Базовое ТО",
      price: "3 500 ₽",
      duration: "2 часа",
      services: [
        "Замена моторного масла",
        "Замена масляного фильтра", 
        "Проверка уровней жидкостей",
        "Визуальный осмотр"
      ],
      popular: false
    },
    {
      title: "Стандартное ТО",
      price: "6 500 ₽", 
      duration: "3 часа",
      services: [
        "Все из базового ТО",
        "Замена воздушного фильтра",
        "Замена салонного фильтра",
        "Проверка тормозной системы",
        "Диагностика подвески"
      ],
      popular: true
    },
    {
      title: "Расширенное ТО",
      price: "12 000 ₽",
      duration: "5 часов", 
      services: [
        "Все из стандартного ТО",
        "Замена свечей зажигания",
        "Замена топливного фильтра",
        "Компьютерная диагностика",
        "Проверка развал-схождения",
        "Замена охлаждающей жидкости"
      ],
      popular: false
    }
  ];

  const seasonalServices = [
    {
      season: "Весна",
      icon: "🌸",
      services: ["Замена зимней резины", "Проверка кондиционера", "Мойка днища"],
      color: "green"
    },
    {
      season: "Лето", 
      icon: "☀️",
      services: ["Заправка кондиционера", "Проверка охлаждения", "Замена масла"],
      color: "yellow"
    },
    {
      season: "Осень",
      icon: "🍂", 
      services: ["Замена летней резины", "Проверка отопителя", "Антикор"],
      color: "orange"
    },
    {
      season: "Зима",
      icon: "❄️",
      services: ["Замена антифриза", "Проверка аккумулятора", "Подогрев двигателя"],
      color: "blue"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-16 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Техническое обслуживание
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Регулярное ТО - залог долгой и надежной работы вашего автомобиля. 
              Предлагаем различные пакеты обслуживания.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {maintenancePackages.map((pkg, index) => (
              <Card key={index} className={`relative hover:shadow-xl transition-all duration-300 ${pkg.popular ? 'ring-2 ring-green-500' : ''}`}>
                {pkg.popular && (
                  <Badge className="absolute -top-2 -right-2 bg-green-500 hover:bg-green-600">
                    Популярно
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <Wrench className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <CardTitle className="text-2xl">{pkg.title}</CardTitle>
                  <div className="text-3xl font-bold text-green-600">{pkg.price}</div>
                  <div className="flex items-center justify-center space-x-2 text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>{pkg.duration}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{service}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${pkg.popular ? 'bg-green-600 hover:bg-green-700' : ''}`}>
                    Выбрать пакет
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Сезонное обслуживание
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Droplets className="h-6 w-6 text-blue-600" />
                  <span>Замена жидкостей</span>
                </CardTitle>
                <CardDescription>
                  Регулярная замена технических жидкостей
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span>Моторное масло</span>
                    <span className="font-semibold">каждые 10 000 км</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span>Тормозная жидкость</span>
                    <span className="font-semibold">каждые 2 года</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span>Охлаждающая жидкость</span>
                    <span className="font-semibold">каждые 3 года</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span>Жидкость ГУР</span>
                    <span className="font-semibold">каждые 60 000 км</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Filter className="h-6 w-6 text-orange-600" />
                  <span>Замена фильтров</span>
                </CardTitle>
                <CardDescription>
                  Регулярная замена фильтрующих элементов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                    <span>Масляный фильтр</span>
                    <span className="font-semibold">с каждой заменой масла</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                    <span>Воздушный фильтр</span>
                    <span className="font-semibold">каждые 15 000 км</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                    <span>Салонный фильтр</span>
                    <span className="font-semibold">каждые 15 000 км</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                    <span>Топливный фильтр</span>
                    <span className="font-semibold">каждые 30 000 км</span>
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

export default Maintenance;