import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import TuneIcon from '@mui/icons-material/Tune';
import { styled } from '@mui/material/styles';


import {changeSurahStart} from 'redux/surah/surah.actions';
import {selectLoadedSurah} from 'redux/surah/surah.selector';


const Filter= ({loadedSurah:{chapter,totalPages,totalRecords,nextPage,verses},changeSurahStart})=> {
  const [open, setOpen] = React.useState(false);
  const [change, setChange] = React.useState(null);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setChange(parseInt(event.target.value));
  };

  const handleSubmit = () => {
    console.log({chapter,page:change});
    handleClose();
    changeSurahStart({chapter,page:change});
  };

  

    const FilterIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
   // position: 'absolute',
    pointerEvents: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center', 
    cursor:'pointer'
   // float:'right',
   // left:0
 }));


  return (
    <React.Fragment>
       <FilterIconWrapper onClick={handleClickOpen}>
               <TuneIcon />
     </FilterIconWrapper>
      <Dialog
       
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Adjustment</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You can select specific page and load surah from this point.
          </DialogContentText>
          <Box
            noValidate
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              m: 'auto',
           
            }}
          >
            <FormControl sx={{ mt: 2, minWidth: 200 }}>
              <InputLabel htmlFor="max-width">Ayahs</InputLabel>
              <Select key='select-filter'
                autoFocus
              
                onChange={handleChange}
                label="maxWidth"
                inputProps={{
                  name: 'max-width',
                  id: 'max-width',
                }}
              >
                  {(() => {
                    const options = [];
                    for (let i = 1; i <= totalPages; i++) {
                        options.push(<MenuItem  value={i}>Page {i}  :      [{(i-1)*10+1} to {i===totalPages? 'end' : i*10}]</MenuItem>);
                    }

                    return options;
                    })()}
                
                
              </Select>
            </FormControl>
           
          </Box>
        </DialogContent>
        <DialogActions>
           <Button onClick={handleClose}>Dismiss</Button>
           <Button onClick={handleSubmit}>Let's Go</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}


const mapStateToProps = createStructuredSelector({
    loadedSurah: selectLoadedSurah
  });
const mapDispatchToProps = dispatch =>({
    changeSurahStart: ({chapter,page})=>dispatch(changeSurahStart({chapter,page}))
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Filter);