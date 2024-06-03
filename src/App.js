import * as React from "react";
import { Container, Button, Box, Modal, Typography } from "@mui/material";
import { FaHeart, FaGlobeAmericas } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
const steps = [
  {
    label: "Faleminderit qe me ke ndryshuar jeten",
    description: (
      <p>
        Më ngrite lart kur isha i rënë,
        <br /> Më dhe forcë kur isha i dobët. <br /> Më mësove dashurinë e
        vërtetë, <br /> Dhe më bëre njeriun që jam sot.
      </p>
    ),
  },
  {
    label: "Faleminderit per cdo moment qe kemi kaluar bashke",
    description: (
      <p>
        Çdo moment pranë teje është kujtim i çmuar,
        <br />
        Një histori e bukur që do ta ruaj në zemër.
        <br />
        Faleminderit për çdo buzëqeshje, për çdo përqafim,
        <br />
        Për kohën e çmuar që bashkë e ndamë.
      </p>
    ),
  },
  {
    label: "Jeta ime shtohet kur ti qesh",
    description: (
      <p>
        Kur qesh, bota ndriçon, <br />
        Dhe zemra ime këndon. <br />
        Me ty, çdo ditë është festë, <br />
        Je gëzimi që jetën më shton.
      </p>
    ),
  },
  {
    label: "Te dua shume!",
    description: (
      <p>
        Dashuria ime për ty tejkalon çdo fjalë,
        <br />
        Është ndjenjë e thellë që në zemër më rreh.
        <br />
        Në sytë e tu shoh parajsën time,
        <br />
        Pa ty jeta ime s'ka kuptim e as vlerë.
      </p>
    ),
  },
  {
    label: "Kjo poezi shkon vec per ty",
    description: (
      <p>
        Gëzuar ditëlindjen, qenie e çuditshme, <br />
        Ti, me sytë si yje dhe buzëqeshje të pjerrët! <br />
        Me ty, çdo ditë është një aventurë, <br />
        Një karusel që nuk ndalet, një festë pa kufi. <br />
        Ti, me flokët e tua të çrregullt, <br />
        Dhe idetë e tua të çmendura, <br />
        Më bën të qesh me lot, më bën të ëndërroj me sy hapur. <br />
        Je si një këngë pa melodi, <br />
        Një pikturë pa ngjyra, <br />
        Një libër pa fjalë, <br />
        Por që megjithatë, më mbush shpirtin plot. <br />
        Ti, me zemrën tënde të madhe, <br />
        Dhe shpirtin tënd të lirë, <br />
        Më bën të ndihem e gjallë, më bën të ndihem unë. <br />
        Gëzuar ditëlindjen, dashuria ime e çmendur, <br />
        Ti, që je gjithçka që kam ëndërruar, <br />
        Dhe më shumë se ç'mund të shpjegoj me fjalë. <br />
        Të dua deri në hënë e mbrapa, <br />
        Dhe pastaj edhe një herë nga e para!
      </p>
    ),
  },
];
function App() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <Container
      maxWidth="sm"
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <FaHeart size={80} color="#d90429" />
        <FaHeart size={60} color="#d90429" />
        <FaHeart size={40} color="#d90429" />
        <FaHeart size={20} color="#d90429" />
        <FaHeart size={40} color="#d90429" />
        <FaHeart size={60} color="#d90429" />
        <FaHeart size={80} color="#d90429" />
      </Box>

      <Button variant="contained" color="error" onClick={handleOpen}>
        <Typography sx={{ marginRight: "0.5rem" }}>
          Gezuar Ditelindjen Bota Ime
        </Typography>
        <FaGlobeAmericas size={40} />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "0.5rem",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FaHeart size={20} color="#d90429" />
            Dashuria ime
            <FaHeart size={20} color="#d90429" />
          </Typography>
          <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
            <Paper
              square
              elevation={0}
              sx={{
                display: "flex",
                alignItems: "center",
                height: 50,
                pl: 2,
                bgcolor: "background.default",
              }}
            >
              <Typography sx={{ fontWeight: "bold" }}>
                {steps[activeStep].label}
              </Typography>
            </Paper>
            <Box sx={{ width: "100%", px: 2 }}>
              {steps[activeStep].description}
            </Box>
            <MobileStepper
              variant="text"
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
                >
                  Next
                  {theme.direction === "rtl" ? (
                    <IoIosArrowBack />
                  ) : (
                    <IoIosArrowForward />
                  )}
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                >
                  {theme.direction === "rtl" ? (
                    <IoIosArrowForward />
                  ) : (
                    <IoIosArrowBack />
                  )}
                  Back
                </Button>
              }
            />
          </Box>
        </Box>
      </Modal>
    </Container>
  );
}

export default App;
