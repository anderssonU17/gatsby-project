import React from "react";
import {
  IconButton,
  Badge,
  List,
  ListItem,
  Divider,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Grow,
} from "@material-ui/core";
import { Link } from "gatsby";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Menu from "material-ui-popup-state/HoverMenu";
import { makeStyles } from "@material-ui/core/styles";
import { usePopupState, bindMenu, bindHover } from "material-ui-popup-state/hooks";
import { useSelector } from "react-redux";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  menu: {
    maxHeight: 134 * 4,
    maxWidth: "40ch",
    background: "none",
  },
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
}));

const Carrito = () => {
  const classes = useStyles();
  const { carrito } = useSelector(state => state.carrito);
  const popupState = usePopupState({ variant: "popover", popupId: "demoMenu" });

  return (
    <>
    <Link
        to="/Carrito"
        style={{
          cursor: "hand",
          background: "white",
          textDecoration: "none",
        }}
      >
      <div style={{ display: "inline-block" }}>
        <IconButton
          className=""
          {...bindHover(popupState)}
        >
          <Badge badgeContent={carrito.length} color="primary">
            <ShoppingCartIcon fontSize="large" />
          </Badge>
        </IconButton>
      </div>
      </Link>
      <Menu
        {...bindMenu(popupState)}
        className={classes.menu}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
      >
        <Grow in={popupState.isOpen} timeout={300}>
          <List>
            {carrito.map((item, index) => (
              <ListItem key={index} alignItems="flex-start">
                <ListItemAvatar>
                  <Link to={`/producto/${item.ItemCodeAux}/`}>
                    <Avatar
                      alt="Remy Sharp"
                      src={`https://disdelsa.com/imagenes/productos/${item.Imagen}`}
                      className={classes.large}
                    />
                  </Link>
                </ListItemAvatar>
                <ListItemText
                  primary={`${item.IdProducto}`}
                  secondary={<h6>{item.Descripcion}</h6>}
                />
              </ListItem>
            ))}
          </List>
        </Grow>
      </Menu>
    </>
  );
}

export default Carrito;
