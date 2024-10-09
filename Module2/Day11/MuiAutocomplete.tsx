import React from 'react';
import { TextField, Autocomplete } from '@mui/material';

interface CountryType {
  code: string;
  label: string;
  phone: string;
  suggested?: boolean;
}

const countries: readonly CountryType[] = [
  { code: 'AD', label: 'Andorra', phone: '376' },
  { code: 'AE', label: 'United Arab Emirates', phone: '971' },
  { code: 'AF', label: 'Afghanistan', phone: '93' },
  { code: 'AG', label: 'Antigua and Barbuda', phone: '1-268' },
  // ... other countries
];

const CountrySelect: React.FC = () => {
  return (
    <Autocomplete
      id="country-select"
      options={countries}
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <li {...props}>
          {option.label} ({option.code}) +{option.phone}
        </li>
      )}
      renderInput={(params) => (
        <TextField {...params} label="Choose a country" variant="outlined" />
      )}
    />
  );
};

export default CountrySelect;
