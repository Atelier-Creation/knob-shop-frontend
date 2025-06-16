import Hero from "../Components/Hero/Hero"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import NavbarTop from "../Components/Navbar/NavbarTop/NavbarTop"
import ProductCarousel from "../Components/ProductCarousel/ProductCarousel";
import p1 from '../Assets/product-category/p1.png'
import p2 from '../Assets/product-category/p2.png'
import p3 from '../Assets/product-category/p3.png'
import p4 from '../Assets/product-category/p4.png'
import p5 from '../Assets/product-category/p5.png'
import left from '../Assets/left-image-interior.png'
import left1 from '../Assets/left-image-interior1.png'
import right from '../Assets/right-image-interior.png'
import right1 from '../Assets/right-image-interior1.png'
import CollectionsCarosal from "../Components/CollectionsCarosal/CollectionsCarosal";
import SingleCarosal from "../Components/singleCarosal/SingleCarosal";
import ShelfHighlight from "../Components/ShelfHighlight/ShelfHighlight";
import CubeCarousel from "../Components/CubeCarousel/CubeCarousel";
import TrendingProducts from "../Components/TrendingProducts/TrendingProducts";
import Footer from '../Components/Footer/Footer';
import OurServices from '../Components/OurServices/OurServices';
import FAQ from '../Components/FAQ/FAQ';
import Testimonals from '../Components/Testimonals/Testimonals';
import Brand from '../Components/Brand/Brand';
import EssentialsSection from "../Components/EssentialsSection/EssentialsSection";
import LocationMap from "../Components/LocationMap/LocationMap";
import ParallaxSection from "../Components/ParallaxSection/ParallaxSection";
import DealOfTheDay from "../Components/DealOfTheDay/DealOfTheDay";
import ShopTheRoom from "../Components/ShopTheRoom/ShopTheRoom";
import NewHero from "../Components/NewHero/NewHero";
import Sale from "../Components/Sale/Sale";
import LockSlider from "../Components/LockSlider/LockSlider";
import AboutUsGrid from "../Components/AboutUsGrid/AboutUsGrid";
import AboutUs from "../Components/AboutUs/AboutUs";
import MeshPinImage from '../Assets/Product Categories and its Product (Knobs Shop)/product img/product img/Wardrobe Door Lock/Mesh Pin/mesh pin.webp'
import ML81PAV from '../Assets/Product Categories and its Product (Knobs Shop)/product img/product img/Wardrobe Door Lock/ML81PAV/ML81PAV.webp'
import ML81PAH from '../Assets/Product Categories and its Product (Knobs Shop)/product img/product img/Wardrobe Door Lock/ML81PAH/ML81PAH.webp'
import YMI70AYHImage from '../Assets/Product Categories and its Product (Knobs Shop)/Smart Door Lock/Smart Door Lock/YMI70A-YH/YMI70_RED-GOLD-01.jpg'
import fwl1 from '../Assets/Product Categories and its Product (Knobs Shop)/product img/product img/Fingerprint Wardrobe Lock/FP-OP-F- B-02/FP-OP-F- B-02.webp'
import fwl2 from '../Assets/Product Categories and its Product (Knobs Shop)/product img/product img/Fingerprint Wardrobe Lock/FP-OP-H- B-01/FP-OP-H- B-01.webp'
import fwl3 from '../Assets/Product Categories and its Product (Knobs Shop)/product img/product img/Fingerprint Wardrobe Lock/FP-SL-F-B- 02/FP-SL-F-B- 02.webp'
import lunaProImage from '../Assets/Product Categories and its Product (Knobs Shop)/Smart Door Lock/Smart Door Lock/Luna Pro+ Facial/1_3819cf62-66f2-4a8a-b562-eddb7d96a57c.webp'
import yaleImage from '../Assets/Product Categories and its Product (Knobs Shop)/Smart Door Lock/Smart Door Lock/Luna Pro+ Facial/14_0fb7187f-b413-411d-a145-e62b8c9e41bb.jpg'
import ds1 from '../Assets/Product Categories and its Product (Knobs Shop)/product img/product img/Digital Safes  - category/Fire Rated Biometric Firesafe (125TFL)/Fire Rated Biometric Firesafe (125TFL).webp'
import ds2 from '../Assets/Product Categories and its Product (Knobs Shop)/product img/product img/Digital Safes  - category/Fire Rated Biometric Firesafe (530TFL)/Fire Rated Biometric Firesafe (530TFL).webp'


