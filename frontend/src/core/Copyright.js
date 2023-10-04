import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';

export default function Copyright() {
  return (
    <Box mt={8} mb={4}>
      <Typography variant='body2' color='textSecondary' align='center'>
        {'Copyright © '}
        <Link color='inherit' href='#'>
          Ahmad Nasrullah
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
      <section>
      <h2>Contact Us</h2>
      <p>If you'd like to get in touch with us, you can reach out through the following options:</p>
      <div className="contact-options">
        <a href="mailto:floatingwavecontact@gmail.com">
          <img src="email-icon.png" alt="Email" />
        </a>
        <a href="https://www.instagram.com/your_instagram_username" target="_blank" rel="noopener noreferrer">
          <img src="instagram-icon.png" alt="Instagram" />
        </a>
        <a href="https://www.facebook.com/your_facebook_profile" target="_blank" rel="noopener noreferrer">
          <img src="facebook-icon.png" alt="Facebook" />
        </a>
      </div>
    </section>
    </Box>
  );
}
