import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { makeStyles,withStyles  } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ScrollTo from "../common/ScrollTo";
import { IconButton } from "@material-ui/core";
import FilterListSharpIcon from '@material-ui/icons/FilterListSharp';
import { Link } from "gatsby"
import Checkbox from '@material-ui/core/Checkbox';
import CloseSharpIcon from '@material-ui/icons/CloseSharp';
import {GuardarNombreSegmento}from '../../state/reducers/autoratingReducers'
import { useDispatch, useSelector } from 'react-redux';
import { green } from '@material-ui/core/colors';
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  topBar: {
    height: 3,
    border: "2px solid rgba(var(--primary),0.25)",

    "&, & .icon-holder": {
      transition: "all 250ms ease-in-out",
    },

    "& .icon-holder": {
      background: "rgba(var(--primary),0.25) !important",
    },

    "&:hover": {
      border: "2px solid rgba(var(--primary),1)",
      "& .icon-holder": {
        background: "rgba(var(--primary),1) !important",
      },
    },

},
Titulo:{
    marginLeft:'8px',
    padding:'10px',
    color:'#3f51b3',
    fontWeight:'600'
},
conatinerHeader:{
    display:'flex',
    justifyContent:'space-between',
    
},
barTitle:{
    border:'0.5px solid #93a3af',
    marginLeft:'20px',
    paddingLeft:'10px',
    maxWidth:'30px'
}
});
const GreenCheckbox = withStyles({
    root: {
      
      '&$checked': {
        color: "#97c840 ",
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

export default function SwipeableTemporaryDrawer({RecorrerSegmentos}) {
  const classes = useStyles();
  const [indexCheck,setIndexCheck] = useState({index:null,nombre:''})
  const dispatch = useDispatch();
  const nombreSegmento = useSelector((state)=>state.rating)
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, ["bottom"]: open });
  };
  const handleClickSegmento =(e)=>{
    
  }
  useEffect(()=>{

  },[indexCheck])

  const list = (anchor="bottom") => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
        <div className={classes.conatinerHeader}>
        <div>
            <h3 className={classes.Titulo}>Categorías</h3>
            <div className={classes.barTitle}></div>
        </div>
        
        <IconButton>
            <CloseSharpIcon />
        </IconButton>
        </div>
      <List>
        {RecorrerSegmentos.map((item, index) => (
            item.Categorias.map((cat, index) => (
                <Link onClick={()=>{                    
                    setIndexCheck({...indexCheck,index:index,nombre:cat.NombreCategoria});
                    dispatch(GuardarNombreSegmento(cat.NombreCategoria))
                }} to={`/categoria/${cat.NombreCategoriaAux}/`}>
                <ListItem button key={index}>
                <ListItemIcon> <GreenCheckbox  checked={cat.NombreCategoria===nombreSegmento.NombreSegmento?true:false} inputProps={{ 'aria-label': 'primary checkbox' }} /> </ListItemIcon>
                <ListItemText primary={cat.NombreCategoria} />
              </ListItem>      
              </Link>
              
            ))          
        ))}
      </List>

   
    </div>
  );

  return (
    <div>
            <IconButton 
            onClick={toggleDrawer("bottom", true)}
             className={clsx(
                "p-12px rounded flex items-center",
                classes.topBar
              )}
            >
                <FilterListSharpIcon fontSize="small" color="primary" />
                <p className="mt-0 mb-0 text-11 font-semibold text-primary ">Filtros</p>
            </IconButton>
          <SwipeableDrawer
            anchor={"bottom"}
            open={state["bottom"]}
            onClose={toggleDrawer("bottom", false)}
            onOpen={toggleDrawer("bottom", true)}
          >
            {list("bottom")}
          </SwipeableDrawer>

    </div>
  );
}