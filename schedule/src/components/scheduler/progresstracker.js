import React, { Component } from 'react';

class ProgressTracker extends Component {
    render(){
        return(
            <div className="progress-tracker">
                <label className="progress-tracker__label">Progress Tracker</label>
                <div className="progress-tracker__percentage">
                </div>
            </div>
        )
    }
}
export default ProgressTracker