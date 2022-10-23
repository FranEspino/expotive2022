import { Box, Container, styled, Typography } from "@mui/material";
import React from "react";
import Navbar from "../Navbar";
import "@google/model-viewer";
import model from "../../media/model2.glb";

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
    <Box sx={{ backgroundColor: "background.default", paddingTop:'6em' }}>
    
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
              Be the first to get the best real estate deals before they hit the
              mass market! Hot foreclosure deals with one simple search!
            </Typography>
            <CustomButton
              backgroundColor="text.primary"
              color="background.default"
              
              buttonText="Inscríbete Aquí"
              heroBtn={true}
            />
          </Box>

          <Box sx={{flex:1}}>
          <div className="model ">
          <model-viewer
            className="model"
            poster="https://res.cloudinary.com/frapoteam/image/upload/v1620880668/avatarss_b1m8ml.png"
            src={model}
            alt="model name"
            loading="lazy"
       
        
            disable-zoom={true}
            autoplay
          ></model-viewer>
        </div>
          </Box>
        </CustomBox>
        </Container>
    </Box>
  );
};

export default Hero;
