import { makeStyles } from "@material-ui/core/styles";

export const borderStyles = makeStyles(({ palette, ...theme }) => ({
  "@global": {
    ".border-radius-0": { borderRadius: "0px !important", overflow: "hidden" },
    ".border-radius-4": { borderRadius: "4px !important", overflow: "hidden" },
    ".border-radius-8": { borderRadius: "8px !important", overflow: "hidden" },
    ".border-radius-12": {
      borderRadius: "12px !important",
      overflow: "hidden"
    },
    ".border-radius-circle": { borderRadius: "50% !important" },
    ".border-none": { border: "none !important" },
    ".border-transparent": { border: "1px solid transparent !important" },
    ".rounded": {
      borderRadius: "300px !important",
      overflow: "hidden !important"
    },
    ".rounded-l": {
      borderTopLeftRadius: "300px !important",
      borderBottomLeftRadius: "300px !important",
      overflow: "hidden !important"
    },
    ".rounded-ll": {
      borderTopLeftRadius: "5px !important",
      borderBottomLeftRadius: "5px !important",
      borderBottomRightRadius: "5px !important",
      borderTopRightRadius:"5px !important",
      overflow: "hidden !important"
    },
    ".rounded-lFin": {
      borderBottomRightRadius: "300px !important",
      borderTopRightRadius:"300px !important",
      overflow: "hidden !important"
    },
    ".rounded-Buttons": {
      borderTopLeftRadius: "5px !important",
      borderBottomLeftRadius: "5px !important",
      overflow: "hidden !important"
    },
    ".rounded-r": {
      borderTopRightRadius: "300px !important",
      borderBottomRightRadius: "300px !important",
      overflow: "hidden !important"
    }
  }
}));
