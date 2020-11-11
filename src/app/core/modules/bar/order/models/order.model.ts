import { ResponseMenu } from './../../../management/menus/menu/models/menu.model';
export class BaseOrder {
    cutlery?: number;
    totalCost?: number;
    paid: boolean;
    notes?: string;
}

export class Order extends BaseOrder {
    menu: string[];
    combo?: string[];
    table: string;
    waiter?: string;
    status?: string;
}

export class ResponseOrder extends BaseOrder {
    _id: string;
    menu: ResponseMenu[];
    combo: any; /** Here it goes the actual Class */
    table: any; /** Here it goes the actual Class */
    waiter: any; /** Here it goes the actual Class */
    status: any; /** Here it goes the actual Class */
}