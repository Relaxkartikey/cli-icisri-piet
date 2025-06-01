import Image from "next/image";

// Using direct public paths
const logo = "/assets/logosaas.png";

// Define social media icon components using the public path
const SocialX = () => (
  <a href="#" aria-label="X (Twitter)">
    <Image src="/assets/social-x.svg" alt="X" width={24} height={24} />
  </a>
);

const SocialInsta = () => (
  <a href="#" aria-label="Instagram">
    <Image src="/assets/social-insta.svg" alt="Instagram" width={24} height={24} />
  </a>
);

const SocialLinkedin = () => (
  <a href="#" aria-label="LinkedIn">
    <Image src="/assets/social-linkedin.svg" alt="LinkedIn" width={24} height={24} />
  </a>
);

const SocialPin = () => (
  <a href="#" aria-label="Pinterest">
    <Image src="/assets/social-pin.svg" alt="Pinterest" width={24} height={24} />
  </a>
);

const SocialYoutube = () => (
  <a href="#" aria-label="YouTube">
    <Image src="/assets/social-youtube.svg" alt="YouTube" width={24} height={24} />
  </a>
);

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:w-full before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
          <Image src={logo} alt="logo" height={40} width={150} className="relative" />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <a href="">About</a>
          <a href="">Features</a>
          <a href="">Custmers</a>
          <a href="">Pricing</a>
          <a href="">Help</a>
          <a href="">Careers</a>
        </nav>

        <div className="flex justify-center gap-6 mt-6">
          <SocialX />
          <SocialInsta />
          <SocialLinkedin />
          <SocialPin />
          <SocialYoutube />
        </div>
        <p className="mt-6">&copy; 2024 Your Company, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};
