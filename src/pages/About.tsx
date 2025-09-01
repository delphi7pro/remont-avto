import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Award, Clock, Shield, Star, CheckCircle } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, value: "15+", label: "Лет опыта" },
    { icon: Award, value: "500+", label: "Довольных клиентов" },
    { icon: Clock, value: "24/7", label: "Поддержка" },
    { icon: Shield, value: "100%", label: "Гарантия качества" }
  ];

  const team = [
    {
      name: "Алексей Петров",
      position: "Главный механик",
      experience: "20 лет опыта",
      specialization: "Двигатели, диагностика",
      image: "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Михаил Сидоров", 
      position: "Мастер по трансмиссии",
      experience: "15 лет опыта",
      specialization: "АКПП, МКПП, вариаторы",
      image: "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Дмитрий Козлов",
      position: "Электрик-диагност",
      experience: "12 лет опыта", 
      specialization: "Электроника, ЭБУ",
      image: "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=300"
    }
  ];

  const achievements = [
    "Сертифицированный сервисный центр",
    "Партнер ведущих производителей",
    "Лауреат премии 'Лучший автосервис 2024'",
    "Более 1000 положительных отзывов",
    "Обучение мастеров в Германии",
    "ISO 9001:2015 сертификация"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              О нашей компании
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              АвтоСервис Pro - это команда профессионалов с многолетним опытом 
              в области ремонта и обслуживания автомобилей.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-all">
                  <CardContent className="pt-6">
                    <IconComponent className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Наша история</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Компания АвтоСервис Pro была основана в 2009 году группой энтузиастов 
                  автомобильного дела. Начав с небольшой мастерской, мы выросли в 
                  современный сервисный центр.
                </p>
                <p>
                  За годы работы мы накопили огромный опыт в ремонте автомобилей 
                  различных марок и моделей. Наши мастера регулярно проходят обучение 
                  и повышают квалификацию.
                </p>
                <p>
                  Сегодня мы гордимся тем, что являемся одним из ведущих автосервисов 
                  города, предоставляя качественные услуги по доступным ценам.
                </p>
              </div>
            </div>

            <div>
              <img 
                src="https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Наш автосервис"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Наша команда</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center hover:shadow-xl transition-all">
                  <CardHeader>
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <CardTitle>{member.name}</CardTitle>
                    <CardDescription>{member.position}</CardDescription>
                    <Badge variant="outline">{member.experience}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{member.specialization}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-4">Наши достижения</CardTitle>
              <CardDescription className="text-blue-100 text-lg">
                Признание профессионализма и качества наших услуг
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-blue-200 flex-shrink-0" />
                    <span className="text-blue-100">{achievement}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;