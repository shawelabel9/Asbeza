import React from 'react'
import {MenuList, MenuItem,Typography,ListItemIcon, Divider} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import {Link} from 'react-router-dom'
import HistoryIcon from '@mui/icons-material/History';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SuperMarketLogo from '../assets/supermarket.jpg'

const Sidebar = () => {
  return (
    <>
        <div className="p-2 bg-purple-500 w-1/4 md:w-2/12 flex flex-col" >
            <div className="flex flex-col gap-4 my-2 py-12  items-center">
                <img src={SuperMarketLogo} alt="logo" className="rounded-full w-1/2" />
                <p className="text-white text-2xl md:hidden"  >Asbeza</p>
            </div>
            <MenuList className="text-white px-2 xsm:px-0">
                {/* <Divider className="m-0"/> */}
                <Link to="/">
                    <MenuItem className="">
                            <ListItemIcon>
                                <HomeIcon className="text-white "/>
                            </ListItemIcon>
                            <p className="pt-1 md:hidden"> Home</p>
                    </MenuItem>
                </Link>
                    {/* <Typography variant="inherit" className="text-white">Home</Typography> */}
                
                {/* <Divider className="m-0"/> */}
                <Link to="/history">
                    <MenuItem>
                        <ListItemIcon>
                            <HistoryIcon className="text-white "/>
                        </ListItemIcon>
                        <p className="pt-1 md:hidden"> History</p>
                    </MenuItem>
                </Link>
                {/* <Divider className="m-0"/> */}

                <Link to="/profile">
                    <MenuItem>
                        <ListItemIcon>
                            <AccountBoxIcon className="text-white "/>
                        </ListItemIcon>
                        <p className="pt-1 md:hidden"> Profile</p>
                    </MenuItem>
                </Link>
                {/* <Divider className="m-0"/> */}
            </MenuList>
        </div>
        <Divider orientation="vertical"/>
    </>
  )
}

export default Sidebar