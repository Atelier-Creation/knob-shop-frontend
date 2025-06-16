import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowBack,IoIosArrowForward  } from "react-icons/io";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import './ProductCarosal.css'
import "swiper/css/navigation";
import { useNavigate } from "react-router-dom";
const ProductCarouselSwiper = ({ products = [] }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const navigate = useNavigate()
  const handleClick = (item) => {
    console.log("Clicked:", item);
    navigate(`/category/${item.text}`,{ state: { product: item } });
  };
  return (
    <section className="py-1 bg-white mt-3 container-fluid product-carosal"> {/* Changed container-fluied to container-fluid */}
      <div className="d-flex align-items-center my-2 px-2"> {/* Removed justify-content-between */}
        <div className="flex-grow-1 text-center"> {/* Added flex-grow-1 and text-center */}
          <h2 className="h5 text-uppercase fw-medium product-head">
            Explore Our Product Range
          </h2>
        </div>
        <div className="d-flex gap-2 desktop-only">
          <button
            ref={prevRef}
            className="product-custom-nav-btn rounded-circle"
          >
            <IoIosArrowBack />
          </button>
          <button
            ref={nextRef}
            className="product-custom-nav-btn rounded-circle"
          >
            <IoIosArrowForward  />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={10}
        slidesPerView={2}
        loop={true}
        autoplay={{ delay: 3000 }}
        onBeforeInit={(swiper) => {
          // Ensure navigation elements are properly set up.
          // This ensures that the refs are available when Swiper initializes its navigation.
          if (swiper.params.navigation) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            // If you were using swiper.navigation.init() and update() in useEffect,
            // you might move them here or ensure they run after this.
          }
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        breakpoints={{
          576: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          992: { slidesPerView: 5 },
        }}
      >
        {products.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="text-center p-3 h-100 d-flex flex-column slides" onClick={() => handleClick(item)}>
              <img
                src={item.image}
                alt={item.text}
                className="img-fluid mb-3"
                style={{ maxHeight: "250px", objectFit: "contain" }}
              />
              <h6 className="mb-1">{item.text}</h6>
              <small className="text-muted">Items ({item.count})</small>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
     <div className="d-flex justify-content-center mt-2"> <button className="ctn big-ctn" onClick={()=>navigate('/categories')}>Shop Now</button></div>
    </section>
  );
};

export default ProductCarouselSwiper;