import { useRouteError } from "react-router-dom";
import { Grid, Paper, Box, Typography, AppBar } from "@mui/material";

export default function ErrorPage(){
    const error = useRouteError();
    console.error(error);

    return(
        <Grid 
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            >
            <Card 
                sx={{
                    backgroundColor: "#605957",
                    width: 40,
                    height: 40,
                    display: flexbox
                }}>
                 Sorry an unexpected error took place, kindly refresh the app to go back
            </Card>
        </Grid>
        
    )
}