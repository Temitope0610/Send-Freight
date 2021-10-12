import React from 'react'
import { IoMdAirplane } from 'react-icons/io'
import { RiShipFill } from 'react-icons/ri'
import { MdLocalShipping } from 'react-icons/md'
import { FaUserNurse } from 'react-icons/fa'
import { BiInfoCircle } from 'react-icons/bi'
import { MdLocationOn } from 'react-icons/md'
import { AiFillCalendar } from 'react-icons/ai'
import { MdArrowDropDown } from 'react-icons/md'
import { HiOutlineArrowSmLeft } from 'react-icons/hi'
import Navbar from './navbar'



class Booking extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            on: false,
            turnOn: false
        };
        this.switchOn = this.switchOn.bind(this)
    }
    switchOn(){
        this.setState({
            on: !this.state.on
        })
    }
    
    render(){
        return(
            <div>
               <Navbar/>
                <div className='heading'><HiOutlineArrowSmLeft/><span className="book">New Booking</span></div>
                <main>
                    <p style={{fontSize:'12px',color:'#B0B2B7'}}>Fill in the information below to get a quote or create a new booking</p>
                    <div className='service-card'>
                        <h5>Select a service</h5>
                        <div className='grid-container'>
                            <div className='air-freight-container'>
                                <p style={{padding:'15px',color:'#fff'}}>Air Freight</p>
                                <IoMdAirplane fill='#fff'className='plane'/>
                            </div>
                            <div className='sea-freight-container'>
                            <p style={{padding:'15px',color:'gray'}}>Sea Freight</p>
                            <RiShipFill fill='#81868C'className='ship'/>
                            </div>
                            <div className='inland-container'>
                            <p style={{padding:'10px',color:'gray',width:'85px'}}>Inland(Truck & Barge)</p>
                            <MdLocalShipping fill='#81868C' className='inland'/>
                                
                            </div>
                            <div className='custom-container'>
                            <p style={{padding:'15px',color:'gray',width:'85px'}}>Custom Clearance</p>
                            <FaUserNurse fill='#81868C' className='custom'/>
                            </div>
                        </div>
                    </div>
                    <div className='import-card'>
                        <BiInfoCircle />
                        <div className='form-section'>
                            <div className='import-form'>
                                <button className='import'>Import</button>
                                <button className='import' style={{borderRadius:'0px 3px 3px 0px'}}>Export</button>
                            </div>
                            <div className='from'>
                                <div className='input-box'>
                                   <div style={{display:'grid',gridTemplateColumns:'auto auto'}}>
                                   <MdLocationOn style={{marginRight:'10px'}} /><span style={{marginRight:'300px'}}>From</span>
                                   </div>
                                    <input type="text" placeholder='City to Port' className='port' />
                                </div>
                            </div>
                            <div className='from'>
                            <div className='input-box'>
                                   <div style={{display:'grid',gridTemplateColumns:'auto auto'}}>
                                   <MdLocationOn style={{marginRight:'10px'}} /><span style={{marginRight:'300px'}}>To</span>
                                   </div>
                                    <input type="text" placeholder='City from Port' className='port' />
                                </div>
                            </div>
                           
                        </div>
                        <div className='date-section' style={{marginTop:'30px'}}>
                            <div className='date'>
                                <AiFillCalendar/>Ready Date
                            </div>
                            <div className='incorterms'>
                                Incortems
                                <MdArrowDropDown style={{float:'right'}} />
                            </div>
                            <div className='date'>
                                Total Cargo Value
                            </div>
                        </div>
                    </div>
                    <div className='cargo-card'>
                        <h5>Cargo Details</h5>
                        <div className='toggle-container'>
                            <div className='toggle'>
                                <div className={`Slider ${this.state.on && 'off'}`} onClick={this.switchOn}>
                                </div>
                            </div>
                            Dangerous Cargo (ex. Chemicals, Battery)
                        </div>
                       
                        <div className='switch-container'>
                            <button style={{background:'#fff',padding:'10px',fontSize:'12px',borderRadius:'3px',border:'none',color:'#0746A7'}}>
                                Total Dimensions
                            </button>
                            <button style={{float:'right', fontSize:'12px',background:'transparent',border:'none'}}>Package Details</button>
                            
                        </div>
                        <div className='measurement-container'>
                            <fieldset style={{width:'150px',height:'40px',border:'1px solid #B0B2B7'}}>
                                <legend>Total Volume</legend>
                               <span style={{float:'right',color:'#B0B2B7'}}>cbm</span>
                            </fieldset>
                            <fieldset className='total-weight'>
                                <legend>Total Weight</legend>
                                <span style={{float:'right',color:'#B0B2B7'}}>kg</span>
                            </fieldset>
                        </div>
                    </div>
                    <div className='details-card'>
                        <h5>Additional Services</h5>
                        <div className='details-container'>
                         <p>
                            <label className='toggleSwitch' onClick=''>
                                <input type="checkbox" />
                                <span>
                                    <span></span>
                                    <span></span>
                                    Export Forwarding <br />
                                    <span className='sub'>We handle custom clearance and documentation</span>
                                </span>
                               <span></span>
                            </label>
                        </p>
                        <p>
                            <label className='toggleSwitch' onClick=''>
                                <input type="checkbox" />
                                <span>
                                    <span></span>
                                    <span></span>
                                    Import Custom Clearance <br />
                                    <span className='sub'>We handle import customs and regulatory requirements</span>
                                </span>
                                <span></span>
                            </label>
                        </p>
                        <p>
                            <label className='toggleSwitch' onClick=''>
                                <input type="checkbox" />
                                <span>
                                    <span></span>
                                    <span></span>
                                    Cargo Insurance <br />
                                    <span className='sub'>Protect your cargo from logistics risks up to its full value</span>
                                </span>
                                <span></span>
                            </label>
                        </p>
                        <p>
                            <label className='toggleSwitch' onClick=''>
                                <input type="checkbox" />
                                <span>
                                    <span></span>
                                    <span></span>
                                  Transport/Delivery <br />
                                    <span className='sub'>We deliver cargo to your doorsteps from the ports.</span>
                                </span>
                                <span></span>
                            </label>
                        </p>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}



export default Booking;