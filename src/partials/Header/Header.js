import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton

} from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu';
import useStyles from './Header.style'



const Header = () => {
  const classes = useStyles()

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" aria-label="menu" color="inherit">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          My App
        </Typography>
        <Button color='inherit'>Login</Button>
        </Toolbar>
    </AppBar>
    
  )

}

export default Header