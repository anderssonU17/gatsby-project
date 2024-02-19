import React ,{useState}from 'react';
import { useFlexSearch } from "react-use-flexsearch"
import { useDispatch } from "react-redux"
import { guardarProductosBusquedaAction } from "../../../state/reducers/productoReducers"
import { fade, makeStyles } from '@material-ui/core/styles';
import { Link,navigate } from "gatsby"
import Menu from '@material-ui/core/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from "@material-ui/icons/MenuRounded";
import AddShoppingCartIcon from "@material-ui/icons/ShoppingCartRounded"
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircleSharp';
//import PermIdentitySharpIcon from '@material-ui/icons/PermIdentitySharp';
import DrawerHeder from "../DraweHeder"
import { useSelector } from "react-redux"
import { StaticImage } from "gatsby-plugin-image"
import RoomRoundedIcon from '@material-ui/icons/RoomRounded';
const useStyles = makeStyles((theme) => ({    
    root:{
        width:'1.3em' ,
        height:'1.3em',
        color:"#1f66ad"
    },
    iconsColor:{
        width:'1.3em' ,
        height:'1.3em',
        color:"#1f66ad"
    },
    logoHeader:{
        marginBottom:'15px'
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {        
        marginRight: theme.spacing(0),            
    },
    iconSearchHeader: {        
                 
        position:'absolute',
        // marginLeft:'44%'        
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(4),
        marginLeft: theme.spacing(3),
        width: '70%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
        border:'2px solid #6f9dca',        
        
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    colorApp: {
        background: "#fff",        
        height:'105px'
        
      },
      wrap:{
        width: '90%',
        position: 'absolute',
        top: '80%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      },
      searchInput:{
        width: '100%',
        position: 'relative',
        display: 'flex'
      },
      searchTerm:{
        width: '100%',
        border: '1px solid #6f9dca',
        borderRight: 'none',
        padding: '5px',
        height: '20px',
        borderRadius: '5px 0 0 5px',
        outline: 'none',
        color: 'gray'
      },
      searchButton:{
        width: '40px',
        height: '32px',
        border: '1px solid #97c93e',
        background: '#97c93e',
        textAlign: 'center',
        color: '#fff',
        borderRadius: '0 5px 5px 0',
        cursor: 'pointer',
        fontSize: '20px'
      }
}));

export default function HederMenu({ menuYSubmenu,index, store  }) {
    const classes = useStyles();
    const dispatch = useDispatch()
    const { carrito } = useSelector(state => state.carrito)
    const [searchQuery, setSearchQuery] = useState("")
    const results = useFlexSearch(searchQuery, index, store)
    const MostrarBusquedaCatalogo = e => {
      if (e.keyCode === 13 || e.keyCode === 9) {
        e.preventDefault()
        dispatch(guardarProductosBusquedaAction(results))
        navigate(`/buscador/`)
      }
    }
    const BusquedaCatalogoClick = e => {
      e.preventDefault()
      navigate(`/buscador/`)
      dispatch(guardarProductosBusquedaAction(results))
    }
 
    const [mostrarDrawer, setDrawer] = React.useState(false);
    const toggleDrawerOpen = () => {
        setDrawer(true);
    };
    const toggleClose = () => {
        setDrawer(false);
    };
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

  

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}> <IconButton
                variant="extended"
                href="https://www.asidelimpio.com/login"
                target="_blank"

            >
                <h6>Login</h6>
            </IconButton></MenuItem>
            <MenuItem onClick={handleMenuClose}><IconButton
                variant="extended"
                href="https://www.disdelsagt.com/MyBusiness/Home/Login"
                target="_blank"

            >
                <h6>MyBusiness</h6>
            </IconButton></MenuItem>
        </Menu>
    );


    return (
        <div className={classes.grow}>
            <AppBar position="fixed" className={classes.colorApp}>
                <Toolbar >
                    <IconButton
                        onClick={toggleDrawerOpen}
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                        fontSize="large"
                        
                    >
                        <MenuIcon
                            className={classes.root}
                        />
 
                    </IconButton>
                    <div style={{ display: "grid",width:'30%',height:'40',maxWidth:'94px' }}>
                    <Link
                            to="/"

                        >
                            <img
                src="https://disdelsa.com/imagenes/BannerImagen-img2059-4-2-2021-114805.png"
                alt="Disdel"
                layout="fixed"
                width={"100%"}                
                // quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                // className={classes.logoHeader}
                style={{ color: "white" }}
              />
                            </Link>
                        
              
            </div>      
            
                    <div className={classes.grow} />
                    <Link
                            to="/Contactanos"

                        >
                    <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            //onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <RoomRoundedIcon className={classes.iconsColor}  />
                        </IconButton>
                        </Link>
                    <div className={classes.sectionDesktop}>
                        <Link
                            to="/Carrito"

                        >
                            <IconButton aria-label="show 17 new notifications" color="inherit">
                                <Badge badgeContent={carrito.length} color="secondary">
                                    <AddShoppingCartIcon className={classes.iconsColor} />
                                </Badge>
                            </IconButton>
                        </Link>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle className={classes.iconsColor} />
                        </IconButton>                    
                        
                    </div>
                </Toolbar>
                {/* <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon  onClick={BusquedaCatalogoClick}/>
                        </div>
                        <InputBase
                               value={searchQuery}
                               onChange={e => setSearchQuery(e.target.value)}
                               placeholder="Buscar"
                               onKeyDown={MostrarBusquedaCatalogo}
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />

                                     <IconButton
                        onClick={toggleDrawerOpen}
                        edge="end"
                        className={classes.iconSearchHeader}
                        color="inherit"
                        aria-label="open drawer" 
                        fontSize="small"
                        style={{border:'1px solid yellow'}}
                    >
                        <MenuIcon                            
                        />
 
                    </IconButton>



                    
                    </div> */}
                    <div className={classes.wrap}>
   <div className={classes.searchInput}>
      <input 
      value={searchQuery}
      onChange={e => setSearchQuery(e.target.value)}
      placeholder="!Hola! ¿Que estas buscando?"
      onKeyDown={MostrarBusquedaCatalogo}
      type="text" className={classes.searchTerm} />
      <button 
      onClick={BusquedaCatalogoClick}
      type="submit" className={classes.searchButton}>
        <SearchIcon></SearchIcon>
     </button>
   </div>
</div>
       
                <SwipeableDrawer
                    onClose={toggleClose}
                    onOpen={toggleClose}
                    open={mostrarDrawer}
                    anchor="left"
                >
                    <DrawerHeder menuYSubmenu={menuYSubmenu}/>                    
                </SwipeableDrawer>
            </AppBar>

            {renderMenu}
        </div>
    );
}
