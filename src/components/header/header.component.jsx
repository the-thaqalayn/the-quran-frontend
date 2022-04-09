import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
// import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
// import TuneIcon from '@mui/icons-material/Tune';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import SwipeableTemporaryDrawer from '../drawer/drawer.component';

import {toggleDrawerCheck} from '../../redux/header/header.actions';
import SearchWithMenu from 'components/search/search.component';
import {saveAs }  from 'file-saver';
import {selectSurahList,selectCurrentSurah} from 'redux/surah/surah.selector';
import InfoMenu from 'components/info/info.component';
// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginRight: theme.spacing(2),
//   marginLeft: 0,
//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(3),
//     width: 'auto',
//   },
// }));
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const LogoWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  margin: theme.spacing(0,1),
  width: theme.spacing(12),
  height:'100%'
}));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));
// const FilterIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center', 
//   float:'right',
//   right:0
// }));


// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('md')]: {
//       width: '20ch',
//     },
//   },
// }));

const PrimarySearchAppBar = ({toggleDrawer,currentSurah}) =>{
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const saveFile=()=>{
    handleClick();
    saveAs(
      `https://download.quranicaudio.com/quran/tawfeeq_bin_saeed-as-sawaaigh/${currentSurah.toString().padStart(3, '0')}.mp3`,
      `${currentSurah.toString().padStart(3, '0')}.mp3`
    );
  };
  var downloadLink=`https://download.quranicaudio.com/quran/tawfeeq_bin_saeed-as-sawaaigh/${currentSurah.toString().padStart(3, '0')}.mp3`;
      
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}     
      id={menuId}
      keepMounted
     
      open={isMenuOpen}
      onClose={handleMenuClose}
      transformOrigin={{ horizontal: 'center', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
      <Tooltip title="download Audios">
        <IconButton size="large" aria-label="show 4 new mails" color="inherit" onClick={()=> window.open(downloadLink, "_blank")}>
            {/* <CloudDownloadIcon onClick={saveFile} />            */}
            <CloudDownloadIcon  />        
        </IconButton>
        </Tooltip>
        <p>Download</p>
       
      </MenuItem>
      <MenuItem>
        {/* <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
            <InfoOutlinedIcon />
          
        </IconButton> */}
<InfoMenu/>
        <p>Information</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <SettingsIcon />
        </IconButton>
        <p>Settings</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1,direction:'rtl' }}>
      <AppBar position="fixed">
        <Toolbar sx={{
            display:'flex',
            flexDirection:'row',
            flexWrap:'nowrap',





        }}
        
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 ,flexGrow:1}}
            onClick={toggleDrawer('right',true)}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            The quran
          </Typography> */}
          <LogoWrapper sx={{flexGrow:2,display:{xs:'none',md:'flex'}}}>
              <img 
              src={process.env.PUBLIC_URL + '/assets/images/quran-logo-w.png'}
              alt='Logo The Quran'  
              width={100}
              />
          </LogoWrapper>
          
          {/* <Search sx={{flexGrow:6}} onClick={handleProfileMenuOpen}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <FilterIconWrapper>
              <TuneIcon />
            </FilterIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              
            />
          </Search> */}
              <Box sx={{ flexGrow: 1 }} />
          <SearchWithMenu/>
      
          <Box sx={{ display: { xs: 'none', md: 'flex' },flexGrow:3 ,justifyContent:'center'}}>
          <Tooltip title="download Audios">
            <IconButton size="large" aria-label="download" color="inherit"  onClick={()=> window.open(downloadLink, "_blank")}>
             
            {/* <CloudDownloadIcon onClick={saveFile} />   */}
          <CloudDownloadIcon />    
            </IconButton>
          </Tooltip>
            {/* <IconButton
              size="large"
              edge="end"
              aria-label="information"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <InfoOutlinedIcon />
            </IconButton> */}
<InfoMenu/>
            <IconButton
              size="large"
              aria-label="settings"
              color="inherit"
            >
             <SettingsIcon/>
            </IconButton>
            
          </Box>
          <Box sx={{flexGrow:1,display:{xs:'none',md:'flex'}}}>
          <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle sx={{fontSize:40}} />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}   
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} sx={{direction:'ltr'}}>
        <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
        Please Wait Your Requested Download will Automatically Start in Few Seconds.
        </Alert>
      </Snackbar>
      <SwipeableTemporaryDrawer/>   
    </Box>
  );
}
const mapStateToProps = createStructuredSelector({
  currentSurah: selectCurrentSurah
});

const mapDispatchToProps = dispatch =>({
  toggleDrawer: (anchor,open)=>(event)=> dispatch(toggleDrawerCheck({anchor,open,event}))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrimarySearchAppBar);