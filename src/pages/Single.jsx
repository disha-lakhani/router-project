import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Single = () => {
  let { id } = useParams()
  let [product, setproduct] = useState({})

  const getsingleproduct = async (id) => {
    let res = await axios.get(`https://fakestoreapi.com/products/${id}`)
    setproduct(res.data)
  }

  useEffect(() => {
    getsingleproduct(id)
  }, [])
  return (

    <div>
      <img src={product.image} />
      <h3>{product.title}</h3>
      <h4>{product.price}</h4>
    </div>

  )
}

export default Single