import React from 'react'
import {MenuList, MenuItem,Typography,ListItemIcon, Divider} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import HistoryIcon from '@mui/icons-material/History';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const Sidebar = () => {
  return (
    <div className="h-screen p-2 bg-purple-300 w-1/4 md:w-2/12 flex flex-col">
        <div className="flex flex-col gap-4 my-2 py-12  items-center">
            <img src="../../assets/supermarket.jpg" alt="logo" />
            <p className="text-white text-2xl md:hidden"  >Asbeza</p>
        </div>
        <MenuList className="text-white px-2">
            {/* <Divider className="m-0"/> */}
                <MenuItem>
                <ListItemIcon>
                    <HomeIcon className="text-white"/>
                </ListItemIcon>
                
                <p className="pt-1 md:hidden"> Home</p>
                </MenuItem>
                {/* <Typography variant="inherit" className="text-white">Home</Typography> */}
            
            {/* <Divider className="m-0"/> */}
            <MenuItem>
                <ListItemIcon>
                    <HistoryIcon className="text-white "/>
                </ListItemIcon>
                <p className="pt-1 md:hidden"> History</p>
            </MenuItem>
            {/* <Divider className="m-0"/> */}

            <MenuItem>
                <ListItemIcon>
                    <AccountBoxIcon className="text-white "/>
                </ListItemIcon>
                <p className="pt-1 md:hidden"> Profile</p>
            </MenuItem>
            {/* <Divider className="m-0"/> */}
        </MenuList>
    </div>
  )
}

export default Sidebar