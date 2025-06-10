import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Welcome from './components/welcome/Welcome';
import Whyus from './components/whyus/Whyus';
import Staffs from './components/staffs/Staffs';
import './App.css'; // Import your main CSS file
import ServicesSection from './components/services/ServicesSection';
import Plans from './components/ourplans/Plans';
import Gallery from './components/gallery/Gallery';
import Testimonial from './components/testimonial/Testimonial';
import Callus from './components/callus/Callus';
import Footer from './components/footer/Footer';
import ContactButtons from './components/contactButtons/ContactButton';


// Fancy loader component
function Loader() {
  return (
    <div className="flex items-center justify-center py-16">
      <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Welcome />

      <ServicesSection />

      <Whyus />

     
      <Plans />

      <Gallery />

      <Staffs />

      <Testimonial />

      <Callus />

      <Footer/>

      <ContactButtons />

    </>
  );
}

export default App;
