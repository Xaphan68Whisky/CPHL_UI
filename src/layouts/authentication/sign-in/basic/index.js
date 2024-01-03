import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

import { login,getCurrentUser} from "utils/APIUtils"
import { ACCESS_TOKEN } from 'constants';

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";

function Basic() {
  const [rememberMe, setRememberMe] = useState(false);
  const [usernameOrEmail,setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailerr, setEmailerr] = useState("");
  const [passworderr, setPassworderr] = useState("");
  const [processing, setProcessing] = useState("");

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const validations = () =>{
//empty error values
    setEmailerr("")
    setPassworderr("")


    //checking if fields are not empty
    if(""=== usernameOrEmail){
      setEmailerr("Please enter your email")
      return
    }

    // if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(usernameOrEmail)) {
    //   setEmailerr("Please enter a valid email")
    //   return
    // }
    if ("" === password) {
      setPassworderr("Please enter a password")
      return
    }

    if (password.length < 7) {
      setPassworderr("The password must be 8 characters or longer")
      return
    }
  }
//(usernameOrEmail,password)

  const handleSubmit =(credentials) =>{
    //alert(JSON.stringify(credentials))
    const loginRequest = Object.assign({}, credentials);

     login(loginRequest).then(response => {
      localStorage.setItem(ACCESS_TOKEN, response.accessToken);
      alert(JSON.stringify(response.accessToken))
      loadCurrentUser();
     });
  
  }

 



  return (
    <BasicLayout image={bgImage}>
      <Card>
      
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Access your Account
          </MDTypography>
          <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
            
          </Grid>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput
              type="text" 
              label="username"
              value = {usernameOrEmail}
              onChange = {(event) => setUsernameOrEmail(event.target.value)}
               fullWidth />
              &nbsp;
            </MDBox>
            <label className="errorLabel">{emailerr}</label>
            <MDBox mb={2}>
              <MDInput 
              type="password" 
              label="Password" 
              value = {password}
              onChange = {(event) => setPassword(event.target.value)}
              fullWidth />
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
            </MDBox>
            <label className="errorLabel">{passworderr}</label>
            <MDBox mt={4} mb={1}>
              <MDButton 
              variant="gradient" 
              color="info" 
              onClick={() => handleSubmit({password,usernameOrEmail})}
              fullWidth>
              Login
              </MDButton>
            </MDBox>
            &nbsp;
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
