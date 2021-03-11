import { createMuiTheme } from "@material-ui/core";

export const customTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#1f2833",
    },
    secondary: {
      main: "#4e4e50",
    },
    danger: {
      main: "#501b1d",
    },
  },
  typography: {
    fontFamily: "Roboto Slab, serif",
    fontSize: 14,
  },
  props: {
    MuiButton: {
      disableRipple: true,
    },
    MuiTab: {
      disableRipple: true,
    },
    MuiButtonBase: {
      disableRipple: true,
    },
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 2,
        lineHeight: 1.5,
        fontSize: "0.55rem",
      },
    },
    MuiGrid: {
      item: {
        padding: 2,
      },
    },
    MuiCard: {
      root: {
        borderRadius: 2,
      },
    },
    MuiPaper: {
      root: {
        borderRadius: 2,
      },
      rounded: {
        borderRadius: 2,
      },
    },
    MuiChip: {
      root: {
        fontWeight: "700",
        verticalAlign: "middle",
      },
      outlined: {
        backgroundColor: "#f1f1f1",
        borderColor: "orange",
      },
    },
    MuiBox: {
      root: {
        padding: 0,
      },
    },
    MuiTabs: {
      root: {
        padding: 0,
        minHeight: 30,
      },
    },
    MuiTab: {
      root: {
        padding: "6px 4px",
        minHeight: 30,
        fontSize: "0.60rem",
      },
    },
    MuiTableCell: {
      head: {
        color: "#1f1f1f",
      },
      root: {
        padding: 2,
      },
    },
    MuiTableRow: {
      head: {
        backgroundColor: "#eee",
      },
    },
    MuiBottomNavigation: {
      root: {
        backgroundColor: "transparent",
        height: "40px",
      },
    },
    MuiBottomNavigationAction: {
      root: {
        color: "#aaa",
        padding: 2,
        filter: "grayscale(100%)",
      },
    },
    MuiAppBar: {
      root: {
        borderRadius: 0,
      },
    },
    MuiMobileStepper: {
      root: {
        marginTop: 4,
        justifyContent: "center",
        backgroundColor: "transparent",
      },
    },
    MuiCircularProgress: {
      root: {
        width: "30px",
        height: "30px",
      },
    },
    MuiMenuItem: {
      root: {},
    },
    MuiPopover: {
      root: {
        borderRadius: 2,
      },
    },
    MuiOutlinedInput: {
      root: {
        padding: 2,
        borderRadius: 2,
      },
      input: {
        padding: 8,
      },
    },
    MuiInputLabel: {
      outlined: {
        transform: "translate(12px, 12px) scale(1)",
      },
    },
    MuiDialogTitle: {
      root: {
        padding: "8px 12px",
      },
    },
    MuiDialogContent: {
      root: {
        padding: "8px 12px",
      },
    },
    MuiFormControlLabel: {
      root: {
        marginRight: 8,
      },
    },
    MuiListItemText: {
      root: {
        color: "#000",
      },
    },
    MuiTablePagination: {
      toolbar: {
        minHeight: 30,
      },
    },
    MuiTypography: {
      body1: {
        color: "#000",
        fontWeight: 600,
      },
    },
    MuiFormControl: {
      marginNormal: {
        marginTop: 5,
        marginBottom: 5,
      },
    },
  },
});
