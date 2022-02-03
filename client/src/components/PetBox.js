import React, {useState} from 'react';
import {useHistory, Link} from 'react-router-dom';



const PetBox = (props) => {

    return(
        <div className='petBox'>
            <h1>{props.pet.name}</h1>
            <h3>Type: {props.pet.type}</h3>
            <div className='d-flex'>
            <Link className='btn btn-warning' to={`/pets/${props.pet._id}/edit`}>Edit</Link>
            <Link className='btn btn-primary' to={`/pets/${props.pet._id}/view`}>View</Link>
            </div>
        </div>
    )
}

export default PetBox;