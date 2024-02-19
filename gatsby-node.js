const path = require(`path`)
const slug = require(`slug`)
const { slash } = require(`gatsby-core-utils`)
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const result = await graphql(
    `
      {
        allAllproductosJson {
          edges {
            node {
              ItemCodeAux
            }
          }
        }
        allMenuJsonJson {
          edges {
            node {
              NombreSegmento
              SegmentoAux
            }
          }
        }
        paginas: allAllproductosJson {
          segmento: distinct(field: SegmentoAux)
          categorias: distinct(field: CategoriaAux)
          SubCategoria: distinct(field: SubCategoriaAux)
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create image post pages.
  const ProductoTemplate = path.resolve(`src/templates/producto-page.jsx`)
  const SegmentoTemplate = path.resolve(`src/templates/segmento-page.jsx`)
  const CategoriaTemplate = path.resolve(`src/templates/categoria-page.jsx`)
  const SubCategoriaTemplate = path.resolve(
    `src/templates/subcategoria-page.jsx`
  )
  // We want to create a detailed page for each
  // Instagram post. Since the scraped Instagram data
  // already includes an ID field, we just use that for
  // each page's path.
  result.data.allAllproductosJson.edges.forEach(edge => {
    // Gatsby uses Redux to manage its internal state.
    // Plugins and sites can use functions like "createPage"
    // to interact with Gatsby.
    createPage({
      // Each page is required to have a `path` as well
      // as a template component. The `context` is
      // optional but is often necessary so the template
      // can query data specific to each page.
      path: `/producto/${slug(edge.node.ItemCodeAux)}/`,
      component: slash(ProductoTemplate),
      context: {
        id: edge.node.ItemCodeAux,
      },
    })
  })

  result.data.allMenuJsonJson.edges.forEach(edge => {
    createPage({
      path: `/${slug(edge.node.SegmentoAux)}/`,
      component: slash(SegmentoTemplate),
      context: {
        segmento: edge.node.SegmentoAux,
      },
    })
  })
  result.data.paginas.categorias.forEach(edge => {
    createPage({
      path: `/categoria/${slug(edge)}/`,
      component: slash(CategoriaTemplate),
      context: {
        categoria: edge,
      },
    })
  })
  result.data.paginas.SubCategoria.forEach(edge => {
    createPage({
      path: `/subcategoria/${slug(edge)}/`,
      component: slash(SubCategoriaTemplate),
      context: {
        subcategoria: edge,
      },
    })
  })
}

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, deletePage } = actions
  // Check if the page is a localized 404
  if (page.path.match(/^\/[a-z]{2}\/404\/$/)) {
    const oldPage = { ...page }
    // Get the language code from the path, and match all paths
    // starting with this code (apart from other valid paths)
    const langCode = page.path.split(`/`)[1]
    page.matchPath = `/${langCode}/*`
    // Recreate the modified page
    deletePage(oldPage)
    createPage(page)
  }
}
