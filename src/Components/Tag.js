import { React, Component } from 'react';
import './Tag.css'

class Tag extends Component {
    render() {
        return (
            <div className='tag-flex-container'>
                <p>{this.props.tag}</p>
            </div>
        )
    }
}

export default Tag;