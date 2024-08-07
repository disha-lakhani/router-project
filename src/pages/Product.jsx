import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import '../style/product.css'
import Filters from '../component/Filters'


const Product = () => {
  let [query, setquery] = useSearchParams()
  let[List,setList]=useState([])
  let [products, setproducts] = useState([])

  const getproduct = async () => {


    let res = await axios.get("https://fakestoreapi.com/products")
    setproducts(res.data)
  }

  const sortby=(orderby)=>{
    let data=[...products]
    if(orderby=="LTH"){
      data=data.sort((a,b)=>a.price-b.price)
      setList(data)
    }
    else{
      data=data.sort((a,b)=>b.price-a.price)
      setList(data)

    }
  }

  const filterbycategory=(category)=>{
    let data=[...products]
    data=data.filter((ele)=>ele.category==category)
    setList(data)
  }

  useEffect(() => {
    getproduct()
  }, [])

  useEffect(() => {
    let sort = query.get("sort")
    let category = query.get("category")
    
    if(sort){
      sortby(sort)
    }

    if(category){
      filterbycategory(category)
    }
    if(sort==null && category==null){
      setList(products)
    }
  }, [query])

  return (
    <div className='products' >
      <div>
        <Filters />
      </div>
      {
        List.map((ele) => (

          <Link to={`/product/${ele.id}`}>
            <div>

              <img src={ele.image} />
              <h5>{ele.title}</h5>
              <h4>{ele.price}</h4>
            </div>

          </Link>
        ))

      }

    </div>
  )
}

export default Product