import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import slide_1 from './assets/slide_1.png'
import slide_2 from './assets/slide10.jpg'
import slide_4 from './assets/slide_4.jpg'
import slide6 from './assets/slide11.jpg'
import slide7 from './assets/slide7.jpg'
import better from './assets/better_furniture.png'

function Home_page() {

  const navigate = useNavigate();
  
  const go_to_sign_up= ()=>{
    navigate('/sign_up');
  }

  const go_to_login= ()=>{
    navigate('/login');
  }

  return (
    <>
      <Navbar />
        <div className='section_1'>
          <h1 className='the_description'>BUY<br/>ALL YOUR<br/>FURNITURE<br/>WITH THE BEST<br/>DEALS EVER</h1>
          <div className = 'home_page_buttons'>
            <button className='Home_page_button' onClick={go_to_sign_up}>sign up</button>
            <button className='Home_page_button' onClick={go_to_login}>Login</button>
          </div>
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
                <div>  
                  <h1 className='first_part'>About US</h1>
                    <div className='contact_us_tabel'>
                      <h1>How to reach me?</h1>
                      <h3>Personal email?</h3><p><a href='https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqXxbvQwXLSXBnGdKFmrNDdbWVVdStTprnCBRTLGCxpczJcPswcpQmsfxMKzJJgLJHCPmL'>moh.ali6066@gmail.com</a></p>
                      <h3>University email</h3><p><a href='https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqXxbvQwXLSXBnGdKFmrNDdbWVVdStTprnCBRTLGCxpczJcPswcpQmsfxMKzJJgLJHCPmL'>mohamed.alysoliman@student.guc.edu.eg</a></p>
                      <h3>Linked in Account</h3><p><a href='https://www.linkedin.com/in/mohamed-aly-6b7a32200/'>Linked In</a></p>
                    <div/>
                  </div>
                  <div className='second_part'>
                     <h1 style={{color: 'green'}}>About me</h1>I am engineering student at the German university in cairo. Passionate about Learning new technologies.
                      I did more than one intership in different companies Like: <li><a href='https://iskraemeco.com/'><b>Elsewedy electric</b></a> as a software tester 
                      engineer for two weeks</li> <li>3 Months in <b><a href='https://www.orange-business.com/en'>Orange business service</a></b> as a cloud engineer</li>  
                      <li>1 month in <b><a href='https://www.linkedin.com/company/edgeconn/posts/?feedView=all'>Edgeconn</a></b> as a network engineer</li>
                  </div>
                  <div>
                    <img src={better} className="better_image"/>
                  </div>
                </div>

        </div>
    </>
  );
}

export default Home_page;
