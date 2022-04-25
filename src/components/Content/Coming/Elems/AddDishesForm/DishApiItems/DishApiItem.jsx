import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Button from '@mui/material/Button';




export default function DishApiItem(props) {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <div>
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '5px',
        '& > :not(style)': {
          m: 1,
          width: 100,
          height: 100,
          fontSize: '15px',
        },
        '& > :hover': {
            m: 0,
          width: 120,
          height: 120,
          fontSize: '22px',
        },
      }}
      onClick={handleOpen}
    >
      <Paper elevation={8} 
             style={{
               display: 'flex', 
               paddingTop: '40px', 
               backgroundColor: `${props.dish.color}`, 
               justifyContent: 'center',}}> {props.dish.dishname}</Paper> 
    </Box>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 400,
                  bgcolor: `${props.dish.color}`,
                  border: '2px solid #000',
                  boxShadow: 24,
                  p: 4,
                  }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <span style={{marginLeft: '125px'}}>{props.dish.dishname}</span>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <div style={{display: 'inline-flex'}}>
            <p style={{width: '50%', marginLeft: '10px'}}>Введите количество</p>
            <input
                        className="form-control"
                        placeholder="Количество"
                        aria-label="Количество"
                        type ="text"
                        style={{width: '35%', marginLeft: '5px'}}
                        />
          </div>
            
            <Button 
                        variant='contained'
                        color='success' 
                        startIcon={<CheckCircleIcon/>}
                        onClick={handleClose} 
                        style={{marginLeft: '220px', marginTop: '5px', fontSize:'9px'}}>Подтвердить
            </Button>
          </Typography>
        </Box>
      </Modal>
      </div>
  );
} 