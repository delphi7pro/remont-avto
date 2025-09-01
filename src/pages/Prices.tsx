import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calculator, Clock, Star, CheckCircle } from 'lucide-react';

const Prices = () => {
  const priceCategories = [
    {
      category: "Диагностика",
      services: [
        { name: "Компьютерная диагностика", price: "1 500 ₽", time: "30-60 мин" },
        { name: "Диагностика двигателя", price: "2 000 ₽", time: "1-2 часа" },
        { name: "Диагностика трансмиссии", price: "2 500 ₽", time: "1-2 часа" },
        { name: "Электродиагностика", price: "1 800 ₽", time: "1 час" }
      ]
    },
    {
      category: "Техобслуживание",
      services: [
        { name: "Замена масла + фильтр", price: "2 500 ₽", time: "15 мин" },
        { name: "Базовое ТО", price: "3 500 ₽", time: "2 часа" },
        { name: "Стандартное ТО", price: "6 500 ₽", time: "3 часа" },
        { name: "Расширенное ТО", price: "12 000 ₽", time: "5 часов" }
      ]
    },
    {
      category: "Ремонт двигателя",
      services: [
        { name: "Замена свечей зажигания", price: "1 500 ₽", time: "30 мин" },
        { name: "Замена ремня ГРМ", price: "8 000 ₽", time: "4 часа" },
        { name: "Ремонт ГБЦ", price: "25 000 ₽", time: "3-5 дней" },
        { name: "Капитальный ремонт", price: "от 80 000 ₽", time: "7-14 дней" }
      ]
    },
    {
      category: "Тормозная система",
      services: [
        { name: "Замена колодок (перед)", price: "3 000 ₽", time: "1 час" },
        { name: "Замена колодок (зад)", price: "2 500 ₽", time: "1 час" },
        { name: "Замена тормозных дисков", price: "5 000 ₽", time: "2 часа" },
        { name: "Прокачка тормозов", price: "1 500 ₽", time: "30 мин" }
      ]
    },
    {
      category: "Подвеска",
      services: [
        { name: "Замена амортизаторов", price: "6 000 ₽", time: "2 часа" },
        { name: "Замена сайлентблоков", price: "4 000 ₽", time: "3 часа" },
        { name: "Развал-схождение", price: "3 000 ₽", time: "1 час" },
        { name: "Замена шаровых опор", price: "3 500 ₽", time: "2 часа" }
      ]
    },
    {
      category: "Электрика",
      services: [
        { name: "Замена аккумулятора", price: "от 5 000 ₽", time: "10 мин" },
        { name: "Ремонт генератора", price: "8 000 ₽", time: "4 часа" },
        { name: "Ремонт стартера", price: "6 000 ₽", time: "3 часа" },
        { name: "Замена проводки", price: "от 3 000 ₽", time: "2-6 часов" }
      ]
    }
  ];

  const discounts = [
    { condition: "Пенсионерам", discount: "10%", description: "При предъявлении пенсионного удостоверения" },
    { condition: "Постоянным клиентам", discount: "15%", description: "При обслуживании более 3 раз" },
    { condition: "Корпоративным клиентам", discount: "до 25%", description: "При заключении договора" },
    { condition: "Комплексный ремонт", discount: "20%", description: "При заказе услуг на сумму от 50 000 ₽" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Цены на услуги
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Прозрачные и честные цены на все виды работ. 
              Никаких скрытых доплат - цена озвучивается заранее.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {priceCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-center">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="border-b border-gray-100 pb-3 last:border-b-0">
                        <div className="flex justify-between items-start mb-1">
                          <span className="text-gray-700 text-sm font-medium">{service.name}</span>
                          <span className="text-blue-600 font-bold">{service.price}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-xs text-gray-500">
                          <Clock className="h-3 w-3" />
                          <span>{service.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Star className="h-6 w-6 text-yellow-500" />
                  <span>Скидки и акции</span>
                </CardTitle>
                <CardDescription>
                  Специальные предложения для наших клиентов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {discounts.map((discount, index) => (
                    <div key={index} className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-900">{discount.condition}</span>
                        <Badge className="bg-yellow-500 hover:bg-yellow-600">{discount.discount}</Badge>
                      </div>
                      <p className="text-sm text-gray-600">{discount.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calculator className="h-6 w-6 text-green-600" />
                  <span>Калькулятор стоимости</span>
                </CardTitle>
                <CardDescription>
                  Примерный расчет стоимости ремонта
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg text-center">
                    <div className="text-2xl font-bold text-green-600 mb-2">Бесплатно</div>
                    <div className="text-gray-700">Предварительная оценка</div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-gray-700 text-sm">Точная диагностика</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-gray-700 text-sm">Подбор запчастей</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-gray-700 text-sm">Расчет времени</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-gray-700 text-sm">Итоговая стоимость</span>
                    </div>
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Рассчитать стоимость
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-4">Гарантия лучшей цены</CardTitle>
              <CardDescription className="text-blue-100 text-lg">
                Найдете дешевле - сделаем скидку!
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-blue-100 mb-6">
                Мы гарантируем конкурентные цены и готовы сделать дополнительную скидку, 
                если вы найдете аналогичную услугу дешевле.
              </p>
              <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
                Сравнить цены
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Prices;