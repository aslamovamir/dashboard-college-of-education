import React, { Component } from 'react'
import { ProgressBar } from 'react-bootstrap'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';

export class CommunityEngagement extends Component {
    
    state = {
        community_engagement: 23,
    }

    render() {
        return (
            <div className='community_engagement_block'>
                <CircularProgressbar value={this.state.community_engagement} maxValue={100} text={`${this.state.community_engagement}%`} className='style-bar' styles={{
                    path: {
                        stroke: 'darkgreen'
                    },
                    text: {
                        fill: 'black'
                    }   
                }}/>
                <div className='title-bar-2'>
                    <p>Community Engagement</p>
                </div>
            </div>
        )
    }
}

export default CommunityEngagement;