import { Mail, Calendar } from "lucide-react";

export default function ProfileSection() {
  return (
    <section className="space-y-5">
      {/* Avatar */}
      <img
        src="/avatar.png"
        alt="Jatin Singh"
        className="h-16 w-16 rounded-full object-cover ring-2 ring-gray-100"
      />

      {/* Name */}
      <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
        Hey, I'm{" "}
        <span className="relative inline-block">
          <span className="relative z-10 text-amber-600">Jatin Singh</span>
          <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400" />
        </span>
        !
      </h1>

      {/* Description */}
      {/* Description */}
      <div className="space-y-3 text-gray-600">
        <p>
          Crafting modern digital experiences with performance, scalability, and innovation at the core 🚀
        </p>

        <p>
          Specialized in building high-quality web applications and AI-powered platforms using{" "}
          <span className="font-medium text-gray-900">
            React, Next.js & Node.js
          </span>.
        </p>

        <p>
          Focused on delivering clean design, seamless user experience, and reliable development solutions.
        </p>

        <p>
          Turning ambitious ideas into impactful digital products.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-3">
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800 hover:animate-[shake3856_0.3s_linear_infinite]"
        >
          <Calendar className="h-4 w-4" />
          Book a call
        </a>

        <a
          href="mailto:your@email.com"
          className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:animate-[shake3856_0.3s_linear_infinite]"
        >
          <Mail className="h-4 w-4" />
          Send an email
        </a>
      </div>

      {/* Availability */}
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-500" />
        </span>
        Available for new projects, let's talk!
      </div>

      {/* Shake Animation */}
      <style>{`
        @keyframes shake3856 {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(-2px, 2px);
          }
          40% {
            transform: translate(-2px, -2px);
          }
          60% {
            transform: translate(2px, 2px);
          }
          80% {
            transform: translate(2px, -2px);
          }
          100% {
            transform: translate(0);
          }
        }
      `}</style>
    </section>
  );
}