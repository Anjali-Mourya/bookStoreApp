import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form";


const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <>
      <div className='flex h-screen items-center justify-center '> 
      <div  className="w-[600px]">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    
    <h3 className="font-bold text-lg">Signup</h3>
    {/* name  */}
    <div className='mt-4 space-y-2'>
      <span>Name</span><br></br>
      <input type="text" placeholder='Enter your fullname' className='w-80 px-3 py-1 border rounded-md outline-none' 
      {...register("fullname", { required: true })}/><br/>
      {/* errors will return when field validation fails  */}
      {errors.fullname && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    {/* email  */}
    <div className='mt-4 space-y-2'>
      <span>Email</span><br></br>
      <input type="email" placeholder='Enter your email' className='w-80 px-3 py-1 border rounded-md outline-none'
      {...register("email", { required: true })}/><br/>
      {/* errors will return when field validation fails  */}
      {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    {/* password  */}
    <div className='mt-4 space-y-2'>
      <span>Password</span><br></br>
      <input type="password" placeholder='Enter your password' className='w-80 px-3 py-1 border rounded-md outline-none'
      {...register("password", { required: true })}/><br/>
      {/* errors will return when field validation fails  */}
      {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    {/* Button  */}
    <div className='flex justify-around mt-4'>
      <button type='submit' className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700'>Signup</button>
      <p className='text-xl'>Have account? <button  className='underline text-blue-500 cursor-pointer' onClick={()=>document.getElementById("my_modal_3").showModal()}>Login</button> {" "} 
      </p>
    </div>
    </form>
    <Login/>
  </div>
</div>
      </div>
    </>
  )
}

export default Signup