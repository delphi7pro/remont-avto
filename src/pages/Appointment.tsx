import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Clock, User, Car, Phone } from 'lucide-react';

const Appointment = () => {
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const services = [
    "Диагностика автомобиля",
    "Техническое обслуживание",
    "Ремонт двигателя",
    "Ремонт трансмиссии",
    "Тормозная система",
    "Подвеска и рулевое",
    "Электрика и электроника",
    "Кузовной ремонт",
    "Замена масла",
    "Шиномонтаж"
  ];

  const timeSlots = [
    "09:00", "10:00", "11:00", "12:00", 
    "14:00", "15:00", "16:00", "17:00", "18:00"
  ];

  const urgencyLevels = [
    { value: "low", label: "Плановое обслуживание", color: "green" },
    { value: "medium", label: "Требует внимания", color: "yellow" },
    { value: "high", label: "Срочный ремонт", color: "red" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Записаться на ремонт
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Выберите удобное время для посещения нашего автосервиса. 
              Мы подберем оптимальное решение для вашего автомобиля.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="h-6 w-6 text-blue-600" />
                    <span>Форма записи</span>
                  </CardTitle>
                  <CardDescription>
                    Заполните форму и мы свяжемся с вами для подтверждения
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Имя *</label>
                      <Input placeholder="Ваше имя" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Телефон *</label>
                      <Input placeholder="+7 (___) ___-__-__" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input placeholder="your@email.com" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Марка автомобиля</label>
                      <Input placeholder="Toyota, BMW, Mercedes..." />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Модель и год</label>
                      <Input placeholder="Camry 2018" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Тип услуги *</label>
                    <Select value={selectedService} onValueChange={setSelectedService}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите услугу" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service, index) => (
                          <SelectItem key={index} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Срочность</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите срочность" />
                      </SelectTrigger>
                      <SelectContent>
                        {urgencyLevels.map((level, index) => (
                          <SelectItem key={index} value={level.value}>
                            {level.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Предпочитаемая дата</label>
                      <Input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Время</label>
                      <Select value={selectedTime} onValueChange={setSelectedTime}>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите время" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time, index) => (
                            <SelectItem key={index} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Описание проблемы</label>
                    <Textarea 
                      placeholder="Опишите симптомы, звуки, поведение автомобиля..."
                      rows={4}
                    />
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 h-12 text-lg">
                    Отправить заявку
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Phone className="h-6 w-6 text-green-600" />
                    <span>Быстрая запись</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">
                    +7 (495) 123-45-67
                  </div>
                  <p className="text-gray-600 mb-4">
                    Позвоните нам прямо сейчас для быстрой записи
                  </p>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Позвонить
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Car className="h-6 w-6 text-blue-600" />
                    <span>Дополнительные услуги</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {services.slice(0, 6).map((service, index) => (
                      <div key={index} className="flex items-center space-x-2 p-2 bg-blue-50 rounded">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700 text-sm">{service}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-orange-50 border-orange-200">
                <CardHeader>
                  <CardTitle className="text-orange-800">Экстренная помощь</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-orange-700 mb-4">
                    Если ваш автомобиль сломался на дороге, мы поможем!
                  </p>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">
                    Вызвать эвакуатор
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Appointment;