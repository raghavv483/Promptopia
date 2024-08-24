import React from 'react'
import Feed from '@components/Feed'
const Home = () => {
  return (
    <section className='w-full flex-col flex-center'>
        <h1 className='head_text text-center'>
            Discover and Share
        <br className='max-md:hidden'/>
        <span className='orange_gradient text-center'>AI Powered Prompts</span>
        </h1>
        <p className='desc text-center'>
            Promptopia is an opensource AI prompting tool for moder world to discover ,create and share creative prompts.
        </p>
        {/*feed*/}
        <Feed/>
    </section>
  )
}

export default Home