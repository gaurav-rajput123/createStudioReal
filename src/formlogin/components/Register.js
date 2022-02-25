import React from "react";
import { Typography, Button, Grid, TextField, Link, Select, MenuItem } from "@mui/material";
import PasswordBox from "./PasswordBox";
import img from './crest.png'
import { NavLink } from "react-router-dom";
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


export default function Register() {
    return(

        <Grid container sx={{width:"auto"}}>
           <Grid item xs={8} sx={{marginBottom:"20px"}}>
            <TextField fullWidth label="Full name" id="fullWidth" />
           </Grid>
            <Grid xs={4}/>
            <Grid item xs={8} sx={{marginBottom:"20px"}}>
            <TextField fullWidth label="Email" id="fullWidth" />
           </Grid>
            <Grid xs={4}/>
            <Grid item xs={8} sx={{marginBottom:"20px"}}>
            <TextField fullWidth label="Public username" id="fullWidth" />
           </Grid>
            <Grid xs={4}/>
            <Grid item xs={8}>
            <PasswordBox/>
           </Grid>
           <Grid xs={4}/>
           <Grid item xs={8}>
            <DropCountries/>
           </Grid>
           <Grid xs={4}/>
           <Grid item xs={8}>
            <FormControlLabelPosition/>
           </Grid>
           <Grid xs={4}/>
           <Grid item xs={8}>
            <Typography>
            By creating an account, you agree to the Terms of Service and Honor Code and you acknowledge 
            that edX and each Member process your personal data in accordance with the Privacy Policy.
            </Typography>
           </Grid>
           <Grid xs={4}/>
           

           <Grid  item xs={6} sx={{marginTop:"10px"}}>
           <NavLink to={'/land'}style={{
              textDecoration: "none"
           }}><Button variant="contained" sx={{backgroundColor:"#660000", borderRadius:'0px'}} >Create Account</Button></NavLink>
                
           </Grid>
           <Grid xs={4}/>
           <Grid item xs={6} sx={{marginBottom:"20px"}}>
           <Link sx={{ color:"black",fontSize:"20px", fontWeight:"bold",textDecoration: "none"}}>Or register with:</Link>
           </Grid>

           <Grid xs={4}/>
           

           <Grid  item xs={6} sx={{marginTop:"10px"}}>
           <NavLink to={'/land'}style={{
              textDecoration: "none"
           }}>
           <Button variant="contained" sx={{backgroundColor:"#000000", borderRadius:'0px'}} >Apple</Button></NavLink>
           <NavLink to={'/land'}style={{
            textDecoration: "none"
         }}>
       
         <Button variant="contained" sx={{backgroundColor:"#1877f2", borderRadius:'0px'}} >Facebook</Button></NavLink>
         
         <NavLink to={'/land'}style={{
            textDecoration: "none"
         }}>
         <Button variant="contained" sx={{backgroundColor:"#4285f4", borderRadius:'0px'}} >Google</Button></NavLink>
         
         <NavLink to={'/land'}style={{
            textDecoration: "none"
         }}>
         <Button variant="contained" sx={{backgroundColor:"#2f2f2f", borderRadius:'0px'}} >Microsoft</Button></NavLink>
         
              
                
                
           </Grid>


           <Grid xs={12} sx={{position: 'absolute', bottom: 0, right: 0}}>
               <img src={img} width="250px" height={"105px"}/>
           </Grid>

           

           
        
        </Grid>

    )
}


