import React from 'react'
import Hero from '../components/Hero'
import BestSeller from '../components/BestSeller'
import NewsletterBox from '../components/NewsletterBox'
import { TextParallaxContentExample } from "../components/TextParallaxContent";
import BentoGridDemo from "../components/BentoGridDemo";
import { TestimonialsSection } from '../components/TestimonialsSection';

const Home = () => {
  return (
    <div>
      <Hero/>
      <br />
      <TextParallaxContentExample />
      <br />
      <BentoGridDemo />
      <BestSeller/>
      <div className="py-16">
        <TestimonialsSection />
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default Home;
