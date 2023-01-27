import { styled, Box, Theme } from '@mui/system';
import Button from '@mui/material/Button/Button';
import { Modal, TextField } from '@mui/material';
import { useState } from 'react';
import useModal from '../Hooks/useModal';

type User = {
	email: string,
	password: string
}

const intialState = {
	email: '',
	password: ''
}

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const style = (theme: Theme) => ({
	width: 400,
	bgcolor: '#fff',
	padding: '16px 32px 24px 32px',
	border: 'none',
	borderRadius: '20px',
	display: 'flex',
	flexDirection: 'column',
	placeItems: 'center',
	gap: '1em',
});

const Modals: React.FC<{}> = () => {
	const { handleOpenModal, openPortal } = useModal()
	const [user, setUser] = useState<User>(intialState)


	const dataLogin = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		let userLogin = e.target.value
		setUser({
			...user,
			[e.target.name]: userLogin
		})
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		handleOpenModal()
	}

	return (
		<div>
			<Modal
				open={openPortal}
				onClose={() => handleOpenModal()}
				slots={{ backdrop: Backdrop }}
			>
				<Box sx={{ border: 'none', display: 'flex', justifyContent: 'center' }}>
					<Box sx={style} component='form' onSubmit={(e) => handleSubmit(e)} >
						<h2>Sign In</h2>
						<TextField
							name='email'
							margin='none'
							label="Email"
							type='email'
							variant="outlined"
							sx={{ mt: '5px', width: '80%' }}
							required
							onChange={(e) => dataLogin(e)}
						/>
						<TextField
							name='password'
							margin='none'
							label="Password"
							type='password'
							variant="outlined"
							sx={{ mt: '5px', width: '80%' }}
							required
							onChange={(e) => dataLogin(e)}
						/>
						<Button type='submit' variant='contained' sx={{ width: '50%', minWidth: '50px', p: '8px' }} >Log In</Button>
					</Box>
				</Box>
			</Modal>
		</div>
	);
}
export default Modals;