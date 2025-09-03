import Image from "next/image";

// Using direct public paths
const arrowRightPath = "/assets/arrow-right.svg";
const logoPath = "/assets/ktlogo.png";
const menuPath = "/assets/menu.svg";

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={logoPath} alt="Saas logo" height={40} width={40} />
            <Image src={menuPath} alt="Menu" height={20} width={20} className="h-5 w-5 md:hidden" />
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="/about">About</a>
              <a href="/committees">Committees</a>
              <a href="/callforpaper">Call for Paper</a>
              <a href="/speakers">Speakers</a>
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight">
                Apply Now
                <Image src={arrowRightPath} alt="Arrow right" width={16} height={16} className="h-4 w-4 ml-2" />
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
