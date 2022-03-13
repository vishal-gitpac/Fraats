import { createMuiTheme } from "@material-ui/core/styles";

const customTheme = (darkMode) =>
  createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: darkMode ? "#dadada" : "#48096a",
      },
      secondary: {
        main: darkMode ? "#ffffff" : "#48096a",
      },
      third: {
        main: darkMode ? "#000000" : "#ffffff",
      },
    },
    overrides: {
      MuiTypography: {
        root: {
          wordBreak: "break-word",
          color: "#FFF",
        },
        h6: {
          color: "#604f4f",
        },
        h5: {
          color: "#604f4f",
        },
        button: {
          color: "#604f4f",
        },
        caption: {
          color: "#604f4f",
        },
        comments: {
          color: "#000000",
        },
        body2: {
          color: "#604f4f",
        },
        subtitle2: {
          color: "#604f4f",
        },
      },
      MuiFormControl: {
        root: {
          flexDirection: "unset",
        },
      },
      MuiAvatar: {
        colorDefault: {
          backgroundColor: "#45AB0F",
        },
      },
      MuiButton: {
        textPrimary: {
          color: "#ffffff",
        },
      },
      MuiIconButton: {
        colorPrimary: {
          color: "#ffffff",
        },
      },
    },
  });

export default customTheme;
