import React from 'react';
import PropTypes from 'prop-types';

import { Box } from '@mui/material';

Logo.propTypes = {
  sx: PropTypes.object
};

export default function Logo({ sx }: any) {
  return <Box component="img" src="/static/logo.svg" sx={{ width: 40, height: 40, ...sx }} />;
}
