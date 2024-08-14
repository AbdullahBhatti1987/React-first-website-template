import "./App.css";
import Announcement from "./components/Announcement";
import Carousel from "./components/Carousel";
import FashionCategories from "./components/FashionCategories";
import Feature from "./components/features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <>
    <Announcement />
      <Header />
      <Carousel />
    <HeroSection />
    <FashionCategories />
    <Feature />

    <Testimonial />
    <Footer />         
    </>
  );
}

export default App;
