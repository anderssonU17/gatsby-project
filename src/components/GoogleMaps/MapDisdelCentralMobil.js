import React from "react";
import Grid from "@material-ui/core/Grid";

const MapDisdelCentralMobil = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <Grid container item xs={12} style={{ padding: "10px" }}>
          <Grid item md={12} xs={12} style={{ textAlign: "center" }}>
          <h3 className="inline-block m-0 font-medium">
           Oficina Central
            </h3>
          </Grid>
        </Grid>
      </div>
      <Grid>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.4232640827267!2d-90.5058789844534!3d14.631898580229944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a241098dd819%3A0x947ec53e3688af6a!2sDisdel%2C%2015%20Calle%2016-30%2C%20Cdad.%20de%20Guatemala%2001001!5e0!3m2!1ses-419!2sgt!4v1598646390925!5m2!1ses-419!2sgt"
          width="100%"
          height="400px"
          frameborder="0"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </Grid>
    </div>
  );
};

export default MapDisdelCentralMobil;
