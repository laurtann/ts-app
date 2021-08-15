import React, { useState } from 'react';
import { DatePicker } from '@material-ui/pickers';

const StaticDatePicker = () => {
  const [date, changeDate] = useState(new Date());

  return (
    <div style={ { marginTop : '10vh' } } >
      <DatePicker
        autoOk
        // orientation="landscape"
        variant="static"
        openTo="date"
        value={ date }
        onChange={ changeDate }
      />
    </div>
  );
};

export default StaticDatePicker;
