import React from 'react';
import { Typography, Link } from '@material-ui/core';

export default function Copyright() {
  return (
    <Typography variant="body2" color="textPrimary" align="center" style={ { paddingTop : '3vh' } }>
      {'Copyright © '}
      <Link color="secondary" href="https://www.lauratannahill.com/">
        Laura Tannahill
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
