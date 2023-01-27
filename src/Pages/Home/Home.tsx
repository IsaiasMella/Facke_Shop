import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { products } from '../../Api/products';
import { Header } from '../../Components/Header';
import { ChildrenProp, Products } from '../../Interfaces/Interfaces';
import { ListOfProducts } from '../../Components/ListOfProducts';

const Home: React.FC<ChildrenProp> = () => {
	const [allProducts, setAllProducts] = useState<Products[]>([])
	const [pagination, setPagination] = useState<number>(0)
	const [pages, setpages] = useState(0)
	const [imagePrincipal, setImagePrincipal] = useState('')

	useEffect(() => {
		products.getAll({ initialProd: pagination })
			.then(res => {
				setAllProducts(res.data.products)
				setpages(res.data.total)
				if (pagination === 0) {
					setImagePrincipal(res.data.products[6]?.images[0])
				}
			})
			.catch(err => console.error(err))
	}, [pagination])


	return (
		<Grid container sx={{ display: 'flex', flexDirection: 'column' }}>
			<Header
				imagePrincipal={imagePrincipal}
			/>
			<ListOfProducts
				allProducts={allProducts}
				setPagination={setPagination}
				pages={pages}
			/>
		</Grid>
	)
};

export default Home;
