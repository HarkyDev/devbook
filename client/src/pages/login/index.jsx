import React from 'react'
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material"
import Form from "../../components/loginForm/index.jsx"

function Login() {

const theme = useTheme()
const isNonMobileScreens = useMediaQuery("(mid-width: 1000px)");

  return (
     <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          Devbook
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Devbook: A home for developers
        </Typography>
        <Form />
      </Box>
    </Box>
  )
}
export default Login