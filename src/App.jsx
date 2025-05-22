import React from 'react'
import Nav from './Components/Nav'
import Work from './Components/Work'
import Stripes from './Components/Stripes'
import Products from './Components/Products'
import Marquess from './Components/Marquess'
import Cards from './Components/Cards'
import Footer from './Components/Footer'
const App = () => {
  return (
    <div className='w-full bg-zinc-900 text-white font-["satoshi"]' >
      <Nav />
      <Work />
      <Stripes />
      <Products />
      <Marquess />
      <Cards />
      <Footer />
    </div>
  )
}

export default App
