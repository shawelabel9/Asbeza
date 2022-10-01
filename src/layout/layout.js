import React from 'react'
import Content from './components/content'
import Footer from './components/footer'
import Header from './components/header'
import Sidebar from './components/sidebar'

const Layout = ({children}) => {
  return (
    <div className="flex ">
        <Sidebar/>
        <div className="flex flex-col w-full h-screen">
            <Header/>
            <div className="flex flex-col justify-between h-screen">
                {children}
                <Footer/>
            </div>
        </div>
    </div>
  )
}

export default Layout