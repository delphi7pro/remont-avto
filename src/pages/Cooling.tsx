import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Thermometer, Fan, Droplets, CheckCircle, AlertTriangle, Snowflake } from 'lucide-react';

const Cooling = () => {
  const services = [
    {
      icon: Thermometer,
      title: "Замена радиатора",
      description: "Установка нового радиатора охлаждения",
      price: "от 8 000 ₽",
      duration: "3-4 часа"
    },
    {
      icon: Fan,
      title: "Ремонт вентилятора",
      description: "Замена вентилятора охлаждения и датчиков",
      price: "от 3 500 ₽",
      duration: "2 часа"
    },
    {
      icon: Droplets,
      title: "Замена антифриза",
      description: "Полная замена охлаждающей жидкости",
      price: "2 000 ₽",
      duration: "1 час"
    },
    {
      icon: Snowflake,
      title: "Промывка системы",
      description: "Промывка системы охлаждения от накипи",
      price: "3 000 ₽",
      duration: "2 часа"
    }
  ];

  const coolingProblems = [
    "Перегрев двигателя",
    "Утечка охлаждающей жидкости",
    "Не работает вентилятор охлаждения",
    "Белый дым из выхлопной трубы",
    "Сладковатый запах в салоне",
    "Быстрое снижение уровня антифриза"
  ];

  const maintenanceSchedule = [
    {
      interval: "Каждые 10 000 км",
      tasks: ["Проверка уровня антифриза", "Осмотр радиатора", "Проверка шлангов"]
    },
    {
      interval: "Каждые 40 000 км", 
      tasks: ["Замена антифриза", "Промывка системы", "Замена термостата"]
    },
    {
      interval: "Каждые 80 000 км",
      tasks: ["Замена радиатора", "Замена помпы", "Полная ревизия системы"]
    }
  ];

  const antifreezeTypes = [
    {
      type: "G11 (синий/зеленый)",
      description: "Для автомобилей до 1996 года",
      lifespan: "2-3 года",
      price: "1 500 ₽"
    },
    {
      type: "G12 (красный)",
      description: "Для современных автомобилей",
      lifespan: "5 лет",
      price: "2 000 ₽"
    },
    {
      type: "G13 (фиолетовый)",
      description: "Экологичный антифриз",
      lifespan: "5-7 лет", 
      price: "2 500 ₽"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Система охлаждения
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Обслуживание и ремонт системы охлаждения двигателя. 
              Предотвратим перегрев и продлим срок службы мотора.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <div className="space-y-2">
                      <div className="text-xl font-bold text-blue-600">{service.price}</div>
                      <div className="text-sm text-gray-500">{service.duration}</div>
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
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
                  <AlertTriangle className="h-6 w-6 text-red-500" />
                  <span>Признаки неисправности</span>
                </CardTitle>
                <CardDescription>
                  Симптомы проблем с системой охлаждения
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {coolingProblems.map((problem, index) => (
                    <div key={index} className="flex items-center space-x-2 p-3 bg-red-50 rounded-lg">
                      <AlertTriangle className="h-4 w-4 text-red-500 flex-shrink-0" />
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
                  <span>График обслуживания</span>
                </CardTitle>
                <CardDescription>
                  Рекомендуемые интервалы обслуживания
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {maintenanceSchedule.map((schedule, index) => (
                    <div key={index} className="p-3 border rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">{schedule.interval}</h3>
                      <ul className="space-y-1">
                        {schedule.tasks.map((task, taskIndex) => (
                          <li key={taskIndex} className="text-gray-600 text-sm">• {task}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Типы антифриза
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {antifreezeTypes.map((antifreeze, index) => (
                <Card key={index} className="hover:shadow-lg transition-all">
                  <CardHeader className="text-center">
                    <Droplets className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <CardTitle className="text-lg">{antifreeze.type}</CardTitle>
                    <div className="text-xl font-bold text-blue-600">{antifreeze.price}</div>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 mb-2">{antifreeze.description}</p>
                    <p className="text-sm text-gray-500 mb-4">Срок службы: {antifreeze.lifespan}</p>
                    <Button className="w-full">Заказать замену</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-4">Экстренная помощь при перегреве</CardTitle>
              <CardDescription className="text-blue-100 text-lg">
                Что делать, если двигатель перегрелся
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Немедленные действия:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-200" />
                      <span className="text-blue-100">Остановите автомобиль</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-200" />
                      <span className="text-blue-100">Выключите двигатель</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-200" />
                      <span className="text-blue-100">Дайте двигателю остыть</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-200" />
                      <span className="text-blue-100">Вызовите эвакуатор</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Наша помощь:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-200" />
                      <span className="text-blue-100">Выезд мастера на место</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-200" />
                      <span className="text-blue-100">Экстренная диагностика</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-200" />
                      <span className="text-blue-100">Эвакуация в сервис</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-200" />
                      <span className="text-blue-100">Срочный ремонт</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="text-center">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
                  Вызвать экстренную помощь
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

export default Cooling;