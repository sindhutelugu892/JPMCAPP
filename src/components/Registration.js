import React from "react"
import {useForm}  from 'react-hook-form'

function Registration(){
    const { register, handleSubmit,formState:{errors} } = useForm();
            const onFormSubmit=(userData)=>{
                console.log(userData)
            }

    return(
        <div className='row' style={{backgroundImage:"url(https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/how-to-host-a-virtual-book-club2-1585775401.jpg)",backgroundRepeat:"no-repeat",backgroundSize:"cover" }}>
        <h1 className='display-6 text-center mt-2 text-light'>Registration form</h1>
        <div className='col-10 col-sm-8 col-md-5 mx-auto bg-dark text-light p-3 mt-3 x' style={{backgroundImage:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXoGWQoPOwz3AlBR0feGPj6fqSJkolGS60_w&usqp=CAU)",backgroundRepeat:"no-repeat",backgroundSize:"cover"}} >
            <form onSubmit={handleSubmit(onFormSubmit)}  >
        
        
        <div className="mb-3">
                    <label htmlFor='un' className='lead'>Username</label>
                    <input type='text' id='un' className='form-control'  {...register('username',{required:true,minLength:7})}/>
                    {errors.username?.type==='required'&&<p className='text-danger'>*Username required</p>}
                    {errors.username?.type==='minLength'&&<p className='text-danger'>*Minimum 7 characters required</p>} 

            </div>
            <div className="mb-3">
                    <label htmlFor='dob' className='lead'>Date of birth</label>
                    <input type='date' id='dob' className='form-control'  {...register('dob',{required:true})}/>
                    {errors.dob?.type==='required'&&<p className='text-danger'>*Dob required</p>}
            </div>
            
            <div className="mb-3">
                    <label htmlFor='email' className='lead'>Email</label>
                    <input type='email' id='email' className='form-control'  {...register('email',{required:true})}/>
                    {errors.mail?.type==='required'&&<p className='text-danger'>*Mail Id required</p>}
            </div>
            <div className="mb-3">
            <label >Gender</label>
            {errors.gender?.type==='required'&&<p className='text-danger'>*Kindly mention your gender</p>}
                        <div className="form-check">
                        
                            <input type="radio" id="male" className="form-check-input" {...register("gender",{required:true})} />
                            <label htmlFor="male" className="form-check-label">Male</label>
                        </div>
                        <div className="form-check">
                            <input type="radio" id="male" className="form-check-input" {...register("gender")}/>
                            <label htmlFor="female" className="form-check-label">Female</label>
                        </div>

            </div>
            <div>
            <label htmlFor="branch" className='lead mt-3'>Branch</label>
                        <select id="branch" className="form-select" defaultValue={'CSE'} {...register("branch")} >

                            <option value="cse">CSE</option>
                            <option value="it">IT</option>
                            <option value="ece">ECE</option>
                        </select>

           </div>
           <p className='lead mt-2'>Skills</p>
                        <div className="form-checkbox">
                        {errors.skills?.type==='required'&&<p className='text-danger'>*Select atleast one course</p>}
                            <input type="checkbox" className='form-checkbox m-2' id="cb" {...register("skills",{required:true})}/>                  
                            <label htmlFor="checkbox" className='checkbox'>HTML</label><br></br>
                            <input type="checkbox" className="form-checkbox m-2" id="cb" {...register("skills")}/>
                            <label htmlFor="checkbox" className="checkbox">CSS</label><br></br>
                            <input type="checkbox" className="form-checkbox m-2" id="cb" {...register("skills")}/>
                            <label htmlFor="checkbox" className="checkbox">JAVASCRIPT</label><br></br>
                            <input type="checkbox" className="form-checkbox m-2" id="cb" {...register("skills")}/>
                            <label htmlFor="checkbox" className="checkbox">MongoDB</label>
                        </div>
                    <div>
                        <label htmlFor="desc" className='lead mt-3'>Description</label>
                        <textarea id="desc" rows="5" className="form-control" {...register("desc")}></textarea>
                    </div>
                        <button type="submit" className="btn btn-danger w-100 mt-4 mb-4 ">Register</button>
                        
                  </form>
                </div>
            </div>

       )
    }
    export default Registration

    