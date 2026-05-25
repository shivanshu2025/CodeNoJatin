import ProfileSection from "./components/ProfileSection";
import TechStackSection from "./components/TechStackSection";
import ProjectsSection from "./components/ProjectsSection";
import CertificatesSection from "./components/CertificatesSection";
import SocialSection from "./components/SocialSection";
import ContactSection from "./components/ContactSection";

export default function App() {
  return (
    <div className="min-h-screen bg-[#FOEDE5]">
      <main className="mx-auto max-w-2xl px-5 py-12 sm:px-8 sm:py-16 md:py-20">
        <div className="space-y-12 sm:space-y-14">
          <ProfileSection />
          <TechStackSection />
          <ProjectsSection />
          <CertificatesSection />
          <SocialSection />
          <ContactSection />
        </div>
      </main>
    </div>
  );
}
