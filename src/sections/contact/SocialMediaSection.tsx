"use client";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export const SocialMediaSection = () => (
  <section className="py-24 bg-gradient-to-b from-white to-[#EAEDF2]">
    <div className="container">
      <div className="section-heading">
        <div className="flex justify-center">
          <div className="tag">Stay Connected</div>
        </div>
        <h2 className="section-title mt-5">Follow Us</h2>
        <p className="section-des mt-5">
          Stay updated with the latest conference news, announcements, and networking opportunities through our social media channels.
        </p>
      </div>

      <div className="mt-16 flex justify-center">
        <div className="flex flex-wrap gap-6 justify-center">
          {[
            { icon: FaFacebook, name: "Facebook", color: "#1877F2", href: "https://www.facebook.com/PoornimaInstitute/" },
            { icon: FaTwitter, name: "Twitter", color: "#1DA1F2", href: "https://x.com/piet_jaipur" },
            { icon: FaLinkedin, name: "LinkedIn", color: "#0A66C2", href: "https://www.linkedin.com/school/poornima-group-of-colleges" },
            { icon: FaInstagram, name: "Instagram", color: "#E4405F", href: "https://www.instagram.com/piet_jaipur" }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              className="group bg-white rounded-2xl border border-[#F1F1F1] shadow-[0_7px_14px_#EAEAEA] p-6 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: `${social.color}15` }}>
                <social.icon className="w-8 h-8 transition-colors duration-300 group-hover:scale-110" style={{ color: social.color }} />
              </div>
              <p className="text-center text-sm font-medium text-[#010D3E] group-hover:text-[#001E80] transition-colors">
                {social.name}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  </section>
);
