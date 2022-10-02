import React from 'react'
import Content from './components/content'
import Footer from './components/footer'
import Header from './components/header'
import Sidebar from './components/sidebar'

const Layout = ({children}) => {
  return (
    <div className="flex mx-auto my-10 border-2 border-purple-300" style={{maxWidth: '1050px', maxHeight: '700px', overflow:'hidden'}}>
        <Sidebar/>
        <div className="flex flex-col w-full" >
            <Header/>
            <div className="flex flex-col justify-between h-screen">
                {children}
                {/* <Footer/> */}
            </div>
        </div>
    </div>
  )
}

export default Layout