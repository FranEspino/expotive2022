import { Details } from '@mui/icons-material'
import { Box,createTheme, ThemeProvider } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import Companies from '../Components/Companies'
import Footer from '../Components/Footer'
import GetStarted from '../Components/GetStarted'
import Guide from '../Components/Guide'
import Hero from '../Components/Hero/Hero'
import Properties from '../Components/Properties'
import Slider from '../Components/Slider/Slider'
import { AppContext } from '../context/AppContext'

const HomePage = () => {
    const {is_dark_mode} = useContext(AppContext)
  
    const darkMode = createTheme({
        palette: {
          mode: (is_dark_mode) ? 'light' : 'dark',
          ...(is_dark_mode === false
            ? {
                background: {
                  default: "#E6F0FF",
                  paper: "#0E143A",
                },
              }
            : {
                background: {
                  default: "#0E143A",
                  paper: "#E6F0FF",
                },
              }),
          text: {
            ...(is_dark_mode === false
              ? {
                  primary: "#0E143A",
                }
              : {
                  primary: "#E6F0FF",
                }),
          },
       
        },
      });
  return (
    <ThemeProvider theme={darkMode}>
    <Box bgcolor={"background.default"}>
      <Hero />
      <Slider />
     
      <Footer/>
    </Box>
  </ThemeProvider>  )
}

export default HomePage