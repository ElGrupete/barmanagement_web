import { ResponseMenu } from './../../../management/menus/menu/models/menu.model';
export class BaseOrder {
    cutlery: number;
    totalCost: number;
    paid: boolean;
}

export class Order extends BaseOrder {
    menu: string[];
    combo: string[];
    table: string;
    waiter: string;
    status: string;
}

export class ResponseOrder extends BaseOrder {
    menu: ResponseMenu;
    combo: any; /** Here it goes the actual Class */
    table: any; /** Here it goes the actual Class */
    waiter: any; /** Here it goes the actual Class */
    status: any; /** Here it goes the actual Class */
}