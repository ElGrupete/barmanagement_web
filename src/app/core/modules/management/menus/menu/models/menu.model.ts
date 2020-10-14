import { Category } from './../../category/models/category.model';
export class Menu {
    name: string;
    description: string;
    categoryId: Category;
    productId;
    notes: string;
    image: string;
    statusId;
    printed: boolean;
}