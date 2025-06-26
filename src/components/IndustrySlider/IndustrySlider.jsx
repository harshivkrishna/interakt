import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./IndustrySlider.css";

const slides = [
  {
    img: "/assets/industrySlider/restaurant.webp", // Food delivery / kitchen
    title: "F&B Outlets & Cloud Kitchens",
    points: [
      "Drive online orders with direct communication on daily specials or combos",
      "Promote new menu launches, festive platters, or subscription offers",
      "Collect ratings and reviews to boost online reputation and visibility",
    ],
    bgColor: "#E6F8F4",
  },
  {
    img: "/assets/industrySlider/slide2.webp", // Wellness yoga / therapy
    title: "Health & Wellness",
    points: [
      "Engage clients with personalized wellness reminders and goal trackers",
      "Drive bookings for consultations, therapy sessions, and workshops",
      "Promote new programs, offers, and membership plans",
    ],
    bgColor: "#FFF4E5",
  },
  {
    img: "/assets/industrySlider/real.webp", // Real estate exterior / modern house
    title: "Real Estate",
    points: [
      "Automate lead qualification and assign sales reps based on buyer interest",
      "Share curated property lists and availability updates in real time",
      "Run campaigns for project launches, open houses, and investment highlights",
    ],
    bgColor: "#E6F8F4",
  },
  {
    img: "/assets/industrySlider/health.png", // Hospital scene
    title: "Hospitals & Clinics",
    points: [
      "Enable easy appointment booking and automated confirmations",
      "Share health check-up packages and specialist availability",
      "Follow up with patients post-treatment to improve care continuity",
    ],
    bgColor: "#FFF4E5",
  },
  
  {
    img: "/assets/industrySlider/fashion.webp", // Fashion clothing shop
    title: "Fashion & Retail",
    points: [
      "Announce new collections, exclusive drops, and flash sales",
      "Drive in-store or online conversions with limited-time promotions",
      "Collect customer preferences to fuel future product recommendations",
    ],
    bgColor: "#E6F8F4",
  },
  {
    img: "/assets/industrySlider/entertainment.png", // Event / concert / entertainment
    title: "Event Companies & Entertainment",
    points: [
      "Promote upcoming shows, workshops, and ticketed events",
      "Segment audiences for niche targeting across event categories",
      "Build fan communities with exclusive content and behind-the-scenes access",
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
              <h3 className="slide-title">{slide.title}</h3>
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
