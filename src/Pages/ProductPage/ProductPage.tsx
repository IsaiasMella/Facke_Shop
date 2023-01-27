import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import { products } from '../../Api/products';
import { DetailOfProduct } from '../../Components/DetailOfProduct';
import { Products } from '../../Interfaces/Interfaces';
import './Style/ScrollBar.css'

export interface ProductPageInterface { }

const ProductPage: React.FC<ProductPageInterface> = () => {
	window.scrollTo(0, 0)

	const { id } = useParams()
	const [data, setData] = useState<Products>()
	const [loading, setLoading] = useState(true)
	const [imgPrincipal, setImgPrincipal] = useState<string | undefined>('');

		useEffect(() => {
			products.getById({ id: id })
				.then(res => {
					setData(res.data)
					setImgPrincipal(res.data.images[0])
					setLoading(false)
				})
				.catch(err => console.error(err))
		}, [id]);



	return (
		<Grid container justifyContent='center' >
			<Grid item height='100vh' >
				{/* contenedor de TODAS las imagenes */}
				<Grid container sx={{ maxWidth: '700px', maxHeight: '400px', alignItems: 'center', mt: '35px', gap: '30px' }} >
					<Grid item className='scrollBar' sx={{ direction: 'rtl', overflowY: 'scroll', maxHeight: '400px' }} >
						{loading ? '' :
							data?.images.map(img =>
								<div onMouseOver={() => setImgPrincipal(img)} key={img} >
									<img alt={img} src={img} style={{ maxWidth: '100px', height: '100px', objectFit: 'contain' }} />
								</div>
							)}
					</Grid>

					{/* CONTENEDOR DE LA IMAGEN PRINCIPAL */}
					<Grid item >
						{loading ? 'cargando' : <img style={{ maxHeight: '400px', width: '500px' }} src={imgPrincipal} alt="" />}
					</Grid>
				</Grid>

				{/* CONTENEDOR DE LA DESCRIPCION */}
				<Grid container sx={{ justifyContent: 'flex-start', mt: '10px' }}>
					{
						loading ? '' :
							<Grid item>
								<h2>Description</h2>
								<p style={{ maxWidth: '700px', textOverflow: 'ellipsis' }} >{data?.description}</p>
							</Grid>
					}
				</Grid>
			</Grid>

			{/* contenedor donde se ve los detalles de la compra */}
			{
				data &&
				<DetailOfProduct data={data} />
			}

		</Grid>
	);
};

export default ProductPage;
