import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { links } = props;

  const linkComponents = links.map((link) => (
    <Button
      color="primary"
      className={classes.menuButton}
      variant="contained"
      key={link.title}
      onClick={() => {
        dispatch(push(link.route));
      }}
    >
      {link.title}
    </Button>
  ));

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            My App
          </Typography>
          {linkComponents}
        </Toolbar>
      </AppBar>
    </div>
  );
};

Header.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    route: PropTypes.string,
  })).isRequired,
};

export default Header;
