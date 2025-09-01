import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Disc, RotateCcw, Scale, CheckCircle, Thermometer, Calendar } from 'lucide-react';

const TireService = () => {
  const services = [
    {
      icon: Disc,
      title: "Шиномонтаж",
      description: "Замена шин, монтаж/демонтаж колес",
      price: "1 500 ₽",
      time: "20 мин"
    },
    {
      icon: Scale,
      title: "Балансировка",
      description: "Балансировка колес на современном стенде",
      price: "800 ₽",
      time: "15 мин"
    },
    {
      icon: RotateCcw,
      title: "Ротация шин",
      description: "Перестановка колес для равномерного износа",
      price: "1 000 ₽",
      time: "30 мин"
    },
    {
      icon: CheckCircle,
      title: "Диагностика шин",
      description: "Проверка состояния и износа шин",
      price: "500 ₽",
      time: "10 мин"
    }
  ];

  const seasonalServices = [
    {
      season: "Весна",
      icon: "🌸",
      title: "Переход на летнюю резину",
      services: ["Замена зимних шин", "Балансировка", "Проверка давления", "Хранение зимних шин"],
      price: "2 500 ₽"
    },
    {
      season: "Осень",
      icon: "🍂", 
      title: "Переход на зимнюю резину",
      services: ["Замена летних шин", "Балансировка", "Проверка протектора", "Хранение летних шин"],
      price: "2 500 ₽"
    }
  ];

  const tireTypes = [
    { type: "Летние шины", features: ["Отличное сцепление на сухом асфальте", "Низкий уровень шума", "Экономия топлива"] },
    { type: "Зимние шины", features: ["Безопасность на снегу и льду", "Мягкая резиновая смесь", "Специальный рисунок протектора"] },
    { type: "Всесезонные шины", features: ["Универсальность", "Экономия на замене", "Компромиссное решение"] }
  ];

  const storageOptions = [
    "Хранение на дисках",
    "Хранение без дисков", 
    "Мойка перед хранением",
    "Маркировка колес",
    "Контроль давления",
    "Защита от УФ-лучей"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Шиномонтаж и балансировка
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Профессиональный шиномонтаж с современным оборудованием. 
              Быстро, качественно и с гарантией.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-3 bg-gray-100 rounded-full w-fit">
                      <IconComponent className="h-8 w-8 text-gray-600" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <div className="space-y-2">
                      <div className="text-2xl font-bold text-gray-900">{service.price}</div>
                      <Badge variant="outline">{service.time}</Badge>
                    </div>
                    <Button className="w-full">Заказать</Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {seasonalServices.map((season, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">{season.icon}</div>
                    <div>
                      <CardTitle className="text-xl">{season.title}</CardTitle>
                      <div className="text-lg font-semibold text-blue-600">{season.price}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {season.services.map((service, serviceIndex) => (
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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {tireTypes.map((tire, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardHeader>
                  <CardTitle className="text-center">{tire.type}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tire.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white mb-16">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-4">Хранение шин</CardTitle>
              <CardDescription className="text-blue-100 text-lg">
                Сезонное хранение ваших шин в оптимальных условиях
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {storageOptions.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2 p-3 bg-white/10 rounded-lg">
                    <CheckCircle className="h-4 w-4 text-blue-200 flex-shrink-0" />
                    <span className="text-blue-100">{option}</span>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <Thermometer className="h-8 w-8 mx-auto mb-2 text-blue-200" />
                  <div className="text-2xl font-bold">+15°C</div>
                  <div className="text-blue-200">Оптимальная температура</div>
                </div>
                <div className="text-center">
                  <Calendar className="h-8 w-8 mx-auto mb-2 text-blue-200" />
                  <div className="text-2xl font-bold">6 мес</div>
                  <div className="text-blue-200">Период хранения</div>
                </div>
                <div className="text-center">
                  <Shield className="h-8 w-8 mx-auto mb-2 text-blue-200" />
                  <div className="text-2xl font-bold">3 000 ₽</div>
                  <div className="text-blue-200">Стоимость за сезон</div>
                </div>
              </div>
              <div className="text-center">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
                  Заказать хранение шин
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

export default TireService;