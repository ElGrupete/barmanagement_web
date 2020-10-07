import { Category } from './category.model';
import { BaseResponse } from './../../../../../models/responses/base-response.interface';

export class CategoryResponse implements BaseResponse {
    Result: {
        category: Category,
        categories: Category[]
    }
}