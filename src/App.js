import { Button } from "@mui/material";
import React from "react";
import Appbar from "./Appbar";
import Tabs from "./Tab";


const App = () => {
  return (
    <div>
      <Appbar />
      <div style={{ display: "flex", flex: "100%"  }}>
        <div
          style={{
            display: "flex",
            flex: "50%",
            backgroundColor: "#ADD8E6",
            height:"90vh"
          }}
       
        ></div>
        <div
          style={{ display: "flex", flex: "50%",  }}
       
        ><Tabs/></div>
        
      </div>
    </div>
  );
};

export default App;
