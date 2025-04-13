import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
    interface TypographyVariants {
        h0: React.CSSProperties;
        p1: React.CSSProperties;
        p2: React.CSSProperties;
        s1: React.CSSProperties;
        s2: React.CSSProperties;
    }

    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        h0?: React.CSSProperties;
        p1?: React.CSSProperties;
        p2?: React.CSSProperties;
        s1?: React.CSSProperties;
        s2?: React.CSSProperties;
    }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
        h0: true;
        p1: true;
        p2: true;
        s1: true;
        s2: true;
    }
}

// Custom colors
declare module "@mui/material/styles" {
    interface Palette {
        outline: Palette["primary"];
        form: Palette["primary"];
        red: Palette["primary"];
        green: Palette["primary"];
        blue: Palette["primary"];
    }

    interface PaletteOptions {
        outline?: PaletteOptions["primary"];
        form?: PaletteOptions["primary"];
        red?: PaletteOptions["primary"];
        green?: PaletteOptions["primary"];
        blue?: PaletteOptions["primary"];
    }
}

declare module "@mui/material/Button" {
    interface ButtonPropsColorOverrides {
        outline: true;
        form: true;
        red: true;
        blue: true;
        green: true;
    }
}

let theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 992,
            xl: 1040,
        },
    },
    palette: {
        primary: {
            main: "#FFE44D",
            light: "#FFF5C0",
            dark: "#FFAA0D",
        },
        error: {
            main: "#F44336",
        },
        info: {
            main: "#03A9F4",
        },
        success: {
            main: "#01A54E",
        },
        text: {
            primary: "#1A1A1A",
            secondary: "#7B8E98",
        },
    },
    typography: {
        fontFamily: "Nunito, Arial",
        fontSize: 16,
        h0: {
            fontWeight: "900",
            fontSize: "48px",
            lineHeight: "52px",
            letterSpacing: 0,
        },
        h1: {
            fontWeight: "800",
            fontSize: "28px",
            lineHeight: "32px",
            letterSpacing: 0,
        },
        h2: {
            fontWeight: "800",
            fontSize: "24px",
            lineHeight: "28px",
            letterSpacing: 0,
        },
        h3: {
            fontWeight: "800",
            fontSize: "20px",
            lineHeight: "24px",
            letterSpacing: 0,
        },
        p1: {
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "20px",
            letterSpacing: 0,
        },
        p2: {
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "20px",
            letterSpacing: 0,
        },
        s1: {
            fontWeight: "400",
            fontSize: "12px",
            lineHeight: "14px",
            letterSpacing: 0,
        },
        s2: {
            fontWeight: "400",
            fontSize: "9px",
            lineHeight: "12px",
            letterSpacing: 0,
        },
    },
});

theme = createTheme(theme, {
    // Custom colors created with augmentColor go here
    palette: {
        outline: theme.palette.augmentColor({
            color: {
                main: "#CFD8DC",
            },
            name: "outline",
        }),
        form: theme.palette.augmentColor({
            color: {
                main: "#ECEFF1",
            },
            name: "form",
        }),
        red: theme.palette.augmentColor({
            color: {
                main: "#F44336",
            },
            name: "red",
        }),
        blue: theme.palette.augmentColor({
            color: {
                main: "#03A9F4",
            },
            name: "blue",
        }),
        green: theme.palette.augmentColor({
            color: {
                main: "#01A54E",
            },
            name: "green",
        }),
    },
});

export { theme };
