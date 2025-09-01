import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Settings, CheckCircle, AlertCircle } from 'lucide-react';

const Suspension = () => {
  const services = [
    "Замена амортизаторов и стоек",
    "Ремонт и замена сайлентблоков",
    "Замена шаровых опор",
    "Ремонт рулевой рейки",
    "Замена рулевых тяг и наконечников",
    "Развал-схождение",
    "Ремонт стабилизаторов",
    "Замена пружин подвески"
  ];

  const symptoms = [
    "Стук в подвеске при проезде неровностей",
    "Увод автомобиля в сторону",
    "Неравномерный износ шин",
    "Вибрация руля при движении",
    "Плохая управляемость",
    "Раскачивание кузова"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-16 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Подвеска и рулевое управление
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Профессиональный ремонт подвески и рулевого управления. 
              Восстановим комфорт и безопасность вашего автомобиля.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Settings className="h-6 w-6 text-green-600" />
                  <span>Виды работ</span>
                </CardTitle>
                <CardDescription>
                  Полный спектр услуг по ремонту подвески
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-3">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center space-x-2 p-3 bg-green-50 rounded-lg">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertCircle className="h-6 w-6 text-orange-500" />
                  <span>Признаки неисправности</span>
                </CardTitle>
                <CardDescription>
                  Обратитесь к нам при появлении этих симптомов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {symptoms.map((symptom, index) => (
                    <div key={index} className="flex items-center space-x-2 p-3 bg-orange-50 rounded-lg">
                      <AlertCircle className="h-4 w-4 text-orange-500 flex-shrink-0" />
                      <span className="text-gray-700">{symptom}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white text-center">
            <Shield className="h-16 w-16 mx-auto mb-4 text-green-200" />
            <h2 className="text-3xl font-bold mb-4">Развал-схождение</h2>
            <p className="text-xl mb-6 text-green-100">
              3D стенд для точной настройки углов установки колес
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div>
                <div className="text-2xl font-bold">±2'</div>
                <div className="text-green-200">Точность измерения</div>
              </div>
              <div>
                <div className="text-2xl font-bold">30 мин</div>
                <div className="text-green-200">Время процедуры</div>
              </div>
              <div>
                <div className="text-2xl font-bold">3 000 ₽</div>
                <div className="text-green-200">Стоимость</div>
              </div>
            </div>
            <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100">
              Записаться на развал-схождение
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Suspension;