import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import PersonIcon from '@mui/icons-material/Person';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import logo from '../../assets/img/logo.png';
import '../Header/header.css';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  backgroundColor: 'rgb(29 100 168)',
  color: '#fff',
}));
class Header extends React.Component {
  render() {
    return (
      <div className='header_div'>
        <Grid container>
          <Grid item xs={4} textAlign={'left'}>
            <Item className='bosch_logo'>
              <img src={logo} width={140} height={30.2} alt='Bosch Logo' />
            </Item>
          </Grid>
          <Grid item xs={4} textAlign={'center'}>
            <Item>
              <span style={{ fontSize: '24px' }}>JMaas Self Service</span>
            </Item>
          </Grid>
          <Grid item xs={4} textAlign={'right'}>
            <Item>
              <CircleNotificationsIcon className='header_icons' />
              <a href='https://inside-docupedia.bosch.com/confluence/display/cines4info/JMaaS+-+Self-Service+Portal' target="_blank" rel="noreferrer" variant="body2" >
                <ContactSupportIcon className='header_icons' />
              </a>
              <PersonIcon className='header_icons' />
            </Item>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Header;
