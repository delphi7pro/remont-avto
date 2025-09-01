import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Wine as Engine, CheckCircle, Clock, Shield } from 'lucide-react';

const EngineRepair = () => {
  const services = [
    "Капитальный ремонт двигателя",
    "Замена поршневой группы",
    "Ремонт головки блока цилиндров",
    "Замена прокладок и сальников",
    "Регулировка клапанов",
    "Ремонт системы охлаждения",
    "Замена ремня ГРМ",
    "Диагностика компрессии"
  ];

  const advantages = [
    "Гарантия до 2 лет",
    "Оригинальные запчасти",
    "Опытные мастера",
    "Современное оборудование"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <Badge className="mb-4">Популярная услуга</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Ремонт двигателя
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Профессиональный ремонт двигателей любой сложности. 
                Используем только качественные запчасти и современные технологии.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">{advantage}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Записаться на диагностику
                </Button>
                <Button variant="outline" size="lg">
                  Получить консультацию
                </Button>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Ремонт двигателя"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-xl">
                <div className="flex items-center space-x-2 mb-2">
                  <Engine className="h-6 w-6 text-blue-600" />
                  <span className="font-semibold">Диагностика</span>
                </div>
                <div className="text-2xl font-bold text-blue-600">Бесплатно</div>
                <div className="text-sm text-gray-500">при ремонте</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Engine className="h-6 w-6 text-blue-600" />
                  <span>Виды работ</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <span>Сроки</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="font-semibold">Диагностика</div>
                      <div className="text-gray-600">1-2 часа</div>
                    </div>
                    <div>
                      <div className="font-semibold">Текущий ремонт</div>
                      <div className="text-gray-600">1-3 дня</div>
                    </div>
                    <div>
                      <div className="font-semibold">Капитальный ремонт</div>
                      <div className="text-gray-600">5-10 дней</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-blue-600" />
                    <span>Гарантия</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">2 года</div>
                    <div className="text-gray-600">на все виды работ</div>
                    <div className="text-sm text-gray-500 mt-2">
                      или 50 000 км пробега
                    </div>
                  </div>
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

export default EngineRepair;