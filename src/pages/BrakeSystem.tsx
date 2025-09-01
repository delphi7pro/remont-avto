import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Gauge, Shield, AlertTriangle, CheckCircle } from 'lucide-react';

const BrakeSystem = () => {
  const services = [
    {
      title: "Замена тормозных колодок",
      description: "Передние и задние колодки, все типы тормозных систем",
      price: "от 3 000 ₽",
      duration: "1-2 часа"
    },
    {
      title: "Замена тормозных дисков",
      description: "Вентилируемые и обычные диски, проточка дисков",
      price: "от 5 000 ₽", 
      duration: "2-3 часа"
    },
    {
      title: "Ремонт суппортов",
      description: "Замена поршней, сальников, направляющих",
      price: "от 4 000 ₽",
      duration: "2-4 часа"
    },
    {
      title: "Прокачка тормозов",
      description: "Замена тормозной жидкости, удаление воздуха",
      price: "от 1 500 ₽",
      duration: "1 час"
    },
    {
      title: "Ремонт ABS",
      description: "Диагностика и ремонт антиблокировочной системы",
      price: "от 8 000 ₽",
      duration: "1-2 дня"
    },
    {
      title: "Ремонт ручника",
      description: "Регулировка, замена тросов ручного тормоза",
      price: "от 2 000 ₽",
      duration: "1-2 часа"
    }
  ];

  const warningSignals = [
    "Скрип или визг при торможении",
    "Увеличенный ход педали тормоза",
    "Вибрация при торможении",
    "Автомобиль уводит в сторону",
    "Горит лампа ABS",
    "Утечка тормозной жидкости"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-16 bg-gradient-to-br from-red-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-red-100 text-red-800">Безопасность превыше всего</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Тормозная система
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ремонт и обслуживание тормозной системы - это вопрос безопасности. 
              Доверьте это профессионалам с многолетним опытом.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Gauge className="h-8 w-8 text-red-600" />
                    <Badge variant="outline">{service.duration}</Badge>
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-red-600">{service.price}</span>
                  </div>
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-red-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-red-700">
                  <AlertTriangle className="h-6 w-6" />
                  <span>Тревожные сигналы</span>
                </CardTitle>
                <CardDescription>
                  Немедленно обратитесь к нам при появлении этих признаков
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {warningSignals.map((signal, index) => (
                    <div key={index} className="flex items-center space-x-2 p-3 bg-red-50 rounded-lg">
                      <AlertTriangle className="h-4 w-4 text-red-500 flex-shrink-0" />
                      <span className="text-gray-700">{signal}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-green-600" />
                  <span>Наши преимущества</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Только оригинальные запчасти</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Гарантия на все работы</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Быстрое выполнение работ</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Тестирование после ремонта</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Сертифицированные мастера</span>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-green-600 hover:bg-green-700">
                  Бесплатная диагностика
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BrakeSystem;