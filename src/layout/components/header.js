import React from 'react'
import AppBar from '@mui/material/AppBar'
import ToolBar from '@mui/material/Toolbar'
import {Link} from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home'
import HistoryIcon from '@mui/icons-material/History';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Divider from '@mui/material/Divider'


const Header = () => {
  return (
    <div className="sticky ">
        <div className="flex justify-end bg-purple-400 w-full">
            {/* <Divider orientation="vertical" className="font-bold" flexItem/> */}
            <div className="flex gap-4 p-2 px-4">
                <Link to="/"><HomeIcon/></Link>
                <Link to="/history"><HistoryIcon/></Link>
                <Link to="/profile"><AccountBoxIcon/></Link>
            </div>
            {/* <Link to="/" icon={HomeIcon} ></Link> */}
        </div>
        <Divider/>
    </div>
  )
}

export default Header