import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import NewsPage from "./pages/NewsPage/NewsPage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";

import Footer from "./components/Footer/Footer";
import ContactUsPage from "./pages/ContactUsPage/ContactUsPage";



function App() {

  return (
    <div>
        <Header />
      <Routes>
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/aboutuspage" element={<AboutUsPage />} />
  
        <Route path="/servicespage" element={<ServicesPage />} />
        <Route path="/newspage" element={<NewsPage />} />
        <Route path="/contactpage" element={<ContactUsPage />} />
     
     
     
      </Routes>

      <Footer />
    </div>
  );
}

export default App;