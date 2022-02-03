import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';


const Create = (props) => {

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

    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        axios.post("http://localhost:8000/api/pets/create", form)
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
            <h1>Pet Shelter</h1>
            <h3>Know a pet needing a home?</h3>
            <form className="mt-5 w-50 mx-auto" onSubmit={onSubmitHandler}>
                <div className="form-group mb-2" onChange={onChangeHandler}>
                    <h5>Pet Name:</h5>
                    <input type="text" name="name" className='form-control' placeholder='Petname' />
                    <span className='alert-danger'>{errors.name && errors.name.message}</span>
                </div>

                <div className="form-group mb-2" onChange={onChangeHandler}>
                    <h5>Pet Type:</h5>
                    <input type="text" name="type" className='form-control' placeholder='Pet Type' />
                    <span className='alert-danger'>{errors.type && errors.type.message}</span>
                </div>
         
                <div className="form-group mb-2" onChange={onChangeHandler}>
                    <h5>Pet Description:</h5>
                    <input type="text" name="description" className='form-control' placeholder='Give a Description' />
                    <span className='alert-danger'>{errors.description && errors.description.message}</span>
                </div>

                <div className="form-group mb-2" onChange={onChangeHandler}>
                    <h5>Pet Skill:</h5>
                    <input type="text" name="skillOne" className='form-control' placeholder='Name a Skill your Pet has' />
                    <span className='alert-danger'>{errors.skillOne && errors.skillOne.message}</span>
                </div>

                <div className="form-group mb-2" onChange={onChangeHandler}>
                    <h5>Pet Skill:</h5>
                    <input type="text" name="skillTwo" className='form-control' placeholder='Name a Skill your Pet has' />
                    <span className='alert-danger'>{errors.skillTwo && errors.skillTwo.message}</span>
                </div>

                <div className="form-group mb-2" onChange={onChangeHandler}>
                <h5>Pet Skill:</h5>
                    <input type="text" name="skillThree" className='form-control' placeholder='Name a Skill your Pet has' />
                    <span className='alert-danger'>{errors.skillThree && errors.skillThree.message}</span>
                </div>

                <div className="form-group mb-2" onChange={onChangeHandler}>
                    <h5>"how many Legs are does you pet have pet (otional):"</h5>
                    <input type="number" name="numLegs" className='form-control' placeholder='Optional hoe many Legs Dose you Pet have?' />
                </div>

                <input type="submit" className='btn btn-primary'/>
            </form>
        </div>
    )
}

export default Create;