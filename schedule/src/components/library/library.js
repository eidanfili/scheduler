import React, { Component } from 'react';

import LibraryCourse from './libraryCourse'

class Library extends Component {
    render() {
        return(
            <div className="library">
                <h2>Library</h2>
                <LibraryCourse />
                <LibraryCourse />
                <LibraryCourse />
            </div>
        )    
    }
}
export default Library;