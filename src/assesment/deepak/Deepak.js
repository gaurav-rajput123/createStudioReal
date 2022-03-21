import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card'
import Autocomplete from '@mui/material/Autocomplete'

// import { width } from '@mui/system';

import CC from './cc.png'
import { fontFamily, style, textAlign } from '@mui/system';
import { makeStyles } from '@mui/material';
import { useEffect, useState } from 'react';

 





function Card1({name}) {
    const [arr, setarr] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/').then(res => {
            return res.json()
        }).then(res => {
            setarr(res.data)
        })
    }, [])

    return (

        < div >

            {/* arr.map((item, index, currarr) => {
                        return (<div>{item.first_name}</div>)
                    }) */ 
                Array.from({ length: 1 }, (_, i) => <span key={i} >
                <Card sx={{
                    backgroundImage: `url(${CC})`, backgroundRepeat: 'no-repeat',
                    backgroundsize: 'cover',height: '100vh', margin: '90px 40px', 
                    backgroundposition: 'center', width: '100vw'

                }}> 

                    <div style={{
                        textAlign: 'left', fontfamily: 'Montserrat', fontstyle: 'normal',
                        margin: '36px 50px'
                    }}>
                        <h3 style={{ fontSize: '35px', color: 'white' }}>
                            Welcome back! {name}</h3>

                        <p style={{ fontSize: '18px', color: 'white' }}>
                            Start making your first Course or <br></br>Program by clicking on the button <br></br>below.</p>

                        <Button sx={{
                            width: '180px', height: '54px', backgroundColor: 'white', color: 'black'
                            , borderRadius: '25px', ":hover": { backgroundColor: 'white' }
                        }
                        } variant="text" >
                            New Course</Button>
                    </div>

                </Card>
            </span>)}
            





        </div >





    )
}

export default Card1;
