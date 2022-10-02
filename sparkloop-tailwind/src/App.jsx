import React from 'react'
import Brands from './components/Brands'
import Features from './components/Features'
import Footer from './components/Footer'
import Giveaway from './components/Giveaway'
import Header from './components/Header'
import Hero from './components/Hero'
import Offer from './components/Offer'
import Partnerships from './components/Partnerships'
import Referral from './components/Referral'
import Testimonial from './components/Testimonial'

const App = () => {
  const clientOne =
  {
    img: "https://global-uploads.webflow.com/6278ffab9cf6e95f0162ea8e/62af380ee7ad8f79aa28950c_cropped-dan-oshinsky-dot-com-header-scaled-1%20(1)-p-800.jpeg",
    des: "SparkLoop is the fastest way to get a newsletter referral program — like TheSkimm and Morning Brew — up and running. I've tested different referral tools, but none is as easy to use or as cost effective as SparkLoop...",
    name: "Dan Oshinsky",
    from: "Inbox Collective",
  }

  const clientTwo =
  {
    img: "https://global-uploads.webflow.com/6278ffab9cf6e95f0162ea8e/62af3883e7ad8f0a992896e2_manu%20cinca%20(1).jpeg",
    des: "SparkLoop is the Before moving to SparkLoop I spent ages trying to hack together a referral giveaway with other tools. What you've built here is so much better for newsletter growth than anything else on the market! way to get a newsletter referral program — like TheSkimm and Morning Brew — up and running. I've tested different referral tools, but none is as easy to use or as cost effective as SparkLoop....",
    name: "Dan Emanuel Cinca",
    from: "Inbox Stacked Marketer newsletter",
  }
  const clientThree =
  {
    img: "https://global-uploads.webflow.com/6278ffab9cf6e95f0162ea8e/62af399682ada244d3a0503c_Jason%20Headshot%20with%20Laptop%20(1)-p-800.jpeg",
    des: "We upgraded to SparkLoop because it's obviously the best referral software for media brands. But — honestly — the real game-changer for our audience growth has been SparkLoop's suite of partner tools.",
    name: "Jason Woodruff",
    from: "The Pour Over",
  }


  return (
    <div>
      <Header />
      <Hero />
      <Brands />
      <Referral />
      <Testimonial client={clientOne} />
      <Giveaway />
      <Testimonial client={clientTwo} />
      <Partnerships />
      <Testimonial client={clientThree} />
      <Features />
      <Offer />
      <Footer />

    </div>
  )
}

export default App