import { extendTheme } from '@chakra-ui/react'

const activeLabelStyles = {
  display: "none"
};
export const mynewtheme = extendTheme({

  colors: {
    primary: "#258CEC ",
    secondry: "#6943FF"
  },
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles
              }
            },
            "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label": {
              ...activeLabelStyles
            },
            label: {
              top: "6px",
              left: 0,
              zIndex: 2,
              position: "absolute",
              backgroundColor: "white",
              pointerEvents: "none",
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: "left top"
            }
          }
        }
      }
    }
  }
  ,
  breakpoints: {
    sm: "480px",
    md: "768px",
    lg: "992px",
    xl: "1280px",
  },
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Poppins', sans-serif`,
    poppinsFont:`'Poppins', sans-serif`,
  },

})