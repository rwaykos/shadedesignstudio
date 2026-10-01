"use client";
import { useState } from "react";
import { FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { testimonials } from "./Data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";

export default function InteriorStudioWebsite() {
  const [submitted, setSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const projects = [
    {
      title: "Modern Luxury Apartment",
      category: "Residential",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "Contemporary Workspace",
      category: "Commercial",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "Minimal Villa Interior",
      category: "Luxury Villa",
      image:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1600&auto=format&fit=crop",
    },
  ];

  const services = [
    { title: "Residential Interiors", desc: "Bespoke living spaces tailored to your daily life and aesthetic preferences." },
    { title: "Commercial Design", desc: "Functional and impactful brand-first environments for offices and retail." },
    { title: "Space Planning", desc: "Optimized spatial layouts designed for seamless flow and maximum utility." },
    { title: "Custom Furniture", desc: "Handcrafted, unique furniture pieces designed specifically for your space." },
    { title: "Renovation & Styling", desc: "Full-scale interior transformations, art sourcing, and soft furnishing curation." },
  ];

  return (
    <div className="bg-[#F7F5F2] text-[#1F1F1F] min-h-screen font-sans scroll-smooth">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#F7F5F2]/80 backdrop-blur-md border-b border-black/5 transition-all">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img
              src="/shade-logo.png"
              alt="Shade Design Studio"
              className="h-12 w-auto object-contain"
            />
            <h1 className="text-lg md:text-xl font-semibold tracking-wide whitespace-nowrap">
              Shade Design Studio
            </h1>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-8 text-sm font-medium tracking-wide text-slate-800">
            <a href="#projects" className="hover:text-black hover:opacity-70 transition">Projects</a>
            <a href="#services" className="hover:text-black hover:opacity-70 transition">Services</a>
            <a href="#about" className="hover:text-black hover:opacity-70 transition">About</a>
            <a href="#contact" className="hover:text-black hover:opacity-70 transition">Contact</a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+919975597846"
              className="bg-[#1F5D42] text-white px-4 py-2 rounded-full text-xs font-semibold tracking-wider hover:bg-[#174832] transition inline-flex items-center gap-2"
            >
              <FaPhoneAlt size={12} />
              CALL
            </a>

            <a
              href="https://wa.me/919975597846?text=Hi%20Shade%20Design%20Studio,%20I%20want%20to%20book%20a%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-5 py-2 rounded-full text-xs font-semibold tracking-wider hover:bg-neutral-800 transition"
            >
              Book Consultation
            </a>
          </div>

          {/* Mobile Hamburger Icon */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-2xl text-slate-900"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#F7F5F2] border-b border-black/10 px-6 py-6 space-y-4">
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-lg font-medium text-slate-800"
            >
              Projects
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-lg font-medium text-slate-800"
            >
              Services
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-lg font-medium text-slate-800"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-lg font-medium text-slate-800"
            >
              Contact
            </a>
            <div className="pt-4 flex flex-col gap-3">
              <a
                href="tel:+919975597846"
                className="bg-[#1F5D42] text-white px-5 py-3 rounded-full text-sm text-center font-medium inline-flex items-center justify-center gap-2"
              >
                <FaPhoneAlt size={14} /> Call Us
              </a>
              <a
                href="https://wa.me/919975597846?text=Hi%20Shade%20Design%20Studio,%20I%20want%20to%20book%20a%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-5 py-3 rounded-full text-sm text-center font-medium"
              >
                Book Consultation
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1600&auto=format&fit=crop"
          alt="Luxury Interior"
          className="absolute inset-0 w-full h-full object-cover scale-105 animate-pulse-subtle"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white pt-16">
          <p className="uppercase tracking-[0.3em] text-xs md:text-sm font-semibold mb-4 text-white/80">
            Premium Interior Design Studio
          </p>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-light leading-tight max-w-4xl tracking-tight">
            Designing Spaces That Feel <span className="italic font-normal">Timeless</span>.
          </h2>

          <p className="mt-6 text-base sm:text-lg max-w-2xl text-white/80 leading-relaxed font-light">
            We craft modern residential and commercial interiors with a precise balance of luxury, functionality, and emotional connection.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="bg-white text-black px-7 py-3.5 rounded-full text-sm font-medium hover:bg-neutral-200 transition shadow-lg"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="bg-transparent border border-white/40 backdrop-blur-sm text-white px-7 py-3.5 rounded-full text-sm font-medium hover:bg-white/10 transition"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 flex flex-col md:flex-row justify-between gap-6 md:items-end">
            <div>
              <p className="uppercase tracking-[0.2em] text-xs font-semibold text-black/50 mb-3">
                Featured Projects
              </p>
              <h3 className="text-3xl md:text-5xl font-light max-w-2xl leading-tight">
                Curated interiors with timeless elegance.
              </h3>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group rounded-[24px] bg-[#F7F5F2] border border-black/5 overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <div className="overflow-hidden h-[360px]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                <div className="p-6">
                  <p className="uppercase text-[11px] tracking-[0.2em] font-semibold text-black/50 mb-1">
                    {project.category}
                  </p>
                  <h4 className="text-xl font-normal">{project.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="uppercase tracking-[0.2em] text-xs font-semibold text-black/50 mb-3">
              Services
            </p>
            <h3 className="text-3xl md:text-5xl font-light">
              End-to-end interior design solutions.
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-[24px] border border-black/5 shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-sm font-semibold mb-6 text-black/60">
                    0{index + 1}
                  </div>
                  <h4 className="text-xl font-medium mb-3">{service.title}</h4>
                  <p className="text-black/60 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <p className="uppercase tracking-[0.2em] text-xs font-semibold text-black/50 mb-3">
              About The Studio
            </p>
            <h3 className="text-3xl md:text-5xl leading-tight font-light">
              Spaces designed around lifestyle, emotion, and detail.
            </h3>
          </div>
          <div>
            <p className="text-base md:text-lg leading-relaxed text-black/70">
              Our studio specializes in luxury interiors that blend timeless aesthetics with modern functionality. Every project is carefully tailored to reflect the personality, aspirations, and daily life of our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-24 px-6 bg-[#F7F5F2]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative">
            <Image
              src="/Founder.jpeg"
              alt="Chaitali Waykos - Founder"
              width={600}
              height={700}
              className="rounded-[28px] object-cover shadow-lg"
            />
          </div>

          <div>
            <p className="uppercase tracking-[0.2em] text-xs font-semibold text-black/50 mb-3">
              Founder & Principal Designer
            </p>
            <h2 className="text-3xl md:text-4xl font-light mb-6 leading-snug">
              Designing spaces that feel timeless and personal.
            </h2>
            <p className="text-black/70 text-base leading-relaxed mb-4">
              At Shade Design Studio, we believe interiors should reflect both functionality and emotion. Every project is approached with a balance of modern aesthetics, thoughtful detailing, and timeless elegance.
            </p>
            <p className="text-black/70 text-base leading-relaxed font-medium">
              Led by Chaitali Waykos, the studio focuses on crafting refined residential and commercial spaces across Pune and PCMC.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <p className="uppercase tracking-[0.2em] text-xs font-semibold text-black/50 mb-3">
            Client Experience
          </p>
          <h3 className="text-3xl md:text-4xl font-light leading-tight mb-16">
            What our clients say about working with us.
          </h3>

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-[#F7F5F2] p-8 rounded-[24px] text-left h-full flex flex-col justify-between border border-black/5">
                  <p className="text-black/70 text-sm leading-relaxed mb-6 italic">
                    “{testimonial.review}”
                  </p>
                  <div>
                    <h4 className="text-base font-semibold">{testimonial.name}</h4>
                    <p className="text-black/50 text-xs mt-0.5">{testimonial.project}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto bg-[#EAE3D9] rounded-[32px] p-8 md:p-16 text-center border border-black/5 shadow-sm">
          <p className="uppercase tracking-[0.2em] text-xs font-semibold text-black/60 mb-3">
            Start Your Project
          </p>
          <h3 className="text-3xl md:text-5xl font-light leading-tight max-w-2xl mx-auto">
            Let’s create a space that reflects your story.
          </h3>
          <p className="mt-4 text-sm md:text-base text-black/70 max-w-xl mx-auto leading-relaxed">
            Connect with us for luxury residential and commercial interior design solutions.
          </p>

          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const response = await fetch("https://formspree.io/f/mojrpzgp", {
                method: "POST",
                body: formData,
                headers: { Accept: "application/json" },
              });
              if (response.ok) {
                setSubmitted(true);
                e.target.reset();
              }
            }}
            className="mt-10 max-w-xl mx-auto space-y-4 text-left"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-4 rounded-xl border border-black/10 bg-white/80 focus:bg-white focus:outline-none focus:ring-2 focus:ring-black text-sm"
            />
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-4 rounded-xl border border-black/10 bg-white/80 focus:bg-white focus:outline-none focus:ring-2 focus:ring-black text-sm"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="w-full p-4 rounded-xl border border-black/10 bg-white/80 focus:bg-white focus:outline-none focus:ring-2 focus:ring-black text-sm"
              />
            </div>
            <textarea
              name="message"
              placeholder="Tell us about your project..."
              rows={4}
              required
              className="w-full p-4 rounded-xl border border-black/10 bg-white/80 focus:bg-white focus:outline-none focus:ring-2 focus:ring-black text-sm"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-black text-white py-4 rounded-full text-sm font-semibold hover:bg-neutral-800 transition shadow-md"
            >
              Send Inquiry
            </button>

            {submitted && (
              <p className="text-emerald-800 font-medium text-sm text-center pt-2">
                ✓ Thank you! Your inquiry has been submitted successfully.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/10 py-10 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 justify-between items-center">
          <div>
            <h4 className="text-lg font-semibold tracking-wide">
              SHADE DESIGN STUDIO
            </h4>
            <p className="text-black/50 text-xs mt-1">
              Premium Interior Design Studio • Pune & PCMC
            </p>
          </div>

          <a
            href="https://www.instagram.com/shade_designs_studio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1F5D42] hover:text-black transition"
            aria-label="Instagram"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </footer>
    </div>
  );
}