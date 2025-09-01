import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, CheckCircle, FileText, Clock, AlertCircle, Phone } from 'lucide-react';

const Warranty = () => {
  const warrantyTypes = [
    {
      type: "Ремонт двигателя",
      period: "2 года или 50 000 км",
      coverage: "Полная гарантия на работы и запчасти"
    },
    {
      type: "Трансмиссия",
      period: "18 месяцев или 40 000 км", 
      coverage: "Гарантия на все виды ремонта"
    },
    {
      type: "Тормозная система",
      period: "1 год или 30 000 км",
      coverage: "Гарантия на колодки, диски, суппорты"
    },
    {
      type: "Подвеска",
      period: "1 год или 25 000 км",
      coverage: "Гарантия на амортизаторы и детали"
    },
    {
      type: "Электрика",
      period: "6 месяцев или 20 000 км",
      coverage: "Гарантия на электронные компоненты"
    },
    {
      type: "Кузовной ремонт",
      period: "2 года",
      coverage: "Гарантия на покраску и рихтовку"
    }
  ];

  const warrantyConditions = [
    "Соблюдение рекомендаций по эксплуатации",
    "Использование рекомендованных масел и жидкостей",
    "Своевременное прохождение ТО",
    "Обращение при первых признаках неисправности",
    "Сохранение документов о ремонте",
    "Эксплуатация в нормальных условиях"
  ];

  const warrantyProcess = [
    {
      step: 1,
      title: "Обращение",
      description: "Свяжитесь с нами по телефону или приезжайте в сервис"
    },
    {
      step: 2,
      title: "Диагностика", 
      description: "Проведем диагностику для определения гарантийного случая"
    },
    {
      step: 3,
      title: "Решение",
      description: "Бесплатно устраним неисправность или заменим деталь"
    },
    {
      step: 4,
      title: "Документы",
      description: "Оформим все необходимые документы и продлим гарантию"
    }
  ];

  const exclusions = [
    "Механические повреждения",
    "Последствия ДТП",
    "Неправильная эксплуатация",
    "Использование некачественных запчастей",
    "Ремонт в других сервисах",
    "Естественный износ расходников"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-16 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Гарантия на услуги
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы уверены в качестве наших работ и предоставляем расширенную гарантию 
              на все виды ремонта и обслуживания.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {warrantyTypes.map((warranty, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">{warranty.type}</CardTitle>
                  <div className="text-xl font-bold text-green-600">{warranty.period}</div>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-4">{warranty.coverage}</p>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span>Условия гарантии</span>
                </CardTitle>
                <CardDescription>
                  Что нужно соблюдать для сохранения гарантии
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {warrantyConditions.map((condition, index) => (
                    <div key={index} className="flex items-center space-x-2 p-3 bg-green-50 rounded-lg">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{condition}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertCircle className="h-6 w-6 text-red-600" />
                  <span>Исключения из гарантии</span>
                </CardTitle>
                <CardDescription>
                  Случаи, не покрываемые гарантией
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {exclusions.map((exclusion, index) => (
                    <div key={index} className="flex items-center space-x-2 p-3 bg-red-50 rounded-lg">
                      <AlertCircle className="h-4 w-4 text-red-500 flex-shrink-0" />
                      <span className="text-gray-700">{exclusion}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-16">
            <CardHeader>
              <CardTitle className="text-center">Процедура гарантийного обслуживания</CardTitle>
              <CardDescription className="text-center">
                Как воспользоваться гарантией на наши услуги
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {warrantyProcess.map((process, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mx-auto mb-4">
                      {process.step}
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{process.title}</h3>
                    <p className="text-gray-600 text-sm">{process.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-6 w-6 text-blue-600" />
                  <span>Гарантийные документы</span>
                </CardTitle>
                <CardDescription>
                  Документы, которые мы предоставляем
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                    <FileText className="h-5 w-5 text-blue-600" />
                    <span>Гарантийный талон</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                    <FileText className="h-5 w-5 text-blue-600" />
                    <span>Акт выполненных работ</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                    <FileText className="h-5 w-5 text-blue-600" />
                    <span>Чек об оплате</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                    <FileText className="h-5 w-5 text-blue-600" />
                    <span>Сертификаты на запчасти</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-green-600 text-white">
              <CardHeader>
                <CardTitle>Гарантийная поддержка</CardTitle>
                <CardDescription className="text-green-100">
                  Обратитесь к нам по любым гарантийным вопросам
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-5 w-5 text-green-200" />
                    <span>+7 (495) 123-45-67</span>
                  </div>
                  <div className="text-sm text-green-200">
                    Гарантийный отдел
                  </div>
                  <div className="text-sm text-green-200">
                    Пн-Пт: 9:00-18:00, Сб: 10:00-16:00
                  </div>
                  <div className="border-t border-green-500 pt-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold mb-2">24 часа</div>
                      <div className="text-green-200 text-sm">Время рассмотрения заявки</div>
                    </div>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-white text-green-600 hover:bg-gray-100">
                  Подать гарантийную заявку
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

export default Warranty;