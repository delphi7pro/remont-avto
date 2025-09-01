import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Engine, 
  Settings, 
  Zap, 
  Gauge, 
  Shield, 
  Wrench, 
  Car, 
  Clock, 
  Award, 
  Users 
} from 'lucide-react';

const InfoSections = () => {
  const sections = [
    {
      icon: Engine,
      title: "Ремонт двигателя",
      description: "Капитальный и текущий ремонт двигателей всех типов. Диагностика, замена деталей, настройка.",
      link: "/engine-repair",
      image: "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: Settings,
      title: "Трансмиссия",
      description: "Ремонт и обслуживание АКПП, МКПП, вариаторов. Замена масла, диагностика неисправностей.",
      link: "/transmission",
      image: "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: Zap,
      title: "Электрика и электроника",
      description: "Диагностика и ремонт электрических систем, замена проводки, ремонт ЭБУ.",
      link: "/electrical",
      image: "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: Gauge,
      title: "Тормозная система",
      description: "Замена колодок, дисков, суппортов. Прокачка тормозной системы, диагностика ABS.",
      link: "/brake-system",
      image: "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: Shield,
      title: "Подвеска и рулевое",
      description: "Ремонт амортизаторов, замена сайлентблоков, развал-схождение, ремонт рулевой рейки.",
      link: "/suspension",
      image: "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: Wrench,
      title: "Техническое обслуживание",
      description: "Плановое ТО, замена масла, фильтров, свечей. Подготовка к сезону.",
      link: "/maintenance",
      image: "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: Car,
      title: "Кузовной ремонт",
      description: "Покраска, рихтовка, замена деталей кузова. Полировка и защитные покрытия.",
      link: "/body-repair",
      image: "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: Clock,
      title: "Экспресс-сервис",
      description: "Быстрая замена масла, шин, аккумулятора. Мелкий ремонт за 30 минут.",
      link: "/express-service",
      image: "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: Award,
      title: "Гарантийное обслуживание",
      description: "Обслуживание автомобилей на гарантии с сохранением гарантийных обязательств.",
      link: "/warranty-service",
      image: "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: Users,
      title: "Корпоративным клиентам",
      description: "Специальные условия для автопарков и корпоративных клиентов. Выездной сервис.",
      link: "/corporate",
      image: "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Полный спектр услуг по ремонту и обслуживанию автомобилей. 
            Современное оборудование и квалифицированные специалисты.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={section.image} 
                    alt={section.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                    {section.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {section.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all">
                    <Link to={section.link}>Подробнее</Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InfoSections;