import React, { Component } from 'react';

import Icon from '../icon';
import Arrow from '../arrow';
import Action from '../action'

 class ScheduleCourse extends Component {
    render() {
        return (
            <div className="schedule-course">
                <label>{this.props.title}</label>
            </div>
        )
    }
}
 export default ScheduleCourse; 