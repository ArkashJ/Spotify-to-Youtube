import React from 'react';
import { Paper, Grid, Typography, Avatar, TextField, FormControlLabel, Checkbox, Button } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import { useState } from 'react';
import {Link} from "react-router-dom";
import axios from "axios";

const SignUp = () => {

    const paperStyle        = {backgroundColor: '#f5f4f5', padding: 20, height: '60vh', width: 400, margin: '120px auto'}
    const avatarStyle       = {backgroundColor: '#1c6e8c'}
    const textFieldStyle    = {paddingTop: 20}

    const [data, setData]   = useState({
        email       :   "",
        password    :   "",
    })

    const handleChange = ({currentTarget:input}) => {
        setData({...data, [input.name]: input.value})
    }

    const [error, setError] = useState("")

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const url = "http://localhost:8080/api/auth";
            const {data:res} = await axios.post(url, data);
            localStorage.setItem("token", res.data);
            window.location = "/"
        } catch(error){
            if(error.response && error.response.status >= 400 && error.response.status<=500){
                setError(error.response.data.message)
            }
        }
    }

  return (
    <Grid container rowSpacing={0}>
        <Paper elevation={5} style = {paperStyle}>
            <Grid align = 'center'>
                <Avatar style={avatarStyle}><LockIcon/></Avatar>
                <Typography 
                    sx=
                    {{
                        padding         : 3,
                        fontSize        : 28,
                        textTransform   : 'uppercase',
                        fontWeight      : 'bold',
                        letterSpacing   : 4
                    }}>
                        Log in
                </Typography>
                <Typography
                    sx = {{
                        fontWeight: 'bold'
                    }}><Button>Don't have an  account? Sign up</Button></Typography>
            </Grid>
            <form onSubmit={handleSubmit}>
                <TextField onChange={handleChange} id="outlined-basic" variant="outlined" placeholder='Email' fullWidth required style={textFieldStyle}/>
                <TextField onChange={handleChange} id="outlined-basic" variant="outlined" placeholder='Password' fullWidth required style={textFieldStyle}/>
                
                <FormControlLabel
                    control={
                        <Checkbox
                            name    = "checked"
                            color   = "primary"/>
                    }
                    label = "Remember me"
                    sx=
                    {{
                        marginTop: 2,
                        marginBottom: -4
                    }}
                />
                {error && <Typography>{error}</Typography>}
                <Button type="submit" color="primary" 
                    sx=
                    {{
                        marginTop: 5
                    }}
                    fullWidth required>
                        <Link to="/login"  >
                            Login 
                        </Link>
                </Button>
            </form>
        </Paper>
    </Grid>
  )
}

export default SignUp