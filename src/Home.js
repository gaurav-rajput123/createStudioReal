import { Button, Grid } from "@mui/material";
import Middle from "./namrata/Middle";
import Progress from './vikram/Progress';
import CardAnim from "./namrata/CardAnim";
import Header from "./namrata/Topbar";
import { stepNumber } from "./Context";
import { useContext } from "react";
export default function Home() {
    let context = useContext(stepNumber)
    return (
        <Grid container>
            <Grid item xs={12} sx={{paddingBottom:"30px"}}>
                <Header/>
                </Grid>
            <Grid item xs={0.5} />
            <Grid item xs={7} sx={{ backgroundColor: "whitesmoke", borderTopLeftRadius: "12px" }}>
                <CardAnim name={"Vaibhav"} />
            </Grid>
            <Grid item xs={4} sx={{ backgroundColor: "whitesmoke", borderTopRightRadius: "12px" }}>
                <Progress />
            </Grid>
            <Grid item xs={0.5} />
            <Grid item xs={0.5} />
            <Grid item xs={11}
                sx={{ backgroundColor: "whitesmoke" ,borderBottomLeftRadius: "12px",borderBottomRightRadius: "12px", marginBottom: "36px"}}
            >
                <Middle />
                
            </Grid>
            <Grid item xs={0.5} />
        </Grid>
    )
}