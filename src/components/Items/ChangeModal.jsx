import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';




const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ChangeModal(props) {
  const [open, setOpen] = React.useState(false);
  const [inputRemain, setInputRemain] = React.useState('');

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false)
  }


  const submitHandler = (event) => {
    event.preventDefault()
    props.onRemain(inputRemain)
    setOpen(false);
  }



  return (
            <div>
                <Button 
                    type="button"
                    className="btn btn-primary"
                    data-mdb-toggle="button"
                    autocomplete="off"
                    style={{width:"100px", height:"25px", padding: "0", backgroundColor:"red", textTransform: 'lowercase', color: 'white' }}
                    onClick={handleOpen}>
                        Изменить
                </Button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                      Чтобы изменить остаток, введите цифру в поле ниже и нажмите "Подтвердить"
                    </Typography>
                    <Typography 
                        id="modal-modal-description" 
                        sx={{ mt: 2 }}
                    >
                      <form onSubmit={submitHandler}>
                        <TextField 
                            id="outlined-basic" 
                            label="Остаток" 
                            variant="outlined"
                            type="number"
                            value={inputRemain}
                            onChange={event => setInputRemain(event.target.value)} 
                        />
                        <Button 
                            variant='contained'
                            color='success' 
                            startIcon={<CheckCircleIcon/>}  
                            style={{position: 'relative', fontSize:'9px', left: '220px'}}
                            type='submit'
                        > 
                            Подтвердить
                        </Button>
                      </form>
                    </Typography>
                  </Box>
                </Modal>
            </div>
  );
}