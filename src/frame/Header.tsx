import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { MouseEvent, useState } from 'react';
import reactLogo from '../assets/react.svg';

export const Header = (): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement>();
  const isOpen = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => setAnchorEl(undefined);
  const handleLogout = () => {
    handleClose();
    // Dispatch a logout call
  };

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <img src={reactLogo} />
        <Typography variant="h6" sx={{ mx: 1, paddingTop: 0.25 }}>
          | Client Template
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Avatar
          sx={{
            width: 35,
            height: 35,
            bgcolor: 'secondary.main',
          }}
        >
          <Button
            id="basic-button"
            aria-label="account of current user"
            aria-controls={isOpen ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={isOpen ? 'true' : undefined}
            onClick={handleClick}
          >
            <Typography color="secondary.contrastText">WP</Typography>
          </Button>
        </Avatar>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={isOpen}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};
