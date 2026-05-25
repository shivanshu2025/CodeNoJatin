import { Award, ExternalLink, Calendar, Building2, Hash } from "lucide-react";

const certificates = [
  {
    id: "AIS262626262626006",
    title: "Frontend Development",
    org: "AI Scholars",
    date: "30 May 2025 – 30 November 2025",
    desc:
      "Successfully completed the Frontend Development Course with strong technical performance and consistency.",
    img: "/certificate.png",
    verify: "#",
  },
];

export default function CertificatesSection() {
  return (
    <section className="space-y-4">
      <p className="text-xs font-medium uppercase tracking-widest text-gray-400">
        Certificates
      </p>

      <p className="text-gray-700">
        Professional certifications and course completions:
      </p>

      <div className="space-y-4">
        {certificates.map(({ id, title, org, date, desc, img, verify }) => (
          <div
            key={id}
            className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition-all hover:border-gray-300 hover:shadow-sm"
          >
            {/* image */}
            <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
              <img
                src={img}
                alt={title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 opacity-0 group-hover:opacity-100" />
            </div>

            {/* content */}
            <div className="space-y-3 p-4 sm:p-5">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-base font-semibold text-gray-900">
                    {title}
                  </h3>

                  <div className="mt-1 flex flex-wrap gap-3 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Building2 className="h-3 w-3" />
                      {org}
                    </span>

                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {date}
                    </span>
                  </div>
                </div>

                <span className="flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-amber-700">
                  <Award className="h-3 w-3" />
                  Certified
                </span>
              </div>

              <p className="text-sm leading-relaxed text-gray-600">
                {desc}
              </p>

              <div className="flex items-center justify-between pt-1">
                <span className="flex items-center gap-1 text-xs text-gray-400">
                  <Hash className="h-3 w-3" />
                  {id}
                </span>

                {verify && (
                  <a
                    href={verify}
                    className="flex items-center gap-1.5 rounded-md border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Verify
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}