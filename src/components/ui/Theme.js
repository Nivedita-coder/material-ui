import { createTheme } from '@mui/material/styles'


const arcBlue = "#0000D6"
const arcOrange=  "#DD7A00"

export default createTheme({
    palette:{
        common: {
            blue: `${arcBlue}`,
            orange: `${arcOrange}`
        },

        primary:{
            main:`${arcBlue}`
        },
        secondary: {
            main: `${arcOrange}`
        }
    },
    typography:{
        tab: {
        fontFamily: "Raleway",
        textTransform: "none",
        fontWeight: 700,
        fontSize: "1rem",
        color: "#fffff"
        },
        estimate: {
          fontFamily: "Pacifico",
          fontSize: "1rem",
          textTransform: "none",
          color: "white"
        }
    }
}); 
   

