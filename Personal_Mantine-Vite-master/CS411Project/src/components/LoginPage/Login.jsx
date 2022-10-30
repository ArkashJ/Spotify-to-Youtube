import React from 'react';
import { Paper, Grid, Typography, Avatar, TextField, FormControlLabel, Checkbox, Button } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import { useEffect } from 'react';
import jwt_decode from "jwt-decode";

const Login = () => {
    const paperStyle = {backgroundColor: '#f5f4f5', padding: 20, height: '60vh', width: 400, margin: '150px auto'}
    const avatarStyle = {backgroundColor: '#1c6e8c'}
    const textFieldStyle = {paddingTop: 20}
    
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
    <Grid >
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
                    }}>Sign Up
                </Typography>
            </Grid>

                <TextField id="outlined-basic" variant="outlined" placeholder='Username' fullWidth required style={textFieldStyle}/>
                <TextField id="outlined-basic" variant="outlined" placeholder='Password' fullWidth required style={textFieldStyle}/>
                
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
                        Sign in
                </Button>
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