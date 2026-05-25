import {
  ReactIcon,
  NextjsIcon,
  TanStackIcon,
  TypeScriptIcon,
  BetterAuthIcon,
  NodeIcon,
  FastifyIcon,
  NestIcon,
  PostgresIcon,
  PrismaIcon,
  SupabaseIcon,
  DockerIcon,
  TurborepoIcon,
  ShadcnIcon,
  TailwindIcon,
  AISDKIcon,
} from "./Icons";

export default function TechStackSection() {
  const techStack = [
    { name: "React", icon: <ReactIcon size={14} /> },
    { name: "Next.js", icon: <NextjsIcon size={14} /> },
    { name: "TanStack Start", icon: <TanStackIcon size={14} /> },
    { name: "TanStack Query", icon: <TanStackIcon size={14} /> },
    { name: "TypeScript", icon: <TypeScriptIcon size={14} /> },
    { name: "Better Auth", icon: <BetterAuthIcon size={14} /> },
    { name: "Node", icon: <NodeIcon size={14} /> },
    { name: "Fastify", icon: <FastifyIcon size={14} /> },
    { name: "Nest", icon: <NestIcon size={14} /> },
    { name: "Postgres", icon: <PostgresIcon size={14} /> },
    { name: "Prisma", icon: <PrismaIcon size={14} /> },
    { name: "Supabase", icon: <SupabaseIcon size={14} /> },
    { name: "Docker", icon: <DockerIcon size={14} /> },
    { name: "Turborepo", icon: <TurborepoIcon size={14} /> },
    { name: "shadcn/ui", icon: <ShadcnIcon size={14} /> },
    { name: "Tailwind", icon: <TailwindIcon size={14} /> },
    { name: "AI SDK", icon: <AISDKIcon size={14} /> },
  ];

  return (
    <section className="space-y-4">
      <p className="text-xs font-medium uppercase tracking-widest text-gray-400">
        Tech Stack
      </p>

      <p className="text-gray-700">
        The tech stack I use for my personal and client work:
      </p>

      {/* SAME POSITIONING */}
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <span
            key={tech.name}
            className="group relative inline-flex items-center gap-1.5 overflow-hidden rounded-md border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-700 transition-all hover:bg-gray-100"
          >
            {/* shimmer effect */}
            <span className="absolute right-0 -mt-10 h-24 w-6 translate-x-10 rotate-12 bg-black opacity-5 transition-all duration-700 group-hover:-translate-x-40"></span>

            {tech.icon}
            {tech.name}
          </span>
        ))}
      </div>
    </section>
  );
}