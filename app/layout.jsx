import '@styles/global.css' 
import { children } from 'react'
import Nav from '@components/Nav'
import Provider from '@components/Provider'

export const metadata   ={
    title:"Promptopia",
    description:"Discover and share AI prompts"
}

const Rootlayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <div className='main'>
                <div className='gradient'/>
            </div>
            <main className='app'>
                <Nav/>
                {children}
            </main>
        </body>
    </html>
  )
}

export default Rootlayout