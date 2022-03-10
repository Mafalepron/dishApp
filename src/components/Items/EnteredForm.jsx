import React, {useState} from 'react';
import Button from '@mui/material/Button';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';




export default function IconLabelButtons() {
    const [checked, setChecked] = useState(false);
    const [name, setName] = useState('');
    const [confirm, setConfirm] = useState(false);
    

    const authConfirm = () => {
      setConfirm(!confirm);
    }
  

    const handleChange = () => {
      setChecked((prev) => !prev);
      if (!checked) {
        setConfirm(true);
      } else {
        setConfirm(false);
      }
    };


    const handleInput = (event) => {
      setName(event.target.value);
    };


  return (
            <Box sx={{display: 'flex' ,height: '30' }}>
              <Button variant='outlined' startIcon={<PersonAddAlt1Icon />} onClick={handleChange} >
                {checked ? 'Выход' : 'Авторизация'}
              </Button>
                <Box sx={{ display: 'inline-flex', height: 10 }}>
                  <Fade in={checked}>  
                    <Paper sx={{ m: 1 }} elevation={4}>
                    {confirm ?
                      <FormControl>
                                              <InputLabel htmlFor="component-outlined">Log in</InputLabel>
                                              <OutlinedInput
                                                id="component-outlined"
                                                value={name}
                                                onChange={handleInput}
                                                label="Name"
                                              />
                                              
                          </FormControl>
                          : name.length > 5 ? <div>Здравствуйте, {name}!</div> : <div>Недостаточно символов!</div>}
                    </Paper> 
                  </Fade>
                  {confirm ? <Button 
                                  variant='contained'
                                  color='success' 
                                  startIcon={<CheckCircleIcon/>} 
                                  onClick={authConfirm} 
                                  style={{alignSelf: 'flex-start', marginLeft: '-3px', marginTop: '32px', fontSize:'9px'}}
                              > 
                                  Подтвердить
                              </Button> : ''}
                </Box>
            </Box>
  );
}