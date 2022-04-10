import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {selectCurrentSurahInfo} from 'redux/surah/surah.selector';

import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import {cyan} from '@mui/material/colors';

import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const InfoMenu=({currentSurahInfo})=> {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="surah information">
          <IconButton
           size="large"
           edge="end"
           aria-label="information"
           aria-haspopup="true"
           onClick={handleClick}
           color="inherit"
            aria-controls={open ? 'info-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
          >
            <InfoOutlinedIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="info-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            // '& .MuiAvatar-root': {
            //   width: 32,
            //   height: 32,
            //   ml: -0.5,
            //   mr: 1,
            // },
            // '&:before': {
            //   content: '""',
            //   display: 'block',
            //   position: 'absolute',
            //   top: 0,
            //   left: 14,
            //   width: 10,
            //   height: 10,
            //   bgcolor: 'background.paper',
            //   transform: 'translateY(-50%) rotate(45deg)',
            //   zIndex: 0,
            // },
            
            minWidth:250,
          },
        }}
        transformOrigin={{ horizontal: 'center', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
      >
        <MenuItem sx={{ display: 'flex',justifyContent:'center',py:0, alignItems: 'center', textAlign: 'center' }}>
             <Typography variant='surahName' sx={{color: cyan['600']}}>
                  {currentSurahInfo.id.toString().padStart(3, '0')} 
             </Typography>
        </MenuItem>
       
        <MenuItem sx={{display: 'flex',justifyContent:'space-between', alignItems: 'center', }}>
        <Typography variant='body2' >
                 Name
        </Typography>
        <Typography variant='body2' >
                 {currentSurahInfo.name_simple} 
        </Typography>
        </MenuItem>
       
        <MenuItem sx={{display: 'flex',justifyContent:'space-between', alignItems: 'center', }}>
        <Typography variant='body2' >
                 Translation
        </Typography>
        <Typography variant='body2' >
                 {currentSurahInfo.translated_name.name} 
        </Typography>
        </MenuItem>
        <MenuItem sx={{display: 'flex',justifyContent:'space-between', alignItems: 'center', }}>
        <Typography variant='body2' >
                 Number
        </Typography>
        <Typography variant='body2' >
                 {currentSurahInfo.id} 
        </Typography>
        </MenuItem>
        <MenuItem sx={{display: 'flex',justifyContent:'space-between', alignItems: 'center', }}>
        <Typography variant='body2' >
                 Ayahs
        </Typography>
        <Typography variant='body2' >
                 {currentSurahInfo.verses_count} 
        </Typography>
        </MenuItem>
        <MenuItem sx={{display: 'flex',justifyContent:'space-between', alignItems: 'center', }}>
        <Typography variant='body2' >
        Revelation Place
        </Typography>
        <Typography variant='body2' >
                 {currentSurahInfo.revelation_place} 
        </Typography>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}


const mapStateToProps = createStructuredSelector({
    currentSurahInfo: selectCurrentSurahInfo
  });
//   const mapDispatchToProps = dispatch =>({
//     loadSurahListStart: (data)=>dispatch(loadSurahListStart(data)),
//     changeSurahStart: (chapter)=>dispatch(changeSurahStart(chapter))
//   });
  
  export default connect(
    mapStateToProps
  ) (InfoMenu);