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
export default function CardAnim({ name }) {
    // let { name } = props
    const [showModal, setShowModal] = React.useState(false)
    const courseContext = React.useContext(courseArray)
    const counterContext = React.useContext(stepNumber)
    return (
        <div className="container">
            <Modal
                open={showModal}
                onClose={
                    () => setShowModal(false)
                }>
                {/* <OutlineForm /> */}
                <CourseForm />
            </Modal>
            <Card sx={{ maxWidth: 1000, minHeight: 300, }} style={{ display: 'flex', backgroundColor: '#5468E7', borderRadius: '30px', position: 'relative', margin: "6px 2px 6px 10px" }}>
                <div className="text" style={{ margin: '0 5% 0 0', width: '110%', paddingLeft: "14px" }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" style={{ fontFamily: 'Montserrat', fontSize: '40px', fontWeight: '600', color: 'white' }}>
                            Welcome {name}!
                        </Typography>
                        <Typography variant="body1" color="text.secondary" style={{ fontFamily: 'Montserrat', fontSize: '16px', fontWeight: '500', color: 'white' }}>
                            Start making your first Course or Program by <br /> clicking on the button below.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="large" variant="outlined" style={{ fontFamily: 'Montserrat', fontSize: '14px', color: '#334155', borderRadius: '25px', backgroundColor: 'white', position: 'absolute', bottom: '10%' }}
                            onClick={() => {
                                setShowModal(true)
                            }}
                        ><b>NEW COURSE</b></Button>
                    </CardActions>
                </div>
                {/* <div className="group" > */}
                <img src={GroupImg} alt="qwerty" style={{ position: 'absolute', right: '05%', bottom: '0%', width: "330px", height: "260px" }} />
                {/* </div> */}
            </Card>
        </div>
    );
}


function CourseForm() {
    const counterContext = React.useContext(stepNumber)
    const [stage, setStage] = React.useState(1)
    const map = [0, 1]
    return (
        <div>
            {
                stage === 1 ? (<Form activeStep={stage} setActiveStep={setStage}/>) : (<OutlineForm activeStep={stage} setActiveStep={setStage}/>)
            }
            {/* <div>
                <Stepper>
                    {
                        map.map((value, index) => {
                            return (
                                <Step key={value.toString()} completed={stage === index ? true : false}>
                                    <StepLabel>{value + 1}</StepLabel>
                                </Step>
                            )
                        })
                    }
                </Stepper>
            </div> */}
        </div>
    )
}