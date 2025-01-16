import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import FormField from '../components/FormField'

const Home = () => {

  
  const [ loading, setLoading] = useState(false)
  const [ allPosts, setAllPosts] = useState([])
  return (
    <section className=' max-w-7xl'>
      <div>
        <h1 className=' text-[#222328 ] font-extrabold'>
          The Community Showcase
        </h1>
      </div>

    </section>
  )
}

export default Home