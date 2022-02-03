import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router';


const Edit = (props) => {

    const {_id} = useParams();
    const [errors, setErrors] = useState({})
    const history = useHistory();

    const [form, setForm] = useState({
        name: "",
        type: "",
        description: "",
        skillOne:"",
        skillTwo: "",
        skillThree: "",
    })

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/pet/${_id}`)
            .then(res=>{
                console.log(res.data.results);
                setForm(res.data.results);
            })
            .catch(err=>console.log(err))
    },[_id])

    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        axios.patch(`http://localhost:8000/api/pets/${_id}/update`, form)
            .then(res=>{
                console.log(res);
                history.push("/")
            })
            .catch(err=>{
                console.log(err.response.data.err.errors);
                setErrors(err.response.data.err.errors);
            })
    }

    return(
        <div>
            
            <form className="mt-5 w-50 mx-auto" onSubmit={onSubmitHandler}>
                <h1>Pet Shelter</h1>
                <h3>Edit {form.name} info?</h3>
                <div className="form-group mb-2" onChange={onChangeHandler}>
                    <h5>Pet Name:</h5>
                    <input type="text" name="name" className='form-control' placeholder='Petname' value={form.name}/>
                    <span className='alert-danger'>{errors.name && errors.name.message}</span>
                </div>

                <div className="form-group mb-2" onChange={onChangeHandler}>
                    <h5>Pet Type:</h5>
                    <input type="text" name="type" className='form-control' placeholder='Pet Type' value={form.type}/>
                    <span className='alert-danger'>{errors.type && errors.type.message}</span>
                </div>
         
                <div className="form-group mb-2" onChange={onChangeHandler}>
                    <h5>Pet Description:</h5>
                    <input type="text" name="description" className='form-control' placeholder='Give a Description' value={form.description}/>
                    <span className='alert-danger'>{errors.description && errors.description.message}</span>
                </div>

                <div className="form-group mb-2" onChange={onChangeHandler}>
                    <h5>Pet Skill:</h5>
                    <input type="text" name="skillOne" className='form-control' placeholder='Name a Skill your Pet has' value={form.skillOne}/>
                    <span className='alert-danger'>{errors.skillOne && errors.skillOne.message}</span>
                </div>

                <div className="form-group mb-2" onChange={onChangeHandler}>
                    <h5>Pet Skill:</h5>
                    <input type="text" name="skillTwo" className='form-control' placeholder='Name a Skill your Pet has' value={form.skillTwo}/>
                    <span className='alert-danger'>{errors.skillTwo && errors.skillTwo.message}</span>
                </div>

                <div className="form-group mb-2" onChange={onChangeHandler}>
                    <h5>Pet Skill:</h5>
                    <input type="text" name="skillThree" className='form-control' placeholder='Name a Skill your Pet has' value={form.skillThree}/>
                    <span className='alert-danger'>{errors.skillThree && errors.skillThree.message}</span>
                </div>

                <div className="form-group mb-2" onChange={onChangeHandler}>
                    <h5>"how many Legs are does you pet have pet (otional):"</h5>
                    <input type="number" name="numLegs" className='form-control' placeholder='Optional hoe many Legs Dose you Pet have?' value={form.numLegs}/>
                </div>

                <input type="submit" className='btn btn-primary'/>
            </form>
        </div>
    )
}

export default Edit;