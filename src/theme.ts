import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        borderRadius: "4px",
        fontWeight: 600,
        letterSpacing: "0.75px",
      },
      sizes: {
        md: {
          px: 16,
          py: 6,
          fontSize: "md",
        },
      },
      variants: {
        outline: {
          border: "2px solid",
        },
        ghost: {
          border: "2px solid #D9DBE9",
        },
      },
      defaultProps: {
        size: "md",
      },
    },
  },
  colors: {},
  fonts: {
    body: "'Poppins', sans-serif",
    heading: "'Poppins', sans-serif",
    mono: "'Poppins', sans-serif",
  },
});

export default theme;
