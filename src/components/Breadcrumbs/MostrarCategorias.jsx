import React from "react";
import { Link } from "gatsby"
import { Card, Divider, Grid, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
    bgLightGray: {
        background: "rgba(0,0,0,0.05)",
    },
    card: {
        transition: "all 400ms ease-in-out",
        borderTop: "2px solid black",
        "& .icon": {
            fontSize: 64,
        },
        "&:hover": {
            transform: "translateY(-8px)",

            borderTop: "2px solid rgba(var(--primary), 1)",
            "& .icon": {
                color: "rgba(var(--primary),1)",
            },
        },
    },
}));

const Categoria = ({ RecorrerSegmentos }) => {
    const classes = useStyles();
    return (
        <div>
            <Card
                className={clsx(
                    "relative overflow-hidden card",
                    classes.card
                )}
            >
                <CardContent className="flex-column justify-between min-h-full">
                    <div
                        className="text-center mb-4 icon"
                        style={{ fontSize: "12px", height: "5px" }}
                    >
                        <h4 className="mt-0 font-normal mb-4 text-22 text-primary">categorias
                  <Divider />
                        </h4>
                    </div>
                </CardContent>
                {RecorrerSegmentos.map((Card) => (
                    Card.Categorias.map((cat, index) => (
                        <Grid
                            item
                            key={index}
                            className="text-center"
                        >
                            <Link to={`/categoria/${cat.NombreCategoriaAux}/`}>
                                <div
                                    className={clsx({
                                        "px-1 py-1 mb-0 text-center border-radius-8 hover-bg-primary cursor-pointer": true,
                                    })}
                                >
                                    {cat.NombreCategoria}
                                </div>
                            </Link>
                        </Grid>
                    ))
                ))}
            </Card>
        </div>
    );
};

export default Categoria;
