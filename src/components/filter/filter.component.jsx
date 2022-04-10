import * as React from 'react';
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
const Filter= ()=> {
  const [open, setOpen] = React.useState(false);

  const [maxWidth, setMaxWidth] = React.useState('sm');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMaxWidthChange = (event) => {
    setMaxWidth(
      // @ts-expect-error autofill of arbitrary value is not handled.
      event.target.value,
    );
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
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Adjustment</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You can select specific Ayah and load surah from this point.
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
              <InputLabel htmlFor="max-width">Ayah</InputLabel>
              <Select
                autoFocus
                value={maxWidth}
                onChange={handleMaxWidthChange}
                label="maxWidth"
                inputProps={{
                  name: 'max-width',
                  id: 'max-width',
                }}
              >
                  {(() => {
                    const options = [];

                    for (let i = 1; i <= 256; i++) {
                        options.push(<MenuItem value={i}>{i}</MenuItem>);
                    }

                    return options;
                    })()}
                
                
              </Select>
            </FormControl>
           
          </Box>
        </DialogContent>
        <DialogActions>
           <Button onClick={handleClose}>Dismiss</Button>
           <Button onClick={handleClose}>Let's Go</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}


// import * as React from 'react';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';

// import TuneIcon from '@mui/icons-material/Tune';
// import { styled } from '@mui/material/styles';
// const Filter=()=> {
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };


//   const FilterIconWrapper = styled('div')(({ theme }) => ({
//     padding: theme.spacing(0, 2),
//     height: '100%',
//    // position: 'absolute',
//     pointerEvents: 'auto',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center', 
//     cursor:'pointer'
//    // float:'right',
//    // left:0
//  }));
//  const top100Films = [
//     { label: 'The Shawshank Redemption', year: 1994 },
//     { label: 'The Godfather', year: 1972 },
//     { label: 'The Godfather: Part II', year: 1974 },
//     { label: 'The Dark Knight', year: 2008 }
//  ];


//   return (
//     <React.Fragment>
//       {/* <Button variant="outlined" onClick={handleClickOpen}>
//         Open form dialog
//       </Button> */}
//       <FilterIconWrapper onClick={handleClickOpen}>
//               <TuneIcon />
//     </FilterIconWrapper>
//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>Filter</DialogTitle>
//         <DialogContent>
//           {/* <DialogContentText>
//             Please select specific Ayah from list. We
//             will load surah from this point.
//           </DialogContentText> */}
//           <Autocomplete
//             disablePortal
//             id="combo-box-demo"
//             options={top100Films}
//             sx={{ width: 300 }}
//             renderInput={(params) => <TextField {...params} label="Ayah" />}
//             />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Dismiss</Button>
//           <Button onClick={handleClose}>Let's Go</Button>
//         </DialogActions>
//       </Dialog>
//     </React.Fragment>
//   );
// }

 export default Filter;