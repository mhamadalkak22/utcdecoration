"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Check } from "lucide-react";

export default function WhoWeAre() {
  return (
    <section className="relative overflow-hidden pt-12 sm:pt-16 pb-24">
      {/* subtle world/halo background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* halo behind the heading */}
        <div className="who-blur-bg" />
        {/* experience band background (light bluish) */}
        <div className="shape-bottom-large" />
        {/* dotted background reminiscent of a world map */}
        <div
          className="absolute left-[4%] top-[6%] h-[220px] w-[420px] opacity-35"
          style={{
            backgroundImage:
              "radial-gradient(rgba(125,168,245,0.9) 1px, rgba(125,168,245,0) 1px)",
            backgroundSize: "12px 12px",
          }}
        />
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[520px_1fr] gap-4 sm:gap-6 lg:gap-8 px-3 sm:px-5 lg:px-6 items-start">
        {/* left image block - Side-by-Side with overlap */}
        <motion.div
          className="col-span-1 relative pr-4 md:pr-8"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative flex items-center justify-center lg:justify-start pr-4 sm:pr-0">
            {/* Left Image (Front) */}
            <div className="relative z-10 w-[240px] sm:w-[280px] lg:w-[300px] shrink-0">
              <Image
                src="/whowreare.jpeg"
                alt="UTC team standing group photo"
                width={600}
                height={400}
                className="h-[280px] sm:h-[320px] w-full object-cover rounded-sm shadow-md grayscale"
                style={{ objectPosition: "center top" }}
                priority
              />
            </div>

            {/* Right Image (Back, overlapping) */}
            <div className="relative z-0 -ml-12 sm:-ml-16 mt-12 w-[260px] sm:w-[300px] lg:w-[320px] shrink-0">
              <Image
                src="/whowereare1.jpeg"
                alt="UTC team seated group photo"
                width={600}
                height={400}
                className="h-[300px] sm:h-[340px] w-full object-cover rounded-sm shadow-sm grayscale"
                style={{ objectPosition: "center" }}
              />
            </div>

            {/* decorative shapes */}
            <div className="thumb-shape z-20">
              <div className="shape" />
              <div className="shape" />
              <div className="shape" />
              <div className="shape" />
              <div className="shape" />
            </div>

            {/* Badge overlay */}
            <div className="absolute left-4 sm:left-8 bottom-0 sm:bottom-4 z-20">
              <motion.div
                className="flex items-start gap-3 rounded-md bg-[#1e3a8a] px-5 py-4 text-white shadow-lg"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 border border-white/30 p-1.5">
                  <Image
                    src="/medal.png"
                    alt="Medal"
                    width={32}
                    height={32}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <p className="font-semibold leading-tight">
                    Certified Company
                  </p>
                  <p className="text-[10px] sm:text-[11px] opacity-90 leading-relaxed max-w-[140px]">
                    We adapt our delivery to the way you work.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* right content block */}
        <motion.div
          className="col-span-1 md:ml-0 lg:ml-0 md:pl-8"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            className="text-[15px] font-semibold tracking-widest text-[#0B5FDD] flex items-center gap-2"
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-[#7DA8F5]">~~</span>
            WHO WE ARE
          </motion.p>
          <motion.h2
            className="mt-3 text-[30px] sm:text-[36px] md:text-[42px] font-bold text-[#1F2937]"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            Preparing for your success
          </motion.h2>
          <motion.p
            className="mt-3 max-w-2xl text-[15px] sm:text-[16px] text-[#6B7280] leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our company takes pride in our work with aluminum, iron, stainless
            steel, glass, and mirrors, including carports and railings, as well
            as all types of interior home decoration work.
          </motion.p>

          <motion.div
            className="mt-4 flex items-center gap-2 text-[15px] sm:text-[16px] font-medium"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#0B5FDD] bg-white text-[#0B5FDD]">
              <Check className="h-3 w-3" />
            </span>
            <span className="text-[#111827]">
              Professional installation and quality craftsmanship
            </span>
          </motion.div>

          {/* experience number overlapping the bottom band */}
          <motion.div
            className="relative mt-16 sm:mt-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            <div className="relative flex items-center gap-2">
              <span className="text-outline text-[72px] sm:text-[100px] leading-none font-bold select-none bg-gradient-to-r from-blue-600 via-sky-500 to-purple-600 bg-clip-text text-transparent drop-shadow-md">
                5
              </span>
              <div className="flex flex-col">
                <p className="text-[14px] sm:text-lg font-medium text-blue-700 leading-tight">
                  Years
                </p>
                <p className="text-[14px] sm:text-lg text-slate-600 leading-tight">
                  of experience
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
