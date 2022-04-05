import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import CardsGallery from './components/CardsGallery';
import Footer from './components/Footer';
import ImageCarousel from './components/ImageCarousel';

function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Destinations />
            <CardsGallery />
            <ImageCarousel />
            <Footer />
        </div>
    );
}

export default App;
