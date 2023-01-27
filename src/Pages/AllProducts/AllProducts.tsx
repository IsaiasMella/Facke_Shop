import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import { products } from '../../Api/products';
import { ListOfProducts } from '../../Components/ListOfProducts';
import { Products } from '../../Interfaces/Interfaces';
export interface AllProductsInterface { }

const AllProducts: React.FC<AllProductsInterface> = () => {
	const [allProducts, setAllProducts] = useState<Products[]>([])
	const [pages, setpages] = useState(0)
	const [pagination, setPagination] = useState<number>(0)

	const { product } = useParams()

	useEffect(() => {
		if (product === '' || product === undefined) {
			products.getAll({ initialProd: pagination })
				.then(res => (
					setAllProducts(res.data.products),
					setpages(res.data.total)
				))
				.catch(err => console.error(err))
		} else if (product !== '') {
			products.getBySearched({ searched: product ? product : '' })
				.then(res => (
					setAllProducts(res.data.products),
					setpages(res.data.total)
				))
				.catch(err => console.error(err))
		}
	}, [pagination, product])


	return (
		<Box sx={{ width: '100%' }}>
			<Grid container sx={{ width: '90%', margin:'0 auto', flexDirection:'column', mt:'50px' }}>
				<ListOfProducts
					allProducts={allProducts}
					setPagination={setPagination}
					pages={pages}
				/>
			</Grid>
		</Box>
	);
};

export default AllProducts;
