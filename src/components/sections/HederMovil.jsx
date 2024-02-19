import * as React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles"
import MenuIcon from "@material-ui/icons/Menu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Carrito from "./Carrito"
import DrawerHeder from "../../components/sections/DraweHeder"
import loadable from '@loadable/component'
const BuscadorGeneral = loadable(() => import('./BuscadorPrincipal'))

const useStyles = makeStyles(({ palette, ...theme }) => ({
    nested: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(0),
        [theme.breakpoints.down("lg")]: {
            paddingLeft: theme.spacing(4),
        },
    },
    header__toggle: {

        color: "rgba(0, 0, 0, 0.87)",
        background: "#ffffff",
        boxShadow:
            "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",

    }

}))

const HederMovile = (props) => {
    const classes = useStyles();

    const { menuYSubmenu, books, engine } = props;
    const [mostrarDrawer, setDrawer] = React.useState(false);
    const toggleDrawerOpen = () => {
        setDrawer(true);
    };
    const toggleClose = () => {
        setDrawer(false);
    };
    const [isPermanent, setPermanent] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Toolbar>

                <IconButton
                    className={classes.header__toggle}
                    onClick={toggleDrawerOpen}
                >
                    <MenuIcon />
                </IconButton>

                <BuscadorGeneral books={books} engine={engine} />

                <Carrito />
            </Toolbar>
            <SwipeableDrawer
                onClose={toggleClose}
                onOpen={toggleClose}
                open={mostrarDrawer}
                anchor="left"
            >
                <div  >
                    <DrawerHeder menuYSubmenu={menuYSubmenu} />
                </div>
            </SwipeableDrawer>

        </>)
}

export default HederMovile;