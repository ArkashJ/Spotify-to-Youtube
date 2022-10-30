import React from 'react';
import { Paper, Grid, Typography, Avatar, TextField, FormControlLabel, Checkbox, Button } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import { useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";
import {Link} from "react-router-dom";

const Login = () => {

    const paperStyle        = {backgroundColor: '#f5f4f5', padding: 20, height: '80vh', width: 400, margin: '120px auto'}
    const avatarStyle       = {backgroundColor: '#1c6e8c'}
    const textFieldStyle    = {paddingTop: 20}

    const [data, setData]   = useState({
        firstName   :   "",
        lastName    :   "",
        email       :   "",
        password    :   "",
    })

    const handleChange = ({currentTarget:input}) => {
        setData({...data, [input.name]: input.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    
    function handleCallBackResponse(response){
        console.log("Encoded JWT ID token:" + response.credential)
        var userObject = jwt_decode(response.credential)
        console.log(userObject)
    }

    useEffect(() =>{
        /*global google*/
        google.accounts.id.initialize({
            client_id: "961705657837-p1o38pjlum6s1oj8oirn2282npb0q44j.apps.googleusercontent.com",
            callback: handleCallBackResponse
        });
        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            { theme: "outline", size: "large"}
        );
    },[])

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
                        Sign Up
                </Typography>
                <Typography
                    sx = {{
                        fontWeight: 'bold'
                    }}><Button>Already a member? Login</Button></Typography>
            </Grid>
            <form onSubmit={handleSubmit}>
                <TextField onChange={handleChange} id="outlined-basic" variant="outlined" placeholder='Email' fullWidth required style={textFieldStyle}/>
                <TextField onChange={handleChange} id="outlined-basic" variant="outlined" placeholder='First Name' fullWidth required style={textFieldStyle}/>
                <TextField onChange={handleChange} id="outlined-basic" variant="outlined" placeholder='Last Name' fullWidth required style={textFieldStyle}/>
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
                <Button type="submit" color="primary" 
                    sx=
                    {{
                        marginTop: 5
                    }}
                    fullWidth required>
                        <Link to="/login"  >
                            Sign Up for new Account
                        </Link>
                </Button>
            </form>
                <Grid sx={{
                        width: "100%",
                        marginTop: 3
                        }}>
                    <div id="signInDiv" ></div>
                </Grid>
        </Paper>
    </Grid>
  )
}

export default Login