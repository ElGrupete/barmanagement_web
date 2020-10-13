import { Category } from './../../category/models/category.model';
export class Dishes {
    name: string;
    description: string;
    categoryId: Category;
    productId;
    notes: string;
    image: string;
    statusId;
    printed: boolean;
}