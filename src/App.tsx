import { AppBar, Box, Stack, Tab, Tabs, ThemeProvider } from "@mui/material";
import "./App.css";
import theme from "./configs/ThemeConfig";
import AppBoxBar, { AppLink } from "./components/AppBar/AppBoxBar";
import React from "react";

function App() {
     const [value, setValue] = React.useState("one");

     const handleChange = (event: React.SyntheticEvent, newValue: string) => {
          setValue(newValue);
     };
     return (
          <ThemeProvider theme={theme}>
               <Box sx={{ flexGrow: 1 }}>
                    <AppBoxBar />
                    <Stack direction="row" width="100%" justifyContent={"flex-end"} padding="0.2rem 10px">
                         {["aiuto", "cambi & resi", "stato dell'ordine", "iscriviti", "adiclub", "accedi"].map((value) => (
                              <AppLink style={{ fontSize: "13px", fontWeight: "bold", letterSpacing: 1, textDecoration: "none" }}>{value}</AppLink>
                         ))}
                    </Stack>
                    <AppBar position="sticky">
                         <Stack direction="row" spacing={10} padding="0.2rem 5vw" width="100%" justifyContent={"flex-start"}>
                              <img src="https://www.adidas.it/glass/react/34b4b9e/assets/img/icon-adidas-logo.svg" alt="" />
                              <Tabs value={value} onChange={handleChange} textColor="secondary" indicatorColor="secondary" aria-label="secondary tabs example">
                                   <Tab value="one" label="Item One" />
                                   <Tab value="two" label="Item Two" />
                                   <Tab value="three" label="Item Three" />
                              </Tabs>
                              {/* todo create tabpanel component  */}
                              <TabPanel value={value} index={0}>
                                   Item One
                              </TabPanel>
                         </Stack>
                    </AppBar>
               </Box>
          </ThemeProvider>
     );
}

export default App;
