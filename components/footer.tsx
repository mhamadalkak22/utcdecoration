import { Facebook, Instagram, Clock, Phone } from "lucide-react"
import Image from "next/image"
// import { FooterGallery } from "@/components/footer-gallery"

// Inline WhatsApp icon (source path based on Bootstrap Icons)
function WhatsappIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      className={className}
    >
      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
    </svg>
  )
}

// Inline TikTok icon (Bootstrap Icons path)
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      className={className}
    >
      <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="bg-[#3B3A3F] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24">
          {/* Left Section - Logo and Branding */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo-20utc-20decoration.png"
                alt="UTC Logo"
                width={260}
                height={260}
                className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto"
              />
            </div>

            <p className="text-gray-200 text-xs sm:text-sm leading-relaxed max-w-xl">
              UTC's mission is to conduct a thorough study of its clients' needs through a careful and professional 
              assessment to provide the best services related to all aspects of home decor.
            </p>

            {/* Social Icons (WhatsApp, Facebook, Instagram, TikTok) */}
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a
                href="#"
                className="inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-md border border-white/25 bg-white/5 text-white hover:text-blue-500 hover:border-blue-500 hover:bg-blue-500/10 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                aria-label="WhatsApp"
              >
                <WhatsappIcon className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a
                href="#"
                className="inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-md border border-white/25 bg-white/5 text-white hover:text-blue-500 hover:border-blue-500 hover:bg-blue-500/10 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a
                href="#"
                className="inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-md border border-white/25 bg-white/5 text-white hover:text-blue-500 hover:border-blue-500 hover:bg-blue-500/10 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a
                href="#"
                className="inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-md border border-white/25 bg-white/5 text-white hover:text-blue-500 hover:border-blue-500 hover:bg-blue-500/10 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                aria-label="TikTok"
              >
                <TikTokIcon className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </div>
          </div>

          {/* Right Section - Contact Info */}
          <div className="space-y-6 lg:space-y-8 lg:ml-auto lg:max-w-lg">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">Contact Info</h3>

            <div className="space-y-4 sm:space-y-5 text-gray-200">
              <p className="text-sm sm:text-base leading-relaxed">
                Benid Al-Gar, Block 1 Pore Saeed Street
                <br />
                AL Manar Complex, Villa 3
              </p>

              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 sm:h-6 sm:w-6 mt-1 flex-shrink-0 text-white" />
                <div>
                  <p className="font-semibold text-white">Opening Hours:</p>
                  <p className="text-sm sm:text-base">8:00 AM – 4:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 sm:h-6 sm:w-6 mt-1 flex-shrink-0 text-white" />
                <div>
                  <p className="font-semibold text-white">Phone:</p>
                  <p className="text-sm sm:text-base"><a href="tel:+96594701850" className="hover:text-blue-500">+965 94701850</a></p>
                  <p className="text-sm sm:text-base"><a href="tel:+96598732371" className="hover:text-blue-500">+965 98732371</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-gray-300 text-xs sm:text-sm">
            © Copyright 2025. All Rights Reserved by <span className="font-semibold">UTC for Decoration</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
