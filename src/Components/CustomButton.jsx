import { Button, styled } from "@mui/material";
import React, { useContext } from "react";
import {AppContext} from '../context/AppContext'
const CustomButton = ({
  buttonText,
  heroBtn,
  guideBtn,
  getStartedBtn,
}) => {
  const {is_dark_mode} = useContext(AppContext)
  const CustomButton = styled(Button)(({ theme }) => ({
    backgroundColor:(is_dark_mode) ? "#E6F0FF" : '#0E143A',
    color: (is_dark_mode) ? "#0E143A" : '#E6F0FF',
    fontWeight: "700",
    fontSize: "14px",
    cursor: "pointer",
    zIndex: '90',
    padding: "0.5rem 1.25rem",
    borderRadius: "7px",
    textTransform: "none",
    display: "block",
    border: "2px solid transparent",
    "&:hover": {
      backgroundColor:  (is_dark_mode) ? "#0E143A" : '#E6F0FF',
      color: (is_dark_mode) ? "#E6F0FF" : '#0E143A',
      borderColor: (is_dark_mode) ? "#E6F0FF" : '#0E143A',
    },
    [theme.breakpoints.down("md")]: {
      margin: (heroBtn || getStartedBtn) && theme.spacing(0, "auto", 3, "auto"),
      width: (heroBtn || getStartedBtn) && "90%",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: guideBtn && theme.spacing(3),
      width: guideBtn && "90%",
    },
  }));

  return <CustomButton>{buttonText}</CustomButton>;
};

export default CustomButton;
