import React from 'react';
import logo_usf from './usf-logo.png';
import { Link, NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import Student from '../student-info/Student';
import AcademicCompletion from '../statistics/AcademicCompletion.js';
import CommunityEngagement from '../statistics/CommunityEngagement';
import GlobalExperience from '../statistics/GlobalExperience';
import InputField from '../inputs/InputField';


const Dashboard = () => {
  return (
        <header className='header'>
            <Navbar />
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-6'>
                        <Student />
                    </div>
                    <div className='col-sm-6'>
                        <div className='statistics'>
                            <AcademicCompletion />
                            <CommunityEngagement />
                            <GlobalExperience />
                        </div>
                    </div>
                    <div className='col-sm-6'>
                        <InputField />    
                    </div>
                </div>
            </div>
        </header>
  )
}


export default Dashboard;