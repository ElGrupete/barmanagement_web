export class Menu {
    name: string;
    description: string;
    category: string; /** The category _id */
    product: string[]; /** The product [_id's] */
    notes?: string;
    image: string; /** The image URL */
    status?: string; /** The status _id */
    printed?: boolean;
    price: number;
}