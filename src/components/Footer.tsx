import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Wrench className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">АвтоСервис Pro</span>
            </div>
            <p className="text-gray-300 mb-4">
              Профессиональный ремонт автомобилей с гарантией качества. 
              Более 15 лет опыта в автосервисе.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-pink-400 cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-red-400 cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li><Link to="/engine-repair" className="text-gray-300 hover:text-white transition-colors">Ремонт двигателя</Link></li>
              <li><Link to="/transmission" className="text-gray-300 hover:text-white transition-colors">Трансмиссия</Link></li>
              <li><Link to="/brake-system" className="text-gray-300 hover:text-white transition-colors">Тормозная система</Link></li>
              <li><Link to="/suspension" className="text-gray-300 hover:text-white transition-colors">Подвеска</Link></li>
              <li><Link to="/electrical" className="text-gray-300 hover:text-white transition-colors">Электрика</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Информация</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">О компании</Link></li>
              <li><Link to="/warranty" className="text-gray-300 hover:text-white transition-colors">Гарантия</Link></li>
              <li><Link to="/prices" className="text-gray-300 hover:text-white transition-colors">Цены</Link></li>
              <li><Link to="/reviews" className="text-gray-300 hover:text-white transition-colors">Отзывы</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Блог</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">info@autoservice.ru</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">г. Москва, ул. Автомобильная, 15</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">Пн-Пт: 8:00-20:00, Сб-Вс: 9:00-18:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 АвтоСервис Pro. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;