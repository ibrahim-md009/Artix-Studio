import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/layout/ScrollToTop";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Home from "./pages/home";
import Works from "./pages/Works";
import Faq from "./pages/Faq";
import News from "./pages/News";
import Booking from "./pages/Booking";
import MobNav from "./components/layout/MobNav";
const App = () => {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/news" element={<News />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
      <MobNav />
      <Footer />
    </>
  );
};

export default App;
