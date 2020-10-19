import { Product } from './../../product/models/product.model';

export class BaseMenu {
    name: string;
    description: string;
    notes?: string;
    image: string; /** The image URL */
    printed?: boolean;
    hasSideDishes: boolean;
}

export class Menu extends BaseMenu {
    _id?: string;
    category: string; /** The category _id */
    product: string[]; /** The product [_id's] */
    printed?: boolean;
    price: number; 
}

export class ResponseMenu extends BaseMenu {
    _id: string;
    category: string; /** The category _id */
    product: Product[]; /** The product [_id's] */
    status?: any; /** The status _id */
    price: { $numberDecimal: string }; /** Any because the API returns an object of {$numberDecimal: "string"} */
    sideDishes?: any;
}