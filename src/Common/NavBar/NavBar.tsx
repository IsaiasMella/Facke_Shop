import React, { useState } from 'react';
import { Box, AppBar, Toolbar, Container, Grid, Badge } from '@mui/material';
import { BadgeUnstyled, InputUnstyled } from '@mui/base';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';
import Logo from '../../Images/F.png'
import { styled } from '@mui/system';
import useModal from '../../Hooks/useModal';
import UserIcon from '../../Images/svg/UserIcon';
import ShoppingIcon from '../../Images/svg/ShoppingIcon';
import { Link, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../Redux/Hooks';

const NavBar: React.FC<{}> = () => {
	const [inputValue, setInputValue] = useState('')
	const { handleOpenModal } = useModal()
	const navigate = useNavigate();

	let itemExist = useAppSelector(state => state.cartReducer)

	const StyledInputElement = styled('input')(
		() => `
		width:100%;
		position:relative;
		border:none;
		border-radius: 20px;
		outline:none;
		box-shadow:none;
		padding: 10px;
		padding-left:8%;
		height:40px;
	  `,
	);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		let value = e.target.value
		setInputValue(value)
	}

	const keyPress = (e: any) => {
		if (e.key === "Enter") {
			navigate(`/products/${e.target.value!}`)
		}
	}

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='fixed' sx={{ boxShadow: 'none' }}>
				<Toolbar>
					<Container maxWidth='xl' style={{
						display: 'flex', justifyContent: 'center', alignItems: 'center', width: '90%', height: '88px',
					}}>
						<Grid
							container
							display='grid'
							direction='row'
							justifyContent='space-between'
							alignItems='center'
							gridTemplateColumns='.5fr 2.5fr 1fr'
						>
							<Grid item >
								<Link to={'/'}>
									<img style={{ height: '48px' }} src={Logo} alt="" />
								</Link>
							</Grid>
							<Grid
								item
								margin='0 auto'
								width='100%'
							>
								{/*  */}
								<Stack direction='row' spacing={1.5} style={{ width: '100%' }}>
									<Box
										onKeyDown={(e) => keyPress(e)}
										sx={{ width: '100%' }}
									>
										<InputUnstyled
											slots={{ input: StyledInputElement }}
											name='search'
											// onChange={(e) => handleChange(e)}
											// value={inputValue}
											style={{ position: 'relative', width: '90%' }}
											startAdornment={
												<SearchIcon style={{
													color: '#001342',
													position: 'absolute',
													top: '8px',
													alignSelf: 'center',
													left: '16px',
													zIndex: '1'
												}} />
											}
											placeholder='Search product'
										/>
									</Box>
								</Stack>
							</Grid>
							<Grid item>
								<Stack direction='row' spacing={2} style={{ display: 'flex', justifyContent: 'flex-end' }} >
									<Box
										onClick={handleOpenModal}
										style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
										<Box sx={{ width: '24px' }}>
											<UserIcon />
										</Box>
										<p>Sign in</p>
									</Box>
									<Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
										<Link to={itemExist.length === 0 ? '/' : '/cart'} style={{ display: 'flex', color: '#fff', textDecoration: 'none', alignContent: 'center' }}>
											<Box sx={{ width: '24px', display: 'flex', alignItems: 'center', mr: '10px' }}>
												<Badge color="secondary" badgeContent={itemExist.length}>
													<ShoppingIcon />
												</Badge>
											</Box>
											<p>Cart</p>
										</Link>
									</Box>
								</Stack>
							</Grid>
						</Grid>
					</Container>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default NavBar;
