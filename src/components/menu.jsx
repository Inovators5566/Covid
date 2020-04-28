import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import './menu.css';

var Simplemenu=function() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button  aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} >
        Choose 
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><div id="changethelook"><a href ="#Chart">Chart</a></div></MenuItem>
        <MenuItem onClick={handleClose}>Cards</MenuItem>
        <MenuItem onClick={handleClose}>Feedback</MenuItem>
      </Menu>
    </div>
  );
}
 export default Simplemenu ;