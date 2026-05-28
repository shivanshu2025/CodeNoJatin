import {
  LinkedInIcon,
  GitHubIcon,
  InstagramIcon,
} from "./Icons";

const socialLinks = [
  { name: "LinkedIn", icon: <LinkedInIcon size={14} />, href: "www.linkedin.com/in/jatin-singh-1033aa3b7" },

  // Added ones
  { name: "GitHub", icon: <GitHubIcon size={14} />, href: "https://github.com/shivanshu2025" },
  { name: "Instagram", icon: <InstagramIcon size={14} />, href: "https://instagram.com" },
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

      <div className="flex flex-wrap gap-2">
        {socialLinks.map(({ name, icon, href }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-1.5 overflow-hidden rounded-md border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 transition-all hover:border-gray-300 hover:bg-gray-50"
          >
            <span className="absolute right-0 top-0 -mt-1 h-24 w-6 translate-x-12 rotate-12 bg-black opacity-5 transition-all duration-700 ease-out group-hover:-translate-x-40"></span>

            {icon}
            {name}
          </a>
        ))}
      </div>
    </section>
  );
}