import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'
import { TextParallaxContentExample } from "../components/TextParallaxContent";
import BentoGridDemo from "../components/BentoGridDemo";

const Home = () => {
  return (
    <div>
      <Hero/>
      <br />
      <TextParallaxContentExample />
      <br />
      <BentoGridDemo />
      <LatestCollection/>
      <BestSeller/>
      <OurPolicy/>
      <NewsletterBox/>
    </div>
  )
}

export default Home;
