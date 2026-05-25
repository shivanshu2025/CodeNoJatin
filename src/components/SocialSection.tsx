import {
  XTwitterIcon,
  ThreadsIcon,
  BlueskyIcon,
  SubstackIcon,
  LinkedInIcon,
} from "./Icons";

const socialLinks = [
  { name: "X/Twitter", icon: <XTwitterIcon size={14} />, href: "https://twitter.com" },
  { name: "Threads", icon: <ThreadsIcon size={14} />, href: "https://threads.net" },
  { name: "Bluesky", icon: <BlueskyIcon size={14} />, href: "https://bsky.app" },
  { name: "LinkedIn", icon: <LinkedInIcon size={14} />, href: "https://linkedin.com" },
  { name: "Substack", icon: <SubstackIcon size={14} />, href: "https://substack.com" },
];

export default function SocialSection() {
  return (
    <section className="space-y-4">
      <p className="text-xs font-medium uppercase tracking-widest text-gray-400">
        Find Me On
      </p>

      <p className="text-gray-700">
        You can find me on the following social platforms:
      </p>

      {/* SAME POSITIONING (flex-wrap preserved) */}
      <div className="flex flex-wrap gap-2">
        {socialLinks.map(({ name, icon, href }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-1.5 overflow-hidden rounded-md border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 transition-all hover:border-gray-300 hover:bg-gray-50"
          >
            {/* shimmer effect (Uiverse style) */}
            <span className="absolute right-0 -mt-10 h-24 w-6 translate-x-10 rotate-12 bg-black opacity-5 transition-all duration-700 group-hover:-translate-x-40"></span>

            {icon}
            {name}
          </a>
        ))}
      </div>
    </section>
  );
}