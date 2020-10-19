export class Menu {
    _id?: string;
    name: string;
    description: string;
    category: string; /** The category _id */
    product: string[]; /** The product [_id's] */
    notes?: string;
    image: string; /** The image URL */
    status?: string; /** The status _id */
    printed?: boolean;
    price: any; /** Any because the API returns an object of {$numberDecimal: "string"} */
    hasSideDishes: boolean;
    sideDishes?: string;
}