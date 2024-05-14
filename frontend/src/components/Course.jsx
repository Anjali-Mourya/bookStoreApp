import React from 'react'
import Cards from './Cards'
import list from '../../public/List.json'
import { Link } from 'react-router-dom'

const Course = () => {
  return (
    <>
      <div className='max-w-screen-2xl container  mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
          <h1 className='text-2xl  md:text-4xl'>We're delighted to have you <span className='text-pink-500'> Here! :)</span> </h1>
          <p className='mt-12'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut officiis sequi laborum nulla! Deserunt ad provident consequuntur doloribus, ex voluptate reiciendis culpa dolores libero soluta pariatur dicta iure iste sunt eaque consequatur expedita ratione ipsam exercitationem assumenda amet eveniet quas alias. quis porro est  rerum a similique dolor, temporibus tenetur ratione in! Fugiat, sunt.</p>
          <Link to='/'>
          <button className='bg-pink-500 text-white px-4 mt-6 py-2 rounded-md hover:bg-pink-700 duration-200'>Back</button>
          </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
          {
            list.map((item)=>(
              <Cards key={item.id} item={item} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Course
