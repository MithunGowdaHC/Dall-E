import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import FormField from '../components/FormField'

const Home = () => {

  const [state, setState] = useState()
  useEffect(()=>{

  },[])
  return (
    <div>
      <Card/>
      <FormField/>
    </div>
  )
}

export default Home