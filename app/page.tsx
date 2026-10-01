"use client";
import { useState } from "react";
import { FaInstagram, FaPhoneAlt, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { testimonials } from "./Data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Individual Testimonial Card Component
function TestimonialCard({ testimonial }: { testimonial: any }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 130;
  const needsTruncation = testimonial.review.length > maxLength;

  return (
    <div className="bg-[#F7F5F2] p-8 rounded-[24px] text-left h-full flex flex-col justify-between border border-black/5 transition-all hover:border-black/15">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-1 text-amber-500">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} size={13} />
            ))}
          </div>
          <span className="text-[11px] font-semibold tracking-wider text-black/40 uppercase bg-black/5 px-2.5 py-1 rounded-full">
            Verified Client
          </span>
        </div>

        <p className="text-black/75 text-sm leading-relaxed italic">
          “
          {needsTruncation && !isExpanded
            ? `${testimonial.review.slice(0, maxLength)}...`
            : testimonial.review}
          ”
        </p>

        {needsTruncation && (
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-2 text-xs font-semibold text-black/60 hover:text-black underline underline-offset-4 transition"
          >
            {isExpanded ? "Show Less" : "Read Full Review"}
          </button>
        )}
      </div>

      <div className="mt-6 pt-4 border-t border-black/5">
        <h4 className="text-base font-semibold text-slate-900">
          {testimonial.name}
        </h4>
        <p className="text-black/50 text-xs mt-0.5">{testimonial.project}</p>
      </div>
    </div>
  );
}

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

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Consultation",
      desc: "We discuss your vision, functional requirements, budget, and lifestyle to establish a clear design direction.",
    },
    {
      step: "02",
      title: "Concept & Spatial Planning",
      desc: "Developing 2D layouts, mood boards, and material palettes to visualize the spatial flow and aesthetic tone.",
    },
    {
      step: "03",
      title: "3D Visuals & Detailing",
      desc: "Photorealistic 3D renders and detailed technical drawings covering custom joinery, lighting, and finishes.",
    },
    {
      step: "04",
      title: "Execution & Management",
      desc: "End-to-end site management, vendor coordination, and quality control to ensure seamless turn-key delivery.",
    },
  ];

  return (
    <div className="bg-[#F7F5F2] text-[#1F1F1F] min-h-screen font-sans scroll-smooth">
      {/* Header / Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#F7F5F2]/80 backdrop-blur-md border-b border-black/5 transition-all">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
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

          <nav className="hidden lg:flex gap-8 text-sm font-medium tracking-wide text-slate-800">
            <a href="#projects" className="hover:text-black hover:opacity-70 transition">Projects</a>
            <a href="#services" className="hover:text-black hover:opacity-70 transition">Services</a>
            <a href="#process" className="hover:text-black hover:opacity-70 transition">Process</a>
            <a href="#about" className="hover:text-black hover:opacity-70 transition">About</a>
            <a href="#contact" className="hover:text-black hover:opacity-70 transition">Contact</a>
          </nav>

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

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-2xl text-slate-900"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>

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
              href="#process"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-lg font-medium text-slate-800"
            >
              Process
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

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1600&auto=format&fit=crop"
          alt="Luxury Interior"
          className="absolute inset-0 w-full h-full object-cover scale-105"
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

      {/* Projects Section */}
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

      {/* Services Section */}
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

      {/* Design Process Section */}
   <section id="process" className="py-24 px-6 bg-[#F7F5F2] relative overflow-hidden">
  {/* Subtly styled background ambient glow */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1F5D42]/5 rounded-full blur-3xl pointer-events-none" />

  <div className="max-w-7xl mx-auto relative z-10">
    {/* Section Header */}
    <div className="text-center max-w-3xl mx-auto mb-20">
      <p className="uppercase tracking-[0.25em] text-xs font-semibold text-[#1F5D42] mb-3">
        How We Work
      </p>
      <h3 className="text-3xl md:text-5xl font-light leading-tight text-slate-900">
        From initial concept to your final key handover.
      </h3>
      <p className="mt-4 text-black/60 text-sm md:text-base font-light max-w-xl mx-auto">
        A structured 4-step framework designed to eliminate guesswork, keep budgets transparent, and deliver luxury effortlessly.
      </p>
    </div>

    {/* Process Steps Grid */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
      {[
        {
          step: "01",
          phase: "Phase 1",
          title: "Discovery & Brief",
          timeframe: "Week 1",
          desc: "In-depth lifestyle analysis, site measurements, budget alignment, and spatial vision mapping.",
          deliverables: ["Site Survey", "Budget Matrix", "Design Brief"],
        },
        {
          step: "02",
          phase: "Phase 2",
          title: "Concept & Spatial 3D",
          timeframe: "Weeks 2 – 3",
          desc: "Crafting photorealistic 3D visualizers, custom spatial layouts, lighting schemes, and material swatches.",
          deliverables: ["3D Renders", "Mood Boards", "Layout Plans"],
        },
        {
          step: "03",
          phase: "Phase 3",
          title: "Technical & BOQ",
          timeframe: "Weeks 4 – 5",
          desc: "Detailed working drawings for electrical, plumbing, joinery, and itemized Bill of Quantities (BOQ).",
          deliverables: ["Working Drawings", "Final BOQ", "Vendor Contracts"],
        },
        {
          step: "04",
          phase: "Phase 4",
          title: "Turnkey Execution",
          timeframe: "Execution Phase",
          desc: "On-site quality supervision, custom carpentry, loose furniture installation, and deep cleaning prior to handover.",
          deliverables: ["Site Audits", "Quality Check", "Final Handover"],
        },
      ].map((item, index) => (
        <div
          key={index}
          className="group relative bg-white rounded-[28px] p-8 border border-black/5 hover:border-[#1F5D42]/30 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between overflow-hidden"
        >
          {/* Large Architectural Step Number Watermark */}
          <span className="absolute -top-4 -right-2 text-8xl font-serif text-black/[0.03] group-hover:text-[#1F5D42]/10 transition-colors duration-500 select-none pointer-events-none">
            {item.step}
          </span>

          <div>
            {/* Top Badge Strip */}
            <div className="flex items-center justify-between mb-8">
              <span className="text-[11px] font-semibold tracking-widest text-[#1F5D42] uppercase bg-[#1F5D42]/10 px-3 py-1 rounded-full">
                {item.phase}
              </span>
              <span className="text-xs text-black/40 font-medium">
                {item.timeframe}
              </span>
            </div>

            {/* Step Heading & Description */}
            <h4 className="text-xl font-medium text-slate-900 mb-3 group-hover:text-[#1F5D42] transition-colors">
              {item.title}
            </h4>
            <p className="text-black/65 text-sm leading-relaxed mb-6 font-light">
              {item.desc}
            </p>
          </div>

          {/* Micro Deliverables List */}
          <div className="pt-6 border-t border-black/5">
            <p className="text-[10px] uppercase font-bold tracking-wider text-black/40 mb-3">
              Deliverables
            </p>
            <div className="flex flex-wrap gap-1.5">
              {item.deliverables.map((tag, tagIdx) => (
                <span
                  key={tagIdx}
                  className="text-[11px] bg-[#F7F5F2] text-black/70 px-2.5 py-1 rounded-md border border-black/5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Bottom Consultation Banner */}
    <div className="mt-16 text-center">
      <div className="inline-flex items-center gap-4 bg-white px-8 py-4 rounded-full border border-black/5 shadow-sm">
        <p className="text-xs md:text-sm text-black/70 font-medium">
          Ready to turn your space into a tailored home?
        </p>
        <a
          href="#contact"
          className="text-xs font-semibold text-[#1F5D42] hover:underline underline-offset-4"
        >
          Book Initial Consultation →
        </a>
      </div>
    </div>
  </div>
</section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-[#F7F5F2]">
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

      {/* Founder Section */}
      <section className="py-24 px-6 bg-white">
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

      {/* Client Experience / Testimonials Section (CENTER ALIGNED) */}
      <section className="py-24 px-6 bg-[#F7F5F2] overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Centered Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="uppercase tracking-[0.2em] text-xs font-semibold text-black/50 mb-3">
              Client Experience
            </p>
            <h3 className="text-3xl md:text-5xl font-light leading-tight">
              What our clients say about working with us.
            </h3>
          </div>

          <div className="relative">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={24}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              pagination={{ clickable: true, dynamicBullets: true }}
              navigation={{
                prevEl: "#testimonial-prev",
                nextEl: "#testimonial-next",
              }}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="pb-14 !overflow-visible"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index} className="h-auto">
                  <TestimonialCard testimonial={testimonial} />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Controls */}
            <div className="flex items-center justify-center gap-4 mt-4">
              <button
                type="button"
                id="testimonial-prev"
                className="w-11 h-11 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition"
                aria-label="Previous Testimonial"
              >
                <FaChevronLeft size={13} />
              </button>
              <button
                type="button"
                id="testimonial-next"
                className="w-11 h-11 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition"
                aria-label="Next Testimonial"
              >
                <FaChevronRight size={13} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-white">
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
              const formData = new FormData(e.currentTarget);
              const response = await fetch("https://formspree.io/f/mojrpzgp", {
                method: "POST",
                body: formData,
                headers: { Accept: "application/json" },
              });
              if (response.ok) {
                setSubmitted(true);
                (e.target as HTMLFormElement).reset();
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
      <footer className="border-t border-black/10 pt-16 pb-12 px-6 bg-white text-black/80">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-black/10">
            {/* Brand Column */}
            <div className="md:col-span-1 space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src="/shade-logo.png"
                  alt="Shade Design Studio"
                  className="h-10 w-auto object-contain"
                />
                <h4 className="text-base font-semibold tracking-wide text-black">
                  SHADE DESIGN STUDIO
                </h4>
              </div>
              <p className="text-xs text-black/60 leading-relaxed">
                Designing luxury residential and commercial interiors across Pune and PCMC—blending functionality with timeless elegance.
              </p>
            </div>

            {/* Navigation Column */}
            <div>
              <h5 className="text-xs font-semibold uppercase tracking-[0.15em] text-black/40 mb-4">
                Navigation
              </h5>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a href="#projects" className="hover:text-black transition">Projects</a>
                </li>
                <li>
                  <a href="#services" className="hover:text-black transition">Services</a>
                </li>
                <li>
                  <a href="#process" className="hover:text-black transition">Process</a>
                </li>
                <li>
                  <a href="#about" className="hover:text-black transition">About Studio</a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-black transition">Contact Us</a>
                </li>
              </ul>
            </div>

            {/* Get in Touch Column */}
            <div>
              <h5 className="text-xs font-semibold uppercase tracking-[0.15em] text-black/40 mb-4">
                Get in Touch
              </h5>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a href="tel:+919975597846" className="hover:text-black transition font-medium">
                    +91 99755 97846
                  </a>
                </li>
                <li className="text-black/60">
                  Pune & PCMC, Maharashtra
                </li>
                <li>
                  <a
                    href="https://wa.me/919975597846?text=Hi%20Shade%20Design%20Studio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1F5D42] font-medium hover:underline"
                  >
                    Chat on WhatsApp →
                  </a>
                </li>
              </ul>
            </div>

            {/* Social & Connect Column */}
            <div>
              <h5 className="text-xs font-semibold uppercase tracking-[0.15em] text-black/40 mb-4">
                Connect
              </h5>
              <div className="flex items-center gap-4 mb-4">
                <a
                  href="https://www.instagram.com/shade_designs_studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#F7F5F2] border border-black/5 flex items-center justify-center text-[#1F5D42] hover:bg-black hover:text-white transition"
                  aria-label="Instagram"
                >
                  <FaInstagram size={18} />
                </a>
              </div>
              <p className="text-xs text-black/50">
                Follow us on Instagram to see our latest project reveals and design behind-the-scenes.
              </p>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-black/40">
            <p>© {new Date().getFullYear()} Shade Design Studio. All rights reserved.</p>
            <p>Designed for Luxury Living in Pune</p>
          </div>
        </div>
      </footer>
    </div>
  );
}