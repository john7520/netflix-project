import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Banner from '../components/banner/Banner'

function Home() {
  return (
    <div style={
      {
        display: "flex",
        flexDirection:"column"
      }
    }>
      <Header />
      <Banner />
      <Footer />
      
    </div>
  )
}

export default Home