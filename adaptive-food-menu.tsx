import { useState } from 'react'
import { MapPin, Facebook, Instagram, Twitter } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent } from "@/components/ui/card"

const locations = [
  { name: "Downtown", url: "https://maps.google.com/?q=Downtown" },
  { name: "Uptown", url: "https://maps.google.com/?q=Uptown" },
  { name: "Suburbs", url: "https://maps.google.com/?q=Suburbs" },
]

const categories = ["Pollo", "Costilla", "Carne Asada", "Guarnisiones", "Promos", "Extras"]

const products = [
  { name: "Muzzarella", price: 239, oldPrice: 280, discount: 15, image: "/placeholder.svg?height=100&width=100" },
  { name: "Nachos", price: 280, oldPrice: 340, discount: 18, image: "/placeholder.svg?height=100&width=100" },
  { name: "Jamón", price: 430, oldPrice: 580, discount: 26, image: "/placeholder.svg?height=100&width=100" },
]

export default function AdaptiveFoodMenu() {
  const [activeCategory, setActiveCategory] = useState(categories[0])

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <CardContent className="p-0">
          <div className="relative">
            <img src="/placeholder.svg?height=200&width=400" alt="Banner" className="w-full h-40 object-cover" />
            <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-md shadow">
              <span className="text-orange-500 font-bold">Horario: 11am - 5pm</span>
            </div>
            <div className="absolute -bottom-10 left-4 bg-white p-2 rounded-lg shadow-md">
              <img src="/placeholder.svg?height=80&width=80" alt="Logo" className="w-20 h-20" />
            </div>
          </div>
          
          <div className="mt-14 px-4">
            <h1 className="text-2xl font-bold text-gray-800">El Señor de los Pollos</h1>
            
            <div className="mt-4 flex justify-end">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="default" className="bg-orange-500 hover:bg-orange-600 text-white">
                    <MapPin className="mr-2 h-4 w-4" /> Ubicaciones
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <h2 className="text-lg font-semibold mb-4">Nuestras Ubicaciones</h2>
                  <ul>
                    {locations.map((location, index) => (
                      <li key={index} className="mb-2">
                        <a href={location.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                          {location.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </DialogContent>
              </Dialog>
            </div>

            <Tabs defaultValue={categories[0]} className="mt-6">
              <ScrollArea className="w-full">
                <TabsList className="w-full justify-start">
                  {categories.map((category, index) => (
                    <TabsTrigger
                      key={index}
                      value={category}
                      onClick={() => setActiveCategory(category)}
                      className={activeCategory === category ? "border-b-2 border-orange-500" : ""}
                    >
                      {category}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </ScrollArea>

              {categories.map((category, index) => (
                <TabsContent key={index} value={category}>
                  <ScrollArea className="w-full">
                    <div className="flex space-x-4 p-4">
                      {products.map((product, productIndex) => (
                        <div key={productIndex} className="w-40 flex-shrink-0">
                          <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded-lg" />
                          <h3 className="mt-2 font-semibold">{product.name}</h3>
                          <div className="flex items-center mt-1">
                            <span className="text-lg font-bold">${product.price}</span>
                            <span className="ml-2 text-sm line-through text-gray-500">${product.oldPrice}</span>
                            <span className="ml-2 text-xs bg-red-500 text-white px-1 rounded">-{product.discount}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          <footer className="mt-8 bg-gray-100 p-4">
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-800" aria-label="Facebook">
                <Facebook />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800" aria-label="Instagram">
                <Instagram />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800" aria-label="Twitter">
                <Twitter />
              </a>
            </div>
          </footer>
        </CardContent>
      </Card>
    </div>
  )
}