"use client";
import Image from "next/image";
import { motion } from "framer-motion";

// Using direct public paths instead of imports
const arrowRightPath = "/assets/arrow-right.svg";
const socialPaths = {
  linkedin: "/assets/social-linkedin.svg",
  x: "/assets/social-x.svg",
  instagram: "/assets/social-insta.svg",
  pinterest: "/assets/social-pin.svg"
};

export const ContactSection = () => {
  const socialLinks = [
    { icon: socialPaths.linkedin, name: "LinkedIn", url: "https://www.linkedin.com/school/poornima-group-of-colleges" },
    { icon: socialPaths.x, name: "X", url: "https://x.com/PIET_Jaipur" },
    { icon: socialPaths.instagram, name: "Instagram", url: "https://www.instagram.com/piet_jaipur/?hl=en" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Get in Touch</div>
          </div>
          <h2 className="section-title mt-5">Contact Us</h2>
          <p className="section-des mt-5">
            Have questions or need more information? Reach out to our team directly.
          </p>
        </div>

        <div className="mt-16 flex flex-col lg:flex-row gap-10 lg:gap-16 items-start max-w-7xl mx-auto px-4">
          {/* Left column: Contact Info */}
          <div className="w-full lg:w-2/5 space-y-8">
            <div>
              <h3 className="text-lg font-medium text-[#010D3E] mb-2">Contact Information</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-[#001E80]">Email</p>
                  <p className="text-base text-[#010D3E]">icisri@poornima.org</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-[#001E80]">Phone</p>
                  <p className="text-base text-[#010D3E]">+91-9785487195</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-[#001E80]">Address</p>
                  <p className="text-base text-[#010D3E]">PIET, Jaipur, Rajasthan, INDIA</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-[#010D3E] mb-3">Follow Us</h3>
              <div className="flex space-x-4">                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F8FAFF] hover:bg-[#E6ECFF] transition-colors"
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <Image src={social.icon} alt={social.name} width={20} height={20} className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
              href="/contact"
              className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight"
              >
              Contact Page
              <Image src={arrowRightPath} alt="Arrow right" width={16} height={16} className="h-4 w-4 ml-2" />
              </a>
              <a
              href="/about"
              className="bg-white text-[#010D3E] border border-[#E6ECFF] px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight hover:bg-[#F8FAFF] transition-colors"
              >
              About Us
              <Image src={arrowRightPath} alt="Arrow right" width={16} height={16} className="h-4 w-4 ml-2" />
              </a>
            </div>
          </div>
          
          {/* Right column: Map */}
          <div className="w-full lg:w-3/5">
            <motion.div 
              className="rounded-3xl overflow-hidden border border-[#F1F1F1] shadow-[0_7px_14px_#EAEAEA] h-[450px] w-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.1234567890123!2d75.850381!3d26.767779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db7b7b7b7b7b7%3A0x1234567890abcdef!2sPoornima%20Institute%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1634567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map showing PIET location"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};