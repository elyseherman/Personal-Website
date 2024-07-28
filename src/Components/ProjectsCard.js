import { React, Component } from 'react';
import './Card.css';
import Tag from './Tag.js';

class ProjectsCard extends Component {
    render() {
        return (
            <div className='flex-container'>
                <div className='card-left-component' style={{width:'auto'}}>
                    <img src={this.props.src} alt={this.props.alt} style={{height: '80px', marginTop: '6px', borderRadius: '5%'}} />
                </div>
                <div className='card-right-component'>
                    <h4 className='title'>{this.props.projectTitle}</h4>
                    <p className='description normal'>{this.props.description}</p>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        {this.props.tag1 !== null ? <Tag tag={this.props.tag1} /> : null}
                        {this.props.tag2 !== null ? <Tag tag={this.props.tag2} /> : null}
                        {this.props.tag3 !== null ? <Tag tag={this.props.tag3} /> : null}
                        {this.props.tag4 !== null ? <Tag tag={this.props.tag4} /> : null}
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectsCard;