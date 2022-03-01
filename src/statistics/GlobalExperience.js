import React, { Component } from 'react'
import { ProgressBar } from 'react-bootstrap'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';

export class GlobalExperience extends Component {
    
    state = {
        global_experience: 89,
    }

    render() {
        return (
            <div className='global_experience_block'>
                <CircularProgressbar value={this.state.global_experience} maxValue={100} text={`${this.state.global_experience}%`} className='style-bar' styles={{
                    path: {
                        stroke: 'darkgreen'
                    },
                    text: {
                        fill: 'black'
                    }   
                }}/>
                <div className='title-bar-3'>
                    <p>Global Experience</p>
                </div>
            </div>
        )
    }
}

export default GlobalExperience;