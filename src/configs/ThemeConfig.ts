import { createTheme } from "@mui/material";
import shadows, { Shadows } from "@mui/material/styles/shadows";
const theme = createTheme({
    typography: {
         fontFamily: "Lato, Helvetica, Arial, sans-serif",
    },
    palette: {
         mode: "light",
         primary: { light: "#ffff", main: "#ffff", dark: "#212121", contrastText: "#fff",
         },
         secondary: {   light: "#ff7961",   main: "#f44336",   dark: "#ba000d",   contrastText: "#000",
         },
    },
    shadows: shadows.map(() => "none") as Shadows,
});
export default theme;