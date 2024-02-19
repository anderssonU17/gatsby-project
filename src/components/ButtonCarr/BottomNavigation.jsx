import React, { useState } from 'react';
import clsx from "clsx";
import { IconButton } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import ScrollTo from "../common/ScrollTo";


const useStyles = makeStyles({
  root: {
    background: "#ffffff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 0",
  },
  topBar: {
    height: 3,
    border: "none",
    transition: "color 250ms ease-in-out", /* Transición de color solo para el texto */
    background: "#ffffff",
    borderRadius: "4px",
    fontSize: "16px",
    padding: "10px 20px",
    margin: "0 10px",
  },
  topBarText: {
    fontWeight: "bold",
    margin: "0 5px",
    color: "#27AE60", /* Color inicial del texto */
    "&:hover": {
      color: "#96C121", /* Cambio de color solo en hover */
    },
  },
});

const SimpleBottomNavigation = () => {
  const classes = useStyles();
  const [isClosed, setIsClosed] = useState(true);

  const close = () => {
    setIsClosed(false);
  };

  return (
    <section className={clsx(classes.root, { closed: isClosed })}>
    </section>
  );
}

export default SimpleBottomNavigation;
