"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import Image from "next/image";
import { motion } from "framer-motion";
import { restaurants } from "@/data/restaurants";

export default function RestaurantCarouselWithHeader() {
  return (
    <section className="w-screen overflow-hidden bg-white">

      {/* ===== EVENTS HEADER ===== */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="max-w-[1440px] mx-auto px-6 md:px-16 pb-16 pt-32"
      >
        <div className="flex items-center gap-6 mb-6">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-[14px] uppercase tracking-[0.3em] text-black"
          >
            Events
          </motion.span>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "circOut" }}
            className="flex-1 h-[1px] bg-black origin-left" 
          />
        </div>

        <motion.h2 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="max-w-[1100px] text-[5vw] md:text-[5rem] leading-tight font-s text-[#6b1415]"
        >
          Discover Our <br />Exciting Events
        </motion.h2>
      </motion.div>

      {/* ===== RESTAURANT CAROUSEL ===== */}
      <Swiper
        modules={[Autoplay, FreeMode]}
        spaceBetween={24}
        slidesPerView="auto"
        loop={true}
        freeMode={true}           
        speed={6000}              
        autoplay={{
          delay: 0,               
          disableOnInteraction: false,
        }}
        grabCursor={true}
        className="px-12 py-20 "
      >
        {restaurants.map((item) => (
          <SwiperSlide
            key={item.id}
            style={{ width: "415px", height: "500px" }}
          >
            <div className="group relative h-full overflow-hidden cursor-pointer">
              
              {/* Image */}
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover transition-all duration-1000 group-hover:scale-105 group-hover:blur-sm "
              />

              {/* Always-on subtle black overlay */}
              <div className="absolute inset-0 bg-black/15 z-5"></div>

              {/* Centered title */}
              <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold text-white z-10 transition-opacity duration-700 group-hover:opacity-0">
                {item.name}
              </h2>

              {/* Hover content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center backdrop-blur-md bg-white/10 opacity-0 group-hover:opacity-100 transition duration-700 px-6 z-10">
                <span className="text-white uppercase tracking-widest text-sm mb-2">
                  {item.category}
                </span>
                <h3 className="text-4xl font-bold text-white mb-4">
                  {item.name}
                </h3>
                <p className="text-white/90 text-base max-w-xs mb-6">
                  {item.description}
                </p>
                <span className="text-white uppercase tracking-widest pb-1">
                  Explore
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
