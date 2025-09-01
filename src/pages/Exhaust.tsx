import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Wind, Volume2, Wrench, CheckCircle, AlertTriangle, Gauge } from 'lucide-react';

const Exhaust = () => {
  const services = [
    {
      icon: Wind,
      title: "Замена глушителя",
      description: "Установка нового глушителя, ремонт системы выпуска",
      price: "от 5 000 ₽",
      duration: "2-3 часа"
    },
    {
      icon: Wrench,
      title: "Ремонт катализатора",
      description: "Диагностика, чистка или замена катализатора",
      price: "от 15 000 ₽",
      duration: "4-6 часов"
    },
    {
      icon: Volume2,
      title: "Установка спортивного выпуска",
      description: "Тюнинг выхлопной системы для улучшения звука",
      price: "от 20 000 ₽",
      duration: "1 день"
    },
    {
      icon: Gauge,
      title: "Диагностика выхлопа",
      description: "Проверка состояния системы выпуска отработавших газов",
      price: "1 000 ₽",
      duration: "30 мин"
    }
  ];

  const exhaustProblems = [
    "Громкий шум при работе двигателя",
    "Черный или белый дым из выхлопной трубы",
    "Запах выхлопных газов в салоне",
    "Потеря мощности двигателя",
    "Повышенный расход топлива",
    "Вибрация при работе на холостых"
  ];

  const exhaustComponents = [
    {
      component: "Катализатор",
      function: "Очистка выхлопных газов",
      lifespan: "100-150 тыс. км",
      price: "от 25 000 ₽"
    },
    {
      component: "Резонатор",
      function: "Снижение шума",
      lifespan: "80-120 тыс. км", 
      price: "от 3 000 ₽"
    },
    {
      component: "Глушитель",
      function: "Окончательное глушение",
      lifespan: "60-100 тыс. км",
      price: "от 5 000 ₽"
    },
    {
      component: "Гофра",
      function: "Компенсация вибраций",
      lifespan: "40-60 тыс. км",
      price: "от 2 000 ₽"
    }
  ];

  const materials = [
    "Нержавеющая сталь - долговечность",
    "Алюминизированная сталь - оптимальное соотношение цена/качество",
    "Титан - максимальная прочность для спорт-каров"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Выхлопная система
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ремонт и обслуживание выхлопной системы. Снижение шума, 
              очистка выбросов и улучшение характеристик двигателя.
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
                      <div className="text-xl font-bold text-gray-900">{service.price}</div>
                      <div className="text-sm text-gray-500">{service.duration}</div>
                    </div>
                    <Button className="w-full">Заказать</Button>
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
                  Симптомы проблем с выхлопной системой
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {exhaustProblems.map((problem, index) => (
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
                  <Wrench className="h-6 w-6 text-blue-600" />
                  <span>Компоненты системы</span>
                </CardTitle>
                <CardDescription>
                  Основные элементы выхлопной системы
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {exhaustComponents.map((component, index) => (
                    <div key={index} className="p-3 border rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-gray-900">{component.component}</h3>
                        <span className="text-blue-600 font-bold">{component.price}</span>
                      </div>
                      <p className="text-gray-600 text-sm mb-1">{component.function}</p>
                      <p className="text-gray-500 text-xs">Срок службы: {component.lifespan}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {seasonalWork.map((season, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{season.season}</CardTitle>
                  <div className="text-lg font-semibold text-blue-600">{season.price}</div>
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
                  <Button className="w-full mt-4">Записаться</Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-r from-gray-600 to-gray-700 text-white">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-4">Материалы изготовления</CardTitle>
              <CardDescription className="text-gray-100 text-lg">
                Используем только качественные материалы
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 mb-8">
                {materials.map((material, index) => (
                  <div key={index} className="flex items-center space-x-2 p-3 bg-white/10 rounded-lg">
                    <CheckCircle className="h-4 w-4 text-gray-200 flex-shrink-0" />
                    <span className="text-gray-100">{material}</span>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <Button size="lg" className="bg-white text-gray-700 hover:bg-gray-100">
                  Получить консультацию
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

export default Exhaust;