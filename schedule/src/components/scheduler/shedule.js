import React, { Component } from 'react';
import { connect } from 'react-redux';

import Gradient from '../gradient';
import ScheduleCourse from './scheduleCourse';
import ProgressTracker from './progresstracker'

class Schedule extends Component {

    renderCourses() {
        const data = this.props.courses
        
        return data.map((course, index) => {
            if (course.enrolled){
            return <ScheduleCourse key={index} {...course} />
            }
        })
    }
    render() {
        return(
            <div className="schedule">
                <h2>Schedule</h2>
                {this.renderCourses}
                <ProgressTracker/>
                <Gradient />
            </div>
        )    
    }
}


function mapStateToProps(state) {
    return {
        courses: state.courses
    }
}

export default connect(mapStateToProps)(Schedule);