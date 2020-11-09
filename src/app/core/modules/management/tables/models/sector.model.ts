import { Table } from './table.model';
export class BaseSector {
    name: string;
    description: string;
}

export class Sector extends BaseSector {
    tables?: string[];
}

export class ResponseSector extends BaseSector {
    _id: string;
    tables?: Table[];
}