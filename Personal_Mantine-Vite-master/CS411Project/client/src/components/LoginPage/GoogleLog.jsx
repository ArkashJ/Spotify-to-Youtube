import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';
import {useEffect, useState} from "react";


function GoogleLog() {
    const [profile, setProfile] = useState([]);
    const clientId = "489746260370-afitsmlclo3gpg0vt58dmpfjf8koviaq.apps.googleusercontent.com";
    useEffect(() => {
    const initClient = () => {
        gapi.client.init({
            clientId: clientId,
            scope   : 'https://www.googleapis.com/auth/youtube'
        });
    };
    gapi.load('client:auth2', initClient);
})

    const onSuccess = (res) => {
        console.log('success:', res);
    }

    const onFailure = (err) => {
        console.log('failed', err);
    }

    const logOut = () => {
        setProfile(null)
    }

    return (
        <div>
                    <h2>React Google Login</h2>
                    <br />
                    <br />
                    {profile ? (
                        <div>
                            <img src={profile.imageUrl} alt="user image" />
                            <h3>User Logged in</h3>
                            <p>Name: {profile.name}</p>
                            <p>Email Address: {profile.email}</p>
                            <br />
                            <br />
                            <GoogleLogout clientId={clientId} buttonText="Log out" onLogoutSuccess={logOut} />
                        </div>
                    ) : (
                        <GoogleLogin
                            clientId={clientId}
                            buttonText="Sign in with Google"
                            onSuccess={onSuccess}
                            onFailure={onFailure}
                            cookiePolicy={'single_host_origin'}
                            isSignedIn={true}
                        />
                    )}
                </div>
        )
}

export default GoogleLog;