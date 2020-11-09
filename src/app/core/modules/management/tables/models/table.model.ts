import { ResponseSector } from './sector.model';
import { User } from '../../../../../core/models/user.model';

export class BaseTable {
    number: number;
    available: boolean;
    people: number;
    booked: boolean;
}

export class Table extends BaseTable {
    sector?: string; /** Sector objectId */
    user?: string; /** User objectId */
}

export class ResponseTable extends BaseTable {
    sector: ResponseSector; /** Sector type */
    user: User;
    info?: string;
}

