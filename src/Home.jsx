import React from 'react'
import Navbar from './Components/Navbar'
import MenuNav from './Components/MenuNav'
import Carousel from './Components/Carousel'
import Card from './Components/Card'
import Category from './Components/Category'
import CardSlider from './Components/CardSlider'
import Footer from './Components/Footer'
function Home() {
  return (
    <div>
    <Navbar />
    <MenuNav/>
    <Carousel />
    <Card
        title="Grab The Best deal on laptop" 
        apiUrl="https://dummyjson.com/products/category/laptops" 
    />
    <Card 
        title="Grab The Best deal on smartphone" 
        apiUrl="https://dummyjson.com/products/category/smartphones" 
    /> 
    <Category/>
    <CardSlider/>
    <Footer/>
    </div>
  )
}

export default Home