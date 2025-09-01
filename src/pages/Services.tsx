import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Engine, Settings, Zap, Gauge, Shield, Wrench } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Engine,
      title: "Ремонт двигателя",
      description: "Капитальный и текущий ремонт двигателей",
      price: "от 15 000 ₽",
      duration: "1-3 дня",
      popular: true
    },
    {
      icon: Settings,
      title: "Трансмиссия",
      description: "Ремонт АКПП, МКПП, вариаторов",
      price: "от 20 000 ₽",
      duration: "2-5 дней",
      popular: false
    },
    {
      icon: Zap,
      title: "Электрика",
      description: "Диагностика и ремонт электросистем",
      price: "от 3 000 ₽",
      duration: "1-2 дня",
      popular: true
    },
    {
      icon: Gauge,
      title: "Тормозная система",
      description: "Замена колодок, дисков, ремонт суппортов",
      price: "от 5 000 ₽",
      duration: "1 день",
      popular: false
    },
    {
      icon: Shield,
      title: "Подвеска",
      description: "Ремонт амортизаторов, замена сайлентблоков",
      price: "от 8 000 ₽",
      duration: "1-2 дня",
      popular: true
    },
    {
      icon: Wrench,
      title: "ТО и диагностика",
      description: "Плановое обслуживание и диагностика",
      price: "от 2 500 ₽",
      duration: "2-4 часа",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Наши услуги
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Полный спектр услуг по ремонту и обслуживанию автомобилей. 
              Работаем с любыми марками и моделями.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="relative group hover:shadow-xl transition-all duration-300">
                  {service.popular && (
                    <Badge className="absolute -top-2 -right-2 bg-orange-500 hover:bg-orange-600">
                      Популярно
                    </Badge>
                  )}
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit group-hover:bg-blue-200 transition-colors">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <div className="space-y-2">
                      <div className="text-2xl font-bold text-blue-600">{service.price}</div>
                      <div className="text-sm text-gray-500">Срок: {service.duration}</div>
                    </div>
                    <Button className="w-full">Заказать услугу</Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;