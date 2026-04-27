import { useState } from 'react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import {
  Clock, Sparkles, MapPin, Phone, Mail, Gift, Menu, X,
  Wifi, AirVent, Tv, Coffee, Car, Shield, Star, Heart,
  MessageCircle, Navigation, Bus, Train, Instagram, Facebook, Image
} from 'lucide-react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from './components/ui/dialog';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './components/ui/sheet';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './components/ui/accordion';
import imageEspecial from '../imports/image-3.png';
import imageSuite from '../imports/image-4.png';
import imageHidro from '../imports/image-2.png';
import imagePromos from '../imports/image-1.png';
import logo from '../assets/logo.png';

const whatsappNumber = '5491100000000';

const whatsappLink = (message: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

// Room data with amenities
const rooms = [
  {
    id: 'especial',
    name: 'Habitación Especial',
    image: imageEspecial,
    description: 'Ideal para momentos íntimos. Equipada con todo lo necesario para tu comodidad.',
    amenities: ['Aire acondicionado', 'TV Cable', 'Wi-Fi', 'Minibar', 'Baño privado'],
    prices: {
      twoHours: '$27.000',
      pernocteWeek: '$35.000',
      pernocteWeekend: '$45.000',
      pernocteWeekendLate: '$35.000'
    }
  },
  {
    id: 'suite',
    name: 'Habitación Suite',
    image: imageSuite,
    description: 'Espacio premium con acabados de lujo para una experiencia inolvidable.',
    amenities: ['Aire acondicionado', 'TV Cable', 'Wi-Fi', 'Minibar', 'Jacuzzi', 'Room Service'],
    prices: {
      twoHours: '$30.000',
      pernocteWeek: '$37.000',
      pernocteWeekend: '$47.000',
      pernocteWeekendLate: '$37.000'
    }
  },
  {
    id: 'hidro',
    name: 'Habitación Hidro',
    image: imageHidro,
    description: 'La experiencia definitiva con hidromasaje para relajarte por completo.',
    amenities: ['Aire acondicionado', 'TV Cable', 'Wi-Fi', 'Minibar', 'Hidromasaje', 'Aromaterapia'],
    prices: {
      twoHours: '$33.000',
      pernocteWeek: null,
      pernocteWeekend: null,
      pernocteWeekendLate: null
    }
  }
];

const menuItems = {
  bebidas: [
    { name: 'Agua mineral', price: '$2.500' },
    { name: 'Gaseosas', price: '$3.000' },
    { name: 'Cerveza', price: '$4.500' },
    { name: 'Vino malbec', price: '$8.000' },
    { name: 'Champagne', price: '$15.000' },
    { name: 'Whisky', price: '$6.000' },
    { name: 'Fernet con coca', price: '$5.500' },
    { name: 'Café espresso', price: '$2.000' },
  ],
  comidas: [
    { name: 'Tabla de fiambres y quesos', price: '$12.000' },
    { name: 'Sándwich de miga', price: '$4.500' },
    { name: 'Empanadas (unidad)', price: '$2.000' },
    { name: 'Papitas fritas', price: '$3.000' },
    { name: 'Chocolate', price: '$2.500' },
  ],
  promociones: [
    { name: 'Botella de champagne + 2 copas', price: '$18.000' },
    { name: 'Combo romántico (chocolate + champagne)', price: '$20.000' },
  ]
};

const reviews = [
  {
    name: 'Agustín Videla',
    initials: 'AV',
    rating: 5,
    text: 'Un lugar increíble. El ambiente es cálido, la habitación estaba impecablemente limpia y la discreción del personal es total. Se nota que cuidan cada detalle. Definitivamente volvería sin dudarlo.',
    source: 'Google Maps',
    verified: true
  },
  {
    name: 'Nicolás González',
    initials: 'NG',
    rating: 5,
    text: 'Entorno seguro, limpio y muy cómodo. La atención es excelente y te hacen sentir en confianza desde el primer momento. El hotel tiene una onda muy especial, diferente a cualquier otro lugar. 100% recomendable.',
    source: 'Google Maps',
    verified: true
  }
];

const faqs = [
  {
    question: '¿Cómo funcionan los turnos?',
    answer: 'Los turnos de 2 horas te permiten disfrutar de nuestras habitaciones con total privacidad. Podés ingresar en el horario reservado y el tiempo comienza desde ese momento.'
  },
  {
    question: '¿Se puede reservar online?',
    answer: 'Sí, podés hacer tu reserva completando el formulario en esta página o contactándonos directamente por WhatsApp para confirmar disponibilidad en tiempo real.'
  },
  {
    question: '¿Aceptan efectivo y tarjetas?',
    answer: 'Aceptamos efectivo, tarjetas de débito y crédito. También podés pagar por transferencia bancaria consultando previamente.'
  },
  {
    question: '¿Qué incluye cada habitación?',
    answer: 'Todas nuestras habitaciones incluyen: TV LED con cable, Wi-Fi, aire acondicionado, música ambiental, iluminación LED personalizable, frigobar, baño privado con amenities, y máxima discreción.'
  },
  {
    question: '¿Cómo funciona la promo de cumpleaños?',
    answer: 'Presentando tu DNI el día de tu cumpleaños, obtenés un 50% de descuento en cualquier tipo de habitación, tanto para turnos como para pernocte. ¡Es nuestro regalo para vos!'
  },
  {
    question: '¿Hay pernocte?',
    answer: 'Sí, ofrecemos pernocte de domingo a jueves de 22 a 12hs. Los viernes, sábados y vísperas de feriados tenemos horarios especiales de 00 a 10hs o de 02 a 10hs.'
  },
  {
    question: '¿Se puede pedir room service?',
    answer: 'Sí, tenemos un menú completo de bebidas, snacks y amenities que podés solicitar desde tu habitación. Consultá nuestra sección de Menú para ver todas las opciones disponibles.'
  }
];

// Gallery images
const galleryImages = [
  { src: imageEspecial, alt: 'Habitación Especial' },
  { src: imageSuite, alt: 'Habitación Suite' },
  { src: imageHidro, alt: 'Habitación Hidro' },
  { src: imagePromos, alt: 'Promociones' },
  { src: 'https://images.unsplash.com/photo-1590490360172-c330f4550f6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800', alt: 'Ambiente' },
  { src: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800', alt: 'Detalle' },
];

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#habitaciones', label: 'Habitaciones' },
  { href: '#galeria', label: 'Galería' },
  { href: '#pernocte', label: 'Pernocte' },
  { href: '#ofertas', label: 'Ofertas' },
  { href: '#menu', label: 'Menú' },
  { href: '#resenas', label: 'Reseñas' },
  { href: '#faq', label: 'Preguntas' },
  { href: '#ubicacion', label: 'Ubicación' },
];

// Star field background component
const StarField = () => (
  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
    {[...Array(50)].map((_, i) => (
      <div
        key={i}
        className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 4}s`,
          animationDuration: `${2 + Math.random() * 3}s`,
          opacity: Math.random() * 0.7 + 0.3
        }}
      />
    ))}
  </div>
);

export default function App() {
  const [selectedRoom, setSelectedRoom] = useState<typeof rooms[0] | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll for navbar background
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 50);
    });
  }

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="size-full min-h-screen bg-background text-white relative">
      {/* Star field background - fixed behind all content */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {[...Array(80)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              opacity: Math.random() * 0.7 + 0.3
            }}
          />
        ))}
      </div>

      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#030213]/95 backdrop-blur-sm border-b border-white/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#inicio">
              <img src={logo} alt="Majical Hotel" className="h-10 w-auto object-contain" />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white/70 hover:text-white text-sm tracking-wide transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Button
                variant="default"
                className="bg-green-600 hover:bg-green-700 text-white"
                onClick={() => window.open(whatsappLink('Hola! Quiero reservar una habitación'), '_blank')}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Reservar por WhatsApp
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden text-white">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#030213] border-l border-white/10">
                <SheetHeader>
                  <SheetTitle className="text-white tracking-[0.2em] uppercase">
                    Majical Hotel
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-white/70 hover:text-white text-lg tracking-wide transition-colors py-2"
                    >
                      {link.label}
                    </a>
                  ))}
                  <Button
                    variant="default"
                    className="bg-green-600 hover:bg-green-700 text-white mt-4"
                    onClick={() => window.open(whatsappLink('Hola! Quiero reservar una habitación'), '_blank')}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Reservar por WhatsApp
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1709409903008-fbc1ce9b7dfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Hotel ambiente"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030213]/60 via-[#030213]/40 to-[#030213]"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl">
          <h1 className="text-[clamp(1.75rem,4vw,3.5rem)] tracking-wider text-white mb-4 sm:mb-6 font-light leading-tight">
            No prometemos amor eterno...<br className="hidden sm:block" />
            <span className="text-white/80">pero sí unas horas inolvidables</span>
          </h1>
          <p className="text-[clamp(1rem,2.5vw,1.25rem)] text-white/70 tracking-[0.15em] uppercase mb-8 sm:mb-12 font-light px-2">
            La excusa perfecta para desaparecer unas horas..
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
            <Button
              size="lg"
              className="bg-white text-[#030213] hover:bg-white/90 uppercase tracking-[0.1em] px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base w-full sm:w-auto"
              onClick={() => window.open(whatsappLink('Hola! Quiero consultar disponibilidad'), '_blank')}
            >
              Consultar disponibilidad
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 uppercase tracking-[0.1em] px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base w-full sm:w-auto"
              onClick={() => scrollToSection('#habitaciones')}
            >
              Ver habitaciones
            </Button>
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 z-5 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </section>

      {/* Habitaciones Section */}
      <section id="habitaciones" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] text-white text-center mb-6 tracking-[0.15em] uppercase font-light">
            Habitaciones
          </h2>
          <p className="text-white/60 text-center max-w-2xl mx-auto mb-16">
            Espacios diseñados para la intimidad y el confort
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <Card key={room.id} className="bg-background border-white/10 overflow-hidden group">
                <CardHeader className="p-0">
                  <div className="overflow-hidden">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <CardTitle className="text-white text-xl tracking-[0.15em] uppercase font-light">
                    {room.name}
                  </CardTitle>
                  <CardDescription className="text-white/60">
                    {room.description}
                  </CardDescription>

                  {/* Amenities Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {room.amenities.slice(0, 4).map((amenity) => (
                      <Badge
                        key={amenity}
                        variant="outline"
                        className="border-white/20 text-white/70 text-xs"
                      >
                        {amenity}
                      </Badge>
                    ))}
                    {room.amenities.length > 4 && (
                      <Badge variant="outline" className="border-white/20 text-white/70 text-xs">
                        +{room.amenities.length - 4}
                      </Badge>
                    )}
                  </div>

                  {/* Prices */}
                  <div className="pt-4 border-t border-white/10">
                    <div className="flex justify-between py-2">
                      <span className="text-white/70">2 Horas</span>
                      <span className="text-white font-medium">{room.prices.twoHours}</span>
                    </div>
                    {room.prices.pernocteWeek && (
                      <>
                        <div className="flex justify-between py-2">
                          <span className="text-white/70 text-sm">Pernocte Dom-Jue</span>
                          <span className="text-white font-medium">{room.prices.pernocteWeek}</span>
                        </div>
                        <div className="flex justify-between py-2">
                          <span className="text-white/70 text-sm">Fin de semana</span>
                          <span className="text-white font-medium">{room.prices.pernocteWeekend}</span>
                        </div>
                      </>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex flex-col gap-3">
                  <Button
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                    onClick={() => window.open(whatsappLink(`Hola! Quiero reservar la ${room.name}`), '_blank')}
                  >
                    Reservar ahora
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-white/20 text-white hover:bg-white/10"
                    onClick={() => setSelectedRoom(room)}
                  >
                    Más información
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center text-white/50 text-sm mt-12">
            <p>Fines de semana: Viernes, Sábado y víspera de feriados</p>
          </div>
        </div>
      </section>

      {/* Room Detail Dialog */}
      <Dialog open={!!selectedRoom} onOpenChange={() => setSelectedRoom(null)}>
        <DialogContent className="bg-background border-white/10 max-w-2xl">
          {selectedRoom && (
            <>
              <DialogHeader>
                <DialogTitle className="text-white text-2xl tracking-[0.15em] uppercase">
                  {selectedRoom.name}
                </DialogTitle>
                <DialogDescription className="text-white/60">
                  {selectedRoom.description}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6">
                <img
                  src={selectedRoom.image}
                  alt={selectedRoom.name}
                  className="w-full h-64 object-cover rounded"
                />

                <div>
                  <h4 className="text-white tracking-wide mb-3">Comodidades</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedRoom.amenities.map((amenity) => (
                      <Badge
                        key={amenity}
                        variant="secondary"
                        className="bg-white/10 text-white"
                      >
                        {amenity}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-white tracking-wide mb-3">Precios</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between py-2 border-b border-white/10">
                      <span className="text-white/70">2 Horas</span>
                      <span className="text-white font-medium">{selectedRoom.prices.twoHours}</span>
                    </div>
                    {selectedRoom.prices.pernocteWeek && (
                      <>
                        <div className="flex justify-between py-2 border-b border-white/10">
                          <span className="text-white/70">Pernocte Dom-Jue (22-12hs)</span>
                          <span className="text-white font-medium">{selectedRoom.prices.pernocteWeek}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-white/10">
                          <span className="text-white/70">Fin de semana (00-10hs)</span>
                          <span className="text-white font-medium">{selectedRoom.prices.pernocteWeekend}</span>
                        </div>
                        <div className="flex justify-between py-2">
                          <span className="text-white/70">Fin de semana (02-10hs)</span>
                          <span className="text-white font-medium">{selectedRoom.prices.pernocteWeekendLate}</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <DialogFooter>
                <Button
                  className="bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => window.open(whatsappLink(`Hola! Quiero reservar la ${selectedRoom.name}`), '_blank')}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Reservar por WhatsApp
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Galería Section */}
      <section id="galeria" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Image className="w-8 h-8 text-white/80" />
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] text-white tracking-[0.15em] uppercase font-light">
              Galería
            </h2>
          </div>
          <p className="text-white/60 text-center max-w-2xl mx-auto mb-16">
            Conocé nuestros espacios y comodidades
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg cursor-pointer border border-white/20"
              >
                <div className="w-full h-64 bg-white/5" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pernocte Section */}
      <section id="pernocte" className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Coffee className="w-8 h-8 text-white/80" />
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] text-white tracking-[0.15em] uppercase font-light">
              Pernocte
            </h2>
          </div>
          <p className="text-white/80 text-lg mb-4 max-w-2xl mx-auto">
            Quedáte toda la noche. Despertáte sin apuros, en un ambiente cálido y privado.
          </p>
          <p className="text-white/60 mb-12">
            ☕ Incluye desayuno hasta las 09:15 hs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-background border-white/10">
              <CardContent className="p-8 text-center">
                <h3 className="text-white text-xl tracking-[0.15em] uppercase mb-2 font-light">
                  Semana
                </h3>
                <p className="text-white/60 mb-4">Domingo a Jueves</p>
                <div className="text-3xl text-white font-light">
                  desde <span className="font-medium">$35.000</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background border-white/10">
              <CardContent className="p-8 text-center">
                <h3 className="text-white text-xl tracking-[0.15em] uppercase mb-2 font-light">
                  Fin de semana
                </h3>
                <p className="text-white/60 mb-4">Viernes y Sábados</p>
                <div className="text-3xl text-white font-light">
                  desde <span className="font-medium">$35.000</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <Button
              className="bg-green-600 hover:bg-green-700 text-white uppercase tracking-[0.15em]"
              onClick={() => window.open(whatsappLink('Hola! Quiero consultar pernocte'), '_blank')}
            >
              Consultar disponibilidad
            </Button>
          </div>
        </div>
      </section>

      {/* Ofertas Especiales Section */}
      <section id="ofertas" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] text-white text-center mb-6 tracking-[0.15em] uppercase font-light">
            Ofertas Especiales
          </h2>
          <p className="text-white/60 text-center max-w-2xl mx-auto mb-16">
            Promociones exclusivas para momentos únicos
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Cumpleañeros */}
            <Card className="bg-background border-white/10">
              <CardHeader className="text-center">
                <Gift className="w-12 h-12 text-white/80 mx-auto mb-4" />
                <CardTitle className="text-white text-xl tracking-[0.15em] uppercase font-light">
                  ¡Cumpleañeros!
                </CardTitle>
                <CardDescription className="text-white/70 text-lg">
                  50% DE DESCUENTO
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-white/60">
                  Presentá tu DNI en tu cumpleaños y obtené 50% de descuento en cualquier habitación
                </p>
              </CardContent>
              <CardFooter className="justify-center">
                <Button
                  className="bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => window.open(whatsappLink('Hola! Quiero reservar con descuento de cumpleaños'), '_blank')}
                >
                  Reservar ahora
                </Button>
              </CardFooter>
            </Card>

            {/* Early Bird */}
            <Card className="bg-background border-white/10">
              <CardHeader className="text-center">
                <Sparkles className="w-12 h-12 text-white/80 mx-auto mb-4" />
                <CardTitle className="text-white text-xl tracking-[0.15em] uppercase font-light">
                  Early Bird
                </CardTitle>
                <CardDescription className="text-white/70 text-lg">
                  20% OFF reservas anticipadas
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-white/60">
                  Reservá con 48hs de anticipación y obtené 20% de descuento en pernocte
                </p>
              </CardContent>
              <CardFooter className="justify-center">
                <Button
                  className="bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => window.open(whatsappLink('Hola! Quiero reservar con descuento Early Bird'), '_blank')}
                >
                  Reservar ahora
                </Button>
              </CardFooter>
            </Card>

            {/* Romance Package */}
            <Card className="bg-background border-white/10">
              <CardHeader className="text-center">
                <Heart className="w-12 h-12 text-white/80 mx-auto mb-4" />
                <CardTitle className="text-white text-xl tracking-[0.15em] uppercase font-light">
                  Pack Romántico
                </CardTitle>
                <CardDescription className="text-white/70 text-lg">
                  Champagne + Chocolate
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-white/60">
                  Incluí champagne y chocolate para una experiencia inolvidable
                </p>
              </CardContent>
              <CardFooter className="justify-center">
                <Button
                  className="bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => window.open(whatsappLink('Hola! Quiero el Pack Romántico'), '_blank')}
                >
                  Reservar ahora
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Menú Section */}
      <section id="menu" className="py-24 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] text-white text-center mb-6 tracking-[0.15em] uppercase font-light">
            Menú
          </h2>
          <p className="text-white/60 text-center max-w-2xl mx-auto mb-16">
            Bebidas y snacks para complementar tu estadía
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Bebidas */}
            <div>
              <h3 className="text-white text-xl tracking-[0.15em] uppercase mb-6 font-light border-b border-white/10 pb-4">
                Bebidas
              </h3>
              <div className="space-y-4">
                {menuItems.bebidas.map((item) => (
                  <div key={item.name} className="flex justify-between items-center">
                    <span className="text-white/80">{item.name}</span>
                    <span className="text-white font-medium">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Comidas */}
            <div>
              <h3 className="text-white text-xl tracking-[0.15em] uppercase mb-6 font-light border-b border-white/10 pb-4">
                Comidas
              </h3>
              <div className="space-y-4">
                {menuItems.comidas.map((item) => (
                  <div key={item.name} className="flex justify-between items-center">
                    <span className="text-white/80">{item.name}</span>
                    <span className="text-white font-medium">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Promociones */}
          <div className="mt-12 pt-12 border-t border-white/10">
            <h3 className="text-white text-xl tracking-[0.15em] uppercase mb-6 font-light">
              Promociones
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {menuItems.promociones.map((item) => (
                <Card key={item.name} className="bg-background border-white/10">
                  <CardContent className="p-4 flex justify-between items-center">
                    <span className="text-white/80">{item.name}</span>
                    <span className="text-white font-medium">{item.price}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reseñas Section */}
      <section id="resenas" className="py-24 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] text-white text-center mb-6 tracking-[0.15em] uppercase font-light">
            Lo que dicen nuestros huéspedes
          </h2>
          <p className="text-white/60 text-center max-w-2xl mx-auto mb-16">
            Experiencias reales de quienes nos visitaron
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((review) => (
              <Card key={review.name} className="bg-background border-white/10">
                <CardContent className="p-8">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>

                  {/* Review text */}
                  <p className="text-white/80 italic mb-6 leading-relaxed">
                    "{review.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white font-medium">
                      {review.initials}
                    </div>
                    <div>
                      <p className="text-white font-medium">{review.name}</p>
                      <p className="text-white/50 text-sm">
                        Reseña verificada · {review.source}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </section>

      {/* Preguntas Frecuentes Section */}
      <section id="faq" className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] text-white text-center mb-6 tracking-[0.15em] uppercase font-light">
            Preguntas Frecuentes
          </h2>
          <p className="text-white/60 text-center max-w-2xl mx-auto mb-16">
            Todo lo que necesitás saber antes de tu visita
          </p>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-white/10">
                <AccordionTrigger className="text-white hover:text-white/80 text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/70">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Ubicación Section */}
      <section id="ubicacion" className="py-24 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] text-white text-center mb-6 tracking-[0.15em] uppercase font-light">
            Ubicación
          </h2>
          <p className="text-white/60 text-center max-w-2xl mx-auto mb-16">
            En el corazón de Buenos Aires
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Map */}
            <div className="overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.8683892976753!2d-58.40176492428668!3d-34.60660047295771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca5f2e285355%3A0x6e6f8f8f8f8f8f8f!2sSan%20Jos%C3%A9%20435%2C%20C1076AAI%20CABA!5e0!3m2!1ses!2sar!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
            </div>

            {/* Info */}
            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start gap-4">
                <MapPin className="w-8 h-8 text-white/80 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-white/90 tracking-wider text-lg mb-2 font-medium">
                    Dirección
                  </h3>
                  <p className="text-white/70 text-lg">
                    San José 435<br />
                    Ciudad Autónoma de Buenos Aires
                  </p>
                </div>
              </div>

              {/* Transporte Público */}
              <div className="flex items-start gap-4">
                <Bus className="w-8 h-8 text-white/80 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-white/90 tracking-wider text-lg mb-3 font-medium">
                    Transporte Público
                  </h3>
                  <div className="space-y-4 text-white/70">
                    <div>
                      <h4 className="text-white/90 font-medium mb-2">Colectivos</h4>
                      <p className="text-sm mb-2">Líneas sobre Av. Belgrano (a 1 cuadra) y Av. Entre Ríos/Callao:</p>
                      <div className="flex flex-wrap gap-2">
                        {['2', '23', '39', '56', '60', '64', '86', '98', '102', '103', '105', '168'].map((line) => (
                          <span key={line} className="px-2 py-1 bg-green-600 text-white text-xs font-medium rounded">
                            {line}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white/90 font-medium mb-2">Subte</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <span className="px-2 py-1 bg-blue-600 text-white text-xs font-medium rounded">Línea A</span>
                          <span>Sáenz Peña (a 5 cuadras)</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="px-2 py-1 bg-red-600 text-white text-xs font-medium rounded">Línea C</span>
                          <span>Moreno (a 5 cuadras)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cochera */}
              <div className="flex items-start gap-4">
                <Car className="w-8 h-8 text-white/80 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-white/90 tracking-wider text-lg mb-2 font-medium">
                    Estacionamiento
                  </h3>
                  <p className="text-white/70">
                    🚗 Cochera Privada · Ingreso Discreto
                  </p>
                </div>
              </div>

              {/* Contacto */}
              <div className="flex items-start gap-4">
                <Phone className="w-8 h-8 text-white/80 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-white/90 tracking-wider text-lg mb-2 font-medium">
                    Atención
                  </h3>
                  <p className="text-white/70">
                    Atención las 24 horas · Todos los días
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              className="bg-green-600 hover:bg-green-700 text-white uppercase tracking-[0.15em] px-8 py-6"
              onClick={() => window.open(whatsappLink('Hola! Quiero saber cómo llegar'), '_blank')}
            >
              <Navigation className="w-4 h-4 mr-2" />
              Cómo llegar
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <h3 className="text-white text-lg tracking-[0.2em] uppercase mb-4 font-light">
                Majical Hotel
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Boutique hotel de citas en el corazón de Buenos Aires. Privacidad, confort y discreción garantizados.
              </p>
              <div className="flex items-center gap-2 mt-4 text-white/60 text-sm">
                <Car className="w-4 h-4" />
                <span>Cochera Privada · Ingreso Discreto</span>
              </div>
            </div>

            {/* Ubicación */}
            <div>
              <h4 className="text-white tracking-wider mb-4 font-medium">Ubicación</h4>
              <p className="text-white/60 text-sm">
                📍 San José 435<br />
                Ciudad Autónoma de Buenos Aires
              </p>
            </div>

            {/* Contacto */}
            <div>
              <h4 className="text-white tracking-wider mb-4 font-medium">Contacto</h4>
              <div className="space-y-2 text-white/60 text-sm">
                <p>📞 <a href={`tel:+541100000000`} className="hover:text-white">Consultá por WhatsApp</a></p>
                <p>Atención las 24 horas</p>
              </div>
            </div>

            {/* Redes */}
            <div>
              <h4 className="text-white tracking-wider mb-4 font-medium">Seguinos</h4>
              <div className="flex items-center gap-4">
                <a
                  href="https://instagram.com/hotelmajical"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://facebook.com/hotelmajical"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="tel:+541100000000"
                  className="text-white/60 hover:text-white transition-colors flex items-center gap-2"
                  aria-label="Llamar por teléfono"
                >
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-white/40 text-sm tracking-wide">
              © 2025 Majical Hotel · San José 435, CABA · Todos los derechos reservados
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappLink('Hola! Quiero información')}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center shadow-lg shadow-green-600/30 transition-all duration-300 hover:scale-110"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>
    </div>
  );
}
