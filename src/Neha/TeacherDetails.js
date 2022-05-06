import { React, useState, useEffect } from "react";
import {
  Grid,

  Typography,
  FormControl,
  Button,
  TextField, Avatar, IconButton
} from "@mui/material";
import { styled } from '@mui/material/styles';
import Autocomplete from "@mui/material/Autocomplete";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import jake from './jake.png';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";
import axios from "axios";
import { FormatAlignLeftSharp } from "@mui/icons-material";

const Input = styled('input')({
  display: 'none',
});
const arr = [
  {

    name: "Ms. Rajni Bala",
    mail: " rajnibala@gku.ac.in"
  }

];
function createData(degree, year, uni, icon) {
  return { degree, year, uni, icon };
}

const rows = [
  createData('B.E', 2020, 'P.U'),

];
function createData1(name, adress, from, to, job, icon1) {
  return { name, adress, from, to, job, icon1 };
}

const rows1 = [
  createData1('Glss', 'Sector 34', '2021', '2022', 'Developer'),

];

const TeacherDetails = () => {
  var formData=new FormData();
  const initialValues = {
    Firstname: "",
    Middlename: "",
    Lastname: "",
    Email: "",
    Mobilenumber: "",
    Dateofbirth: "",
    Currentaddress: "",
    Permanentaddress: "",
    Degree: "",
    Yearofcompletion: "",
    University: "",
    NameofOrganization: "",
    Workfrom: "",
    Workto: "",
    Address: "",
    Jobresponsibilities: "",
    Name1: "",
    Contactdetails1: "",
    Name2: "",
    Contactdetails2: "",
    Description: "",
    Image:""
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [fname , setFname ] = useState("");
  const [mname , setMname] = useState("");
  const [ lname, setLname] = useState("");
  const [ email , setEmail] = useState("");
  const [ mobileno, setMobileno] = useState("");
  const [ dateobirth, setDateofbirth] = useState("");
  const [ department , setDepartment] = useState("");
  const [description, setDescription] = useState("");
  const [currentaddress, setCurrentaddress] = useState("");
  const [permanentaddress, setPermanentaddress] = useState("");
  const [degree, setDegree] = useState("");
  const [yearofcompletion, setYearofcompletion] = useState("");
  const [uniorcollage, setUniorcollage] = useState("");
  const [nameoforgnaisation, setNameoforgnaisation] = useState("");
  const [workfrom, setWorkfrom] = useState("");
  const [workto, setWorkto] = useState("");
  const [address, setAddress] = useState("");
  const [jobresponsibilities, setJobresponsibilites] = useState("");
  const [name1, setName1] = useState("");
  const [address1, setAddress1] = useState("");
  const [name2, setName2] = useState("");
  const [address2, setAddress2] = useState("");





  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    
    for(let key in formValues){
      formData.append(key.toString(),formValues[key])
    }
    axios({
      method:"post",
      url:"https://api.keewesolutions.com/teacher/add",
      data:formData
    }).then(res=>{
      console.log(res)
      setIsSubmit(true);
    })
    
  };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).lenght === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.Firstname) {
      errors.Firstname = "Please enter First Name";
    }

    if (!values.Lastname) {
      errors.Lastname = "Please enter Last Name";
    }
    if (!values.Email) {
      errors.Email = "Please enter Email";
    } else if (!regex.test(values.Email)) {
      errors.Email = "This is not a valid email format!";
    }
    if (!values.Mobilenumber) {
      errors.Mobilenumber = "Please enter Mobile Number";
    } else if (values.Mobilenumber.length < 10) {
      errors.Mobilenumber = "Mobile number must be of 10 digits";
    } else if (values.Mobilenumber.length > 10) {
      errors.Mobilenumber = "Mobile number must be of 10 digits";
    }
    return errors;
  };

  const Submit=()=>{
    
  }


  return (
    <Grid conatiner sx={{ padding: "2%" }}>
      <Grid item xs={12} lg={12} >
        <form onSubmit={handleSubmit}>

          <Grid item xs={12} justifyContent={"left"} display={"flex"} >
            <Link to={'/'} style={{textDecoration:'none'}}> 
               <IconButton>
                  <ArrowBackIcon sx={{ color: 'black' }} />
               </IconButton>
            </Link>
            <label>

              <Input accept="image/*" multiple type="file" 
              onChange={e=>{
                formData.set("Image", e.target.files[0])
                setFormValues({...formValues,Image:e.target.files[0]})}
              }
              />
              <Avatar component="span"
                src={jake}
                alt="jake"
                sx={{ marginLeft: '10%', width: "100px", height: "100px", zIndex: '2', '&:hover': { zIndex: '-1' } }}
              />
            </label>

          </Grid> {arr.map((item, index) => {
            return (
              <Grid item xs={12}>

                <Typography sx={{ fontWeight: "500", fontSize: "20px", fontFamily: 'poppins', textAlign: 'left', marginTop: '1%', marginLeft: '3%' }}>
                  {item.name}
                </Typography>
                <Typography sx={{ fontWeight: "400", fontSize: "18px", fontFamily: 'poppins', color: '#9fa8b9', textAlign: 'left', marginLeft: '3%' }}>
                  {item.mail}
                </Typography>

              </Grid>);
          })}

          <Typography sx={{ fontWeight: "bold", fontSize: "24px", fontFamily: 'poppins', marginTop: '2%' }}>
            Personal details
          </Typography>
          <Grid item display={"flex"} xs={12} marginTop={"2%"}>
            <Grid item xs={6}>
              <FormControl
                sx={{ m: 0.5, margin: "0px" }}
                variant="outlined"
                fullWidth
              >
                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: "18px",
                    fontFamily: 'poppins'
                  }}
                >
                  First Name{" "}
                  <span style={{ color: "red", size: "large" }}>*</span>
                </Typography>
                <input
                  type="text"
                  name="Firstname"
                  value={formValues.Firstname}
                  onChange={e=>setFormValues({...formValues,Firstname:e.target.value})}
                  style={{ width: "100%", height: '40px', border: '1px solid rgba(0, 0, 0, 0.23)', borderRadius: "4px",fontSize:'16px',color:'rgba(0, 0, 0, 0.87)',fontWeight:'400' }}
                />
                <p style={{ color: "red" }}>{formErrors.Firstname}</p>
              </FormControl>
            </Grid>

            <Grid item xs={6} marginLeft={"2%"}>
              <FormControl
                sx={{ m: 0.5, margin: "0px" }}
                variant="outlined"
                fullWidth
              >
                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: "18px", fontFamily: 'poppins'
                  }}
                >
                  Middle Name
                </Typography>
                <input
                  type="text"
                  name="Middlename"
                  value={formValues.Middlename}
                  onChange={e=>setFormValues({...formValues,Middlename:e.target.value})}
                  style={{ width: "98.8%", height: '40px', border: '1px solid rgba(0, 0, 0, 0.23)', borderRadius: "4px",fontSize:'16px',color:'rgba(0, 0, 0, 0.87)',fontWeight:'400' }}
                />
              </FormControl>{" "}
            </Grid>
          </Grid>
          <Grid item display={"flex"} xs={12}>
            <Grid item xs={6}>
              <FormControl
                sx={{ m: 0.5, margin: "0px" }}
                variant="outlined"
                fullWidth
              >
                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: "18px", fontFamily: 'poppins'
                  }}
                >
                  Last Name{" "}
                  <span style={{ color: "red", size: "large" }}>*</span>
                </Typography>
                <input
                  type="text"
                  name="Lastname"
                  value={formValues.Lastname}
                  onChange={e=>setFormValues({...formValues,Lastname:e.target.value})}
                  style={{ width: "100%", height: '40px', border: '1px solid rgba(0, 0, 0, 0.23)', borderRadius: "4px",fontSize:'16px',color:'rgba(0, 0, 0, 0.87)',fontWeight:'400' }}
                />
                <p style={{ color: "red" }}>{formErrors.Lastname}</p>
              </FormControl>{" "}
            </Grid>

            <Grid item xs={6} marginLeft={"2%"}>
              <FormControl
                sx={{ m: 0.5, margin: "0px" }}
                variant="outlined"
                fullWidth
              >
                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: "18px", fontFamily: 'poppins'
                  }}
                >
                  Email <span style={{ color: "red", size: "large" }}>*</span>
                </Typography>
                <input
                  type="text"
                  name="Email"
                  value={formValues.Email}
                  onChange={e=>setFormValues({...formValues,Email:e.target.value})}
                  style={{ width: "98.8%", height: '40px', border: '1px solid rgba(0, 0, 0, 0.23)', borderRadius: "4px",fontSize:'16px',color:'rgba(0, 0, 0, 0.87)',fontWeight:'400' }}
                />
                <p style={{ color: "red" }}>{formErrors.Email}</p>
              </FormControl>{" "}
            </Grid>
          </Grid>
          <Grid item display={"flex"} xs={12}>
            <Grid item xs={6}>
              <FormControl
                sx={{ m: 0.5, margin: "0px" }}
                variant="outlined"
                fullWidth
              >
                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: "18px", fontFamily: 'poppins'
                  }}
                >
                  Mobile Number
                  <span style={{ color: "red", size: "large" }}>*</span>
                </Typography>
                <input
                  type="text"
                  name="Mobilenumber"
                  placeholder="9999999999"
                  value={formValues.Mobilenumber}
                  onChange={e=>setFormValues({...formValues,Mobilenumber:e.target.value})}
                  style={{ width: "100%", height: '40px', border: '1px solid rgba(0, 0, 0, 0.23)', borderRadius: "4px",fontSize:'16px',color:'rgba(0, 0, 0, 0.87)',fontWeight:'400' }}
                />
                <p style={{ color: "red" }}>{formErrors.Mobilenumber}</p>
              </FormControl>
            </Grid>

            <Grid item xs={6} marginLeft={"2%"}>
              <FormControl
                sx={{ m: 0.5, margin: "0px" }}
                variant="outlined"
                fullWidth
              >
                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: "18px", fontFamily: 'poppins'
                  }}
                >
                  Date of Birth
                </Typography>

                {/* <OutlinedInput
                    type="text"
                    name="Dateofbirth"
                    value={formValues.Dateofbirth}
                    onChange={handleChange}
                    sx={{ width: "99%" }}
                  /> */}
                <div>
                  <input type="date"
                    label=""

                    name="Dateofbirth"
                    value={formValues.Dateofbirth}
                    onChange={e=>setFormValues({...formValues,Dateofbirth:e.target.value})}
                    style={{ width: "99.4%", height: '42px', border: '1px solid rgba(0, 0, 0, 0.23)', borderRadius: "4px",fontSize:'16px',color:'rgba(0, 0, 0, 0.87)',fontWeight:'400'}} />
                </div>


              </FormControl>
            </Grid>
          </Grid>
          <Typography sx={{ fontWeight: "bold", fontSize: "24px", marginTop: '2%', fontFamily: 'poppins' }}>
            Description
          </Typography>
          <Grid item display={"flex"} xs={12}>
            <FormControl
              sx={{ m: 0.5, margin: "0px" }}
              variant="outlined"
              fullWidth
            >

              <TextField
                id="outlined-textarea"
                label=""
                multiline
                rows={4}
                type="text"
                name="Description"
                value={formValues.Description}
                onChange={e=>setFormValues({...formValues,Description:e.target.value})}
                sx={{ width: "100%" ,fontSize:'16px',color:'rgba(0, 0, 0, 0.87)',fontWeight:'400'}}
              />
            </FormControl>
          </Grid>

          <Typography sx={{ fontWeight: "bold", fontSize: "24px", marginTop: '2%', fontFamily: 'poppins' }}>
            Address
          </Typography>
          <Grid item display={"flex"} xs={12} marginTop={"2%"}>
            <Grid item xs={6}>
              <FormControl
                sx={{ m: 0.5, margin: "0px" }}
                variant="outlined"
                fullWidth
              >
                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: "18px", fontFamily: 'poppins'
                  }}
                >
                  Current Address
                </Typography>
                <TextField
                  id="outlined-textarea"
                  label=""
                  multiline
                  type="text"
                  name="Currentaddress"
                  value={formValues.Currentaddress}
                  onChange={e=>setFormValues({...formValues,Currentaddress:e.target.value})}
                  rows={1.5}
                  sx={{ width: "101%",fontSize:'16px',color:'rgba(0, 0, 0, 0.87)',fontWeight:'400' }}
                />
              </FormControl>
            </Grid>

            <Grid item xs={6} marginLeft={"2%"}>
              <FormControl
                sx={{ m: 0.5, margin: "0px" }}
                variant="outlined"
                fullWidth
              >
                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: "18px", fontFamily: 'poppins'
                  }}
                >
                  Permanent Address
                </Typography>
                <TextField
                  id="outlined-textarea"
                  label=""
                  multiline
                  rows={1.5}
                  type="text"
                  name="Permanentaddress"
                  value={formValues.Permanentaddress}
                  onChange={e=>setFormValues({...formValues,Permanentaddress:e.target.value})}
                  sx={{ width: "100%" ,fontSize:'16px',color:'rgba(0, 0, 0, 0.87)',fontWeight:'400'}}
                />
              </FormControl>
            </Grid>
          </Grid>
          <Typography
            sx={{ fontWeight: "bold", fontSize: "24px", marginTop: "2%", fontFamily: 'poppins' }}
          >
            Qualifications
          </Typography>
          <Grid container item xs={12} lg={12} marginTop={"2%"}>
            <Grid item lg={3.7} xs={12}>
              <FormControl
                sx={{ m: 0.5, margin: "0px" }}
                variant="outlined"
                fullWidth
              >
                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: "18px", fontFamily: 'poppins'
                  }}
                >
                  Degree:
                </Typography>
                <input
                  type="text"
                  name="Degree"
                  value={formValues.Degree}
                  onChange={e=>setFormValues({...formValues,Degree:e.target.value})}
                  style={{ width: "98%", height: '40px', border: '1px solid rgba(0, 0, 0, 0.23)', borderRadius: "4px",fontSize:'16px',color:'rgba(0, 0, 0, 0.87)',fontWeight:'400' }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={0.2}></Grid>
            <Grid item lg={3} xs={12} >
              <FormControl
                sx={{ m: 0.5, margin: "0px" }}
                variant="outlined"
                fullWidth
              >
                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: "18px", fontFamily: 'poppins'
                  }}
                >
                  Year of Completion:
                </Typography>
                <Autocomplete

                  disablePortal
                  id="combo-box-demo"
                  options={yearofcompletion}

                  renderInput={(params) => (
                    <TextField
                      {...params}
                      size="small"
                      label=""
                      type="text"
                      name="Yearofcompletion"
                      value={formValues.Yearofcompletion}
                      onChange={e=>setFormValues({...formValues,Yearofcompletion:e.target.value})}
                      sx={{fontSize:'16px',color:'rgba(0, 0, 0, 0.87)',fontWeight:'400'}}
                    />
                  )}
                />
                {/* <OutlinedInput
                    type="text"
                    name="Yearofcompletion"
                    value={formValues.Yearofcompletion}
                    onChange={handleChange}
                    sx={{ width: "99%" }}
                  />
                  <p>{formErrors.Yearofcompletion}</p> */}
              </FormControl>
            </Grid>
            <Grid item xs={0.2}></Grid>
            <Grid item lg={3.7} xs={12} >
              <FormControl
                sx={{ m: 0.5, margin: "0px" }}
                variant="outlined"
                fullWidth
              >
                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: "18px", fontFamily: 'poppins'
                  }}
                >
                  University/College:
                </Typography>
                <input
                  type="text"
                  name="University"
                  value={formValues.University}
                  onChange={e=>setFormValues({...formValues,University:e.target.value})}
                  style={{ width: "98%", height: '40px', border: '1px solid rgba(0, 0, 0, 0.23)', borderRadius: "4px",fontSize:'16px',color:'rgba(0, 0, 0, 0.87)',fontWeight:'400'}}
                />
              </FormControl>
            </Grid>
            <Grid item xs={0.2}></Grid>
            <Grid item xs={1}>
              <Button variant="contained" sx={{ marginTop: "40%", minWidth: '82px' }}>
                Add
              </Button>
            </Grid>
          </Grid>
          <TableContainer component={Paper} sx={{ marginTop: '4%' }}>
            <Table sx={{ minWidth: 500, width: '100%' }} aria-label="simple table">
              <TableHead sx={{ backgroundColor: '#007ae1' }}>
                <TableRow>
                  <TableCell sx={{ color: '#fff', fontWeight: '600', fontSize: '1.1rem' }}>Degree</TableCell>
                  <TableCell align="center" sx={{ color: '#fff', fontWeight: '600', fontSize: '1.1rem' }}>Year of Completion</TableCell>
                  <TableCell align="center" sx={{ color: '#fff', fontWeight: '600', fontSize: '1.1rem' }}>University/College</TableCell>
                  <TableCell align="right" sx={{}}></TableCell>
                  <TableCell align="right" ></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.degree}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {formValues.Degree}
                    </TableCell>
                    <TableCell align="center">{formValues.Yearofcompletion}</TableCell>
                    <TableCell align="center">{formValues.University}</TableCell>
                    <TableCell align="right">{row.icon}</TableCell>
                    <TableCell align="right"></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Typography
            sx={{ fontWeight: "bold", fontSize: "24px", marginTop: "2%", fontFamily: 'poppins' }}
          >
            Experience
          </Typography>
          <Grid container item display={"flex"} xs={12} lg={12} marginTop={"2%"}>
            <Grid item xs={12} lg={4}>
              <FormControl
                sx={{ m: 0.5, margin: "0px" }}
                variant="outlined"
                fullWidth
              >
                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: "18px", fontFamily: 'poppins'
                  }}
                >
                  Name of Organization:
                </Typography>
                <input
                  type="text"
                  name="NameofOrganization"
                  value={formValues.NameofOrganization}
                  onChange={e=>setFormValues({...formValues,NameofOrganization:e.target.value})}
                  style={{ width: "98%", height: '40px', border: '1px solid rgba(0, 0, 0, 0.23)', borderRadius: "4px",fontSize:'16px',color:'rgba(0, 0, 0, 0.87)',fontWeight:'400' }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={0.2}></Grid>
            <Grid item xs={12} lg={3.6} >
              <FormControl
                sx={{ m: 0.5, margin: "0px" }}
                variant="outlined"
                fullWidth
              >
                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: "18px", fontFamily: 'poppins'
                  }}
                >
                  Work From:
                </Typography>

                <div>
                  <input type="date"
                    label=""

                    name="Workfrom"
                    value={formValues.Workfrom}
                    onChange={e=>setFormValues({...formValues,Workfrom:e.target.value})}
                    style={{ width: "99%", height: '42px', border: '1px solid rgba(0, 0, 0, 0.23)', borderRadius: "4px",fontSize:'16px',color:'rgba(0, 0, 0, 0.87)',fontWeight:'400' }} />
                </div>
              </FormControl>
            </Grid>
            <Grid xs={0.2}></Grid>
            <Grid item xs={12} lg={4} >
              <FormControl
                sx={{ m: 0.5, margin: "0px" }}
                variant="outlined"
                fullWidth
              >
                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: "18px", fontFamily: 'poppins'
                  }}
                >
                  Work To:
                </Typography>
                <div>
                  <input type="date"
                    label=""

                    name="Workto"
                    value={formValues.Workto}
                    onChange={e=>setFormValues({...formValues,Workto:e.target.value})}
                    style={{ width: "99%", height: '42px', border: '1px solid rgba(0, 0, 0, 0.23)', borderRadius: "4px",fontSize:'16px',color:'rgba(0, 0, 0, 0.87)',fontWeight:'400' }} />
                </div>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container item display={"flex"} xs={12} lg={12} marginTop={"2%"}>
            <Grid item xs={12} lg={5.3}>
              <FormControl
                sx={{ m: 0.5, margin: "0px" }}
                variant="outlined"
                fullWidth
              >
                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: "18px", fontFamily: 'poppins'
                  }}
                >
                  Address:
                </Typography>
                <TextField
                  id="outlined-textarea"
                  label=""
                  multiline
                  type="text"
                  name="Address"
                  value={formValues.Address}
                  onChange={e=>setFormValues({...formValues,Address:e.target.value})}
                  rows={1.5}
                  sx={{ width: "100%",fontSize:'16px',color:'rgba(0, 0, 0, 0.87)',fontWeight:'400' }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={0.2}></Grid>
            <Grid item lg={5.3} xs={12} marginLeft={"%"}>
              <FormControl
                sx={{ m: 0.5, margin: "0px" }}
                variant="outlined"
                fullWidth
              >
                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: "18px", fontFamily: 'poppins'
                  }}
                >
                  Job Responsibilities:
                </Typography>
                <TextField
                  id="outlined-textarea"
                  label=""
                  multiline
                  rows={1.5}
                  type="text"
                  name="Jobresponsibilities"
                  value={formValues.Jobresponsibilities}
                  onChange={e=>setFormValues({...formValues,Jobresponsibilities:e.target.value})}
                  sx={{ width: "100%" ,fontSize:'16px',color:'rgba(0, 0, 0, 0.87)',fontWeight:'400'}}
                />
              </FormControl>
            </Grid>
            <Grid item xs={0.2}></Grid>
            <Grid item xs={1} >
              <Button variant="contained" sx={{ marginTop: "50%", minWidth: '82px' }}>
                Add
              </Button>
            </Grid>
          </Grid>
          <TableContainer component={Paper} sx={{ marginTop: '4%' }}>
            <Table sx={{ minWidth: 500 }} aria-label="simple table">
              <TableHead sx={{ backgroundColor: '#007ae1' }}>
                <TableRow>
                  <TableCell sx={{ color: '#fff', fontWeight: '600', fontSize: '1.1rem' }}>Name of Organization</TableCell>
                  <TableCell align="center" sx={{ color: '#fff', fontWeight: '600', fontSize: '1.1rem' }}>Address</TableCell>
                  <TableCell align="center" sx={{ color: '#fff', fontWeight: '600', fontSize: '1.1rem' }}>Work From</TableCell>
                  <TableCell align="center" sx={{ color: '#fff', fontWeight: '600', fontSize: '1.1rem' }}>Work To</TableCell>
                  <TableCell align="center" sx={{ color: '#fff', fontWeight: '600', fontSize: '1.1rem' }}>Job Responsibilities</TableCell>
                  <TableCell align="center" sx={{ color: '#fff', fontWeight: '600', fontSize: '1.1rem' }}></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows1.map((row1) => (
                  <TableRow
                    key={row1.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row1.name}
                    </TableCell>
                    <TableCell align="center">{row1.adress}</TableCell>
                    <TableCell align="center">{row1.from}</TableCell>
                    <TableCell align="center">{row1.to}</TableCell>
                    <TableCell align="center">{row1.job}</TableCell>
                    <TableCell align="right"></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Typography
            sx={{ fontWeight: "bold", fontSize: "24px", marginTop: "4%", fontFamily: 'poppins' }}
          >
            References:
          </Typography>

          <Grid item display={"flex"} xs={12} marginTop={"2%"}>
            <Grid item xs={6}>
              <FormControl
                sx={{ m: 0.5, margin: "0px" }}
                variant="outlined"
                fullWidth
              >
                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: "18px", fontFamily: 'poppins'
                  }}
                >
                  Name:
                </Typography>
                <input
                  type="text"
                  name="Name1"
                  value={formValues.Name1}
                  onChange={e=>setFormValues({...formValues,Name1:e.target.value})}
                  style={{ width: "100%", height: '40px', border: '1px solid rgba(0, 0, 0, 0.23)', borderRadius: "4px",fontSize:'16px',color:'rgba(0, 0, 0, 0.87)',fontWeight:'400' }}
                />
              </FormControl>
            </Grid>

            <Grid item xs={6} marginLeft={"2%"}>
              <FormControl
                sx={{ m: 0.5, margin: "0px" }}
                variant="outlined"
                fullWidth
              >
                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: "18px", fontFamily: 'poppins'
                  }}
                >
                  Contact Details:
                </Typography>
                <input
                  type="text"
                  name="Contactdetails1"
                  value={formValues.Contactdetails1}
                  onChange={e=>setFormValues({...formValues,Contactdetails1:e.target.value})}
                  style={{ width: "98.8%", height: '40px', border: '1px solid rgba(0, 0, 0, 0.23)', borderRadius: "4px",fontSize:'16px',color:'rgba(0, 0, 0, 0.87)',fontWeight:'400' }}
                />
              </FormControl>
            </Grid>
          </Grid>
          <Grid item display={"flex"} xs={12} marginTop={"2%"}>
            <Grid item xs={6}>
              <FormControl
                sx={{ m: 0.5, margin: "0px" }}
                variant="outlined"
                fullWidth
              >
                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: "18px", fontFamily: 'poppins'
                  }}
                >
                  Name:
                </Typography>
                <input
                  type="text"
                  name="Name2"
                  value={formValues.Name2}
                  onChange={e=>setFormValues({...formValues,Name2:e.target.value})}
                  style={{ width: "100%", height: '40px', border: '1px solid rgba(0, 0, 0, 0.23)', borderRadius: "4px",fontSize:'16px',color:'rgba(0, 0, 0, 0.87)',fontWeight:'400' }}
                />
              </FormControl>
            </Grid>

            <Grid item xs={6} marginLeft={"2%"}>
              <FormControl
                sx={{ m: 0.5, margin: "0px" }}
                variant="outlined"
                fullWidth
              >
                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: "18px", fontFamily: 'poppins'
                  }}
                >
                  Contact Details:
                </Typography>
                <input
                  type="text"
                  name="Contactdetails2"
                  value={formValues.Contactdetails2}
                  onChange={e=>setFormValues({...formValues,Contactdetails2:e.target.value})}
                  style={{ width: "98.8%", height: '40px', border: '1px solid rgba(0, 0, 0, 0.23)', borderRadius: "4px",fontSize:'16px',color:'rgba(0, 0, 0, 0.87)',fontWeight:'400' }}
                />
              </FormControl>
            </Grid>
          </Grid>
          <Grid display={"flex"} justifyContent={"end"} marginTop={"2%"}>
            <Button variant="contained" onClick={handleSubmit} >
              Upload
            </Button>
          </Grid>
        </form>

      </Grid>
    </Grid>
  );
};
const yearofcompletion = [
  { label: "1970" },
  { label: "1971" },
  { label: "1972" },
  { label: "1973" },
];
export default TeacherDetails;