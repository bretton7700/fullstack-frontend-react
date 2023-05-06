import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditUser() {
    const postUsersUrl = "http://localhost:8080/user";
    let navigate = useNavigate();
    const {id} = useParams();

    const [user,setUser] = useState({
        name: '',
        username:'',
        email: ''
    });

    const {name,username,email}=user

    const onInputChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})

    }
    useEffect (() =>{
        loadUser()
    },[])

    const onSubmit =async(e) =>{
        e.preventDefault();
        await axios.put(`${postUsersUrl}/${id}`,user);
        navigate('/');


    }


    const loadUser = async () =>{
        const res = await axios.get(`${postUsersUrl}/${id}`);
        setUser(res.data)
    }
  return (
    <div className='container'>

        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>Edit User</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                <div className='mb-3'>
                    <label htmlFor='Name' className='form-label'>
                        Name
                    </label>
                    <input
                    type={"text"}
                    className='form-control'
                    placeholder='Enter your Name'
                    name='name'
                    value={name}
                    onChange={(e)=>onInputChange(e)}/>

                </div>

                <div className='mb-3'>
                    <label htmlFor='Email' className='form-label'>
                        E-mail
                    </label>
                    <input
                    type={"text"}
                    className='form-control'
                    placeholder='Enter Your Email'
                    name='email'
                    value={email}
                    onChange={(e)=>onInputChange(e)}/>

                </div>

                <div className='mb-3'>
                    <label htmlFor='username' className='form-label'>
                        UserName
                    </label>
                    <input
                    type={"text"}
                    className='form-control'
                    placeholder='Enter your userName'
                    name='username'
                    value={username}
                    onChange={(e)=>onInputChange(e)}/>

                </div>
                <button type='submit' className='btn btn-outline-primary'>Submit</button>
                <Link  className='btn btn-outline-danger mx-2' to='/'>Cancel</Link>
                </form>
            </div>


        </div>
    </div>
  )
}
