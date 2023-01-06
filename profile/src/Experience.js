import React from 'react';
import './Experience.css';


function Experience(props) {

    return (
        <div>
            <ul>
                <li>{props.name}</li>
                <li>{props.role}</li>
                <li>{props.location}</li>
                <li>{props.website}</li>
            </ul>
        </div>
    );

}

export default Experience;