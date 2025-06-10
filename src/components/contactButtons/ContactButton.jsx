import React from 'react';
import { SpeedDial, SpeedDialAction, SpeedDialIcon, Tooltip } from '@mui/material';
import { Phone, Email, Sms, WhatsApp, Instagram, Facebook } from '@mui/icons-material';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import CloseIcon from '@mui/icons-material/Close';

function ContactButtons() {
  const contacts = [
    {
      icon: <Phone />,
      name: 'Call',
      href: 'tel:+919999999999',
      color: '#dc2626', // red-600
    },
    {
      icon: <Email />,
      name: 'Email',
      href: 'mailto:info@shapeupfit.com',
      color: '#2563eb', // blue-600
    },
    {
      icon: <Sms />,
      name: 'SMS',
      href: 'sms:+919999999999',
      color: '#16a34a', // green-600
    },
    {
      icon: <WhatsApp />,
      name: 'WhatsApp',
      href: 'https://wa.me/919999999999',
      color: '#15803d', // green-700
    },
    {
      icon: <Instagram />,
      name: 'Instagram',
      href: 'https://instagram.com',
      color: '#db2777', // pink-600
    },
    {
      icon: <Facebook />,
      name: 'Messenger',
      href: 'https://m.me/yourpage',
      color: '#3b82f6', // blue-500
    },
  ];

  return (
    <div style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 9999 }}>
      <SpeedDial
        ariaLabel="Contact Us"
        icon={<SpeedDialIcon icon={<ContactMailIcon />} openIcon={<CloseIcon />} />}
        direction="up"
        FabProps={{
          sx: {
            bgcolor: '#dc2626', // red-600
            color: '#fff',
            '&:hover': {
              bgcolor: '#b91c1c', // red-700
            },
          },
        }}
      >
        {contacts.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={
              <Tooltip title={action.name} placement="left">
                <span
                  style={{
                    backgroundColor: action.color,
                    padding: 10,
                    borderRadius: '50%',
                    color: 'white',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {action.icon}
                </span>
              </Tooltip>
            }
            tooltipTitle={action.name}
            onClick={() => window.open(action.href, '_blank')}
          />
        ))}
      </SpeedDial>
    </div>
  );
}

export default ContactButtons;
