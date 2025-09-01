import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Fuel, Filter, Zap, CheckCircle, AlertTriangle, Gauge } from 'lucide-react';

const FuelSystem = () => {
  const services = [
    {
      icon: Filter,
      title: "Замена топливного фильтра",
      description: "Замена фильтра тонкой и грубой очистки топлива",
      price: "2 500 ₽",
      duration: "1 час"
    },
    {
      icon: Zap,
      title: "Чистка форсунок",
      description: "Ультразвуковая чистка топливных форсунок",
      price: "4 500 ₽",
      duration: "3 часа"
    },
    {
      icon: Fuel,
      title: "Ремонт топливного насоса",
      description: "Диагностика и замена топливного насоса",
      price: "от 8 000 ₽",
      duration: "4 часа"
    },
    {
      icon: Gauge,
      title: "Диагностика системы питания",
      description: "Проверка давления, производительности системы",
      price: "1 500 ₽",
      duration: "1 час"
    }
  ];

  const fuelProblems = [
    "Двигатель троит на холостых оборотах",
    "Затрудненный запуск двигателя",
    "Повышенный расход топлива",
    "Потеря мощности при разгоне",
    "Рывки при движении",
    "Запах топлива в салоне"
  ];

  const cleaningBenefits = [
    "Восстановление мощности двигателя",
    "Снижение расхода топлива до 15%",
    "Улучшение динамики разгона",
    "Снижение токсичности выхлопа",
    "Продление срока службы форсунок",
    "Стабильная работа на холостых"
  ];

  const fuelTypes = [
    {
      type: "Бензиновые двигатели",
      services: ["Чистка форсунок", "Замена топливного фильтра", "Ремонт ТНВД", "Регулировка системы"],
      specialization: "Инжекторные и карбюраторные системы"
    },
    {
      type: "Дизельные двигатели", 
      services: ["Ремонт ТНВД", "Чистка форсунок Common Rail", "Замена фильтров", "Прокачка системы"],
      specialization: "Системы Common Rail и насос-форсунки"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-16 bg-gradient-to-br from-amber-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Топливная система
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Диагностика, ремонт и обслуживание топливной системы. 
              Восстановим экономичность и мощность вашего двигателя.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-3 bg-amber-100 rounded-full w-fit">
                      <IconComponent className="h-8 w-8 text-amber-600" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <div className="space-y-2">
                      <div className="text-xl font-bold text-amber-600">{service.price}</div>
                      <div className="text-sm text-gray-500">{service.duration}</div>
                    </div>
                    <Button className="w-full bg-amber-600 hover:bg-amber-700">
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
                  <AlertTriangle className="h-6 w-6 text-orange-500" />
                  <span>Признаки неисправности</span>
                </CardTitle>
                <CardDescription>
                  Симптомы проблем с топливной системой
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {fuelProblems.map((problem, index) => (
                    <div key={index} className="flex items-center space-x-2 p-3 bg-orange-50 rounded-lg">
                      <AlertTriangle className="h-4 w-4 text-orange-500 flex-shrink-0" />
                      <span className="text-gray-700">{problem}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span>Преимущества чистки форсунок</span>
                </CardTitle>
                <CardDescription>
                  Что дает профессиональная чистка
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {cleaningBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-2 p-3 bg-green-50 rounded-lg">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {fuelTypes.map((fuel, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardHeader>
                  <CardTitle className="text-xl">{fuel.type}</CardTitle>
                  <CardDescription>{fuel.specialization}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {fuel.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{service}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-4">Записаться</Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-r from-amber-600 to-amber-700 text-white">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-4">Ультразвуковая чистка форсунок</CardTitle>
              <CardDescription className="text-amber-100 text-lg">
                Современная технология восстановления форсунок
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold">99%</div>
                  <div className="text-amber-200">Эффективность очистки</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">15%</div>
                  <div className="text-amber-200">Экономия топлива</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">6 мес</div>
                  <div className="text-amber-200">Гарантия на чистку</div>
                </div>
              </div>
              <div className="space-y-3 mb-8">
                {materials.map((material, index) => (
                  <div key={index} className="flex items-center space-x-2 p-3 bg-white/10 rounded-lg">
                    <CheckCircle className="h-4 w-4 text-amber-200 flex-shrink-0" />
                    <span className="text-amber-100">{material}</span>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <Button size="lg" className="bg-white text-amber-700 hover:bg-gray-100">
                  Записаться на чистку форсунок
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

export default FuelSystem;