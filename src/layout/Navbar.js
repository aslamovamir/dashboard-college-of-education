import React from 'react';
import logo_usf from './usf-logo5.png';

const Navbar = () => {
  return (
    <div>
        <nav className='navbar navbar-static-top navbar-style' role='navigation'>
            <div className='container'>
                <div className='navbar-header'>
                    <button type='button' className='navbar-toggle' data-toggle='collapse' data-target="#micon">
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                    </button>
                {/* <a href=""><img src={logo_usf} className='logo-usf' alt='usf logo'/></a> */}
                <a href="https://www.usf.edu" className="title-logo">University Of South Florida</a>
                </div>
                <div className='collapse navbar-collapse' id='micon'>
                    <ul className='nav navbar-nav navbar-right'>
                        <li><a href=''>Dashboard</a></li>
                        <li><a href=''>Waiting Room</a></li>
                        <li><a href='https://www.usf.edu/education/undergraduate/academic-advising/admissions-requirements.aspx'>Requirements</a></li>
                        <li><a href='https://www.usf.edu/education/undergraduate/academic-advising/index.aspx'>Appointments</a></li>
                        <li><a href='https://www.usf.edu/education/undergraduate/academic-advising/course-permit-requests.aspx'>Permit Request</a></li>
                        <li><a href='https://my.usf.edu/myusf/home_myusf/index'>MyUSF</a></li>
                    </ul>
                </div>
            </div>  
        </nav>
        <div className='title'>College of Education</div>
    </div>
  )
}

export default Navbar;