const path = require(`path`)
module.exports = {
  siteMetadata: {
    title: `Disdel, S.A. Guatemala`,
    description: `Suministros de Limpieza, Mantenimiento y Seguridad Industrial`,
    descripcionLarga: `Fabricacion, Comercializacion y Venta de Productos de Limpieza y Mantenimiento,
    Distribuidora en Retail y Representacion de Marcas.`,
    author: `Disdel, S.A.`,
    siteUrl: `https://www.disdelsa.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: path.join(__dirname, `data`),
      },
    },
    "gatsby-transformer-json",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Disdelsa`,
        short_name: `Disdelsa`,
        start_url: `/`,
        background_color: `#f7f7f7`,
        theme_color: `##191919`,
        display: `minimal-ui`,
        icon: `${__dirname}/data/fabicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        // theme: {
        //  primaryColor: "#9c27b0",
        // },
        //  productionPrefix: "c",
      },
    },
    {
      resolve: `react-dynamic-swiper`,
    },
    {
      resolve: `gatsby-plugin-transition-link`,
      options: {
        injectPageProps: false,
      },
    },
    {
      resolve: `gatsby-plugin-react-redux`,
      options: {
        pathToCreateStoreModule: "./src/state/crearStore",
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    {
      resolve: "gatsby-plugin-whatshelp",
      options: {
        facebook: "186650771498310", // Facebook page ID
        whatsapp: "+502 3109 4985", // WhatsApp number
        email: "info@disdelsa.com", // Email
        call: "3109 4985", // Call phone number
        company_logo_url: "https://www.disdelsa.com/imagesFooder/icon.png", // URL of company logo (png, jpg, gif)
        greeting_message: "Hola, como podemos ayudarte? ", // Text of greeting message
        button_color: "#303f9f", // Color of button
        position: "right", // Position may be 'right' or 'left'
        order: "facebook,whatsapp,call,email", // Order of buttons
        ga: true, // Google Analytics enabled
        branding: false, // Show branding string
        mobile: true, // Mobile version enabled
        desktop: true, // Desktop version enabled
        greeting: true, // Greeting message enabled
        shift_vertical: 0, // Vertical position, px
        shift_horizontal: 0, // Horizontal position, px
        domain: "https://www.disdelsa.com/", // site domain
        key: "xxx", // pro-widget key
      },
    },
    {
      resolve: `gatsby-plugin-catch-links`,
      options: {
        // Links are relative to this directory
        excludeRegex: /excluded-link/,
      },
    },
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        name: 'pages',
        engine: 'flexsearch',
        engineOptions: {
          profile: "speed",
          tokenize: "forward",
        },

        query: `
        query {
          allAllproductosJson {
            edges {
              node {
                id
                IdProducto
                Descripcion
                Imagen
                ItemCodeAux
                IdRelacion
                BaseFardo
                BaseUnidad
                BaseDefault
                Marca
                Empaque
                EmpaqueCaja
                Ancho
                Peso
                Volumen
                Segmento
                Categoria
                Division
                SegmentoAux
                DivisionAux
                CategoriaAux
                SubCategoriaAux
                SubCategoria
                MultiploUnidad
                MultiploFardo
                Fardo
                Unidad
                Imagenes {
                  Imagen
                }
              }
            }
          }
        }
        `,

        ref: 'id',
        index: ['IdProducto', 'Descripcion'],
        store: ['id',
          'IdProducto',
          'Descripcion',
          'Imagen',
          'ItemCodeAux',
          'IdRelacion',
          'BaseFardo',
          'BaseUnidad',
          'BaseDefault',
          'Marca',
          'Empaque',
          'EmpaqueCaja',
          'Ancho'
          , 'Peso',
          'Volumen',
          'Segmento',
          'Categoria'
          , 'Division',
          'SegmentoAux'
          , 'DivisionAux'
          , 'CategoriaAux'
          , 'SubCategoriaAux'
          , 'SubCategoria'
          , 'MultiploUnidad'
          , 'MultiploFardo'
          , 'Fardo'
          , 'Unidad'
          , 'Imagenes'],
        normalizer: ({ data }) =>
          data.allAllproductosJson.edges.map(({ node }) => {
            return {
              id: node.id,
              IdProducto: node.IdProducto,
              Descripcion: node.Descripcion,
              Imagen: node.Imagen,
              ItemCodeAux: node.ItemCodeAux,
              IdRelacion: node.IdRelacion,
              BaseFardo: node.BaseFardo,
              BaseUnidad: node.BaseUnidad,
              BaseDefault: node.BaseDefault,
              Marca: node.Marca,
              Empaque: node.Empaque,
              EmpaqueCaja: node.EmpaqueCaja,
              Ancho: node.Ancho,
              Peso: node.Peso,
              Volumen: node.Volumen,
              Segmento: node.Segmento,
              Categoria: node.Categoria,
              Division: node.Division,
              SegmentoAux: node.SegmentoAux,
              DivisionAux: node.DivisionAux,
              CategoriaAux: node.CategoriaAux,
              SubCategoriaAux: node.SubCategoriaAux,
              SubCategoria: node.SubCategoria,
              MultiploUnidad: node.MultiploUnidad,
              MultiploFardo: node.MultiploFardo,
              Fardo: node.Fardo,
              Unidad: node.Unidad,
              Imagenes: node.Imagenes
            }
          }),
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-113718674-1",
        head: true,
        anonymize: true,
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: "247713476941558",
      },
    },
  ],
}
