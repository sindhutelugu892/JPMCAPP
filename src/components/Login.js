import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

function Login() {

      const navigate = useNavigate();
      const { register, handleSubmit, formState: { errors } } = useForm();
      const onFormSubmit = (userData) => {
            console.log(userData)
      }

      return (
            <div className='row'>



                  
                  <h1>USER REGISTRATION</h1>
                  <div className='col-10 col-sm-8 col-md-5 mx-auto mt-5 pt-5'>
                        <form onSubmit={handleSubmit(onFormSubmit)} className='w-75'>
                              <div className='mb-3'>
                                    <label htmlFor='un' className='lead'>username</label>
                                    <input type='text' id='un' className='form-control '   {...register('username')}></input>
                              </div>
                              <div className='mb-3'>
                                    <label htmlFor='pa' className='lead'>password</label>
                                    <input type='text' id='pa' className='form-control '   {...register('password')}></input>
                              </div>
                              <button className="btn btn-success w-100 mt-4 mb-4 " OnClick={()=>navigate('/tohome')}>Register</button>
                              <div className='mx-auto text-center'>
                                    <Link className='nav-link bg-success text-white rounded' to="home">Register</Link>
                              </div>
                        </form>
                  </div>
            </div>


      )
}


export default Login