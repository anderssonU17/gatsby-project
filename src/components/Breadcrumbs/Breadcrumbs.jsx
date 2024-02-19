import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import HomeIcon from '@material-ui/icons/Home';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { Link } from "gatsby";

const useStyles = makeStyles((theme) => ({
    link: {
        display: 'flex',
    },
}));
export default function IconBreadcrumbs({ title, seccion, seccionSeg, SeccionCategoria, SeccionCategoriaLink, SeccionSubCategoria, SeccionSubCategoriaLink }) {
    const classes = useStyles();

    return (
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} s aria-label="breadcrumb">
            <AniLink
                hex="#075182"
                to={"/"}
                paintDrip
                duration={0.3}
                direction="up"
                className={classes.link}
            >
                <HomeIcon className={classes.icon} />
                {title}
            </AniLink>
            {seccionSeg ?

                <Typography color="textPrimary" className={classes.link}>
                    {seccionSeg}
                </Typography>

                : <Link
                    to={"/" + seccion}
                    className={classes.link}
                >
                    {seccion}
                </Link>}

            {SeccionCategoria ?
                <Typography color="textPrimary" className={classes.link}>
                    {SeccionCategoria}
                </Typography>
                : SeccionCategoriaLink ?
                    <Link
                        to={"/categoria/" + SeccionCategoriaLink}
                        className={classes.link}
                    >
                        {SeccionCategoriaLink}
                    </Link>
                    : null
            }
            {SeccionSubCategoria ?
                <Typography color="textPrimary" className={classes.link}>
                    {SeccionSubCategoria}
                </Typography>
                : SeccionSubCategoriaLink ?
                    <Link
                        to={"/subcategoria/" + SeccionSubCategoriaLink}
                        className={classes.link}
                    >
                        {SeccionSubCategoriaLink}
                    </Link>
                    : null}
        </Breadcrumbs>
    );
}
