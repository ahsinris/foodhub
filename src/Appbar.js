import { AppBar, Box, colors, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "styled-components";
import { blue } from "@mui/material/colors";

const Font = styled(Typography)`
  font-size: 15px !important;
`;

const Span = styled.span`
 font-size: 15px !important;
`
const Appbar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{bgcolor:'white'}}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              sx={{ mr: 2 }}
            >
              <MenuIcon sx={{color:'black'}}/>
            </IconButton>
            <Box>
              <Font component="div" sx={{ flexGrow: 1 }}>
                <span style={{color:'blue'}}>Test - Stoke City FC Fennhouse -<span style={{color:"black"}}>796542</span> - <span style={{color:'red'}}>Gpin</span></span>
                <br />
                <span style={{color:"black",fontFamily:"system-ui",fontSize:"13px",fontWeight:500}}>STOKE-ON-TRENT-<span style={{color:"blue"}}>ST4 3NR</span>-Finished -<span style={{color:"blue"}}>Foodhub</span></span>
              </Font>
              {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            STOKE-ON-TRENT-ST4 3NR-Finished -Foodhub
            </Typography> */}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Appbar;
