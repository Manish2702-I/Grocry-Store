import React, { useState } from 'react'
import Title from '../Title/Title'

const Product = () => {

  const productlist = ['All' , 'Fruits' , 'Vegetables' , 'Dairy' , 'SeaFood'];
  const [isActivetab , setisActivetab] = useState('All')

  return (
    <section>
        <div>
            <Title name = "Our Products" />
            <div className='flex gap-5 justify-center mt-20'>
              {productlist.map((items , index) =>{
                return (
                  <div className={`${isActivetab === items ? 'bg-orange-700 text-white' : 'bg-zinc-400'} px-3 py-2 rounded-lg text-2xl font-semibold`}>
                    {items}
                  </div>
                )
              })}
            </div>
        </div>
    </section>
  )
}

export default Product
