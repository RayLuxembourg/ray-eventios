import { injectGlobal } from "styled-components";
injectGlobal`
*{
  box-sizing: border-box;
}
body{
  margin: 0;
  padding: 0;
  font-family: Roboto;
  background-color: #F9F9FB;
}`;
const createWidthHeight = (width, height, unit) => {
  return { width: `${width}${unit}`, height: `${height}${unit}` };
};

export default {
  font: "Roboto",
  color: {
    primary: "#22D486",
    danger: "#FF4081",
    dark: "#323C46",
    secondary: "#D9DCE1",
    background: "#F9F9FB",
    fade: "#C9CED3",
    hover: {
      primary: "#20BD78",
      danger: "#E73370",
      secondary: "#C4C9D1"
    }
  },
  button: {
    size: {
      sm: createWidthHeight(100, 32, "px"),
      lg: createWidthHeight(240, 57, "px")
    }
  }
};
