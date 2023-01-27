import React from 'react'
import { ChildrenProp } from '../Interfaces/Interfaces'
import { createTheme, ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'

export enum themePallet {
    BG = "#FFFFFF",
    BUTTON_COLOR = "#3A4451",
    FONT_GLOBAL = "'Open Sans', sans-serif"
}

const theme = createTheme({
    palette: {
        mode: "light",
        background: {
            default: themePallet.BG
        },
        primary: {
            main: themePallet.BUTTON_COLOR
        }
    },
    typography: {
        fontFamily: themePallet.FONT_GLOBAL
    },
    components: {
        MuiButton: {
            defaultProps: {
                style: {
                    textTransform: "none",
                    boxShadow: "none",
                    borderRadius: "8px",
                    fontWeight: "700",
                    fontSize: 16,
                    lineHeight: "24px",
                    textAlign: "center",
                }
            }
        },
        MuiAppBar: {
            defaultProps: {
                style: {
                    background: "#091625"
                }
            }
        },
        MuiInput: {
            defaultProps: {
                style: {
                    borderRadius: '20px',
                    color: '#000',
                }
            }
        },
        MuiModal: {
            defaultProps: {
                style: {
                    position: 'fixed',
                    zIndex: '1300',
                    right: '0',
                    bottom: '0',
                    top: '0',
                    left: '0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: 'none'
                }
            }
        },
        MuiContainer: {
            defaultProps: {
                style: {
                    maxWidth: '100%',
                    height: '540px',
                    background: '#E6E8E9',
                    margin: '0'
                }
            }
        },
        MuiCard:{
            defaultProps:{
                style:{
                    boxShadow:'none'
                }
            }
        }
    }
})

const ThemeConfig: React.FC<ChildrenProp> = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}

export default ThemeConfig