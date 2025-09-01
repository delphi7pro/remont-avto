import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Snowflake, Wind, Thermometer, CheckCircle, AlertTriangle, Wrench } from 'lucide-react';

const AirConditioning = () => {
  const services = [
    {
      icon: Snowflake,
      title: "Заправка кондиционера",
      description: "Заправка хладагентом R134a и R1234yf",
      price: "3 500 ₽",
      duration: "1 час"
    },
    {
      icon: Wind,
      title: "Чистка системы",
      description: "Промывка испарителя и радиатора кондиционера",
      price: "2 500 ₽",
      duration: "2 часа"
    },
    {
      icon: Wrench,
      title: "Ремонт компрессора",
      description: "Диагностика и ремонт компрессора кондиционера",
      price: "от 15 000 ₽",
      duration: "1-2 дня"
    },
    {
      icon: Thermometer,
      title: "Диагностика системы",
      description: "Проверка давления, поиск утечек",
      price: "1 500 ₽",
      duration: "30 мин"
    }
  ];

  const problems = [
    "Кондиционер не охлаждает",
    "Неприятный запах из воздуховодов",
    "Шум при работе компрессора",
    "Запотевание стекол",
    "Утечка хладагента",
    "Слабый поток воздуха"
  ];

  const maintenanceTips = [
    {
      tip: "Регулярное использование",
      description: "Включайте кондиционер хотя бы раз в неделю зимой"
    },
    {
      tip: "Замена салонного фильтра",
      description: "Меняйте фильтр каждые 15 000 км или раз в год"
    },
    {
      tip: "Чистка испарителя",
      description: "Проводите чистку системы раз в 2 года"
    },
    {
      tip: "Проверка давления",
      description: "Контролируйте давление в системе перед летним сезоном"
    }
  ];

  const seasonalWork = [
    {
      season: "Весна",
      tasks: ["Проверка работоспособности", "Заправка при необходимости", "Замена салонного фильтра"],
      price: "от 2 000 ₽"
    },
    {
      season: "Лето",
      tasks: ["Контроль температуры", "Чистка радиатора", "Проверка утечек"],
      price: "от 1 500 ₽"
    },
    {
      season: "Осень",
      tasks: ["Профилактическая чистка", "Проверка компрессора", "Подготовка к зиме"],
      price: "от 2 500 ₽"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-16 bg-gradient-to-br from-cyan-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-cyan-100 text-cyan-800">Климат-контроль</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Кондиционеры и климат-системы
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Обслуживание и ремонт систем кондиционирования. 
              Комфортная температура в салоне круглый год.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-3 bg-cyan-100 rounded-full w-fit">
                      <IconComponent className="h-8 w-8 text-cyan-600" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <div className="space-y-2">
                      <div className="text-xl font-bold text-cyan-600">{service.price}</div>
                      <Badge variant="outline">{service.duration}</Badge>
                    </div>
                    <Button className="w-full bg-cyan-600 hover:bg-cyan-700">
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
                  Когда нужно обратиться к специалистам
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {problems.map((problem, index) => (
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
                  <span>Советы по уходу</span>
                </CardTitle>
                <CardDescription>
                  Как продлить срок службы кондиционера
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {maintenanceTips.map((tip, index) => (
                    <div key={index} className="p-3 bg-green-50 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-1">{tip.tip}</h3>
                      <p className="text-gray-600 text-sm">{tip.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Сезонное обслуживание
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {seasonalWork.map((season, index) => (
                <Card key={index} className="hover:shadow-lg transition-all">
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl">{season.season}</CardTitle>
                    <div className="text-lg font-semibold text-cyan-600">{season.price}</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {season.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{task}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-4 bg-cyan-600 hover:bg-cyan-700">
                      Записаться
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="bg-gradient-to-r from-cyan-600 to-cyan-700 text-white">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-4">Подготовка к лету</CardTitle>
              <CardDescription className="text-cyan-100 text-lg">
                Комплексная проверка системы кондиционирования
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <Thermometer className="h-8 w-8 mx-auto mb-2 text-cyan-200" />
                  <div className="text-2xl font-bold">-5°C</div>
                  <div className="text-cyan-200">Минимальная температура</div>
                </div>
                <div className="text-center">
                  <Wind className="h-8 w-8 mx-auto mb-2 text-cyan-200" />
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-cyan-200">Эффективность охлаждения</div>
                </div>
                <div className="text-center">
                  <CheckCircle className="h-8 w-8 mx-auto mb-2 text-cyan-200" />
                  <div className="text-2xl font-bold">1 год</div>
                  <div className="text-cyan-200">Гарантия на работы</div>
                </div>
              </div>
              <div className="text-center">
                <Button size="lg" className="bg-white text-cyan-700 hover:bg-gray-100">
                  Подготовить кондиционер к лету
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

export default AirConditioning;