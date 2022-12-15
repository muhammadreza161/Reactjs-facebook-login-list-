// import logo from './logo.svg';
import "./App.css";
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";
import { useState } from "react";
import JobList from "./JobList";


function App() {
  const [profile, setProfile] = useState(null);

  return (
    
          <div className="App">
            <header className="App-header">
              <h1>Login With Facebook</h1>
                {!profile ? 
                <LoginSocialFacebook
                    appId="621579893076949"
                    onResolve={(response) => {
                      console.log(response);
                      setProfile(response.data);
                    }}
                    onReject={(error) => {
                      console.log(error);
                    }}
                  > 
                    <FacebookLoginButton /> 
                  </LoginSocialFacebook>: ''}

                  {profile ? <div>
                    <h3>{profile.name}</h3>
                    <img src={profile.picture.data.url} />
                  </div>: ''}
              </header>
              <JobList/>
          </div>
          
          );
        }
        

export default App;
