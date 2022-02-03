import React, {useEffect, useState} from 'react';
import axios from 'axios';
import PetBox from "../components/PetBox"

const Main = (props) => {
    
    const [pets, setPets] = useState([]);

    useEffect(()=>{
      axios.get("http://localhost:8000/api/pets/findAll")
        .then(res=>{
          console.log(res.data.results);
          setPets(res.data.results);
        })
        .catch(err=>console.log(err))
    }, [])

    const onLikeHandler = (_id, arrIndex) => {
        console.log(_id);
        console.log(arrIndex);

        axios.patch(`http://localhost:8000/api/pets/${_id}/upvote`)
            .then(res=>{
                console.log(res);

                const copyPets = [...pets];
                copyPets[arrIndex].score++;
                copyPets.sort((a, b) => b.score - a.score);
                setPets(copyPets);
            })
            .catch(err=>console.log(err))
    }

    const onDeleteHandler = (_id, index) => {
        // console.log(_id)
        axios.delete(`http://localhost:8000/api/pets/${_id}/delete`)
            .then(res =>{
                console.log(res);

                const copyPets = [...pets];
                copyPets.splice(index, 1);
                setPets(copyPets);
            })
            .catch(err=>console.log(err))
    }

    return(
        <div className='w-75 mx-auto'>
            <h1>Pet Shelter</h1>
            <h3>These pets are looking for a good home!</h3>
            {
                pets.map((item,i)=>{
                    return <PetBox key={i} pet={item} onLikeHandler={()=>onLikeHandler(item._id, i)} onDeleteHandler={()=>onDeleteHandler(item._id, i)}/>
                })
            }
        </div>
    )
}

export default Main;