import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../Data/projects";
import ProjectGallery from "../ProjectGallery";
import {
  FaWhatsapp,
} from "react-icons/fa";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;

  const projectIndex = projects.findIndex(
    (project) => project.slug === slug
  );

  if (projectIndex === -1) {
    notFound();
  }

  const project = projects[projectIndex];

  const previousProject =
    projects[(projectIndex - 1 + projects.length) % projects.length];

  const nextProject =
    projects[(projectIndex + 1) % projects.length];

  return (
    <main className="bg-[#F7F1E7] min-h-screen">

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#F7F5F2]/95 backdrop-blur-md border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

           <Link
            href="/"
            className="flex items-center shrink-0"
            aria-label="Shade Design Studio Home"
          >
            <Image
              src="/shade-design-studio-header-fixed.svg"
              alt="Shade Design Studio"
              width={1000}
              height={286}
              priority
              unoptimized
              className="w-[220px] md:w-[300px] h-auto object-contain"
            />
          </Link>

          <a
                        href="https://wa.me/919975597846?text=Hi%20Shade%20Design%20Studio,%20I%20want%20to%20book%20a%20consultation."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#12334A] text-white px-5 py-2 rounded-full text-xs font-semibold tracking-wide hover:bg-[#A95737] transition inline-flex items-center gap-2"
                      >
                        <FaWhatsapp size={16} />
                        Book via WhatsApp
                      </a>

        </div>
      </header>


      {/* Project Introduction */}
      <section className="max-w-7xl mx-auto px-6 pt-16 md:pt-24">

        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-[#1F5D42] transition mb-10"
        >
          ← Back to Portfolio
        </Link>

        <div className="max-w-4xl">

          <p className="text-sm font-semibold tracking-[0.25em] uppercase text-[#1F5D42] mb-5">
            {project.type} · {project.location}
          </p>

          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-neutral-900">
            {project.title}
          </h1>

          <p className="mt-7 text-lg md:text-xl text-neutral-600 leading-relaxed max-w-2xl">
            {project.description}
          </p>

        </div>
      </section>


      {/* Hero Image */}
      <section className="max-w-7xl mx-auto px-6 mt-14">

        <div className="relative w-full h-[55vh] md:h-[70vh] rounded-3xl overflow-hidden">

          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            priority
            className="object-cover"
          />

        </div>

      </section>


      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">

        <div className="mb-12">

          <p className="text-sm font-semibold tracking-[0.25em] uppercase text-[#1F5D42] mb-4">
            Project Gallery
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Explore the details.
          </h2>

        </div>

        <ProjectGallery images={project.images} />

      </section>


      {/* Previous / Next */}
      <section className="border-t border-black/10">

        <div className="max-w-7xl mx-auto px-6 py-12">

          <div className="grid md:grid-cols-2 gap-6">

            <Link
              href={`/projects/${previousProject.slug}`}
              className="group p-7 rounded-3xl bg-white hover:bg-neutral-100 transition"
            >
              <p className="text-sm text-neutral-500 mb-3">
                ← Previous Project
              </p>

              <h3 className="text-2xl font-semibold group-hover:text-[#1F5D42] transition">
                {previousProject.title}
              </h3>

              <p className="mt-2 text-neutral-500">
                {previousProject.type} · {previousProject.location}
              </p>
            </Link>


            <Link
              href={`/projects/${nextProject.slug}`}
              className="group p-7 rounded-3xl bg-white hover:bg-neutral-100 transition text-right"
            >
              <p className="text-sm text-neutral-500 mb-3">
                Next Project →
              </p>

              <h3 className="text-2xl font-semibold group-hover:text-[#1F5D42] transition">
                {nextProject.title}
              </h3>

              <p className="mt-2 text-neutral-500">
                {nextProject.type} · {nextProject.location}
              </p>
            </Link>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="bg-[#1F5D42] text-white">

        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28 text-center">

          <p className="text-sm tracking-[0.25em] uppercase text-white/70 mb-5">
            Start Your Project
          </p>

          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Have a space in mind?
          </h2>

          <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
            Let&apos;s create a space that reflects your lifestyle,
            personality and way of living.
          </p>

          <Link
            href="/#contact"
            className="inline-flex mt-9 bg-white text-[#1F5D42] px-7 py-3.5 rounded-full font-medium hover:bg-neutral-100 transition"
          >
            Book a Consultation →
          </Link>

        </div>

      </section>

    </main>
  );
}