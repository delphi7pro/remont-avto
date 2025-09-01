import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Building, Truck, Users, Calculator, CheckCircle, Phone } from 'lucide-react';

const Corporate = () => {
  const corporateServices = [
    {
      icon: Truck,
      title: "Обслуживание автопарка",
      description: "Комплексное ТО и ремонт корпоративного транспорта",
      features: ["Плановое ТО", "Экстренный ремонт", "Ведение документации"]
    },
    {
      icon: Users,
      title: "Выездной сервис",
      description: "Мобильная бригада для обслуживания на территории клиента",
      features: ["Диагностика на месте", "Мелкий ремонт", "Замена расходников"]
    },
    {
      icon: Calculator,
      title: "Управление расходами",
      description: "Контроль и оптимизация затрат на обслуживание",
      features: ["Детальная отчетность", "Планирование бюджета", "Анализ затрат"]
    }
  ];

  const benefits = [
    "Скидки до 25% на все виды работ",
    "Приоритетное обслуживание",
    "Индивидуальный менеджер",
    "Отсрочка платежа до 30 дней",
    "Бесплатная диагностика",
    "Выездной сервис",
    "Детальная отчетность",
    "Планирование ТО"
  ];

  const clientTypes = [
    {
      type: "Малый бизнес",
      vehicles: "5-20 автомобилей",
      discount: "10%",
      services: "Базовый пакет"
    },
    {
      type: "Средний бизнес", 
      vehicles: "20-50 автомобилей",
      discount: "15%",
      services: "Расширенный пакет"
    },
    {
      type: "Крупные компании",
      vehicles: "50+ автомобилей", 
      discount: "25%",
      services: "Премиум пакет"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-16 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-purple-100 text-purple-800">Для бизнеса</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Корпоративным клиентам
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Специальные условия для компаний и владельцев автопарков. 
              Индивидуальный подход и выгодные тарифы.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {corporateServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-3 bg-purple-100 rounded-full w-fit">
                      <IconComponent className="h-8 w-8 text-purple-600" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      Подробнее
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
                  <Building className="h-6 w-6 text-purple-600" />
                  <span>Преимущества сотрудничества</span>
                </CardTitle>
                <CardDescription>
                  Что получают наши корпоративные клиенты
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-2 p-2 bg-purple-50 rounded-lg">
                      <CheckCircle className="h-4 w-4 text-purple-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calculator className="h-6 w-6 text-blue-600" />
                  <span>Тарифные планы</span>
                </CardTitle>
                <CardDescription>
                  Выберите подходящий тариф для вашего бизнеса
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {clientTypes.map((client, index) => (
                    <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-all">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-gray-900">{client.type}</h3>
                        <Badge className="bg-blue-100 text-blue-800">{client.discount} скидка</Badge>
                      </div>
                      <div className="text-sm text-gray-600 mb-1">{client.vehicles}</div>
                      <div className="text-sm text-gray-500">{client.services}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Процесс сотрудничества</CardTitle>
                <CardDescription>
                  Как начать работу с нашим автосервисом
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div>
                      <h3 className="font-semibold">Консультация</h3>
                      <p className="text-gray-600">Обсуждение потребностей и условий</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <div>
                      <h3 className="font-semibold">Договор</h3>
                      <p className="text-gray-600">Заключение договора на обслуживание</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <div>
                      <h3 className="font-semibold">Планирование</h3>
                      <p className="text-gray-600">Составление графика обслуживания</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">4</div>
                    <div>
                      <h3 className="font-semibold">Обслуживание</h3>
                      <p className="text-gray-600">Регулярное ТО и ремонт по плану</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-purple-600 text-white">
              <CardHeader>
                <CardTitle>Свяжитесь с нами</CardTitle>
                <CardDescription className="text-purple-100">
                  Обсудим условия сотрудничества
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-5 w-5 text-purple-200" />
                    <span>+7 (495) 123-45-67</span>
                  </div>
                  <div className="text-sm text-purple-200">
                    Корпоративный отдел
                  </div>
                  <div className="text-sm text-purple-200">
                    Пн-Пт: 9:00-18:00
                  </div>
                </div>
                <Button className="w-full mt-6 bg-white text-purple-700 hover:bg-gray-100">
                  Получить коммерческое предложение
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-center">Наши корпоративные клиенты</CardTitle>
              <CardDescription className="text-center">
                Компании, которые доверяют нам свой автопарк
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
                <div className="text-center p-4 bg-gray-50 rounded-lg w-full">
                  <div className="text-2xl font-bold text-gray-600 mb-2">ООО "Логистика+"</div>
                  <div className="text-sm text-gray-500">35 автомобилей</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg w-full">
                  <div className="text-2xl font-bold text-gray-600 mb-2">ИП Транспорт</div>
                  <div className="text-sm text-gray-500">12 автомобилей</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg w-full">
                  <div className="text-2xl font-bold text-gray-600 mb-2">Такси Комфорт</div>
                  <div className="text-sm text-gray-500">80 автомобилей</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg w-full">
                  <div className="text-2xl font-bold text-gray-600 mb-2">Доставка 24/7</div>
                  <div className="text-sm text-gray-500">25 автомобилей</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Corporate;