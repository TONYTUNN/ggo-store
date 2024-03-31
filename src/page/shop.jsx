import React from 'react'
import { Hero } from '../component/Hero/Hero'
import { Popular } from '../component/Popular/Popular'
import { Offers } from '../component/Offers/Offers'
import { Newcollections } from '../component/Newcollections/Newcollections'
import { Newsletter } from '../component/NewsLetter/Newsletter'


export const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <Newcollections/>
      <Newsletter/>

    </div>
  )
}
