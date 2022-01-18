import {AppBar, Button, Grid} from "@mui/material";
import React from "react";


export default function Home() {
    const classes = useStyles;

    return(
        <React.Fragment>
            <AppBar
                sx={classes.pag}
            >
                <Grid container direction="row">
                    <Grid item>
                        <Button
                            sx={{
                                color: "darkseagreen",
                            }}
                        >
                            Pogchampion
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button color="secondary">Pog</Button>
                    </Grid>
                    <Grid item>
                        <Button color="secondary">Pog</Button>
                    </Grid>
                </Grid>
            </AppBar>
        </React.Fragment>
    )
}

const useStyles = {
    pog: {
        backgroundColor:'red'
    },
    pag: {
        backgroundColor:'green',
        marginTop: '100px'
    },
} as const;