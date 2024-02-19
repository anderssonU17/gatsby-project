import React, { useState } from "react";
import { Link } from "gatsby"
import {Card, Divider, CardContent, ExpansionPanel,ExpansionPanelSummary,Grid} from "@material-ui/core";
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
    root: {
        flexGrow: 2,
        maxWidth: 400,
    },
}));

const Categoria = ({ RecorrerSegmentos }) => {
    const classes = useStyles();
    const [expandedIndex, setExpandedIndex] = useState(null);

    return (
        <div>
            <Card>
                <CardContent className="flex-column justify-between min-h-full">
                    <div
                        className="text-center mb-4 icon"
                        style={{ fontSize: "12px", height: "5px"}}
                    >
                        <h4 className="mt-0 font-normal mb-4 text-primary">Categorias y subcategorias
                  <Divider />
                        </h4>
                    </div>
                </CardContent>
                {RecorrerSegmentos.map((Card) => (
                    Card.Categorias.map((cat, index) => (
                        <ExpansionPanel
                            key={index}
                            className={clsx({
                                "border-radius-4 mb-0": true,
                                "elevation-z3": expandedIndex === index,
                                "box-shadow-none": expandedIndex !== index,
                            })}
                            onChange={(e, expanded) =>
                                expanded ? setExpandedIndex(index) : setExpandedIndex(null)
                            }
                            expanded={expandedIndex === index}
                        >
                            <ExpansionPanelSummary
                                className={clsx({
                                    "hover-bg-primary": true,
                                    "bg-primary text-white": expandedIndex === index,
                                })}
                                style={{ fontSize: "12px", height: "1px" }}
                            >
                                {cat.NombreCategoria}
                            </ExpansionPanelSummary>
                            <ul>
                                <li>
                                    {cat.SubCategorias.map((Sub, index) => (
                                        <Grid
                                            item
                                            key={index}
                                            className=""
                                        >
                                            <Link to={`/subcategoria/${Sub.NombreSubCategoriaAux}/`}>
                                                <div
                                                    className={clsx({
                                                        "px-0 py-0 mb-0  border-radius-8 hover-bg-primary cursor-pointer": true,
                                                    })}
                                                    key={index}
                                                >
                                                    {Sub.NombreSubCategoria}
                                                </div>
                                            </Link>
                                        </Grid>
                                    ))}
                                </li>
                            </ul>
                        </ExpansionPanel>
                    ))
                ))}
            </Card>
        </div>
    );
};
export default Categoria;
