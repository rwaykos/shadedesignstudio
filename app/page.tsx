"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FaInstagram,
  FaPhoneAlt,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { testimonials } from "./Data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";
import { projects } from "./Data/projects";

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

  const services = [
    {
      title: "Residential Interiors",
      desc: "Bespoke living spaces tailored to your daily life, family needs, and aesthetic preferences in Pune & PCMC.",
    },
    {
      title: "Commercial Design",
      desc: "Functional, brand-first environments designed to increase productivity for offices, retail, and hospitality.",
    },
    {
      title: "Space Planning & 3D Visuals",
      desc: "Optimized spatial layouts and photorealistic 3D renders designed for seamless flow and maximum utility.",
    },
    {
      title: "Custom Furniture & Modular Kitchens",
      desc: "Handcrafted furniture and high-end modular kitchen installations designed specifically for your space.",
    },
    {
      title: "Turnkey Renovation & Styling",
      desc: "Full-scale interior transformations, art sourcing, lighting design, and curated soft furnishings.",
    },
  ];

  return (
    <div className="bg-[#F7F5F2] text-[#1F1F1F] min-h-screen font-sans scroll-smooth">
      {/* Header / Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#F7F5F2]/80 backdrop-blur-md border-b border-black/5 transition-all">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <Image
              src="/shade-logo.png"
              alt="Shade Design Studio Logo"
              width={48}
              height={48}
              className="h-12 w-auto object-contain"
            />
            <span className="text-lg md:text-xl font-semibold tracking-wide whitespace-nowrap">
              Shade Design Studio
            </span>
          </a>

          <nav className="hidden lg:flex gap-8 text-sm font-medium tracking-wide text-slate-800">
            <a
              href="#projects"
              className="hover:text-black hover:opacity-70 transition"
            >
              Projects
            </a>
            <a
              href="#services"
              className="hover:text-black hover:opacity-70 transition"
            >
              Services
            </a>
            <a
              href="#process"
              className="hover:text-black hover:opacity-70 transition"
            >
              Process
            </a>
            <a
              href="#about"
              className="hover:text-black hover:opacity-70 transition"
            >
              About
            </a>
            <a
              href="#contact"
              className="hover:text-black hover:opacity-70 transition"
            >
              Contact
            </a>
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

      {/* Hero Section (Single H1 for SEO) */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1600&auto=format&fit=crop"
          alt="Luxury Living Room Interior Design Studio in Pune"
          fill
          priority
          sizes="100vw"
          className="object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white pt-16">
          <p className="uppercase tracking-[0.3em] text-xs md:text-sm font-semibold mb-4 text-white/80">
            Premium Interior Design Studio in Pune & PCMC
          </p>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light leading-tight max-w-4xl tracking-tight">
            Designing Spaces That Feel Timeless.
          </h1>

          <p className="mt-6 text-base sm:text-lg max-w-2xl text-white/80 leading-relaxed font-light">
            We craft modern residential and commercial interiors with a precise
            balance of luxury, functionality, and emotional connection.
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
          {/* Heading */}
          <div className="max-w-3xl mb-14">
            <p className="text-sm font-semibold tracking-[0.25em] uppercase text-[#1F5D42] mb-4">
              Selected Portfolio
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900">
              Spaces designed around the way you live.
            </h2>

            <p className="mt-5 text-lg text-neutral-600 leading-relaxed">
              Explore our residential interiors, where thoughtful planning,
              timeless design and quality execution come together.
            </p>
          </div>

          {/* Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group block"
              >
                <div className="relative h-[460px] overflow-hidden rounded-3xl bg-neutral-100">
                  {/* Project Image */}
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Dark gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Arrow */}
                  <div className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:text-black">
                    ↗
                  </div>

                  {/* Project Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                    <p className="text-sm text-white/70 mb-2">
                      {project.type} · {project.location}
                    </p>

                    <h3 className="text-2xl font-semibold tracking-tight">
                      {project.title}
                    </h3>

                    <div className="mt-4 flex items-center gap-2 text-sm text-white/70 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      View Project
                      <span>→</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-14 flex justify-center">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#1F5D42] text-white px-7 py-3.5 rounded-full font-medium hover:bg-[#174832] transition"
            >
              Start Your Project
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
<section id="services" className="bg-[#F7F5F2] py-20 md:py-24">
  <div className="max-w-7xl mx-auto px-6">

    {/* Section Header */}
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-end mb-12">
      <div>
        <p className="text-sm uppercase tracking-[0.22em] text-[#1F5D42] mb-4">
          Our Services
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 leading-[1.08]">
          Thoughtful design,
          <br />
          from concept to completion.
        </h2>
      </div>

      <p className="text-neutral-600 text-base md:text-lg leading-relaxed max-w-xl">
        We create considered interiors that balance aesthetics,
        functionality and the way you live.
      </p>
    </div>

    {/* Services List */}
    <div className="border-t border-neutral-300">

      {/* Residential Interiors */}
      <div className="group border-b border-neutral-300 py-6 md:py-7">
        <div className="grid md:grid-cols-[1fr_2fr] gap-3 md:gap-10 items-start">

          <h3 className="text-lg md:text-xl font-normal tracking-tight text-neutral-900 transition-colors duration-300 group-hover:text-[#1F5D42]">
            Residential Interiors
          </h3>

          <p className="text-sm md:text-base text-neutral-600 leading-relaxed max-w-2xl">
            Personalised interiors designed around your lifestyle,
            taste and everyday needs.
          </p>

        </div>
      </div>

      {/* Space Planning */}
      <div className="group border-b border-neutral-300 py-6 md:py-7">
        <div className="grid md:grid-cols-[1fr_2fr] gap-3 md:gap-10 items-start">
          <h3 className="text-lg md:text-xl font-normal tracking-tight text-neutral-900 transition-colors duration-300 group-hover:text-[#1F5D42]">
            Space Planning & 3D Visuals
          </h3>

          <p className="text-sm md:text-base text-neutral-600 leading-relaxed max-w-2xl">
            Smart layouts and realistic visualisation to help you
            experience the space before execution.
          </p>

        </div>
      </div>

      {/* Modular Kitchens */}
      <div className="group border-b border-neutral-300 py-6 md:py-7">
        <div className="grid md:grid-cols-[1fr_2fr] gap-3 md:gap-10 items-start">

          <h3 className="text-lg md:text-xl font-normal tracking-tight text-neutral-900 transition-colors duration-300 group-hover:text-[#1F5D42]">
            Modular Kitchens & Custom Furniture
          </h3>

          <p className="text-sm md:text-base text-neutral-600 leading-relaxed max-w-2xl">
            Custom solutions designed to maximise storage,
            functionality and visual simplicity.
          </p>

        </div>
      </div>

      {/* Turnkey Execution */}
      <div className="group border-b border-neutral-300 py-6 md:py-7">
        <div className="grid md:grid-cols-[1fr_2fr] gap-3 md:gap-10 items-start">

          <h3 className="text-lg md:text-xl font-normal tracking-tight text-neutral-900 transition-colors duration-300 group-hover:text-[#1F5D42]">
            Turnkey Execution
          </h3>

          <p className="text-sm md:text-base text-neutral-600 leading-relaxed max-w-2xl">
            A coordinated design-to-execution experience with
            attention to craftsmanship, quality and every detail.
          </p>

        </div>
      </div>

      {/* Interior Styling */}
      <div className="group border-b border-neutral-300 py-6 md:py-7">
        <div className="grid md:grid-cols-[1fr_2fr] gap-3 md:gap-10 items-start">

          <h3 className="text-lg md:text-xl font-normal tracking-tight text-neutral-900 transition-colors duration-300 group-hover:text-[#1F5D42]">
            Interior Styling
          </h3>

          <p className="text-sm md:text-base text-neutral-600 leading-relaxed max-w-2xl">
            The finishing layer of materials, lighting, colours
            and décor that brings the entire space together.
          </p>

        </div>
      </div>

    </div>
  </div>
</section>

      {/* Design Process Section */}
      {/* Design Process Section */}
<section
  id="process"
  className="py-16 md:py-20 px-6 bg-[#F7F5F2] relative overflow-hidden"
>
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1F5D42]/5 rounded-full blur-3xl pointer-events-none" />

  <div className="max-w-7xl mx-auto relative z-10">

    {/* Section Heading */}
    <div className="text-center max-w-3xl mx-auto mb-12 md:mb-14">
      <p className="uppercase tracking-[0.25em] text-xs font-semibold text-[#1F5D42] mb-3">
        Our Design Journey
      </p>

      <h2 className="text-3xl md:text-5xl font-light leading-tight text-slate-900">
        From your first idea to a space that feels like home.
      </h2>

      <p className="mt-4 text-black/60 text-sm md:text-base font-light max-w-2xl mx-auto leading-relaxed">
        Every project begins with understanding you. We combine thoughtful
        design, detailed planning, and careful execution to create spaces
        that are beautiful, functional, and uniquely yours.
      </p>
    </div>

    {/* Process Cards */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
      {[
        {
          number: "01",
          title: "Discover",
          subtitle: "We listen before we design.",
          desc: "We understand your lifestyle, preferences, aspirations, space, and budget. This is where your ideas become the foundation of the design.",
          tags: ["Client Brief", "Site Visit", "Lifestyle & Needs"],
        },
        {
          number: "02",
          title: "Imagine",
          subtitle: "Your space starts taking shape.",
          desc: "We translate ideas into layouts, mood boards, materials, colours, lighting concepts, and realistic 3D visuals so you can experience the design before execution.",
          tags: ["Space Planning", "Mood Boards", "3D Visuals"],
        },
        {
          number: "03",
          title: "Refine",
          subtitle: "Every detail has a purpose.",
          desc: "Once the design direction is approved, we refine every element—from finishes and furniture to electrical points, joinery details, and final specifications.",
          tags: ["Material Selection", "Working Drawings", "BOQ"],
        },
        {
          number: "04",
          title: "Create",
          subtitle: "We bring the vision to life.",
          desc: "Our team coordinates execution, craftsmanship, installations, and quality checks while keeping the design intent at the heart of every detail.",
          tags: ["Execution", "Site Supervision", "Handover"],
        },
      ].map((item, index) => (
        <div
          key={index}
          className="group relative bg-white rounded-[24px] p-6 md:p-7 border border-black/5 shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-500 overflow-hidden"
        >
          {/* Background Number */}
          <span className="absolute -top-4 -right-1 text-[90px] font-serif text-black/[0.035] group-hover:text-[#1F5D42]/10 transition-colors duration-500 select-none pointer-events-none">
            {item.number}
          </span>

          <div className="relative z-10">

            {/* Number + Line */}
            <div className="flex items-center gap-3 mb-7">
              <div className="w-10 h-10 rounded-full bg-[#1F5D42] text-white flex items-center justify-center text-[11px] font-semibold shrink-0">
                {item.number}
              </div>

              <div className="h-px flex-1 bg-black/10" />
            </div>

            {/* Title */}
            <h3 className="text-2xl font-light text-slate-900 mb-2 group-hover:text-[#1F5D42] transition-colors">
              {item.title}
            </h3>

            {/* Subtitle */}
            <p className="text-sm font-medium text-black/50 mb-4">
              {item.subtitle}
            </p>

            {/* Description */}
            <p className="text-black/65 text-sm leading-relaxed font-light">
              {item.desc}
            </p>

            {/* Tags */}
            <div className="mt-6 pt-4 border-t border-black/5 flex flex-wrap gap-2">
              {item.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="text-[10px] uppercase tracking-wide bg-[#F7F5F2] text-black/60 px-2.5 py-1.5 rounded-md border border-black/5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Bottom Statement */}
    <div className="mt-10 text-center">
      <p className="text-sm text-black/50 font-light">
        Thoughtful design. Clear communication. Attention to every detail.
      </p>
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
            <h2 className="text-3xl md:text-5xl leading-tight font-light">
              Spaces designed around lifestyle, emotion, and detail.
            </h2>
          </div>
          <div>
            <p className="text-base md:text-lg leading-relaxed text-black/70">
              Our studio specializes in luxury interiors across Pune and PCMC
              that blend timeless aesthetics with modern functionality. Every
              project is carefully tailored to reflect the personality,
              aspirations, and daily life of our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative h-[450px] md:h-[550px]">
            <Image
              src="/Founder.jpeg"
              alt="Chaitali Waykos - Principal Designer at Shade Design Studio Pune"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
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
              At Shade Design Studio, we believe interiors should reflect both
              functionality and emotion. Every project is approached with a
              balance of modern aesthetics, thoughtful detailing, and timeless
              elegance.
            </p>
            <p className="text-black/70 text-base leading-relaxed font-medium">
              Led by Ar. Chaitali Waykos, the studio focuses on crafting refined
              residential and commercial spaces across Pune and PCMC.
            </p>
          </div>
        </div>
      </section>

      {/* Client Experience / Testimonials Section */}
      <section className="py-24 px-6 bg-[#F7F5F2] overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="uppercase tracking-[0.2em] text-xs font-semibold text-black/50 mb-3">
              Client Experience
            </p>
            <h2 className="text-3xl md:text-5xl font-light leading-tight">
              What our clients say about working with us.
            </h2>
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
          <h2 className="text-3xl md:text-5xl font-light leading-tight max-w-2xl mx-auto">
            Let’s create a space that reflects your story.
          </h2>
          <p className="mt-4 text-sm md:text-base text-black/70 max-w-xl mx-auto leading-relaxed">
            Connect with us for luxury residential and commercial interior
            design solutions in Pune & PCMC.
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
                <Image
                  src="/shade-logo.png"
                  alt="Shade Design Studio"
                  width={40}
                  height={40}
                  className="h-10 w-auto object-contain"
                />
                <span className="text-base font-semibold tracking-wide text-black">
                  SHADE DESIGN STUDIO
                </span>
              </div>
              <p className="text-xs text-black/60 leading-relaxed">
                Designing luxury residential and commercial interiors across
                Pune and PCMC—blending functionality with timeless elegance.
              </p>
            </div>

            {/* Navigation Column */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-black/40 mb-4">
                Navigation
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a href="#projects" className="hover:text-black transition">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-black transition">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#process" className="hover:text-black transition">
                    Process
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-black transition">
                    About Studio
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-black transition">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Get in Touch Column */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-black/40 mb-4">
                Get in Touch
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a
                    href="tel:+919975597846"
                    className="hover:text-black transition font-medium"
                  >
                    +91 94030 32870
                  </a>
                </li>
                <li className="text-black/60">Pune & PCMC, Maharashtra</li>
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
              <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-black/40 mb-4">
                Connect
              </h3>
              <div className="flex items-center gap-4 mb-4">
                <a
                  href="https://www.instagram.com/shade_designs_studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#F7F5F2] border border-black/5 flex items-center justify-center text-[#1F5D42] hover:bg-black hover:text-white transition"
                  aria-label="Instagram Profile"
                >
                  <FaInstagram size={18} />
                </a>
              </div>
              <p className="text-xs text-black/50">
                Follow us on Instagram to see our latest project reveals and
                design behind-the-scenes.
              </p>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-black/40">
            <p>
              © {new Date().getFullYear()} Shade Design Studio. All rights
              reserved.
            </p>
            <p>Designed for Luxury Living in Pune & PCMC</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
