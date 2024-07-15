import React from 'react'
import { NavBar } from './NavBar/NavBar'
import { Favorites } from './Favorites/Favorites'
import { Load } from './Load/Load'
import { FooterEnd } from '../Page/Footer/FooterEnd'

export const FavPage = () => {
  return (
    <div className='container-home'>  
       <Load/>
       <NavBar/>
       <Favorites/> 
       <FooterEnd/>
    </div>
  )
}