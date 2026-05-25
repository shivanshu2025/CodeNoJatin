import { SatelliteIcon, CatIcon, BlueskyIcon } from "./Icons";

const projects = [
  {
    name: "Project Y",
    desc: "My new stealth project I’m working on.",
    status: "Active",
    icon: <SatelliteIcon size={16} />,
    iconBg: "bg-gray-100 text-gray-700",
  },
  {
    name: "Listing Cat",
    desc: "Marketing database for startups and indie hackers.",
    status: "Active",
    icon: <CatIcon size={16} />,
    iconBg: "bg-gray-100 text-gray-700",
  },
  {
    name: "Bluesky Meter",
    desc: "Realtime analytics for Bluesky social network.",
    status: "Sold",
    icon: <BlueskyIcon size={16} />,
    iconBg: "bg-blue-50 text-blue-600",
  },
];

export default function ProjectsSection() {
  return (
    <section className="space-y-4">
      <p className="text-xs font-medium uppercase tracking-widest text-gray-400">
        Projects
      </p>

      <p className="text-gray-700">
        These are my personal projects, both past and ongoing:
      </p>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {projects.map(({ name, desc, status, icon, iconBg }) => (
          <div
            key={name}
            className="group rounded-xl border border-gray-200 bg-white p-4 transition-all hover:border-gray-300 hover:shadow-sm"
          >
            {/* header */}
            <div className="flex items-center gap-2.5">
              <span className={`flex h-7 w-7 items-center justify-center rounded-md ${iconBg}`}>
                {icon}
              </span>

              <span className="text-sm font-semibold text-gray-900">
                {name}
              </span>

              <span
                className={`rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide ${
                  status === "Active"
                    ? "bg-emerald-50 text-emerald-700"
                    : "bg-amber-50 text-amber-700"
                }`}
              >
                {status}
              </span>
            </div>

            {/* description */}
            <p className="mt-2.5 text-sm leading-relaxed text-gray-600">
              {desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}