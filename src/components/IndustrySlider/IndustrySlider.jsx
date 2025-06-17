import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./IndustrySlider.css";

const slides = [
  {
    img: "/assets/industrySlider/slide1.webp",
    title: "Marketing Agencies",
    points: [
      "Generate more leads and sales for your clients",
      "Enable 24X7 customer support on WhatsApp",
      "Send personalized notifications to drive purchase interest",
    ],
    bgColor: "#FFF4E5",
  },
  {
    img: "/assets/industrySlider/slide2.webp",
    title: "Automotive Industry",
    points: [
      "Promote your offering with WhatsApp broadcast",
      "Support your customers 24×7 at scale",
      "Showcase your products on WhatsApp storefront",
    ],
    bgColor: "#E6F8F4",
  },
  {
    img: "/assets/industrySlider/slide3.webp",
    title: "Real Estate",
    points: [
      "Schedule property visits & send automated reminders",
      "Automate FAQs for fast-tracking property deals",
      "Share property details catalog via PDF files",
    ],
    bgColor: "#FFF4E5",
  },
  {
    img: "/assets/industrySlider/slide4.webp",
    title: "Marketing Agencies",
    points: [
      "Generate more leads and sales for your clients",
      "Enable 24X7 customer support on WhatsApp",
      "Send personalized notifications to drive purchase interest",
    ],
    bgColor: "#FFF4E5",
  },
  {
    img: "/assets/industrySlider/slide5.webp",
    title: "Automotive Industry",
    points: [
      "Promote your offering with WhatsApp broadcast",
      "Support your customers 24×7 at scale",
      "Showcase your products on WhatsApp storefront",
    ],
    bgColor: "#E6F8F4",
  },
  {
    img: "/assets/industrySlider/slide6.webp",
    title: "Real Estate",
    points: [
      "Schedule property visits & send automated reminders",
      "Automate FAQs for fast-tracking property deals",
      "Share property details catalog via PDF files",
    ],
    bgColor: "#FFF4E5",
  },
];

function IndustrySlider() {
  return (
    <div className="industry-slider-container">
        <h1>Built for any Industry</h1>
      <Swiper
        modules={[Navigation, Pagination,Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay
        loop
        // navigation
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide-card" style={{ backgroundColor: slide.bgColor }}>
              <img src={slide.img} alt={slide.title} className="slide-img" />
              <h3>{slide.title}</h3>
              <ul>
                {slide.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default IndustrySlider;
