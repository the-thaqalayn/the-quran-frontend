import React,{useEffect} from 'react';
import { connect } from 'react-redux';

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { cyan ,grey } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import {getFontFaceNameForPage} from 'redux/surah/surah.utils';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

// const Ayah = ({pageNumber,loadFontFace}) => {

//   useEffect(()=>{
//     fetchAyah();
//     loadFontFace(pageNumber);
//   },[pageNumber]);
const Ayah = ({verseKey,text,translation,sajdahNumber,pageNumber}) => {
  const [expanded, setExpanded] = React.useState(false);
  const versevariant=getFontFaceNameForPage(pageNumber);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  console.log(verseKey);
  return (
    <Card sx={{  my:2 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: cyan[100] ,width: 70, height: 30  }} variant="square">
           <Typography variant="button" sx={{ color: cyan[600] }}>{verseKey}</Typography> 
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
       
      />
      
      <CardContent sx={{textAlign:'end',px:8}}>
        {/* <Typography  variant={getTypographyVariant(pageNumber)} gutterBottom sx={{textAlign:'end',my:2}} > */}
        <Typography  gutterBottom sx={{my:2 ,fontFamily:`${versevariant}`,fontSize:50,wordBreak:'break-all'}} >
        {/* ﭗ ﭘ ﭙ ﭚ ﭛ ﭜ ﭝ ﭞ ﭟ ﭠ ﭡ ﭢ ﭣ ﭤ ﭥ ﭦ ﭧ ﭨ ﭩ ﭪ ﭫ ﭬ ﭭ ﭮ ﭯ ﭰ ﭱ */}
          {text}
        </Typography>
        <Typography variant="subtitle2" gutterBottom sx={{mt:5}}>
          {translation}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

// const mapDispatchToProps = dispatch =>({
//   loadFontFace: (pageNumber)=>dispatch(loadFontFace(pageNumber))
// });

// export default connect(
//   null,
//   mapDispatchToProps
// )(Ayah);

 export default Ayah;