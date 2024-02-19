import React, { useState } from "react";
import {
    SideBySideMagnifier,
} from "react-image-magnifiers";


const SideExample = ({allproductosJson }) => {
    const [state, useStatus] = useState({
        alwaysInPlace: false,
        overlayOpacity: 0.7,
        switchSides: false,
        fillAvailableSpace: true,
        fillAlignTop: true,
        fillGapLeft: 0,
        fillGapRight: 10,
        fillGapTop: 10,
        fillGapBottom: 10
    })

    const {
        alwaysInPlace,
        overlayOpacity,
        switchSides,
        fillAvailableSpace,
        fillAlignTop,
        fillGapLeft,
        fillGapRight,
        fillGapTop,
        fillGapBottom
    } = state;

    return (
        <React.Fragment>
            <div className="flex">
                {allproductosJson.Imagenes.map((item, index) => (
                    <SideBySideMagnifier
                        key={index}
                        className="input-position"
                        style={{ order: switchSides ? "1" : "0" }}
                        imageSrc={`https://disdelsa.com/filemanager/file1007/imagenes/productos/small/${item.Imagen}`}
                        largeImageSrc={`https://disdelsa.com/imagenes/productos/${item.Imagen}`}
                        alwaysInPlace={alwaysInPlace}
                        overlayOpacity={overlayOpacity}
                        switchSides={switchSides}
                        zoomPosition="left"
                        inPlaceMinBreakpoint={641}
                        fillAvailableSpace={fillAvailableSpace}
                        fillAlignTop={fillAlignTop}
                        fillGapTop={fillGapTop}
                        fillGapRight={fillGapRight}
                        fillGapBottom={fillGapBottom}
                        fillGapLeft={fillGapLeft}
                        zoomContainerBorder="1px solid #ccc"
                        zoomContainerBoxShadow="0 4px 8px rgba(0,0,0,.5)"
                    />
                ))}
            </div>
        </React.Fragment>
    );
}

export default SideExample;
