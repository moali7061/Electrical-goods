import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import slide_1 from './assets/slide_1.png'
import slide_2 from './assets/slide10.jpg'
import slide_4 from './assets/slide_4.jpg'
import slide6 from './assets/slide11.jpg'
import slide7 from './assets/slide7.jpg'

function Home_page() {

  const navigate = useNavigate();
  const go_to_products= ()=>{
    navigate('/listing');
  }
  return (
    <>
      <Navbar />
        <div className='section_1'>
          <h1 className='the_description'>BUY<br/>ALL YOUR<br/>FURNITURE<br/>WITH THE BEST<br/>DEALS EVER</h1>
          <button className='Home_page_button' onClick={go_to_products}> shop Now</button>
        </div>


        <div className='section_2'>
           <div className='slide_bar'>

              <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src={slide_1} class="d-block w-100" alt="" className='slide_bar_image'/>
                  </div>
                  <div class="carousel-item">
                    <img src={slide_2} class="d-block w-100" alt="" className='slide_bar_image'/>
                  </div>
                  <div class="carousel-item">
                    <img src={slide_4} class="d-block w-100" alt="" className='slide_bar_image'/>
                  </div>
                  <div class="carousel-item">
                    <img src={slide6} class="d-block w-100" alt="" className='slide_bar_image'/>
                  </div>
                  <div class="carousel-item">
                    <img src={slide7} class="d-block w-100" alt="" className='slide_bar_image'/>
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>

           </div>

        </div>




        
        <div className='section_3'>
            <h1 className='first_part'>About US</h1>
            <div className='contact_us_tabel'>
                
            </div>

        </div>
    </>
  );
}

export default Home_page;
