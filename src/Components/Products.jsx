import React from 'react'
import Product from './Product'
const Products = () => {

    const products= [
        {title: "Arqitel", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptatem autem beatae suscipit saepe molestiae perspiciatis nobis.", live:true, case:false},
        {title: "TTR", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptatem autem beatae suscipit saepe molestiae perspiciatis nobis.", live:true, case:false},
        {title: "YIR 2025", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptatem autem beatae suscipit saepe molestiae perspiciatis nobis.", live:true, case:true},
        {title: "Yahoo!", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptatem autem beatae suscipit saepe molestiae perspiciatis nobis.", live:true, case:true},
    ]

  return (
    <div className='mt-32'>

      {products.map((item,index) => <Product val={item} />)}
    </div>
  )
}

export default Products
