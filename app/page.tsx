export default function InteriorStudioWebsite() {
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
    "Residential Interiors",
    "Commercial Design",
    "Space Planning",
    "Custom Furniture",
    "Renovation & Styling",
  ];

  return (
    <div className="bg-[#F7F5F2] text-[#1F1F1F] min-h-screen font-sans">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#F7F5F2]/90 backdrop-blur border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-wide">SHADE DESIGN STUDIO</h1>
          </div>

          <nav className="hidden md:flex gap-8 text-sm uppercase tracking-wide">
            <a href="#projects" className="hover:opacity-60 transition">Projects</a>
            <a href="#services" className="hover:opacity-60 transition">Services</a>
            <a href="#about" className="hover:opacity-60 transition">About</a>
            <a href="#contact" className="hover:opacity-60 transition">Contact</a>
          </nav>

          <button className="bg-black text-white px-5 py-2 rounded-full text-sm hover:opacity-90 transition">
            Book Consultation
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-screen overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2000&auto=format&fit=crop"
          alt="Luxury Interior"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 text-white">
            <p className="uppercase tracking-[0.3em] text-sm mb-6 opacity-80">
              Premium Interior Design Studio
            </p>

            <h2 className="text-5xl md:text-7xl font-light leading-tight max-w-4xl">
              Designing Spaces That Feel Timeless.
            </h2>

            <p className="mt-8 text-lg max-w-2xl text-white/80 leading-relaxed">
              We craft modern residential and commercial interiors with a balance
              of luxury, functionality, and emotional connection.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="bg-white text-black px-8 py-4 rounded-full font-medium hover:scale-105 transition">
                View Projects
              </button>

              <button className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition">
                Explore Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-28 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-[0.25em] text-sm text-black/50 mb-4">
              About The Studio
            </p>

            <h3 className="text-4xl md:text-5xl leading-tight font-light">
              Spaces designed around lifestyle, emotion, and detail.
            </h3>
          </div>

          <div>
            <p className="text-lg leading-9 text-black/70">
              Our studio specializes in luxury interiors that blend timeless
              aesthetics with modern functionality. Every project is carefully
              tailored to reflect the personality, aspirations, and daily life
              of our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 flex flex-col md:flex-row justify-between gap-6 items-end">
            <div>
              <p className="uppercase tracking-[0.25em] text-sm text-black/50 mb-4">
                Featured Projects
              </p>

              <h3 className="text-4xl md:text-5xl font-light max-w-2xl leading-tight">
                Curated interiors with timeless elegance.
              </h3>
            </div>

            <button className="border border-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition">
              View Full Portfolio
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-[28px] bg-[#F7F5F2]"
              >
                <div className="overflow-hidden h-[420px]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />
                </div>

                <div className="p-6">
                  <p className="uppercase text-xs tracking-[0.2em] text-black/50 mb-2">
                    {project.category}
                  </p>

                  <h4 className="text-2xl font-light">{project.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.25em] text-sm text-black/50 mb-4">
              Services
            </p>

            <h3 className="text-4xl md:text-5xl font-light">
              End-to-end interior design solutions.
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-10 rounded-[28px] border border-black/5 hover:-translate-y-1 transition"
              >
                <div className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center text-xl mb-8">
                  0{index + 1}
                </div>

                <h4 className="text-2xl font-light mb-4">{service}</h4>

                <p className="text-black/60 leading-8">
                  Thoughtfully designed interiors focused on aesthetics,
                  comfort, and functionality.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-28 px-6 bg-[#1F1F1F] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="uppercase tracking-[0.25em] text-sm text-white/50 mb-4">
              Our Process
            </p>

            <h3 className="text-4xl md:text-5xl font-light max-w-3xl leading-tight">
              A seamless journey from concept to completion.
            </h3>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Discovery",
              "Concept Design",
              "Execution",
              "Final Styling",
            ].map((step, index) => (
              <div key={index}>
                <p className="text-5xl text-white/20 mb-6">0{index + 1}</p>
                <h4 className="text-2xl mb-4 font-light">{step}</h4>
                <p className="text-white/60 leading-8">
                  We collaborate closely with clients to create spaces that feel
                  intentional and refined.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <p className="uppercase tracking-[0.25em] text-sm text-black/50 mb-4">
            Client Experience
          </p>

          <h3 className="text-4xl md:text-5xl font-light leading-tight mb-12">
            “The team transformed our home into something truly timeless and
            deeply personal.”
          </h3>

          <div className="text-black/60">
            <p className="font-medium">Rahul Mehta</p>
            <p>Luxury Apartment Client</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-6xl mx-auto bg-[#D8C3A5] rounded-[40px] p-10 md:p-20 text-center">
          <p className="uppercase tracking-[0.25em] text-sm text-black/60 mb-4">
            Start Your Project
          </p>

          <h3 className="text-4xl md:text-6xl font-light leading-tight max-w-4xl mx-auto">
            Let’s create a space that reflects your story.
          </h3>

          <p className="mt-8 text-lg text-black/70 max-w-2xl mx-auto leading-8">
            Connect with us for premium residential and commercial interior
            design solutions tailored to your lifestyle.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="bg-black text-white px-8 py-4 rounded-full hover:opacity-90 transition">
              Schedule Consultation
            </button>

            <button className="border border-black px-8 py-4 rounded-full hover:bg-black hover:text-white transition">
              WhatsApp Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/10 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 justify-between items-center">
          <div>
            <h4 className="text-2xl font-semibold tracking-wide">SHADE DESIGN STUDIO</h4>
            <p className="text-black/50 mt-2">
              Premium Interior Design Studio
            </p>
          </div>

          <div className="flex gap-6 text-sm uppercase tracking-wide text-black/60">
            <a href="#">Instagram</a>
            <a href="#">Behance</a>
            <a href="#">Pinterest</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
