import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from '../../components/navbar/Navbar.jsx';
import Selection_card from "../../components/selection_card/selection_card1.jsx";
import { Carousel } from '../../components/carousel/carousel.jsx';
import lamp from "../../assets/lamp.png";
import spot from "../../assets/spot.png";
import led from '../../assets/led_light_strip.png';
import khartoom from "../../assets/khartoom.png";
import ceiling_spot from '../../assets/ceiling_spot.png';
import wall_applique from '../../assets/wall_applique.png';
import chandelier from '../../assets/chandelier.png';
import cable from '../../assets/cable.png';
import sanshe_sharm from '../../assets/sanshe_sharm.png';
import "./home_page.css";

const categories = [
  { image: lamp,          state: { category: 'lamp' } },
  { image: spot,          state: { category: 'spot' } },
  { image: led,           state: { category: 'led' } },
  { image: khartoom,      state: { category: 'khartoom' } },
  { image: ceiling_spot,  state: { category: 'spot' } },
  { image: wall_applique, state: { category: 'spot' } },
  { image: chandelier,    state: { category: 'spot' } },
  { image: cable,         state: { category: 'spot' } },
  { image: sanshe_sharm,  state: { category: 'spot' } },
];

function Home_page() {
  return (
    <>
      <header>
        <Navbar type='home' />
      </header>

      {/* ── Hero ── */}
      <div className='section_1'>
        <h1 className='the_description'>
          BUY ALL YOUR<br />
          ELECTRICAL GOODS<br />
          WITH THE<br />
          BEST PRICES<br />
          EVER
        </h1>
      </div>

      <hr />

      {/* ── Category cards ── */}
      <div className='section_2'>
        {categories.map((cat, idx) => (
          <Selection_card
            key={idx}
            image={cat.image}
            direction={{ path: "/categories", state: cat.state }}
          />
        ))}
      </div>

      <hr />

      {/* ── About + Carousel ── */}
      <div className='section_3'>
        <div className='about_text'>
          <h1 className='about_title'>ABOUT US</h1>
          <p className='about_para'>
            Habib Lighting is a leading provider of lighting solutions for both
            residential and commercial spaces. With a wide range of products from
            stylish chandeliers to practical floor lamps, we are dedicated to
            illuminating homes and businesses with quality lighting products. Our
            commitment to customer satisfaction and innovative design sets us apart
            in the lighting industry.
          </p>
        </div>

        <div className='carousel_wrap'>
          <Carousel />
        </div>
      </div>

      <hr />

      {/* ── Footer ── */}
      <footer className='footer'>
        <div className="footer_element" id="contact">
          <h5 className='footer_icon'>Contact Us</h5>
          ✉️ <a href="">email</a>
          <p>📞 01158281903</p>
          <p>📞 01158281903</p>
          <p>📞 01158281903</p>
        </div>

        <div className="footer_element">
          <h5 className='footer_icon'>Branches</h5>
          📍 <a href="https://www.google.com/maps/place/Habib+Lighting/@30.0141921,31.282819,17z/data=!3m1!4b1!4m6!3m5!1s0x1458390003e29265:0xcb1cdcf7c806b2a6!8m2!3d30.0141921!4d31.2853939!16s%2Fg%2F11x6cjwd5b?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D">Ataba branch</a><br />
          📍 <a href="https://www.google.com/maps/place/Habib+Lighting/@30.0408301,31.1978787,17z/data=!3m1!4b1!4m6!3m5!1s0x145846cc908a2bfb:0x243aca3a2af064cf!8m2!3d30.0408301!4d31.2004536!16s%2Fg%2F11c5_1rpd7?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D">Mohandessin branch</a><br />
          📍 <a href="https://www.google.com/maps/place/Habib+Lighting/@30.0408301,31.1978787,17z/data=!3m1!4b1!4m6!3m5!1s0x145846cc908a2bfb:0x243aca3a2af064cf!8m2!3d30.0408301!4d31.2004536!16s%2Fg%2F11c5_1rpd7?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D">Mokattam branch</a>
        </div>

        <div className="footer_element">
          <h5 className='footer_icon'>About Us</h5>
          <a href="">About</a>
        </div>

        <div className="footer_element">
          <h5 className='footer_icon'>Some Products</h5>
          <a href="">Lamps</a><br />
          <a href="">Chandeliers</a><br />
          <a href="">Spots</a><br />
          <a href="">Cables</a>
        </div>
      </footer>
    </>
  );
}

export default Home_page;