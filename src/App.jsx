import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Wrench, ShieldAlert, Cpu, Truck, MapPin, Phone, ArrowRight, Settings, Clock, ChevronRight, CheckCircle2, Award, Zap } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import mechanicImage from './assets/image.png';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const FadeIn = ({ children, delay = 0, className = "", direction = "up" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...directions[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...directions[direction] }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// --- Navbar ---
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 w-full z-50 px-6 transition-all duration-300 border-b",
        scrolled
          ? "bg-white/95 backdrop-blur-lg border-ak-light-grey shadow-sm py-4"
          : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="container mx-auto flex justify-between items-center text-ak-dark-grey">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="text-4xl font-display font-bold italic tracking-tighter text-ak-red">AK</div>
          <div className="text-3xl font-display font-medium tracking-tight mt-1">MOTORS</div>
        </div>

        <div className="hidden md:flex gap-10 items-center">
          {["Home", "About", "Services", "Gallery", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-display text-xl uppercase text-ak-grey hover:text-ak-red transition-all duration-300 relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-ak-red transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a href="#contact" className="border-2 border-ak-red text-ak-red hover:bg-ak-red hover:text-white px-6 py-2 font-display text-xl uppercase tracking-wider transition-all duration-300 shadow-sm hover:shadow-md">
            Call HQ
          </a>
        </div>

        <button aria-label="Toggle Menu" className="md:hidden text-ak-red">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </motion.nav>
  );
};

// --- Hero Section ---
const Hero = () => {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-ak-white pt-24 md:pt-0">

      {/* Background Graphic Elements */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-ak-light-grey/30 skew-x-[-15deg] translate-x-32 hidden lg:block z-0"></div>
      <div className="absolute -left-20 top-1/2 w-[600px] h-[600px] bg-ak-red/5 rounded-full blur-[100px] z-0"></div>

      <div className="container relative z-10 px-6 mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="max-w-2xl flex-1 mt-10 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-12 h-1 bg-ak-red"></div>
            <span className="font-accent text-ak-grey tracking-[0.2em] uppercase text-sm font-bold">Premium Heavy Duty Service</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl md:text-8xl font-display font-bold leading-[0.85] text-ak-dark-grey tracking-tight mb-8"
          >
            NOTHING <br />
            <span className="text-ak-red">STOPS</span> US.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-ak-grey font-sans font-normal mb-10 max-w-xl border-l-4 border-ak-red pl-6 leading-relaxed"
          >
            Elite commercial truck diagnostics, complete fleet maintenance, and 24/7 rapid-response emergency repair services stationed right here in Cumbum.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <a href="#contact" className="btn-primary group flex justify-center items-center gap-2">
              <span>Deploy Mechanic</span>
              <Settings className="w-5 h-5 group-hover:rotate-180 transition-transform duration-700" />
            </a>
            <a href="#about" className="bg-white border-2 border-ak-mid-grey text-ak-dark-grey font-accent font-bold uppercase tracking-wider py-4 px-10 hover:border-ak-dark-grey hover:bg-ak-light-grey/50 transition-all duration-300 flex justify-center items-center gap-2">
              <span>Learn More</span>
              <ChevronRight className="w-5 h-5 text-ak-red" />
            </a>
          </motion.div>
        </div>

        {/* 3D Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, type: "spring" }}
          className="flex-1 relative z-10 flex justify-center items-center w-full max-w-3xl"
        >
          {/* Red glowing backdrop for the truck */}
          <div className="absolute inset-0 bg-ak-red/10 rounded-full blur-[80px] z-0"></div>
          <motion.img
            animate={{ y: [-15, 15, -15] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            style={{ willChange: "transform" }}
            src="/hero_truck.png"
            alt="3D Heavy Commercial Truck"
            fetchpriority="high"
            decoding="async"
            className="w-full h-auto object-contain drop-shadow-2xl z-10 relative scale-110 md:scale-125 lg:scale-150 origin-bottom right-0 lg:-right-10"
          />
        </motion.div>
      </div>
    </section>
  );
};

// --- Brand Marquee ---
const BrandMarquee = () => {
  const brands = ["ASHOK LEYLAND", "BHARATBENZ", "TATA", "MAHINDRA", "EICHER"];
  const duplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <div className="bg-ak-light-grey/50 py-8 border-y border-ak-mid-grey/40 relative overflow-hidden flex shadow-inner">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-ak-white to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-ak-white to-transparent z-10" />

      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{ willChange: "transform" }}
        className="flex whitespace-nowrap items-center gap-16 md:gap-32 px-10"
      >
        {duplicatedBrands.map((brand, idx) => (
          <div key={idx} className="flex items-center gap-16 md:gap-32">
            <span className="text-4xl md:text-5xl font-display font-bold text-ak-grey hover:text-ak-red transition-colors duration-300">
              {brand}
            </span>
            <span className="text-ak-red/30">✦</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

// --- About & Content Expansion ---
const About = () => {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          <FadeIn direction="right" className="flex-1 relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-ak-light-grey rounded-lg z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-ak-red/20 rounded-lg z-0"></div>
            <img
              src={mechanicImage}
              alt="Mechanic working on engine" 
              loading="lazy" 
              decoding="async" 
              className="w-full h-auto aspect-[4/3] object-cover relative z-10 rounded-sm shadow-xl grayscale hover:grayscale-0 transition-all duration-700" />

            <div className="absolute bottom-5 right-5 bg-ak-red text-white p-6 z-20 shadow-2xl">
              <div className="text-5xl font-display font-bold leading-none">15+</div>
              <div className="text-sm font-sans uppercase font-bold tracking-widest mt-2">Years of Elite<br />Experience</div>
            </div>
          </FadeIn>

          <FadeIn direction="left" className="flex-1">
            <h2 className="text-5xl md:text-6xl font-display font-bold leading-none mb-6 text-ak-dark-grey">
              THE GOLD STANDARD IN <br /><span className="text-ak-red">COMMERCIAL FLEETS.</span>
            </h2>
            <div className="w-20 h-1.5 bg-ak-red mb-8"></div>
            <p className="text-ak-grey text-lg font-sans mb-6 leading-relaxed">
              At AK Motors, we understand that downtime means lost revenue. Our facility is engineered to provide the fastest, most reliable commercial truck mechanic services in the Cumbum region.
            </p>
            <p className="text-ak-grey text-lg font-sans mb-10 leading-relaxed">
              From minor preventative maintenance to complete engine overhauls, our certified mechanics utilize factory-grade diagnostic software and heavy-duty machinery to get your assets back on the road.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-ak-red/10 p-3 rounded-full text-ak-red mt-1">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-display font-bold mb-1">Certified Experts</h4>
                  <p className="text-sm text-ak-grey font-sans">Factory trained technicians for all modern setups.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-ak-red/10 p-3 rounded-full text-ak-red mt-1">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-display font-bold mb-1">Rapid Turnaround</h4>
                  <p className="text-sm text-ak-grey font-sans">Priority lane servicing for emergency roadside fleets.</p>
                </div>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  )
}

// --- Services Grid ---
const Services = () => {
  const services = [
    {
      icon: <Cpu className="w-10 h-10" />,
      title: "Engine Overhaul",
      description: "Complete tear-down, inspection, and rebuilding of heavy-duty engines to factory specifications."
    },
    {
      icon: <ShieldAlert className="w-10 h-10" />,
      title: "Computer Diagnostics",
      description: "Advanced ECUs, ABS, and fuel injection tracking using cutting-edge OEM software."
    },
    {
      icon: <Settings className="w-10 h-10" />,
      title: "Drivetrain & Transmission",
      description: "Clutch replacements and differential repairs for maximum payload hauling efficiency."
    },
    {
      icon: <Truck className="w-10 h-10" />,
      title: "Fleet Maintenance",
      description: "Scheduled checkups, fluid dynamics, and structural inspections for entire logistical fleets."
    }
  ];

  return (
    <section id="services" className="py-24 relative z-10 bg-ak-light-grey/30 border-y border-ak-mid-grey/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-5xl md:text-7xl font-display font-bold leading-none text-ak-dark-grey">
              OUR <span className="text-ak-red">ARSENAL</span>
            </h2>
            <div className="w-24 h-1.5 bg-ak-red mt-6 mx-auto"></div>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, idx) => (
            <FadeIn key={idx} delay={idx * 0.1} direction="up" className="h-full">
              <div className="group relative p-8 h-full overflow-hidden bg-white border border-ak-mid-grey/40 hover:border-ak-red hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="absolute -right-4 -bottom-10 text-[120px] font-display font-bold text-ak-light-grey/50 select-none pointer-events-none group-hover:text-ak-light-grey group-hover:-translate-y-4 transition-all duration-500">
                  0{idx + 1}
                </div>

                <div className="mb-6 p-4 inline-block bg-ak-light-grey text-ak-grey group-hover:bg-ak-red group-hover:text-white transform transition-all duration-500">
                  {svc.icon}
                </div>

                <h3 className="text-2xl font-display font-bold mb-3 tracking-wide text-ak-dark-grey">
                  {svc.title}
                </h3>
                <p className="text-ak-grey font-sans leading-relaxed text-base relative z-10 mb-6">
                  {svc.description}
                </p>

                <div className="absolute bottom-0 left-0 w-0 h-1 bg-ak-red transition-all duration-500 ease-out group-hover:w-full"></div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Gallery Section ---
const Gallery = () => {
  const images = [
    new URL('./assets/6.png', import.meta.url).href,
    new URL('./assets/1.png', import.meta.url).href,
    new URL('./assets/2.png', import.meta.url).href,
    new URL('./assets/3.png', import.meta.url).href,
    new URL('./assets/4.png', import.meta.url).href,
    new URL('./assets/5.jpeg', import.meta.url).href
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <FadeIn>
            <h2 className="text-5xl md:text-6xl font-display font-bold leading-none text-ak-dark-grey">
              THE <span className="text-ak-red">FRONTLINE</span>
            </h2>
            <div className="w-24 h-1.5 bg-ak-red mt-6"></div>
          </FadeIn>
          <FadeIn delay={0.2} className="mt-6 md:mt-0 max-w-lg">
            <p className="text-ak-grey font-sans text-lg border-l-4 border-ak-red pl-4">
              A glimpse into our facility, our heavy equipment, and the dedicated professionals keeping your fleet operational.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          {images.map((img, idx) => (
            <FadeIn key={idx} delay={idx * 0.1} className="group relative aspect-square overflow-hidden bg-ak-light-grey">
              <img
                src={img}
                alt={`Gallery visual representation ${idx + 1}`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ak-dark-grey/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="w-full">
                  <div className="w-10 h-1 bg-ak-red mb-2"></div>
                  <h4 className="text-white font-display text-2xl uppercase">AK Motors Facility</h4>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Contact / HQ Section ---
const Contact = () => {
  return (
    <section id="contact" className="relative py-24 bg-ak-dark-grey text-white overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[400px] font-display font-bold text-white/[0.03] select-none pointer-events-none leading-none">
        HQ
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          <div>
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-ak-red/20 border border-ak-red/40 text-ak-red font-accent text-sm tracking-widest uppercase mb-6">
                <span className="w-2 h-2 rounded-full bg-ak-red animate-pulse"></span> Open for business
              </div>
              <h2 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] mb-8 text-white">
                REPORT TO <br /><span className="text-ak-red">THE GARAGE.</span>
              </h2>
              <p className="text-ak-mid-grey text-xl mb-12 max-w-md font-sans">
                Bring your rigs to our facility or request our mobile unit. We ensure your assets stay on the road moving freight.
              </p>
            </FadeIn>

            <div className="space-y-8">
              <FadeIn delay={0.2}>
                <div className="flex items-start gap-6 group">
                  <div className="w-16 h-16 bg-white/5 border border-white/10 flex items-center justify-center text-ak-red group-hover:bg-ak-red group-hover:text-white transition-colors duration-300">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="text-sm font-sans text-ak-mid-grey/60 uppercase tracking-widest mb-1">Dispatch Core Line</h4>
                    <div className="text-3xl font-display font-medium text-white group-hover:text-ak-red transition-colors">9788111666</div>
                    <div className="text-xl font-display font-medium text-ak-mid-grey">9895550038 <span className="px-2">|</span> 9080120557</div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="flex items-start gap-6 group">
                  <div className="w-16 h-16 bg-white/5 border border-white/10 flex items-center justify-center text-ak-red group-hover:bg-ak-red group-hover:text-white transition-colors duration-300">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="text-sm font-sans text-ak-mid-grey/60 uppercase tracking-widest mb-1">Coordinates</h4>
                    <div className="text-3xl font-display font-medium text-white group-hover:text-ak-red transition-colors">C.Puthupatti</div>
                    <div className="text-xl font-display font-medium text-ak-mid-grey">Cumbum Region</div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="flex items-start gap-6 group">
                  <div className="w-16 h-16 bg-white/5 border border-white/10 flex items-center justify-center text-ak-red group-hover:bg-ak-red group-hover:text-white transition-colors duration-300">
                    <Clock size={28} />
                  </div>
                  <div>
                    <h4 className="text-sm font-sans text-ak-mid-grey/60 uppercase tracking-widest mb-1">Hours of Operation</h4>
                    <div className="text-3xl font-display font-medium text-white group-hover:text-ak-red transition-colors">24/7 Availability</div>
                    <div className="text-xl font-display font-medium text-ak-mid-grey">Emergency Roadside Unit Active</div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          <FadeIn delay={0.4} direction="left" className="h-full">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 h-full flex flex-col justify-center relative shadow-2xl">
              <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-ak-red"></div>
              <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-ak-red"></div>

              <h3 className="text-3xl font-display font-bold mb-8 text-white">TRANSMIT REQUEST</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="fleetName" className="block text-xs font-accent text-ak-mid-grey uppercase tracking-widest mb-2">Fleet / Company Name</label>
                  <input id="fleetName" type="text" className="w-full bg-white/5 border-b-2 border-white/10 px-4 py-4 text-white focus:outline-none focus:border-ak-red focus:bg-white/10 transition-all font-sans" placeholder="Enter identification" />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="truckMake" className="block text-xs font-accent text-ak-mid-grey uppercase tracking-widest mb-2">Truck Make</label>
                    <select id="truckMake" className="w-full bg-white/5 border-b-2 border-white/10 px-4 py-4 text-white/80 focus:text-white focus:outline-none focus:border-ak-red appearance-none cursor-pointer">
                      <option>Ashok Leyland</option>
                      <option>BharatBenz</option>
                      <option>TATA</option>
                      <option>Mahindra</option>
                      <option>Eicher</option>
                      <option>Other Models</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="contactPhone" className="block text-xs font-accent text-ak-mid-grey uppercase tracking-widest mb-2">Contact Number</label>
                    <input id="contactPhone" type="tel" className="w-full bg-white/5 border-b-2 border-white/10 px-4 py-4 text-white focus:outline-none focus:border-ak-red transition-all font-sans" placeholder="Phone" />
                  </div>
                </div>
                <div>
                  <label htmlFor="diagnosticIssue" className="block text-xs font-accent text-ak-mid-grey uppercase tracking-widest mb-2">Diagnostic Data / Issue</label>
                  <textarea id="diagnosticIssue" rows={4} className="w-full bg-white/5 border-b-2 border-white/10 px-4 py-4 text-white focus:outline-none focus:border-ak-red transition-all font-sans resize-none" placeholder="Describe the mechanical failure..."></textarea>
                </div>
                <button type="button" className="btn-primary w-full mt-4 !py-5">
                  Engage Protocol
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Dummy Map */}
      <div className="container mx-auto px-6 mt-24 relative z-10">
        <a
          href="https://maps.app.goo.gl/oTgKv1ioLkq9jTZaA"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full h-[350px] relative group overflow-hidden border-2 border-white/10"
        >
          <iframe
            title="AK Motors Location Map"
            loading="lazy"
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://www.openstreetmap.org/export/embed.html?bbox=77.22%2C9.70%2C77.30%2C9.78&amp;layer=mapnik&amp;marker=9.74%2C77.27"
            style={{ filter: "grayscale(100%) opacity(0.5)", pointerEvents: "none" }}
            className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-70"
          ></iframe>

          <div className="absolute inset-0 bg-ak-dark-grey/10 group-hover:bg-transparent transition-all duration-500 z-10"></div>

          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="w-24 h-24 bg-ak-red/20 rounded-full flex items-center justify-center animate-pulse">
              <div className="w-14 h-14 bg-ak-red rounded-full flex items-center justify-center text-white shadow-2xl">
                <MapPin size={28} />
              </div>
            </div>
          </div>

          <div className="absolute bottom-6 left-6 bg-ak-dark-grey border border-white/10 px-8 py-4 text-white font-sans text-sm uppercase tracking-widest group-hover:bg-ak-red transition-colors duration-300 z-30">
            <span className="flex items-center gap-3 font-bold">AK Motors, Cumbum HQ <ArrowRight size={18} /></span>
          </div>
        </a>
      </div>
    </section>
  );
};

// --- Footer ---
const Footer = () => (
  <footer className="bg-[#05080f] py-10 border-t-[6px] border-ak-red">
    <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex items-center gap-2 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all">
        <div className="text-4xl font-display font-bold italic tracking-tighter text-ak-red">AK</div>
        <div className="text-3xl font-display font-medium tracking-tight text-white mt-1">MOTORS</div>
      </div>
      <p className="font-sans text-ak-mid-grey text-sm font-medium uppercase tracking-widest text-center md:text-left">
        © 2026 AK Motors Commercial Truck Mechanics. All rights reserved.
      </p>
      <div className="flex gap-4">
        <p className="font-sans text-ak-mid-grey text-sm font-medium uppercase tracking-widest text-center md:text-right">
          Designed by <span className="text-ak-red font-bold">Navi Promotions</span>
        </p>
      </div>
    </div>
  </footer>
);

// --- Main App ---
export default function App() {
  return (
    <div className="relative bg-ak-white min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <BrandMarquee />
        <About />
        <Services />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}