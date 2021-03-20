import { defaultTheme } from "react-admin";
import merge from "lodash/merge";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import createPalette from "@material-ui/core/styles/createPalette";
import defaultMuiTheme from "@material-ui/core/styles/defaultTheme";


const palette = createPalette(
    merge({}, defaultTheme.palette, {
        primary: {
            main: "#3BBCD9"
        },
        secondary: {
            main: "#FDA929"
        },
    })
);

const rawTheme = {
    palette,
    overrides: {
        RaSidebar: {
            drawerPaper: {
                backgroundColor: palette.common.white,
                color: palette.secondary.main,
                height: "100%",
                boxShadow:
                    "2px 0px 1px -1px rgba(0,0,0,0.2), 1px 0px 3px 0px rgba(0,0,0,0.1)",
            }
        },
        RaMenuItemLink: {
            active: {
                borderLeftStyle: "none",
                borderRightColor: palette.secondary.main,
                borderRightWidth: defaultMuiTheme.spacing(0.5),
                borderRightStyle: "solid",
                backgroundColor: palette.action.selected,
                color: palette.secondary.main,
            },
            icon: {
                color: "inherit"
            }
        }
    }
};

export const theme = createMuiTheme(
    merge({}, defaultTheme, rawTheme)
)