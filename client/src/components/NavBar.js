import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { logoutUser } from '../reducers/userReducer';
import { notify } from '../reducers/notificationReducer';
import MobileUserMenu from './MobileUserMenu';
import DesktopUserMenu from './DesktopUserMenu';
import SearchBar from './SearchBar';

import {
  AppBar,
  Toolbar,
  Typography,
  Link,
  Button,
  useMediaQuery,
  IconButton,
} from '@material-ui/core';
import { useNavStyles } from '../styles/muiStyles';
import { useTheme } from '@material-ui/core/styles';
import RedditIcon from '@material-ui/icons/Reddit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SearchIcon from '@material-ui/icons/Search';
import Logo from '../svg/Unipeer.jpeg';
import resources from '../svg/resources.png';
import games from '../svg/fun and games.png';
import create from '../svg/create.png';

const NavBar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const classes = useNavStyles();
  const handleLogout = () => {
    dispatch(logoutUser());
    dispatch(notify(`u/${user.username} logged out`, 'success'));
  };

  return (
    <AppBar position="sticky" color="primary" elevation={1}>
      <Toolbar disableGutters={isMobile} >
        {!searchOpen && (
          <>
            <div className={classes.leftPortion}>
              <div className={classes.logoWrapper}>
                <Button
                  className={classes.logo}
                  color="inherit"
                  component={RouterLink}
                  to="/"
                  //startIcon={<RedditIcon fontSize="large" />}
                  size="large"
                >
                <img src={Logo} size="large" width="42" height="42" className={classes.Logo}/>
                  Fraats
                </Button>
              </div>
              {!isMobile && <SearchBar />}
              {!isMobile?(
                <>
              <div className={classes.features}>
              <Button
                  className={classes.feature}
                  color="inherit"
                  component={RouterLink}
                  to="/"
                  //startIcon={<AddCircleIcon fontSize="large" />}
                  //size="large"
                >
               <img src={create} size="large" width="30" height="30" className={classes.Logo}/>
                </Button>
              <Button
                  className={classes.feature}
                  color="inherit"
                  component={RouterLink}
                  to="/"
                  //startIcon={<RedditIcon fontSize="large" />}
                  //size="large"
                >
                <img src={games} size="large" width="35" height="35" className={classes.Logo}/>
                </Button>    
                <Button
                  className={classes.feature}
                  color="inherit"
                  component={RouterLink}
                  to="/"
                  //startIcon={<RedditIcon fontSize="large" />}
                  //size="large"
                >
                <img src={resources} size="large" width="35" height="35" className={classes.Logo}/>
                </Button>
                </div>
                </>
                ):(<></>)}
            </div>
            {isMobile ? (
              <>
                <IconButton
                  color="inherit"
                  className={classes.searchBtn}
                  onClick={() => setSearchOpen((prevState) => !prevState)}
                >
                  <SearchIcon />
                </IconButton>
                <MobileUserMenu user={user} handleLogout={handleLogout} color="#FFF" />
              </>
            ) : 
            (
              <>
              <DesktopUserMenu user={user} handleLogout={handleLogout} color="#FFF"/>
              </>
            )
            }
          </>
        )}
        {searchOpen && isMobile && (
          <SearchBar isMobile={true} color="inherit" setSearchOpen={setSearchOpen} />
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
