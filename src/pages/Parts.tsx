import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Package, Truck, Shield, Star } from 'lucide-react';

const Parts = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    {
      title: "Двигатель",
      items: ["Поршни", "Кольца", "Прокладки", "Сальники", "Клапаны"],
      icon: "🔧"
    },
    {
      title: "Трансмиссия", 
      items: ["Сцепление", "Масло АКПП", "Фильтры", "Соленоиды"],
      icon: "⚙️"
    },
    {
      title: "Тормоза",
      items: ["Колодки", "Диски", "Суппорты", "Тормозная жидкость"],
      icon: "🛑"
    },
    {
      title: "Подвеска",
      items: ["Амортизаторы", "Пружины", "Сайлентблоки", "Шаровые"],
      icon: "🚗"
    },
    {
      title: "Электрика",
      items: ["Аккумуляторы", "Генераторы", "Стартеры", "Лампы"],
      icon: "⚡"
    },
    {
      title: "Расходники",
      items: ["Масло моторное", "Фильтры", "Свечи", "Ремни"],
      icon: "🛢️"
    }
  ];

  const brands = [
    { name: "Bosch", logo: "🔵", rating: 5, description: "Немецкое качество" },
    { name: "Mann", logo: "🟡", rating: 5, description: "Фильтры премиум класса" },
    { name: "Sachs", logo: "🔴", rating: 4, description: "Подвеска и амортизаторы" },
    { name: "Brembo", logo: "🟠", rating: 5, description: "Тормозная система" },
    { name: "NGK", logo: "⚪", rating: 4, description: "Свечи зажигания" },
    { name: "Castrol", logo: "🟢", rating: 5, description: "Моторные масла" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Запчасти и расходники
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Широкий ассортимент оригинальных и качественных аналоговых запчастей. 
              Быстрая доставка и гарантия на все товары.
            </p>
          </div>

          <div className="mb-12">
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Поиск запчастей..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 text-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-2">{category.icon}</div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-6">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center space-x-2 p-2 bg-gray-50 rounded">
                        <Package className="h-4 w-4 text-indigo-600" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                    Посмотреть все
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Наши поставщики</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {brands.map((brand, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="text-4xl mb-2">{brand.logo}</div>
                    <CardTitle>{brand.name}</CardTitle>
                    <div className="flex justify-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < brand.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{brand.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="bg-green-50 border-green-200">
              <CardHeader className="text-center">
                <Shield className="h-12 w-12 text-green-600 mx-auto mb-2" />
                <CardTitle className="text-green-800">Гарантия качества</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-green-700">
                  Все запчасти с официальной гарантией от производителя
                </p>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-200">
              <CardHeader className="text-center">
                <Truck className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                <CardTitle className="text-blue-800">Быстрая доставка</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-blue-700">
                  Доставка запчастей в день заказа или на следующий день
                </p>
              </CardContent>
            </Card>

            <Card className="bg-orange-50 border-orange-200">
              <CardHeader className="text-center">
                <Package className="h-12 w-12 text-orange-600 mx-auto mb-2" />
                <CardTitle className="text-orange-800">Большой склад</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-orange-700">
                  Более 10 000 наименований запчастей в наличии
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Parts;