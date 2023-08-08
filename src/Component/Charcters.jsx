import { Box,Grid } from "@mui/material";
import { data } from "../constants/data"; 
import Charcter from "./Charcter";



const Charcters = () =>{
    return (
        <Box style={{margin:'10px 35px'}}>
            <Grid container>
                    {
                    data.Charcters.map(value => (
                        <Grid item> 
                        <Charcter value= {value} />
                        </Grid >
                    ))
                    }
            </Grid>    
        </Box>
    )
}

export default Charcters;