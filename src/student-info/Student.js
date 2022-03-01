import React, { Component } from 'react'
import bull from './bull-logo.png'


class Student extends Component {

  state = {
    name: 'John Doe',
    email: 'johndoe@usf.edu',
    advisor: 'Alyssa Chism, M.Ed.',
    advisor_email: 'alyssaugas@usf.edu',
    entry_term: 'Spring 2022',
    usf_gpa: '3.80',
    overall_gpa: '3.92',
    honors_status: 'Active'
  }


  render() {
    return (
      <div className='student-box'>
        <p className='welcome-message'>Welcome!</p>
        <div>
          <img src={bull} alt="USF bull logo" className='bull' />
        </div>
        <div className='info'>
          <p>Name: {this.state.name}</p>
          <p>Email: {this.state.email}</p>
          <p>Advisor: {this.state.advisor}</p>
          <p>Advisor Email: {this.state.advisor_email}</p>
          <p>Entry Term: {this.state.entry_term}</p>
          <p>USF GPA: {this.state.usf_gpa}</p>
          <p>Overall GPA: {this.state.overall_gpa}</p>
          <p>Status: {this.state.honors_status}</p>
        </div>
      </div>
    )
  }
}

export default Student