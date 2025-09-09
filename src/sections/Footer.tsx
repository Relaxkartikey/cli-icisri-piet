import Image from "next/image";
import Link from "next/link";

// Define social media icon components using the public path
const SocialX = () => (
  <a href="https://x.com/PIET_Jaipur" aria-label="X (Twitter)" target="_blank" rel="noopener noreferrer">
    <Image src="/assets/social-x.svg" alt="X" width={20} height={20} />
  </a>
);

const SocialInsta = () => (
  <a href="https://www.instagram.com/piet_jaipur/?hl=en" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
    <Image src="/assets/social-insta.svg" alt="Instagram" width={20} height={20} />
  </a>
);

const SocialLinkedin = () => (
  <a href="https://www.linkedin.com/school/poornima-group-of-colleges" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
    <Image src="/assets/social-linkedin.svg" alt="LinkedIn" width={20} height={20} />
  </a>
);

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] py-20">
      <div className="container">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Column 1: About ICISRI - Takes 2 columns */}
          <div className="space-y-6 lg:col-span-2">
            <h3 className="text-white text-xl font-bold mb-6">About ICISRI</h3>
            <p className="text-[#BCBCBC] leading-relaxed">
              The International Conference on Innovations in Semiconductor Research and IoT (ICISRI-2025) 
              brings together researchers, academicians, and industry experts to explore cutting-edge 
              developments in semiconductor technology and Internet of Things applications.
            </p>
            <div className="flex gap-6 pt-4">
              <SocialX />
              <SocialInsta />
              <SocialLinkedin />
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-6">
            <h3 className="text-white text-xl font-bold mb-6">Navigation</h3>
            <nav className="flex flex-col gap-4">
              <Link href="/about" className="text-[#BCBCBC] hover:text-white transition-colors duration-300">About</Link>
              <Link href="/committees" className="text-[#BCBCBC] hover:text-white transition-colors duration-300">Committee</Link>
              <Link href="/callforpaper" className="text-[#BCBCBC] hover:text-white transition-colors duration-300">Call for Paper</Link>
              <Link href="/speakers" className="text-[#BCBCBC] hover:text-white transition-colors duration-300">Speakers</Link>
              <Link href="/partners" className="text-[#BCBCBC] hover:text-white transition-colors duration-300">Partners</Link>
            </nav>
          </div>

          {/* Column 3: Website */}
          <div className="space-y-6">
            <h3 className="text-white text-xl font-bold mb-6">Website</h3>
            <nav className="flex flex-col gap-4">
              <Link href="/sitemap" className="text-[#BCBCBC] hover:text-white transition-colors duration-300">Sitemap</Link>
              <Link href="/contact" className="text-[#BCBCBC] hover:text-white transition-colors duration-300">Contact</Link>
              <Link href="/report" className="text-[#BCBCBC] hover:text-white transition-colors duration-300">Report</Link>
              <a href="https://github.com/relaxkartikey" target="_blank" rel="noopener noreferrer" className="text-[#BCBCBC] hover:text-white transition-colors duration-300">Developer</a>
            </nav>
          </div>

          {/* Column 4: Organizers */}
          <div className="space-y-6">
            <h3 className="text-white text-xl font-bold mb-6">Organizers</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-3 flex items-center justify-center hover:bg-white/10 transition-colors duration-300">
                <Image src="/assets/pics/idea.png" alt="Organizer 1" width={60} height={40} className="object-contain" />
              </div>
              <div className="bg-white rounded-lg p-3 flex items-center justify-center hover:bg-white/10 transition-colors duration-300">
                <Image src="/assets/pics/aicte.png" alt="Organizer 2" width={60} height={40} className="object-contain" />
              </div>
              <div className="bg-white rounded-lg p-3 flex items-center justify-center hover:bg-white/10 transition-colors duration-300">
                <Image src="/assets/pics/piet.png" alt="Organizer 3" width={60} height={40} className="object-contain" />
              </div>
              <div className="bg-white  rounded-lg p-3 flex items-center justify-center hover:bg-white/10 transition-colors duration-300">
                <Image src="/assets/pics/25yrs.png" alt="Organizer 4" width={60} height={40} className="object-contain" />
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-[#333] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[#BCBCBC] text-center md:text-left">© 2025 Poornima Institute of Engineering and Technology</p>
            <p className="text-[#BCBCBC] text-center md:text-right">
              Developed By{" "}
              <a 
                href="https://github.com/relaxkartikey" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-[#FB92CF] transition-colors duration-300 font-medium"
              >
                @relaxkartikey
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
