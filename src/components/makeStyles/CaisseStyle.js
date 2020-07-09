import { makeStyles }  from '@material-ui/core/styles'

export const caisseStyle = makeStyles((theme) => ({
    root:{
        width:'100%',  
        height: 'Auto',    
    },
    rigthDiv:{
        width:'35%',
        height:'100%',
        float:'right',
        padding:5,
    },
    leftDiv:{
        width:'65%',
        height:'100%',
    },
    topLeft:{
        width:'100%',
        height:'120px',
        backgroundColor:'#C29459',
        paddingTop:'30px',
    },
    downLeft:{
        width: '100%',
        height:'100%',
    }
}));