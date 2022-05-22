import { Drawer, Stack, styled, Typography, Button, Link } from "@mui/material";
import { Fragment, useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { CgClose } from "react-icons/cg";

export const BarBox = styled("div")(({ theme }) => ({
     width: "100%",
     height: "2.5rem",
     display: "flex",
     flexDirection: "row",
     justifyContent: "center",
     alignItems: "center",
     backgroundColor: theme.palette.primary.dark,
     color: theme.palette.primary.light,
}));

export const AppButton = styled(Button)(({ theme }) => ({
     width: "3rem",
     height: "3rem",
     border: `1px solid ${theme.palette.primary.dark}`,
     borderRadius: "0px",
     display: "flex",
     flexDirection: "row",
     justifyContent: "center",
     alignItems: "center",
     backgroundColor: theme.palette.primary.light,
     color: theme.palette.primary.dark,
     "&:hover": {
          backgroundColor: theme.palette.primary.dark,
          color: theme.palette.primary.light,
     },
}));

export const AppModalHeader = styled(Stack)(({ theme }) => ({
     width: "100%",
     justifyContent: "flex-end",
     padding: "1rem",
}));

export const AppLink = styled(Link)(({ theme }) => ({
     width: "max-content",
     color: theme.palette.primary.dark,
     transition: "0.1s linear",
     cursor: "pointer",
     padding: "0.1rem 0.2rem",
     letterSpacing:1,
     textDecoration: "underline",
     "&:hover": {
          backgroundColor: theme.palette.primary.dark,
          color: theme.palette.primary.light,
     },
}));

type Props = {};

const AppBoxBar = (props: Props) => {
     const [toggleDrawer, setToggleDrawer] = useState<boolean>(false);
     const handleToggle = () => setToggleDrawer((prev) => !prev);
     return (
          <Fragment>
               <Drawer anchor={"top"} open={toggleDrawer} onClose={handleToggle}>
                    <Stack direction={"column"} style={{ padding: 20 }}>
                         <AppModalHeader direction={"row"}>
                              <AppButton onClick={handleToggle}>
                                   <CgClose size={22} />
                              </AppButton>
                         </AppModalHeader>
                         <Stack direction={"row"} spacing={8} justifyContent={"center"}>
                              <Stack maxWidth={"400px"} direction={"column"}>
                                   <Typography variant="subtitle2" fontWeight={700} marginBottom={3}>
                                        SPEDIZIONE GRATUITA PER GLI ISCRITTI
                                   </Typography>
                                   <Typography variant="body2" marginBottom={2}>
                                        Gli iscritti ad adiClub hanno diritto alla spedizione gratuita su tutti gli ordini.
                                   </Typography>
                                   <Typography variant="body2" marginBottom={2}>
                                   Per chi non è iscritto, la spedizione è gratuita per gli ordini di importo superiore a 25 €.</Typography>

                                   <AppLink marginBottom={2}>LOGIN</AppLink>
                                   <AppLink marginBottom={2}>ISCRIVITI</AppLink>
                              </Stack>
                              <Stack maxWidth={"400px"} direction={"column"}>
                                   <Typography marginBottom={3} variant="subtitle2" fontWeight={700}>
                                        RESO E CAMBIO MERCE GRATUITI
                                   </Typography>
                                   <Typography variant="subtitle2" marginBottom={2}>Restituisci i tuoi articoli o effettua il cambio merce gratuitamente entro 60 giorni I prodotti personalizzati non possono essere restituiti Nota: alcuni prodotti con disponibilità limitata, come ad esempio YEEZY, possono essere restituiti entro 14 giorni</Typography>
                                   <AppLink marginBottom={2}>MAGGIORI INFORMAZIONI SUL RESO</AppLink>
                                   <AppLink marginBottom={2}>MAGGIORI INFORMAZIONI SUL CAMBIO MERCE</AppLink>
                              </Stack>
                         </Stack>
                    </Stack>
               </Drawer>

               <BarBox>
                    <Typography fontSize={11} fontWeight={"bold"} letterSpacing={1} variant="caption">
                         SPEDIZIONE GRATUITA PER GLI ISCRITTI
                    </Typography>
                    <RiArrowDownSLine style={{ paddingLeft: 2, cursor: "pointer" }} onClick={handleToggle} size={22} />
               </BarBox>
          </Fragment>
     );
};

export default AppBoxBar;
