import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock, Car, MessageCircle } from 'lucide-react';

const Contacts = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Телефон",
      value: "+7 (495) 123-45-67",
      description: "Звоните в любое время"
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@autoservice.ru",
      description: "Ответим в течение часа"
    },
    {
      icon: MapPin,
      title: "Адрес",
      value: "г. Москва, ул. Автомобильная, 15",
      description: "Удобная парковка"
    },
    {
      icon: Clock,
      title: "Режим работы",
      value: "Пн-Пт: 8:00-20:00",
      description: "Сб-Вс: 9:00-18:00"
    }
  ];

  const services = [
    "Экстренный выезд мастера",
    "Эвакуация автомобиля",
    "Консультация по телефону",
    "Запись онлайн",
    "Диагностика на месте",
    "Доставка запчастей"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Контакты
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Свяжитесь с нами любым удобным способом. Мы всегда готовы помочь 
              с ремонтом и обслуживанием вашего автомобиля.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-all">
                  <CardHeader>
                    <IconComponent className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <CardTitle className="text-lg">{contact.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="font-semibold text-gray-900 mb-2">{contact.value}</div>
                    <div className="text-sm text-gray-600">{contact.description}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageCircle className="h-6 w-6 text-blue-600" />
                  <span>Обратная связь</span>
                </CardTitle>
                <CardDescription>
                  Оставьте заявку и мы свяжемся с вами в течение 15 минут
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="Ваше имя" />
                  <Input placeholder="Телефон" />
                </div>
                <Input placeholder="Email" />
                <Input placeholder="Марка и модель автомобиля" />
                <Textarea placeholder="Опишите проблему или интересующую услугу" rows={4} />
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Car className="h-6 w-6 text-green-600" />
                    <span>Дополнительные услуги</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {services.map((service, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-gray-700">{service}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-blue-600 text-white">
                <CardHeader>
                  <CardTitle>Экстренная помощь</CardTitle>
                  <CardDescription className="text-blue-100">
                    Круглосуточная поддержка в экстренных ситуациях
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">+7 (495) 911-22-33</div>
                    <div className="text-blue-200 mb-4">Экстренная линия</div>
                    <Button className="bg-white text-blue-600 hover:bg-gray-100">
                      Вызвать эвакуатор
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-center">Как нас найти</CardTitle>
              <CardDescription className="text-center">
                Мы находимся в удобном месте с большой парковкой
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <MapPin className="h-12 w-12 mx-auto mb-4" />
                  <div className="text-lg font-semibold">Интерактивная карта</div>
                  <div>г. Москва, ул. Автомобильная, 15</div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Car className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="font-semibold">Парковка</div>
                  <div className="text-sm text-gray-600">50 мест</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="font-semibold">Метро</div>
                  <div className="text-sm text-gray-600">5 мин пешком</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="font-semibold">Время работы</div>
                  <div className="text-sm text-gray-600">12 часов в день</div>
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

export default Contacts;