function DropCountries(){
    const countryList = [
        "Afghanistan",
        "Albania",
        "Algeria",
        "American Samoa",
        "Andorra",
        "Angola",
        "Anguilla",
        "Antarctica",
        "Antigua and Barbuda",
        "Argentina",
        "Armenia",
        "Aruba",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas (the)",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bermuda",
        "Bhutan",
        "Bolivia (Plurinational State of)",
        "Bonaire, Sint Eustatius and Saba",
        "Bosnia and Herzegovina",
        "Botswana",
        "Bouvet Island",
        "Brazil",
        "British Indian Ocean Territory (the)",
        "Brunei Darussalam",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cabo Verde",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Cayman Islands (the)",
        "Central African Republic (the)",
        "Chad",
        "Chile",
        "China",
        "Christmas Island",
        "Cocos (Keeling) Islands (the)",
        "Colombia",
        "Comoros (the)",
        "Congo (the Democratic Republic of the)",
        "Congo (the)",
        "Cook Islands (the)",
        "Costa Rica",
        "Croatia",
        "Cuba",
        "Curaçao",
        "Cyprus",
        "Czechia",
        "Côte d'Ivoire",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic (the)",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Eswatini",
        "Ethiopia",
        "Falkland Islands (the) [Malvinas]",
        "Faroe Islands (the)",
        "Fiji",
        "Finland",
        "France",
        "French Guiana",
        "French Polynesia",
        "French Southern Territories (the)",
        "Gabon",
        "Gambia (the)",
        "Georgia",
        "Germany",
        "Ghana",
        "Gibraltar",
        "Greece",
        "Greenland",
        "Grenada",
        "Guadeloupe",
        "Guam",
        "Guatemala",
        "Guernsey",
        "Guinea",
        "Guinea-Bissau",
        "Guyana",
        "Haiti",
        "Heard Island and McDonald Islands",
        "Holy See (the)",
        "Honduras",
        "Hong Kong",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran (Islamic Republic of)",
        "Iraq",
        "Ireland",
        "Isle of Man",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jersey",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Korea (the Democratic People's Republic of)",
        "Korea (the Republic of)",
        "Kuwait",
        "Kyrgyzstan",
        "Lao People's Democratic Republic (the)",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Macao",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Marshall Islands (the)",
        "Martinique",
        "Mauritania",
        "Mauritius",
        "Mayotte",
        "Mexico",
        "Micronesia (Federated States of)",
        "Moldova (the Republic of)",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Montserrat",
        "Morocco",
        "Mozambique",
        "Myanmar",
        "Namibia",
        "Nauru",
        "Nepal",
        "Netherlands (the)",
        "New Caledonia",
        "New Zealand",
        "Nicaragua",
        "Niger (the)",
        "Nigeria",
        "Niue",
        "Norfolk Island",
        "Northern Mariana Islands (the)",
        "Norway",
        "Oman",
        "Pakistan",
        "Palau",
        "Palestine, State of",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines (the)",
        "Pitcairn",
        "Poland",
        "Portugal",
        "Puerto Rico",
        "Qatar",
        "Republic of North Macedonia",
        "Romania",
        "Russian Federation (the)",
        "Rwanda",
        "Réunion",
        "Saint Barthélemy",
        "Saint Helena, Ascension and Tristan da Cunha",
        "Saint Kitts and Nevis",
        "Saint Lucia",
        "Saint Martin (French part)",
        "Saint Pierre and Miquelon",
        "Saint Vincent and the Grenadines",
        "Samoa",
        "San Marino",
        "Sao Tome and Principe",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Sint Maarten (Dutch part)",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "Somalia",
        "South Africa",
        "South Georgia and the South Sandwich Islands",
        "South Sudan",
        "Spain",
        "Sri Lanka",
        "Sudan (the)",
        "Suriname",
        "Svalbard and Jan Mayen",
        "Sweden",
        "Switzerland",
        "Syrian Arab Republic",
        "Taiwan",
        "Tajikistan",
        "Tanzania, United Republic of",
        "Thailand",
        "Timor-Leste",
        "Togo",
        "Tokelau",
        "Tonga",
        "Trinidad and Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Turks and Caicos Islands (the)",
        "Tuvalu",
        "Uganda",
        "Ukraine",
        "United Arab Emirates (the)",
        "United Kingdom of Great Britain and Northern Ireland (the)",
        "United States Minor Outlying Islands (the)",
        "United States of America (the)",
        "Uruguay",
        "Uzbekistan",
        "Vanuatu",
        "Venezuela (Bolivarian Republic of)",
        "Viet Nam",
        "Virgin Islands (British)",
        "Virgin Islands (U.S.)",
        "Wallis and Futuna",
        "Western Sahara",
        "Yemen",
        "Zambia",
        "Zimbabwe",
        "Åland Islands"
    ];
    return (
        <Select label="countries"
        sx={{width:"1022.92px", height:"56px", marginTop:"20px"}}
        >
            {countryList.map((country)=>{
                return (
                    <MenuItem value={country.toString()} key={country.toString()}>{country}</MenuItem>
                )
            })}
        </Select>
    )
}


 function FormControlLabelPosition() {
    return (
      <FormControl component="fieldset" sx={{marginTop:"20px"}}>
        
        <FormGroup aria-label="position" row>
          
          <FormControlLabel
            value="end"
            control={<Checkbox />}
            label="I agree that MRSPTU may send me marketing messages."
            
            labelPlacement="I agree that MRSPTU may send me marketing messages."
            
          />
        </FormGroup>
      </FormControl>
    );
  }