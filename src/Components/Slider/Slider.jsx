import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { AppContext } from "../../context/AppContext";
import { ImageList, ImageListItem, ImageListItemBar, styled } from "@mui/material";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const CustomListItemBar = styled(ImageListItemBar)`
  
  .MuiImageListItemBar-title{
    font-size: 22px;
    font-weight: 500;
    }
  .MuiImageListItemBar-subtitle{
    margin-top: 0.5em;
    width: 100%;
    font: normal 15px arial, helvetica, sans-serif;
    white-space: normal;

  }

  @media (max-width: 600px) {
    .MuiImageListItemBar-title{
      font-size: 16px;
      }
    .MuiImageListItemBar-subtitle{
      font: normal 13px arial, helvetica, sans-serif;
      margin-top: 0.2em;

    }
  }
`;
const images = [
  {
    history: "Expotive quiere decir Exposición de Tecnologías Informáticas con Visión Empresarial. ",
    title: "Concursos de proyectos  🚀",
    subtitile: "Si tienes un proyecto informático, Inscríbete y concursa para ganar grandes premios.",
    imgPath:
      "https://res.cloudinary.com/frapoteam/image/upload/v1666480392/75610694_1527404540733812_280014065059758080_n_mz9xnu.jpg",
  },
  {
    history: "Tiene una duración de una semana con diferentes actividades tecnológicas en cada día.",
    title: "Concurso de programación 👨🏻‍💻",
    subtitile: "Pon a prueba tu habilidad de programación y vive la experiencia con Expotive. ",

    imgPath:
      "https://res.cloudinary.com/frapoteam/image/upload/v1666480151/76261827_1529564497184483_1122104998293929984_n_uwurnv.jpg",
  },
  {
    history: "El propósito de esta semana es impulsar y motivar a los alumnos de Informática de la UNT.",
    title: "Ponencias con expertos 👨🏻‍🏫",
    subtitile: "Asiste a las ponencias presenciales y virtuales de tu interes brindadas con expertos. ",

    imgPath:
      "https://res.cloudinary.com/frapoteam/image/upload/v1666480483/78079665_1526212067519726_5118588899198763008_n_yyyqas.jpg",
  },
  {
    history: "Expotive busca ser el evento con mayor impacto tecnológico en el norte del país.",
    title: "Conecta con expotive 2022 ✨",
    subtitile: "Aumenta tu red de contactos con personas increíbles en el campo de la tecnología. ",

    imgPath:
      "https://res.cloudinary.com/frapoteam/image/upload/v1666481218/76695064_1526218414185758_7645560691943800832_n_aoe3e9.jpg",
  },
];

function Slider() {
  const theme = useTheme();
  const { is_dark_mode } = React.useContext(AppContext);
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ margin: "auto" }}>
         <div
        style={{
          width: "5%",
          height: "5px",
          backgroundColor: (is_dark_mode)?'#E6F0FF' :'#0E143A',
          margin: "0 auto",
        }}
      ></div>

      <Typography
        variant="h3"
        sx={{ fontSize: "35px", textAlign: 'center', fontWeight: "bold", color:'text.primary', my: 3 }}
      >
        ¿Que es Expotive?
      </Typography>
      <Container>
        <Paper
          square
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            height: 50,
        
            marginTop: { xs: 8, md: 4 },
            marginBottom: { xs: 5, md: 4 },

            color: "primary.text",
            bgcolor: "background.default",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "18px", md: "20px" },
              fontWeight: "semibold",
              marginBottom: "1em",
              color:'primary.text'

            }}
          >
            {images[activeStep].history}
          </Typography>
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
         interval={5000}
        >
          {images.map((step, index) => (
            <div key={step.label} >
              {Math.abs(activeStep - index) <= 2 ? (
                <>
                  <ImageList
                    sx={{
                      height: { xs: 250, md: 450 },
                      display: "block",
                      objectFit: "cover",
                      overflow: "hidden",
                      width: "100%",
                    }}
                  >
                    <ImageListItem>
                      <img
                      src={step.imgPath}
                      alt={step.title}
                        loading="lazy"
                      />
                      <CustomListItemBar
                        title={step.title}
                        sx={{
                            height: { xs: 80,  sm: 350 ,md: 350 , lg: 420},
                            display: "block",
                           
                          }}
                        subtitle={step.subtitile}
                      />
                    </ImageListItem>
                  </ImageList>
                </>
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
        
          nextButton={
            <Button
              size="small"
              style={
                is_dark_mode
                  ? { color: "#E6F0FF", fontWeight: "bold" }
                  : { color: "#0E143A", fontWeight: "bold" }
              }
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Siguiente
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              style={
                is_dark_mode
                  ? { color: "#E6F0FF", fontWeight: "bold" }
                  : { color: "#0E143A", fontWeight: "bold" }
              }
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
              autoCapitalize={true}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Anterior
            </Button>
          }
        />
      </Container>
    </Box>
  );
}

export default Slider;
