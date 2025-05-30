import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/Overview.css';
import Menu from '../Menu';
import Footers from '../Footers';

function Overview() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ตรวจสอบ JWT Token
  useEffect(() => {
    const checkToken = () => {
      const token = localStorage.getItem('token');
      setIsLoggedIn(!!token);
    };

    checkToken();

    // ตรวจสอบการเปลี่ยนแปลงของ localStorage
    window.addEventListener('storage', checkToken);

    return () => {
      window.removeEventListener('storage', checkToken);
    };
  }, []);

  // ฟังก์ชัน Logout
  const handleLogout = () => {
    localStorage.removeItem('token'); // ลบ Token
    setIsLoggedIn(false); // เปลี่ยนสถานะ
    window.location.reload(); // รีเฟรชหน้า
  };

  return (
    <div>
      <div className='bgoverview'>
        {!isLoggedIn ? (
          <>
          
            <Link to="/Register">
              <button className='register-buttonnn'>Register</button>
            </Link>
            <Link to="/Login">
              <button className='logins-button'>Login</button>
            </Link>
            
          </>
        ) : (
          <>
          <button className='logins-button' onClick={handleLogout}>
            Logout
          </button>
          <Link to="/profile">
          <button className='register-buttonnn'>Profile</button>
          </Link>
          </>
        )}
      <Menu />

        <div className='logohotel'>

            <img className='logo' src={`${process.env.PUBLIC_URL}/image/logoo.png`} alt="logo" />

            <h1>CyberVista</h1>
            <h1>Hotel</h1>
            <p>Thailand</p>
        </div>

        <div className='midlogo'>
            <img className='logo' src={`${process.env.PUBLIC_URL}/image/logoo.png`} alt="logo" />
            <p>Let her go to the mountain,</p>
            <p>then we’ll escape to the sound of the waves at the sea.</p>
        </div>
    </div>

    <div className='text-inpired'>
        <div className='text-inpired-1'>
          <p>Inspired by the vibrant energy of Thailand and its breathtaking </p>
          <p>landscapes, CyberVista Hotel is </p>
          <p>thoughtfully designed to enhance wellness and inspire joy.</p>
        </div>

        <div className='text-inpired-2'>
          <h1>“OFTEN I THINK OF </h1>
          <h1>THE THRIVING CITY ... </h1>
          <h1>EMBRACED BY CULTURE AND NATURE”</h1>
        </div>

        <div className='text-inpired-3'>
          <h2>— Inspired by the spirit of</h2>
          <h2> exploration and creativity.</h2>
        </div>
    </div>

    <div className='ViewAuailavility'>

    </div>

    <div className='defined'>

    <div className='left-defined'>
        <img className='logo' src={`${process.env.PUBLIC_URL}/image/Bangkok-City-Hotel-Lobby-Full2.jpg`} alt="img" />
    </div>

    <div className='right-defined'>
      <div>
        <div className='right-definedpp'>
          <p>DEFINED</p>
          <p>BY YOUR</p>
          <p>DESIRES</p>
        </div>
        

        <div className='right-definedp'>
          <p>
            Each day at The  CyberVista Hotel can unfold in any way you wish. Start your morning with a flat white at Twinflower Café or energize with a ride on the Technogym Skillbike in the fitness center. In the afternoon, you might choose to relax by the pool or enjoy a spa session at Astraea. You can also explore the vibrant neighborhood filled with galleries and boutiques just outside the hotel, or take advantage of our luxury car service to visit key city attractions.
          </p>
          <p>
            As the evening approaches, savor cocktails and light bites at Five of Clubs, either before or after dining at our in-house restaurant.
          </p>
          <p>
            At the end of the day, retreat to your thoughtfully designed guestroom, where every detail has been carefully considered—luxurious spa-quality robes, unique alarm clocks, and optimal sleeping conditions certified by Sleep Wise Consulting.
          </p>
          {/* <p>
            No matter how you spend your time in this historic city, you’re sure to find a unique perspective—along with experiences that are both exactly what you expected and more than you anticipated.
          </p> */}
        </div>
       



      <Link to="/Booknow"><button className='button-Booknow'>Book Now</button></Link>   

      </div>

      </div>  
    </div>

    <div className='hotelCyberVista'>
        <div className='left-hotelCyberVista'>
          <div>
            <h2>HOTEL</h2>
            <h1>CYBERVISTA</h1>
          </div>
          <div style={{width:'80%'}}>
            <p >CyberVista Hotel feels both elevated and familiar, with refined guestrooms
            and suites, a wealth of thoughtful amenities, and enhancements crafted to
            make your experience unforgettable. </p>
          </div>

          <div >
            <Link to="/Hotel"><button className='multi-border-button' >SUITES</button></Link>   
            <Link to="/Hotel"><button className='multi-border-button'>STANDARD ROOM</button></Link>   
            <Link to="/Hotel"><button className='multi-border-button'>GRAND STANDARD ROOMM</button></Link>   
          </div>
          
          
        </div>
        
        <div className='right-hotelCyberVista'>
          <img className='logo' src={`${process.env.PUBLIC_URL}/image/room.jpg`} alt="img" />
        </div>
        
    </div>

    {/* <div className='bang'></div> */}

    <div className='CafeandClubs'>

      <div className='left-CafeandClubs'>

        <div>
          <img className='logo' src={`${process.env.PUBLIC_URL}/image/logoo.png`} alt="logo" />
          <h1>Twinflower</h1>
          <h1>Café</h1>
          <h6>at CyberVista Hotel</h6> 
        </div>

        <p>The nourishing menu at our café features fresh, wholesome fare for breakfast and lunch, including espresso, fresh juices, salads, sandwiches, and more.
        </p>

        <Link to="/cafe"><button className='multi-border-button' style={{height: '50%'}}>EXPLORE TWINFLOWER CAFÉ</button></Link>   

        
      </div>

      <div className='right-CafeandClubs'>

        <div>
          <img className='logo' src={`${process.env.PUBLIC_URL}/image/logoo.png`} alt="logo" />
          <h1 style={{marginBottom:'70px'}}>Five of Clubs</h1>
          <h6>at CyberVista Hotel </h6>
        </div>

        <p>This intimate salon-style lounge offers classic cocktails, local beers from Portland breweries, and a curated wine list to go with chilled local seafood and charcuterie.
        </p>

        <Link to="/Club"><button className='multi-border-button' style={{height: '50%'}}>DISCOVER FIVE OF CLUBS</button></Link>   

        
      </div>
    </div>

    <div className='bang'></div>

    <div className='astraea'>
    <div className='left-astraea'>
      <div>
        <h1>ASTRAEA</h1>
        <h6>A WELLNESS SPA</h6>
      <div style={{width: '80%',margin:'30px'}}>
      <p>Our approach to wellness centers around helping you feel your best, body and mind.</p>
      <p>Our menu is full of experiences ranging from our private infrared saunas to nurturing massage and body treatments and meditation. Our boutique is carefully curated with organic skincare, mindful journals, as well as beautiful items from local artisans to help you take a bit of the spa home with you.</p>
      </div>
      <Link to="/spa"><button className='astraea-border-button'>BEGIN YOUR JOURNEY</button></Link>   
      <Link to="/Booknow"><button className='astraea-border-button'>BOOK NOW</button></Link>   
      <Link to="/contact-us"><button className='astraea-border-button'>COUTACT US</button></Link>   
      
      </div>

      </div>  

      <div className='right-astraea'>
        <img className='logo' src={`${process.env.PUBLIC_URL}/image/Bangkok-City-Hotel-Spa-Full6.jpg`} alt="img" />
    </div>

    </div>

    <div className='swimmingpool'>

    <div className='left-swimmingpool'>
        <img className='logo' src={`${process.env.PUBLIC_URL}/image/Bangkok-City-Hotel-Swimming-Pool-Full-4.jpg`} alt="img" />
    </div>

    <div className='right-swimmingpool'>
      <div>
        <h1>Swimming Pool </h1>
        <h6>at The CyberVista Hotel</h6>
      <div style={{marginTop:'20px'}}>
      <p>Dive into relaxation at our stunning outdoor swimming pool, where tranquility meets luxury. Surrounded by lush landscaping, our pool area offers a serene escape from the hustle and bustle of daily life. Whether you want to take a refreshing dip, soak up the sun on our comfortable loungers, or enjoy a leisurely swim, our pool caters to your every need.</p>
      <p>For those seeking a more invigorating experience, join our water aerobics classes or simply unwind with a good book by the water's edge. As evening falls, the pool transforms into a beautiful ambiance with softly lit surroundings, making it the perfect spot for a nightcap or an intimate gathering.</p>
      <p>For those seeking a more invigorating experience, join our water aerobics classes or simply unwind with a good book by the water's edge. As evening falls, the pool transforms into a beautiful ambiance with softly lit surroundings, making it the perfect spot for a nightcap or an intimate gathering.</p>
      </div>
      </div>

      </div>  

    </div>

<div className='fitness'>

  <div className='left-fitness'>
      <img className='logo' src={`${process.env.PUBLIC_URL}/image/Bangkok-City-Hotel-Fitness-Full4.jpg`} alt="img" />
  </div>

  <div className='right-fitness'>
      <div>
        <p>Fitness Center </p>
        <>at The CyberVista Hotel</>
      </div>   

      <div className='right-fitnesss'>
        <p>
          Elevate your wellness journey at our state-of-the-art fitness center, designed to cater to all your fitness needs. Whether you're a seasoned athlete or just starting out, our facility offers a range of equipment to help you stay active and energized during your stay.     
        </p>
        <p>
          Work out on our advanced cardio machines, including treadmills, elliptical trainers, and stationary bikes, all equipped with personal screens for your entertainment. For strength training enthusiasts, we provide a variety of free weights, resistance machines, and functional training areas to ensure a well-rounded workout.
        </p>
        <p>
          Our fitness center is open 24/7, allowing you to exercise at your convenience, whether you prefer an early morning workout or a late-night sweat session. Additionally, we offer guided fitness classes and personal training sessions to help you reach your goals.
        </p>
        <p>
          At The CyberVista Hotel, we believe that staying fit should be an enjoyable experience. Join us and discover how easy it is to maintain your routine while enjoying the comforts of our hotel.
        </p>
      </div>
    </div>  
</div>

    <div className='bang'></div>

    <Footers/>

    </div>

  )
}

export default Overview
