import * as React from "react"
import PropTypes from "prop-types"
import GlobalCss from "./jss/GlobalCss"
import "react-perfect-scrollbar/dist/css/styles.css"
import { MuiThemeProvider ,makeStyles} from "@material-ui/core/styles"
import Scrollbar from "react-perfect-scrollbar"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./layout.css"
import { Theme } from "./theme"
const Header = React.lazy(() => import("./sections/Header/HederPrincipal"))
//const Fooder = React.lazy(() => import("./sections/Footer"))
const FooterTe = React.lazy(() => import("./sections/FooterTest"));
const useStyles = makeStyles(({ palette, ...theme }) => ({
  toolbar: {
    minHeight:'15px'
  }
}))
const Layout = ({ children }) => {
  const classes = useStyles();
  const isSSR = typeof window === "undefined"
  return (
    <>
      {!isSSR && (
        <React.Suspense fallback={<div />}>
          <MuiThemeProvider theme={Theme}>
            <GlobalCss>
              <Scrollbar
                className="h-full-screen scrollable-content"
                option={{ suppressScrollX: true }}
              >
                <Header />
                <ToastContainer
                  position="top-right"
                  autoClose={3000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                />
                {children}
                <div className={classes.toolbar} />
                <FooterTe />
              </Scrollbar>
            </GlobalCss>
          </MuiThemeProvider>
        </React.Suspense>
      )}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
