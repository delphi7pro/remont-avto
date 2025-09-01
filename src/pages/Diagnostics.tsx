import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, Cpu, Gauge, Zap, Engine, Settings } from 'lucide-react';

const Diagnostics = () => {
  const diagnosticTypes = [
    {
      icon: Cpu,
      title: "Компьютерная диагностика",
      description: "Считывание ошибок ЭБУ, анализ параметров работы систем",
      price: "1 500 ₽",
      duration: "30-60 мин",
      popular: true
    },
    {
      icon: Engine,
      title: "Диагностика двигателя",
      description: "Проверка компрессии, анализ работы цилиндров",
      price: "2 000 ₽",
      duration: "1-2 часа",
      popular: false
    },
    {
      icon: Settings,
      title: "Диагностика трансмиссии",
      description: "Проверка АКПП, МКПП, анализ работы сцепления",
      price: "2 500 ₽",
      duration: "1-2 часа",
      popular: true
    },
    {
      icon: Zap,
      title: "Электродиагностика",
      description: "Проверка генератора, стартера, проводки",
      price: "1 800 ₽",
      duration: "1 час",
      popular: false
    },
    {
      icon: Gauge,
      title: "Диагностика тормозов",
      description: "Проверка эффективности торможения, ABS",
      price: "1 200 ₽",
      duration: "30 мин",
      popular: true
    },
    {
      icon: Search,
      title: "Комплексная диагностика",
      description: "Полная проверка всех систем автомобиля",
      price: "3 500 ₽",
      duration: "2-3 часа",
      popular: false
    }
  ];

  const equipment = [
    "Сканеры OBD-II последнего поколения",
    "Осциллографы для анализа сигналов",
    "Компрессометры и вакуумметры",
    "Стенды для проверки форсунок",
    "Газоанализаторы",
    "Эндоскопы для визуального осмотра"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-16 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Диагностика автомобиля
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Точная диагностика - основа качественного ремонта. 
              Используем современное оборудование для выявления любых неисправностей.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {diagnosticTypes.map((diagnostic, index) => {
              const IconComponent = diagnostic.icon;
              return (
                <Card key={index} className="relative hover:shadow-xl transition-all duration-300">
                  {diagnostic.popular && (
                    <Badge className="absolute -top-2 -right-2 bg-purple-500 hover:bg-purple-600">
                      Популярно
                    </Badge>
                  )}
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-3 bg-purple-100 rounded-full w-fit">
                      <IconComponent className="h-8 w-8 text-purple-600" />
                    </div>
                    <CardTitle className="text-xl">{diagnostic.title}</CardTitle>
                    <CardDescription>{diagnostic.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <div className="space-y-2">
                      <div className="text-2xl font-bold text-purple-600">{diagnostic.price}</div>
                      <div className="text-sm text-gray-500">Время: {diagnostic.duration}</div>
                    </div>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      Записаться
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="bg-gradient-to-r from-purple-600 to-purple-700 text-white">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-4">Современное оборудование</CardTitle>
              <CardDescription className="text-purple-100 text-lg">
                Используем профессиональное диагностическое оборудование
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {equipment.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2 p-3 bg-white/10 rounded-lg">
                    <Search className="h-4 w-4 text-purple-200 flex-shrink-0" />
                    <span className="text-purple-100">{item}</span>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <Button size="lg" className="bg-white text-purple-700 hover:bg-gray-100">
                  Бесплатная консультация
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

export default Diagnostics;