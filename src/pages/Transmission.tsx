import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Settings, CheckCircle, AlertTriangle, Wrench } from 'lucide-react';

const Transmission = () => {
  const transmissionTypes = [
    {
      type: "АКПП",
      services: ["Замена масла и фильтров", "Ремонт гидроблока", "Замена соленоидов", "Капитальный ремонт"],
      price: "от 25 000 ₽"
    },
    {
      type: "МКПП", 
      services: ["Замена сцепления", "Ремонт синхронизаторов", "Замена масла", "Регулировка"],
      price: "от 15 000 ₽"
    },
    {
      type: "Вариатор",
      services: ["Замена ремня", "Ремонт конусов", "Замена масла", "Калибровка"],
      price: "от 30 000 ₽"
    }
  ];

  const symptoms = [
    "Рывки при переключении передач",
    "Пробуксовка сцепления",
    "Шум в коробке передач",
    "Утечка масла",
    "Не включаются передачи",
    "Вибрация при движении"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Ремонт трансмиссии
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Профессиональный ремонт автоматических и механических коробок передач, 
              вариаторов. Диагностика и устранение любых неисправностей.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {transmissionTypes.map((transmission, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center">
                  <Settings className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-2xl">{transmission.type}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-blue-600">
                    {transmission.price}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {transmission.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{service}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">Записаться</Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="h-6 w-6 text-orange-500" />
                  <span>Признаки неисправности</span>
                </CardTitle>
                <CardDescription>
                  Обратитесь к нам при появлении следующих симптомов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-3">
                  {symptoms.map((symptom, index) => (
                    <div key={index} className="flex items-center space-x-2 p-3 bg-orange-50 rounded-lg">
                      <AlertTriangle className="h-4 w-4 text-orange-500 flex-shrink-0" />
                      <span className="text-gray-700">{symptom}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Wrench className="h-6 w-6 text-blue-600" />
                  <span>Процесс ремонта</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                    <div>
                      <h3 className="font-semibold">Диагностика</h3>
                      <p className="text-gray-600">Компьютерная диагностика и осмотр</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                    <div>
                      <h3 className="font-semibold">Разборка</h3>
                      <p className="text-gray-600">Демонтаж и дефектовка деталей</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                    <div>
                      <h3 className="font-semibold">Ремонт</h3>
                      <p className="text-gray-600">Замена изношенных деталей</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                    <div>
                      <h3 className="font-semibold">Сборка и тестирование</h3>
                      <p className="text-gray-600">Сборка и проверка работы</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Transmission;