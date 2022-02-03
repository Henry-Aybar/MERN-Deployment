import React, {useState} from 'react';
import {useHistory, Link} from 'react-router-dom';



const PetBox = (props) => {

    const [disableLikebutton, setDisableLikeButton] = useState(false);

    
    return(
        <div className='petBox'>
            <h1><button className='btn btn-success' disabled={disableLikebutton} onClick={()=>{props.onLikeHandler(); setDisableLikeButton(true);}}>👍{props.pet.score}</button></h1>
            <h3>{props.pet.name}</h3>
            <ul>
                <li>type: {props.pet.type}</li>
                <li>description: {props.pet.description}</li>
                <li>skill 1: {props.pet.skillOne}</li>
                <li>skill 2: {props.pet.skillTwo}</li>
                <li>skill 3: {props.pet.skillThree}</li>
                <li>Number of Current Legs: {props.pet.numLegs}</li>
                
            </ul>
            <div className='d-flex '>
            <button className='btn btn-danger' onClick={()=>{props.onDeleteHandler()}}>🏡 Adopt Pet</button>
            </div>
        </div>
    )
}

export default PetBox;