export const Home = () => {
  useEffect(() => {
  AOS.init({
    duration: 900,       // animation duration
    easing: 'ease-in-out',
    once: true,          // animate only once
    offset: 100          // trigger point from viewport
  });
}, []);

  const products = [
  {
    text: "Clocks",
    count: 24,
    image: p1,
  },
  {
    text: "Drawer Slides",
    count: 25,
    image: p2,
  },
  {
    text: "Digital Locks",
    count: 10,
    image: p3,
    productList:[
      {
        name: "YDME 200NxT",
        image:lunaProImage
      },
      {
        name: "YDME 100NxT",
        image:yaleImage
      },
      {
        name: "YDME 50NxT",
        image:YMI70AYHImage
      },
      {
        name: "YDME 50Pro",
        image:YMI70AYHImage
      },
      {
        name: "REFLECTA Lock",
        image:YMI70AYHImage
      }
    ]
  },
  {
    text: "Digital Home locker",
    count: 12,
    image: p4,
  },
  {
    text: "Wardrobes",
    count: 8,
    image: p5,
    productList:[
      {
        name: "Mesh Pin",
        image:MeshPinImage
      },
      {
        name: "ML81PAH",
        image:ML81PAH
      },
      {
        name: "ML81PAV",
        image:ML81PAV
      }
    ]
  },
  {
    text: "Digital Locks",
    count: 10,
    image: p1,
    productList:[
      {
        name: "Fire Rated Biometric Firesafe (125TFL)",
        image:ds1
      },
      {
        name: "Fire Rated Biometric Firesafe (530TFL)",
        image:ds2
      },
    ]
  },
  {
    text: "Digital Home locker",
    count: 12,
    image: p4,
  },
  {
    text: "Wardrobes",
    count: 8,
    image: p5,
    productList:[
      {
          name: "FP-OP-F- B-02",
          image:fwl1
        },
        {
          name: "FP-SL-F-B- 02",
          image:fwl2
        },
        {
          name: "FP-OP-H- B-01",
          image:fwl3
        },
        {
          name: "FP-SL-H- B-01",
          image:YMI70AYHImage
        }
  ]
  },
  {
    text: "Digital Locks",
    count: 10,
    image: p1,
  },
  {
    text: "Digital Home locker",
    count: 12,
    image: p4,
  },
  {
    text: "Wardrobes",
    count: 8,
    image: p5,
  },
  
];
  return (
  <>
   <NavbarTop/>
   {/* <Navbar/> */}
     <div data-aos="fade-up" data-aos-delay="100" ><NewHero /></div>
      {/* <LockSlider/> */}
     <div data-aos="fade-up" data-aos-delay="100" ><ProductCarousel products={products} /></div>
      {/* <CollectionsCarosal/> */}
      <div data-aos="fade-up" data-aos-delay="100"><CubeCarousel /></div>
      <div data-aos="fade-up" data-aos-delay="100"><ShelfHighlight /></div>
      <div data-aos="fade-up" data-aos-delay="100"><SingleCarosal /></div>
<div data-aos="fade-up" data-aos-delay="100"><TrendingProducts /></div>
<div data-aos="fade-up" data-aos-delay="100"><EssentialsSection /></div>
<div data-aos="fade-up" data-aos-delay="100">
  <ParallaxSection
    rotation={10}
    title="Check over 50,000 Products"
    subtitle="See our latest inspirations"
    buttonText="Check now"
    buttonLink="/pages/inspired"
    leftImage={left}
    rightImage={right}
    leftImage1={left1}
    rightImage1={right1}
  />
</div>
<div data-aos="fade-right" data-aos-delay="100"><DealOfTheDay /></div>
<div data-aos="fade-up" data-aos-delay="100"><ShopTheRoom /></div>
<div data-aos="fade-up" data-aos-delay="100"><Brand /></div>
<div data-aos="fade-up" data-aos-delay="100"><Testimonals /></div>
<div data-aos="fade-up" data-aos-delay="100"><AboutUs /></div>
      {/* <AboutUsGrid/> */}
<div data-aos="fade-up" data-aos-delay="100" data-aos-offset="500"><Sale /></div>
<div data-aos="fade-up" data-aos-delay="100"><FAQ /></div>
<div data-aos="fade-up" data-aos-delay="100"><OurServices /></div>
<div data-aos="fade-up" data-aos-delay="100"><LocationMap /></div>
<div data-aos="fade-up" data-aos-delay="100"><Footer /></div>
      </>
  )
}

