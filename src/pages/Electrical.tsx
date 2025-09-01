import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Zap, Battery, Lightbulb, Radio, CheckCircle } from 'lucide-react';

const Electrical = () => {
  const services = [
    {
      icon: Battery,
      title: "Аккумулятор и генератор",
      description: "Диагностика, ремонт и замена аккумуляторов, генераторов, стартеров",
      price: "от 3 000 ₽"
    },
    {
      icon: Lightbulb,
      title: "Освещение",
      description: "Ремонт фар, замена ламп, настройка света, ремонт поворотников",
      price: "от 1 500 ₽"
    },
    {
      icon: Radio,
      title: "Мультимедиа",
      description: "Установка и ремонт магнитол, навигации, камер заднего вида",
      price: "от 2 500 ₽"
    },
    {
      icon: Zap,
      title: "Проводка",
      description: "Ремонт проводки, поиск обрывов, замена предохранителей",
      price: "от 2 000 ₽"
    }
  ];

  const diagnostics = [
    "Компьютерная диагностика ошибок",
    "Проверка генератора и стартера",
    "Тестирование аккумулятора",
    "Диагностика системы зажигания",
    "Проверка датчиков",
    "Анализ работы ЭБУ"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Электрика и электроника
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Диагностика и ремонт всех электрических систем автомобиля. 
              Современное оборудование для точной диагностики.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-yellow-100 rounded-lg">
                        <IconComponent className="h-6 w-6 text-yellow-600" />
                      </div>
                      <div>
                        <CardTitle>{service.title}</CardTitle>
                        <div className="text-lg font-semibold text-yellow-600">{service.price}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">{service.description}</CardDescription>
                    <Button className="w-full">Заказать</Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-center justify-center">
                <Zap className="h-6 w-6 text-yellow-600" />
                <span>Диагностика электросистем</span>
              </CardTitle>
              <CardDescription className="text-center">
                Комплексная проверка всех электрических систем автомобиля
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {diagnostics.map((diagnostic, index) => (
                  <div key={index} className="flex items-center space-x-2 p-3 bg-yellow-50 rounded-lg">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{diagnostic}</span>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700">
                  Записаться на диагностику
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

export default Electrical;