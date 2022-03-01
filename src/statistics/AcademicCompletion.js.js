import React, { Component } from 'react'
import { ProgressBar } from 'react-bootstrap'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';

export class AcademicCompletion extends Component {
    
    state = {
        academic_completion: 66,
    }

    render() {
        return (
            <div className='academic_completion_block'>
                <CircularProgressbar value={this.state.academic_completion} maxValue={100} text={`${this.state.academic_completion}%`} className='style-bar' styles={{
                    path: {
                        stroke: 'darkgreen'
                    },
                    text: {
                        fill: 'black'
                    }   
                }}/>
                <div className='title-bar-1'>
                    <p>Academic Completion</p>
                </div>
            </div>
        )
    }
}

export default AcademicCompletion;