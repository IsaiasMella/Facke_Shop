export interface ChildrenProp {
    children?: JSX.Element|JSX.Element[]
}

export interface Products {
    id:                 number;
    title:              string;
    description:        string;
    price:              number;
    discountPercentage: number;
    rating:             number;
    stock:              number;
    brand:              string;
    category:           string;
    thumbnail:          string;
    images:             string[];
}