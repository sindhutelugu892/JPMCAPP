import { useForm } from 'react-hook-form'
import { useState } from 'react'
import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight, faTasks } from '@fortawesome/free-solid-svg-icons'
import todolist from '../images/1.svg'

function AddToDo() {
    const {register,handleSubmit,formState:{errors}}=useForm()
    const [todos,setTodos]=useState([])
    const onFormSubmit=(todoObj)=>{
        setTodos([...todos,todoObj.todo])
    }
    
    return(
            <div className='row row=11 row-sm-10 row-md-6'>
            <p className='display-6 ml-3 heading'><FontAwesomeIcon icon={faTasks} className='text-danger' /> AddToDo</p> 
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <div className='mb-3'>
                    <label htmlFor='todo' className='lead mb-3 para'>Enter your todo tasks</label><br></br>
                    <input type="text" id="todo"  className='form-control ' {...register("todo",{required:true})}/>
                    {errors.todo?.type==='required'&&<p className='text-danger heading'>*Task is required</p>}
                </div>
                <button className='btn btn-primary w-50 mt-3 para' type='submit' style={{backgroundColor:"#6f5193"}}>Add todo</button>
            </form>
          <mt-4>
              <h4 className=' display-6 fs-2 heading'>List of your Todos</h4>
             <img src={todolist} className='w-25 mx-auto'/> 
              {
                  todos.map((todo,index)=><h3 className='text-secondary para' key={index}><FontAwesomeIcon icon={faAngleDoubleRight} size='xs' className='text-danger'/> {todo}</h3>)
              }
          </mt-4>
        </div>

    )
}

export default AddToDo

