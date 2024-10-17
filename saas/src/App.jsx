import React from 'react';
import Newsletter from './components/Newsletter';
import Banner from './components/Banner';
import Testimonial from './components/Testimonials';
import Pricing from './components/Pricing';

function App(){
  return(
    <div>
      <Banner/>
      <Testimonial/>
      <Pricing/>
      <Newsletter/>
    </div>
  )
}
export default App