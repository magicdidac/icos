import { createTheme } from "@mui/material"
import { grey } from "@mui/material/colors"
import { CSSProperties } from "react"

declare module '@mui/material/styles' {
    interface TypographyVariants {
        mini: CSSProperties
    }

    interface TypographyVariantsOptions {
        mini?: CSSProperties
    }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        mini: true
    }
}

export const primaryColor = '#6daaca'
export const secondaryColor = grey[100]
const fontSizebody1 = 'calc(.85rem + 2*(100vw - 20rem)/980)'
const fontSizemini = 'calc(.5rem + 2*(100vw - 20rem)/980)'

export const webTheme = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: '#e1e1e1'
        },
        primary: {
            main: primaryColor,
            contrastText: "#fff"
        },
        secondary: {
            main: secondaryColor,
            contrastText: "#fff"
        },
        info: {
            main: grey[100]
        }
    },
    typography: {
        mini: {
            color: grey[700],
            fontSize: fontSizemini
        }
    },
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    userSelect: 'none',
                    WebkitUserSelect: 'none',
                    msUserSelect: 'none'
                },
                body1: {
                    color: grey[800],
                    fontSize: fontSizebody1
                },
                gutterBottom: {
                    marginBottom: '.75rem'
                }
            }
        }
    }
})
