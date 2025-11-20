import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import {Carousel} from './carousel';
import {slides} from "./data/carouseldata.json"
import lamp from"./assets/lamp.png"
import spot from "./assets/spot.png"
import led from './assets/led_light_strip.png'
import khartoom from"./assets/khartoom.png"
import ceiling_spot from './assets/ceiling_spot.png';
import wall_applique from './assets/wall_applique.png';
import chandelier from './assets/chandelier.png';
import cable from './assets/cable.png';
import sanshe_sharm from './assets/sanshe_sharm.png'

function Home_page() {

  const navigate = useNavigate();
  
  const go_to_sign_up= ()=>{
    navigate('/sign_up');
  }

  const go_to_login= ()=>{
    navigate('/login');
  }

  const go_to_change_password= ()=>{
    navigate('/change_password');
  }
  return (
    <body>
    <header>
      <Navbar type='home'/>
    </header>
        <div className='section_1'>
          <h1 className='the_description'>BUY ALL YOUR<br/>FURNITURE WITH<br/> THE BEST PRICES<br/>EVER</h1>
          {/* <div className = 'home_page_buttons'>
            <button className='Home_page_button' style={{width:'100px', border:'solid black 2px', borderRadius: '20px', fontSize:'10px', color: 'white'}} onClick={go_to_sign_up}>sign up</button>
            <button className='Home_page_button' style={{width:'100px', border:'solid black 2px', borderRadius: '20px', fontSize:'10px', color: 'white'}} onClick={go_to_login}>Login</button>
            <button className='Home_page_button' style={{width:'100px', border:'solid black 2px', borderRadius: '20px', fontSize:'10px', color: 'white'}} onClick={go_to_change_password}>change password</button>
          </div> */}
        </div>

        <div className='section_2'>
           <a href="" style={{width:'364px', height:'348px'}}><img className='grid_cell' style={{width: '364px', height: '348px', borderRadius:'10%', border:'solid black 2px'}} onClick={go_to_login} src={lamp}/></a>
           <a href="" style={{width:'364px', height:'348px'}}><img className='grid_cell' style={{width: '364px', height: '348px', borderRadius:'10%', border:'solid black 2px'}} onClick={go_to_login} src={spot}/></a>
           <img className='grid_cell' style={{width: '364px', height: '348px', borderRadius:'10%', border:'solid black 2px'}}  src={led}/>
           <img className='grid_cell' style={{width: '364px', height: '348px', borderRadius:'10%', border:'solid black 2px'}}  src={khartoom}/>
           <img className='grid_cell' style={{width: '364px', height: '348px', borderRadius:'10%', border:'solid black 2px'}}  src={ceiling_spot}/>
           <img className='grid_cell' style={{width: '364px', height: '348px', borderRadius:'10%', border:'solid black 2px'}}  src={wall_applique}/>
           <img className='grid_cell' style={{width: '364px', height: '348px', borderRadius:'10%', border:'solid black 2px'}}  src={chandelier}/>
           <img className='grid_cell' style={{width: '364px', height: '348px', borderRadius:'10%', border:'solid black 2px'}}  src={cable}/>
           <img className='grid_cell' style={{width: '364px', height: '348px', borderRadius:'10%', border:'solid black 2px'}}  src={sanshe_sharm}/>
        </div>

            <div className='section_3_new'>
              <div style={{display:'inline-block', width: '550px'}}>
                <h1 style={{display:'flex', width:'50%' , marginRight:'auto', marginLeft:'auto', fontSize:'50px'}}>ABOUT US</h1>
                <p style={{display:'inline-block',fontSize:'30px', marginLeft:'100px', width:'600px'}}>
                  Habib Lightning is a leading provider of<br/>
                  lightning solutions for both residential<br/>
                  and commercial spaces. With a wide <br/>
                  range of products from stylish<br/>
                  Chandeliers to practical floor lamps,<br/>
                  we are dedicated to illuminating <br/>
                  homes and businesses with quality<br/>
                  lightning products. Our commitment<br/>
                  to customer satisfaction and innoative<br/>
                  design sets us apart in the lightning<br/>
                  industry.
                </p>
              </div>
              
              <div style={{display:'inline-block', paddingLeft:'400px'}}>
                <Carousel data = {slides}/>
              </div>
              <hr/>
              <footer>
              
                <div className="footer_element" id="contact">
                    <h5 className='footer_icon'>Contact Us</h5>
                    ✉️<a href="">email</a>
                    <p style={{marginBottom:'0px'}}>📞01158281903</p>
                    <p style={{marginBottom:'0px'}}>📞01158281903</p>
                    <p>📞01158281903</p>
                    

                    
                </div>
                <div className="footer_element">
                  <h5 className='footer_icon' style={{marginBottom:'30px'}}>Branches</h5>
                  📍<a href="https://www.google.com/maps/place/Habib+Lighting/@30.0141921,31.282819,17z/data=!3m1!4b1!4m6!3m5!1s0x1458390003e29265:0xcb1cdcf7c806b2a6!8m2!3d30.0141921!4d31.2853939!16s%2Fg%2F11x6cjwd5b?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D">Ataba branch</a><br/>
                  📍<a href="https://www.google.com/maps/place/Habib+Lighting/@30.0408301,31.1978787,17z/data=!3m1!4b1!4m6!3m5!1s0x145846cc908a2bfb:0x243aca3a2af064cf!8m2!3d30.0408301!4d31.2004536!16s%2Fg%2F11c5_1rpd7?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D">Mohandessin branch</a><br/> 
                  📍<a href="https://www.google.com/maps/place/Habib+Lighting/@30.0408301,31.1978787,17z/data=!3m1!4b1!4m6!3m5!1s0x145846cc908a2bfb:0x243aca3a2af064cf!8m2!3d30.0408301!4d31.2004536!16s%2Fg%2F11c5_1rpd7?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D">Mokattam branch</a>
                </div>
                <div className="footer_element">
                  <h5 className='footer_icon'>About Us</h5>
                  <a href="">about</a>
                  <p>‎‎ </p>
                  <p>‎‎ </p>
                </div>

                <div className="footer_element">
                  <h5 className='footer_icon'>Products</h5>
                  <a href="">lamps</a><br/>
                  <a href="">chandeliers</a><br/>
                  <a href="">spots</a><br/>
                  <a href="">cables</a>
                </div>
              </footer>
            </div>
        
        

    </body>
  );
}

export default Home_page;
