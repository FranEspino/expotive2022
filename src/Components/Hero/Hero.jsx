import { Box, Container, styled, Typography } from "@mui/material";
import React from "react";
import Navbar from "../Navbar";
import "@google/model-viewer";
import Animation  from "./Animation";
import CustomButton from "../CustomButton";
import '../../index.css'
const Hero = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#000336",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));

  return (
    <Box sx={{ backgroundColor: "background.default", 
    paddingTop:{xs: '3em', md:'6em'} ,
     paddingBottom: {xs: '3em', md:'6em'}}}>
    
        <Navbar />
        <Container>

    
        <CustomBox>
          <Box sx={{ flex: "1" }}>
            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: 'text.primary',
                fontWeight: "500",
                mt: 5,
                mb: 4,
              }}
            >
             Desde el 21 hasta el 25 de diciembre
            </Typography>
            <Title variant="h1"  sx={{ color: 'text.primary'}}>
              Gran evento Expotive 2022 
            </Title>
            <Typography
              variant="body2"
              sx={{ fontSize: "18px", my: 4, color: 'text.primary'}}
            >
            El único evento de tecnología en el norte del pais donde puedes capacitarte, participar y conocer expertos del área de la informática.
            </Typography>
            <CustomButton
              backgroundColor="text.primary"
              color="background.default"
              
              buttonText="Inscríbete Aquí"
              heroBtn={true}
            />
          </Box>

          <Box sx={{flex:1, marginTop: {xs: "0em", md: "4em"}}}>
            <Animation />
          </Box>
        </CustomBox>
        </Container>
    </Box>
  );
};

export default Hero;
