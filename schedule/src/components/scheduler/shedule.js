import React, { Component } from 'react';
import Gradient from '../gradient';
import ScheduleCourse from './scheduleCourse';

class Schedule extends Component {
    render() {
        return(
            <div className="schedule">
                <h2>Schedule</h2>
                <ScheduleCourse title={'Problem Solving'}/>
                <ScheduleCourse title={'Problem Solving'}/>
                <ScheduleCourse title={'Problem Solving'}/>
                <Gradient />
            </div>
        )    
    }
}
export default Schedule;