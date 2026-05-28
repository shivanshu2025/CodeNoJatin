import React from "react";

interface IconProps {
  className?: string;
  size?: number;
}

// Note: Social icons used by SocialSection.tsx


export const ReactIcon: React.FC<IconProps> = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="2" fill="#61DAFB" />
    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(0 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(120 12 12)" />
  </svg>
);

export const NextjsIcon: React.FC<IconProps> = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" fill="#000" />
    <path d="M8 8l8 8M16 8l-8 8" stroke="#fff" strokeWidth="1.5" />
  </svg>
);

export const TanStackIcon: React.FC<IconProps> = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="#eab308" strokeWidth="2" fill="none" />
    <text x="12" y="16" textAnchor="middle" fill="#eab308" fontSize="12" fontWeight="bold">T</text>
  </svg>
);

export const TypeScriptIcon: React.FC<IconProps> = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="4" fill="#3178C6" />
    <text x="12" y="17" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">TS</text>
  </svg>
);

export const BetterAuthIcon: React.FC<IconProps> = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="4" fill="#1a1a1a" />
    <path d="M12 6l6 4v4l-6 4-6-4v-4z" stroke="white" strokeWidth="1.5" fill="none" />
    <circle cx="12" cy="14" r="2" fill="white" />
  </svg>
);

export const NodeIcon: React.FC<IconProps> = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <polygon points="12,2 22,7 22,17 12,22 2,17 2,7" fill="#339933" />
    <text x="12" y="15" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">N</text>
  </svg>
);

export const FastifyIcon: React.FC<IconProps> = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <polygon points="12,2 20,12 12,22 4,12" fill="#000" />
    <path d="M12 6l4 6-4 6" stroke="white" strokeWidth="1.5" fill="none" />
  </svg>
);

export const NestIcon: React.FC<IconProps> = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" fill="#E0234E" />
    <path d="M12 6c-3 0-5 3-5 6s2 6 5 6 5-3 5-6-2-6-5-6z" stroke="white" strokeWidth="1.5" fill="none" />
  </svg>
);

export const PostgresIcon: React.FC<IconProps> = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <ellipse cx="12" cy="12" rx="8" ry="10" fill="#336791" />
    <path d="M8 8c0-2 2-3 4-3s4 1 4 3c0 2-2 4-4 4s-4-2-4-4z" fill="white" />
    <circle cx="10" cy="9" r="1" fill="#336791" />
    <circle cx="14" cy="9" r="1" fill="#336791" />
  </svg>
);

export const PrismaIcon: React.FC<IconProps> = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <polygon points="12,2 20,8 12,22 4,8" fill="#2D3748" />
    <polygon points="12,6 16,10 12,18" fill="white" />
  </svg>
);

export const SupabaseIcon: React.FC<IconProps> = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M12 2L4 12h6v10l8-10h-6V2z" fill="#3ECF8E" />
  </svg>
);

export const DockerIcon: React.FC<IconProps> = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect x="4" y="10" width="4" height="4" rx="1" fill="#2496ED" />
    <rect x="9" y="10" width="4" height="4" rx="1" fill="#2496ED" />
    <rect x="14" y="10" width="4" height="4" rx="1" fill="#2496ED" />
    <rect x="9" y="5" width="4" height="4" rx="1" fill="#2496ED" />
    <path d="M2 16c0 3 2 5 5 5h10c3 0 5-2 5-5H2z" fill="#2496ED" />
  </svg>
);

export const TurborepoIcon: React.FC<IconProps> = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <polygon points="12,2 20,6 20,14 12,18 4,14 4,6" fill="#EF4444" />
    <polygon points="12,6 16,8 16,12 12,14 8,12 8,8" fill="white" />
  </svg>
);

export const ShadcnIcon: React.FC<IconProps> = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="8" height="8" rx="2" fill="#000" />
    <rect x="13" y="3" width="8" height="8" rx="2" fill="#000" />
    <rect x="3" y="13" width="8" height="8" rx="2" fill="#000" />
    <rect x="13" y="13" width="8" height="8" rx="2" fill="#000" opacity="0.3" />
  </svg>
);

export const TailwindIcon: React.FC<IconProps> = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M4 12c0-3 2-5 5-5s4 3 6 3 5-3 5-5" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <path d="M4 18c0-3 2-5 5-5s4 3 6 3 5-3 5-5" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" fill="none" />
  </svg>
);

export const AISDKIcon: React.FC<IconProps> = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M12 2l2 4h4l-3 3 1 4-4-2-4 2 1-4-3-3h4z" fill="#000" />
  </svg>
);

export const SatelliteIcon: React.FC<IconProps> = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 20l4-4" />
    <path d="M14 5l5 5" />
    <circle cx="12" cy="12" r="3" />
    <path d="M9 9l-5-5" />
    <path d="M15 15l5 5" />
  </svg>
);

export const CatIcon: React.FC<IconProps> = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 5c-4 0-7 3-7 7v4h14v-4c0-4-3-7-7-7z" />
    <path d="M9 5V3l-2 3" />
    <path d="M15 5V3l2 3" />
    <circle cx="9.5" cy="12" r="1" fill="currentColor" />
    <circle cx="14.5" cy="12" r="1" fill="currentColor" />
    <path d="M10 15c1 1 3 1 4 0" />
  </svg>
);

export const BlueskyIcon: React.FC<IconProps> = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M12 2c-2 3-6 7-6 11 0 3 2 5 5 5 1.5 0 3-.5 4-2 1 1.5 2.5 2 4 2 3 0 5-2 5-5 0-4-4-8-6-11-1-1.5-3-1.5-4 0-1-1.5-3-1.5-4 0z" fill="#0085ff" />
  </svg>
);

export const ThreadsIcon: React.FC<IconProps> = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3c-4 0-7 3-7 7 0 3 2 5 4 6-1 1-2 3-2 5" />
    <path d="M12 3c4 0 7 3 7 7 0 3-2 5-4 6 1 1 2 3 2 5" />
    <circle cx="12" cy="10" r="2" />
  </svg>
);

export const SubstackIcon: React.FC<IconProps> = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="20" rx="2" />
    <line x1="4" y1="10" x2="20" y2="10" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="16" y1="2" x2="16" y2="6" />
  </svg>
);

export const LinkedInIcon: React.FC<IconProps> = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export const XTwitterIcon: React.FC<IconProps> = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const GitHubIcon: React.FC<IconProps> = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.071 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.349-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.026 2.748-1.026.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.943.358.308.679.916.679 1.85 0 1.335-.012 2.41-.012 2.739 0 .268.18.58.688.481A10.019 10.019 0 0 0 22 12.017C22 6.484 17.523 2 12 2z" />
  </svg>
);

export const InstagramIcon: React.FC<IconProps> = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm9 2h-9A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4ZM12 7.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Zm0 2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6ZM17.5 6.6a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z" />
  </svg>
);

