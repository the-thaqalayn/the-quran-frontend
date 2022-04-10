import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import {toggleDrawerCheck} from '../../redux/header/header.actions';
import {selectDrawer} from '../../redux/header/header.selectors';

import {cyan} from '@mui/material/colors';
import Typography from '@mui/material/Typography';


import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import GithubIcon from 'assets/images/icons8-github.svg';
import TelegramIcon from 'assets/images/icons8-telegram-app.svg';
import SlackIcon from 'assets/images/icons8-slack.svg';
import InstagramIcon from 'assets/images/icons8-instagram.svg';
import TwitterIcon from 'assets/images/icons8-twitter.svg';


const SwipeableTemporaryDrawer = ({drawer,toggleDrawer}) => {
  // const [state, setState] = React.useState({
  //   top: false,
  //   left: false,
  //   bottom: false,
  //   right: false,
  // });

  // const toggleDrawer = (anchor, open) => (event) => {
  //   if (
  //     event &&
  //     event.type === 'keydown' &&
  //     (event.key === 'Tab' || event.key === 'Shift')
  //   ) {
  //     return;
  //   }

  //   setState({ ...state, [anchor]: open });
  // };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 ,direction:'rtl'}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
        <List>
        <ListItem sx={{ display: 'flex',justifyContent:'center',py:0, alignItems: 'center', textAlign: 'center' }}>
             <Typography variant='botton' sx={{mt:7,mb:5,fontWeight:'bold',fontSize:25, color: cyan['600']}}>
                
               Menu
                
             </Typography>
        </ListItem>
    
    
    
   
        <ListItem button key='0'>
            <ListItemIcon>
              <HomeOutlinedIcon sx={{width:30 ,height:30}} /> 
            </ListItemIcon>
            <ListItemText primary='Home' sx={{textAlign:'right'}} />
          </ListItem>
          <ListItem button key='1'>
            <ListItemIcon>
              <VolunteerActivismOutlinedIcon sx={{width:30 ,height:30}}/> 
            </ListItemIcon>
            <ListItemText primary='Donation' sx={{textAlign:'right'}} />
          </ListItem>
          
          <ListItem button key='2'>
            <ListItemIcon>
              <InfoOutlinedIcon sx={{width:30 ,height:30}}/> 
            </ListItemIcon>
            <ListItemText primary='About us' sx={{textAlign:'right'}} />
          </ListItem>
         <Divider sx={{mx:2}}/>
       
         <ListItem button key='3'>

            <ListItemIcon>
            <img src={TelegramIcon} alt="Telegram" width='30px' height='30px'/> 
            </ListItemIcon>
            <ListItemText primary='Telegram' sx={{textAlign:'right'}} />
          </ListItem>
       
         <ListItem button key='4'>

            <ListItemIcon>
            <img src={TwitterIcon} alt="Twitter"  width='30px' height='30px'/> 
            </ListItemIcon>
            <ListItemText primary='Twitter' sx={{textAlign:'right'}} />
          </ListItem>

          <ListItem button key='5'>
            <ListItemIcon>
              <img src={InstagramIcon} alt="Instagram" width='30px' height='30px'/> 
            </ListItemIcon>
            <ListItemText primary='Instagram' sx={{textAlign:'right'}} />
          </ListItem>

          <ListItem button key='6'>
            <ListItemIcon>
              <img src={GithubIcon}  alt="Github" width='30px' height='30px'/> 
            </ListItemIcon>
            <ListItemText primary='Github' sx={{textAlign:'right'}} />
          </ListItem>

         <ListItem button key='7'>
            <ListItemIcon>
            <img src={SlackIcon}  alt="Slack" width='30px' height='30px'/> 
            </ListItemIcon>
            <ListItemText primary='Slack' sx={{textAlign:'right'}} />
          </ListItem>

          <Divider sx={{mx:2}}/>
        <ListItem sx={{ display: 'flex',justifyContent:'center',mb:0, alignItems: 'center', textAlign: 'center' }}>
               <Typography variant='botton' sx={{mt:10,mb:7,fontWeight:'bold',fontSize:12}}>
                  
               GPL-3.0 License
                  
               </Typography>
          </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      {['left', 'right', 'top', 'bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
          <SwipeableDrawer
            anchor={anchor}
            open={drawer[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}

const mapStateToProps=createStructuredSelector({
  drawer: selectDrawer
});

const mapDispatchToProps = dispatch =>({
  toggleDrawer: (anchor,open)=>(event)=> dispatch(toggleDrawerCheck({anchor,open,event}))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SwipeableTemporaryDrawer);