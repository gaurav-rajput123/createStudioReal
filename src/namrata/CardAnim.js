import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import GroupImg from '../namrata/images/GroupImg.png';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Modal, Step, StepLabel, Stepper } from '@mui/material';
import OutlineForm from '../OutlineForm';
import { courseArray } from '../Context';
import Form from '../vikram/Form';
import { stepNumber } from '../Context';
// import { courseArray } from '../Context';
export default function CardAnim({ name }) {
    // let { name } = props
    const courseContext = React.useContext(courseArray)
    const [showModal, setShowModal] = React.useState(false)
    // const courseContext = React.useContext(courseArray)
    const counterContext = React.useContext(stepNumber)
    return (
        <div className="container">
            <Modal sx={{
                overflow: "scroll",

            }}
                open={showModal}
                onClose={
                    () => setShowModal(false)
                }>
                {/* <OutlineForm /> */}
                <CourseForm setModal={setShowModal}/>
            </Modal>
            <Card sx={{ maxWidth: 1000, minHeight: 300, }} style={{ display: 'flex', backgroundColor: '#5468E7', borderRadius: '30px', position: 'relative', margin: "6px 2px 6px 10px" }}>
                <div className="text" style={{ margin: '0 5% 0 0', width: '110%', paddingLeft: "14px" }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" style={{ fontFamily: 'Montserrat', fontSize: '40px', fontWeight: '600', color: 'white' }}>
                            Welcome {name}!
                        </Typography>
                        <Typography variant="body1" color="text.secondary" style={{ fontFamily: 'Montserrat', fontSize: '16px', fontWeight: '500', color: 'white' }}>
                            {
                                courseContext.data.length === 0 ? <>Start making your Course or Program by <br /> clicking on the button below.</> : <>Add new modules and topics for your course</>
                            }
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="large" variant="outlined" style={{ fontFamily: 'Montserrat', fontSize: '14px', color: '#334155', borderRadius: '25px', backgroundColor: 'white', position: 'absolute', bottom: '10%', display: courseContext.data.length === 0 ? 'block' : 'none' }}
                            onClick={() => {
                                setShowModal(true)
                            }}
                        >
                            {
                                courseContext.data.length == 0 ? (<span>Add Course</span>) : null
                            }
                        </Button>
                    </CardActions>
                </div>
                {/* <div className="group" > */}
                <img src={GroupImg} alt="qwerty" style={{ position: 'absolute', right: '05%', bottom: '0%', width: "330px", height: "260px" }} />
                {/* </div> */}
            </Card>
        </div>
    );
}


function CourseForm({setModal}) {
    const counterContext = React.useContext(stepNumber)
    const [stage, setStage] = React.useState(1)
    // const map = [0, 1]
    return (
        <div style={{
            // position: "absolute",
            // top: "50%",
            // left: "50%",
            // transform: "translate(-50%, -50%)",
            // width: "100%",
            // height: "100vh"
        }}>
            {
                stage === 1 ? (<Form activeStep={stage} setActiveStep={setStage}  setShowModal={setModal}/>) : (<OutlineForm activeStep={stage} setActiveStep={setStage} setShowModal={setModal}/>)
            }
        </div>
    )
}