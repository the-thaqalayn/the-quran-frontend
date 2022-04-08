import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { styled, alpha } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import InputBase from '@mui/material/InputBase';
import {blue} from '@mui/material/colors';

import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import {selectSurahList} from 'redux/surah/surah.selector';
import {loadSurahListStart} from 'redux/surah/surah.actions';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
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
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingRight: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));


const ITEM_HEIGHT = 48;

const SearchWithMenu=({surahs,loadSurahListStart})=> {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  

  useEffect(()=>{
    loadSurahListStart();
  },[]);
  const ITEM_HEIGHT = 48;
  return (
    <React.Fragment>
      {/* <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Typography sx={{ minWidth: 100 }}>Contact</Typography>
        <Typography sx={{ minWidth: 100 }}>Profile</Typography>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'search-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>
      </Box> */}
      <Search sx={{flexGrow:6}}  
      onClick={handleClick}
      aria-controls={open ? 'search-menu' : undefined}
      aria-haspopup="true"
      aria-expanded={open ? 'true' : undefined}
      >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            {/* <FilterIconWrapper>
              <TuneIcon />
            </FilterIconWrapper> */}
            <StyledInputBase
              placeholder=""
              inputProps={{ 'aria-label': 'search' }}
              disabled={true}
            />
      </Search>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '40ch',
          },
        }}
        transformOrigin={{ horizontal: 'center', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
      >
        
        {surahs.map((surah) => (
          <MenuItem key={surah.id} onClick={handleClose} sx={{mb:1}} >
           
            <Box sx={{ display:'flex',flexGrow:1,flexBasis:100,alignItems:'center', flexFlow:'row nowrap', justifyContent:'space-around'}}>
            <Box sx={{ display:'flex',flexGrow:4,flexBasis:100,alignItems:'center', flexFlow:'row nowrap', justifyContent:'flex-start'}}>
            <Avatar variant='square' sx={{ bgcolor: blue['50'] ,width: 40 , height: 40 ,mr:2  ,transform:'rotate(-45deg)',border:`1px solid ${blue['300']}`, borderRadius:1 }} >
           <Typography variant='button' sx={{ color: blue['300'],transform:'rotate(45deg)' }}>{surah.id}</Typography> 
          </Avatar>
            {surah.translated_name.name} 
             </Box>
             {surah.name_arabic} 
            </Box> 
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );
}

const mapStateToProps = createStructuredSelector({
  surahs: selectSurahList
});
const mapDispatchToProps = dispatch =>({
  loadSurahListStart: (data)=>dispatch(loadSurahListStart(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchWithMenu);