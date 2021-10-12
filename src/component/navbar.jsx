import React, { useState} from 'react'
import { RiSearchLine } from 'react-icons/ri'
import { MdOutlineMenu } from 'react-icons/md'
import { MdClose } from 'react-icons/md'


const Navbar = () => {
    const [searchNavbarMobile, setSearchNavbarMobile] = useState(true);
    const [mobileNavBtn, setMobileNavBtn] = useState(true);
  
    const toggleMobSearchNav = () => {
      setSearchNavbarMobile(!searchNavbarMobile);
    };
  
    const toggleMobileBtn = () => {
      setMobileNavBtn(!mobileNavBtn);
    };

return(
    <header className='navbar'>
    <p className='logo'>Send FREIGHT</p>
    <div className='desktop search-container'>
        <input type="text" placeholder='Search' className='search-bar' />
        <RiSearchLine fill='#fff' style={{position:'absolute',right:'30px',marginTop:'-28px'}}/>
    </div>

   <div style={{padding:'10px'}}>
        <button className='btn btn2'>Book Shipment</button>
        <button className='btn btn1'>Request Quote</button>
   </div>

   <div className="mobile mobile-nav-icon-wrapper">
        <button onClick={toggleMobSearchNav}>
          <RiSearchLine />
        </button>

        <button onClick={toggleMobileBtn}>
          <MdOutlineMenu />
        </button>
    </div>
    

{/* mobile search bar */}
<div className={`mobile-search-bar ${searchNavbarMobile && "d-none"}`}>
        <div className="mobile-search-bar-input-wrapper">
          <input
            className="mobile-search-bar-input"
            type="text"
            placeholder="Search"
          />
          <button className="mobile-search-btn">Search</button>
        </div>

        <button onClick={toggleMobSearchNav} className="close-mobile-search">
          <MdClose />
        </button>
      </div>
      {/* mobile nav buttons */}
      <div className={`mobile-nav-btn-holder ${mobileNavBtn && "d-none"}`}>
        <div>
          <button className="pri-btn mt-20 mb-20">Request Quote</button>
          <button className="sec-btn">Book Shipment</button>
        </div>
      </div>
</header>
)
};

export default Navbar;