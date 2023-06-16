import React, { useState } from 'react'
import { AppBar, Box, Toolbar, Typography, styled, Badge, Avatar, Menu, MenuItem } from '@mui/material';
import { Facebook, Mail, Notifications} from '@mui/icons-material';
import { InputBase } from '@mui/material';


const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

})

const Search = styled('div')(({theme})=>({
  backgroundColor:'white',
  padding:'0 10px',
  borderRadius: theme.shape.borderRadius,
  width:'40%',
}))

const Icons = styled(Box)(({theme})=>({
  display: 'none',
  alignItems: 'center',
  gap: '20px',
  [theme.breakpoints.up("sm")]:{ //display in big screens
    display: 'flex'
  }
}))

const UserBox = styled(Box)(({theme})=>({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  [theme.breakpoints.up("sm")]:{ 
    display: 'none',
  }
}))

const Navbar = () => {
  const [open, setOpen] =  useState(false);
  return (

      <AppBar  position="sticky">
{/* navbar */}
          <StyledToolbar> 

              <Typography variant="h6" sx={{display:{xs: 'none', sm: 'block'}}}>
                FacebookClone
              </Typography>
              <Facebook  sx={{display:{xs: 'block', sm: 'none'}}}/>
          
              <Search><InputBase placeholder='Search...'/></Search>

              <Icons>
                  <Badge badgeContent={4} color="error">
                      <Mail/>
                  </Badge>
                  <Badge badgeContent={1} color="error">
                      <Notifications/>
                  </Badge>
                 
                      <Avatar
                      onClick = {(e)=>{setOpen(true)}}
                      sx={{ width:30, height:30 }} 
                      alt="Samiya" src="https://images.pexels.com/photos/12810995/pexels-photo-12810995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                  
              </Icons>

              <UserBox  onClick = {(e)=>{setOpen(true)}}
              sx={{}}>
                  <Avatar
                      sx={{ width:30, height:30 }} 
                      alt="Samiya" src="https://images.pexels.com/photos/12810995/pexels-photo-12810995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                  <Typography variant='sapn'>
                    Samiya Brd
                  </Typography>
              </UserBox>

          </StyledToolbar>
{/* navbar */}
{/* menu */}
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            // anchorEl={anchorEl}
            open={open}
            onClose={(e)=>setOpen(false)}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
          </Menu>
{/* menu */}
      </AppBar>

  )
}

export default Navbar