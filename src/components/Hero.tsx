import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Car, Shield, Clock, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Профессиональный
              <span className="text-blue-300 block">ремонт автомобилей</span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Качественный сервис с гарантией. Опытные мастера, современное оборудование 
              и оригинальные запчасти для вашего автомобиля.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link to="/appointment">Записаться на ремонт</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900">
                <Link to="/services">Наши услуги</Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <Car className="h-8 w-8 text-blue-300 mx-auto mb-2" />
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-blue-200">Отремонтированных авто</div>
              </div>
              <div className="text-center">
                <Shield className="h-8 w-8 text-blue-300 mx-auto mb-2" />
                <div className="text-2xl font-bold">15</div>
                <div className="text-sm text-blue-200">Лет опыта</div>
              </div>
              <div className="text-center">
                <Clock className="h-8 w-8 text-blue-300 mx-auto mb-2" />
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-blue-200">Поддержка</div>
              </div>
              <div className="text-center">
                <Award className="h-8 w-8 text-blue-300 mx-auto mb-2" />
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm text-blue-200">Гарантия</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Ремонт автомобиля"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-6 rounded-lg shadow-xl">
              <div className="text-2xl font-bold text-blue-600">Скидка 20%</div>
              <div className="text-sm">на первое обслуживание</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;