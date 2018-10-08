import React, { Component } from 'react';

import Icon from '../icon';

 class LibraryCourse extends Component {
    render() {
        return (
            <div className="library-course">
                <label className="library-course__title">Problem Solving</label>
                {Icon('fas fa-check', 'library-course__icon')}
                {/* arrow component */}
                {/* action button component */}
                {Icon('fas fa-plus-circle', 'library-course__action')}
                <div className="library-course__description">
                    <label>Course Description</label>
                    <p>ching chong Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla facilisis mi, non pellentesque metus consectetur vel. Quisque dictum, lectus vitae dignissim tincidunt, sapien nibh placerat diam, quis blandit enim nulla in felis.</p>
                </div>
            </div>
        )
    }
}
 export default LibraryCourse; 