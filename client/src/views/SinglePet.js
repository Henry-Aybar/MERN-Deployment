import React, {useEffect, useState} from 'react';
import axios from 'axios';
import PetBoxOnePet from "../components/PetBoxOnePet"
import { useParams, useHistory } from 'react-router';

const SinglePet = (props) => {

    const {_id} = useParams();
    const history = useHistory();
    const [pets, setPets] = useState([]);
    
    useEffect(()=>{
      axios.get(`http://localhost:8000/api/pets/pet/${_id}`)
        .then(res=>{
          console.log(res.data.results);
          setPets(res.data.results);
        })
        .catch(err=>console.log(err))
    }, [_id])

    const onLikeHandler = (_id) => {
        console.log(_id);

        axios.patch(`http://localhost:8000/api/pets/${_id}/upvote`)
            .then(res=>{
                console.log(res);

                const copyPets = {...pets};
                copyPets.score++;
                setPets(copyPets);
                
            })
            .catch(err=>console.log(err))
    
    }

    const onDeleteHandler = (_id) => {
        // console.log(_id)
        axios.delete(`http://localhost:8000/api/pets/${_id}/delete`)
            .then(res =>{
                console.log(res);

                history.push("/");
            })
            .catch(err=>console.log(err))
    }

    return(
        <div className='w-75 mx-auto'>
            <PetBoxOnePet pet={pets} onLikeHandler={()=>onLikeHandler(_id)} onDeleteHandler={()=>onDeleteHandler(_id)} />
        </div>
    )
}

export default SinglePet;