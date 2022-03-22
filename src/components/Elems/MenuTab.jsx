import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import PropTypes from 'prop-types';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { DishListFirst } from '../DishLists/DishListFirst';
import { DishListSecond } from '../DishLists/DishListSecond';
import { DishListThird } from '../DishLists/DishListThird';

import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import CakeIcon from '@mui/icons-material/Cake';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function MenuTab(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab icon={<EmojiFoodBeverageIcon />} label="Первое" {...a11yProps(0)} />
          <Tab icon={<DinnerDiningIcon />} label="Второе" {...a11yProps(1)} />
          <Tab icon={<CakeIcon/>} label="Десерт" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
          <DishListFirst changeQuantity={props.changeQuantity} dishes={props.dishes} content={props.content}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
          <DishListSecond changeQuantity={props.changeQuantity} dishes={props.dishes} content={props.content}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
          <DishListThird changeQuantity={props.changeQuantity} dishes={props.dishes} content={props.content}/>
      </TabPanel>
    </Box>
  );
}


