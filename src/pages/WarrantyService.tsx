import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Shield, CheckCircle, FileText, Award, Clock, AlertCircle } from 'lucide-react';

const WarrantyService = () => {
  const warrantyServices = [
    {
      title: "Гарантийное ТО",
      description: "Плановое обслуживание с сохранением гарантии",
      price: "от 4 000 ₽",
      warranty: "Сохраняется"
    },
    {
      title: "Гарантийный ремонт",
      description: "Устранение заводских дефектов",
      price: "Бесплатно",
      warranty: "По гарантии"
    },
    {
      title: "Диагностика по гарантии",
      description: "Выявление гарантийных случаев",
      price: "1 000 ₽",
      warranty: "Засчитывается"
    }
  ];

  const brands = [
    "Toyota", "Honda", "Nissan", "Mazda", "Hyundai", "Kia",
    "Volkswagen", "BMW", "Mercedes-Benz", "Audi", "Skoda", "Ford"
  ];

  const warrantyTerms = [
    "Сохранение заводской гарантии",
    "Использование оригинальных запчастей",
    "Сертифицированные мастера",
    "Ведение сервисной книжки",
    "Официальные печати и подписи",
    "Соблюдение регламента ТО"
  ];

  const documents = [
    "Сервисная книжка автомобиля",
    "Паспорт транспортного средства",
    "Документы на автомобиль",
    "Предыдущие чеки ТО (если есть)"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-16 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-100 text-green-800">Официальный сервис</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Гарантийное обслуживание
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Обслуживаем автомобили на гарантии с полным сохранением 
              гарантийных обязательств производителя.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {warrantyServices.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-green-600">{service.price}</div>
                    <Badge variant="outline" className="border-green-500 text-green-700">
                      {service.warranty}
                    </Badge>
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Записаться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="h-6 w-6 text-green-600" />
                  <span>Гарантии и условия</span>
                </CardTitle>
                <CardDescription>
                  Что мы гарантируем при обслуживании
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {warrantyTerms.map((term, index) => (
                    <div key={index} className="flex items-center space-x-2 p-3 bg-green-50 rounded-lg">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{term}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-6 w-6 text-blue-600" />
                  <span>Необходимые документы</span>
                </CardTitle>
                <CardDescription>
                  Что нужно принести с собой
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {documents.map((document, index) => (
                    <div key={index} className="flex items-center space-x-2 p-3 bg-blue-50 rounded-lg">
                      <FileText className="h-4 w-4 text-blue-500 flex-shrink-0" />
                      <span className="text-gray-700">{document}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <AlertCircle className="h-5 w-5 text-yellow-600" />
                    <span className="font-semibold text-yellow-800">Важно!</span>
                  </div>
                  <p className="text-yellow-700 text-sm">
                    Обязательно соблюдайте интервалы ТО согласно сервисной книжке
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Обслуживаемые марки
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {brands.map((brand, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all">
                  <CardContent className="pt-6">
                    <div className="font-semibold text-gray-900">{brand}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="bg-gradient-to-r from-green-600 to-green-700 text-white">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-4">Сохраним вашу гарантию</CardTitle>
              <CardDescription className="text-green-100 text-lg">
                Профессиональное обслуживание с соблюдением всех требований производителя
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-green-200">Сохранение гарантии</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-green-200">Марок автомобилей</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">5 лет</div>
                  <div className="text-green-200">Опыт гарантийного сервиса</div>
                </div>
              </div>
              <div className="text-center">
                <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100">
                  Записаться на гарантийное ТО
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

export default WarrantyService;