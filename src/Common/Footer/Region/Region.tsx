import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { countries, CountryType } from './Countries';
import { useState } from 'react';

const initialState = {
	code: "US",
	label:"United States",
	languaje:"English"
}

export default function CountrySelect() {
	const [flags, setFlags] = useState<CountryType>(initialState)

	return (
		<>
			<p>Region:</p>
			<img style={{filter: 'grayscale(100%)', width: '16px', height: '11px', alignSelf: 'center' }} src={`https://flagcdn.com/w20/${flags?.code.toLowerCase()}.png`} alt="" />
			<Autocomplete
				disableClearable
				sx={{ width: '150px', border: 'none', padding: '0', alignSelf: 'center' }}
				options={countries}
				inputValue={flags.label}
				onChange={(e, newFlag) => setFlags(newFlag)}
				getOptionLabel={(option) => option.label}
				renderOption={(props, option) => (
					<Box component="li" {...props}>
						{option.label}
					</Box>
				)}
				renderInput={(params) => (
					<TextField
						{...params}
						label=""
						sx={{ border: 'none' }}
						variant="standard"
						inputProps={{
							...params.inputProps,
							autoComplete: 'new-password' // disable autocomplete and autofill
						}}
					/>
				)}
			/>
			<p>Language:</p>
			<Autocomplete
				disableClearable
				sx={{ width: '150px', border: 'none', padding: '0', alignSelf: 'center' }}
				options={countries}
				inputValue={flags.languaje}
				onChange={(e, newFlag) => setFlags(newFlag)}
				getOptionLabel={(option) => option.languaje}
				renderOption={(props, option) => (
					<Box component="li" {...props}>
						{option.languaje}
					</Box>
				)}
				renderInput={(params) => (
					<TextField
						{...params}
						label=""
						sx={{ border: 'none' }}
						variant="standard"
						inputProps={{
							...params.inputProps,
							// autoComplete: 'new-password' // disable autocomplete and autofill
						}}
					/>
				)}
			/>
		</>
	);
}