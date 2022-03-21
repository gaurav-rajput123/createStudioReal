import React from 'react';
import Alternate from './Alternate';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import UploadComponentAlter from './UploadComponentAlter';
import LinkIcon from '@mui/icons-material/Link';
import IosShareIcon from '@mui/icons-material/IosShare';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    // p: 4,
  };

export default function UploadModal({
  setModal, modalState
}) {




  return (
    <div>
    {/* <Button onClick={handleOpen} /> */}
    <Modal
      open={modalState}
      onClose={()=>setModal()}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {/* <Box sx={style}>
        <Alternate/>
      </Box> */}
    <UploadComponentAlter/>
    </Modal>
    </div>
  );
}
