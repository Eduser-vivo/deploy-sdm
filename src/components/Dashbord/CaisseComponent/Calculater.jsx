import React, { useState } from 'react'
import '../../styles/Calculate.css'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';

export const Calculater = () => {

    const [screenValue, setScreenValue] = useState("0");


    const getSaisie=(saisie)=>{
        if(screenValue === "0"){
            setScreenValue(saisie);
        }else{
            setScreenValue(screenValue+""+saisie);
        }
    }

    const clearAllSaisie=()=>{
        setScreenValue("0");
    }

    const clearSaisie=()=>{
        if(screenValue.length === 1){
            setScreenValue("0");
        }else{
            setScreenValue(screenValue.slice(0, -1));
        }
    }

    return (
        <div>
           <div id="calculateScreen">
            {screenValue}
           </div>
           <div  id="calculateBtns">
                <Grid container spacing={2} >
                    <Grid item xs >
                        <Button onClick={()=> getSaisie(1)} fullWidth={true} variant="contained"  color="primary" >1</Button>
                    </Grid>
                    <Grid item xs>
                        <Button onClick={()=> getSaisie(2)} fullWidth={true} variant="contained"  color="primary" >2</Button>
                    </Grid>
                    <Grid item xs>
                        <Button onClick={()=> getSaisie(3)} fullWidth={true} variant="contained"  color="primary" >3</Button>
                    </Grid>
                </Grid>

                <Grid container spacing={2} >
                    <Grid item xs >
                        <Button onClick={()=> getSaisie(4)} fullWidth={true} variant="contained"  color="primary" >4</Button>
                    </Grid>
                    <Grid item xs>
                        <Button onClick={()=> getSaisie(5)} fullWidth={true} variant="contained"  color="primary" >5</Button>
                    </Grid>
                    <Grid item xs>
                        <Button onClick={()=> getSaisie(6)} fullWidth={true} variant="contained"  color="primary" >6</Button>
                    </Grid>
                </Grid>

                <Grid container spacing={2} >
                    <Grid item xs >
                        <Button onClick={()=> getSaisie(7)} fullWidth={true} variant="contained"  color="primary" >7</Button>
                    </Grid>
                    <Grid item xs>
                        <Button onClick={()=> getSaisie(8)} fullWidth={true} variant="contained"  color="primary" >8</Button>
                    </Grid>
                    <Grid item xs>
                        <Button onClick={()=> getSaisie(9)} fullWidth={true} variant="contained"  color="primary" >9</Button>
                    </Grid>
                </Grid>

                <Grid container spacing={2} >
                    <Grid item xs >
                        <Button  onClick={()=> getSaisie(",")} fullWidth={true} variant="contained"  color="primary" >.</Button>
                    </Grid>
                    <Grid item xs>
                        <Button  onClick={()=> getSaisie(0)} fullWidth={true} variant="contained"  color="primary" >0</Button>
                    </Grid>
                    <Grid item xs>
                        <Button onClick={()=> clearAllSaisie()}  fullWidth={true} variant="contained"  color="primary" >C</Button>
                    </Grid>
                </Grid>

                <Grid container spacing={2} >
                    <Grid item xs > </Grid>
                    <Grid item xs > </Grid>
                    <Grid item xs >
                        <Button  onClick={()=> clearSaisie()} fullWidth={true} variant="contained"  color="primary" >
                            <KeyboardReturnIcon />
                        </Button>
                    </Grid>
                </Grid>

           </div>
        </div>
    )
}
