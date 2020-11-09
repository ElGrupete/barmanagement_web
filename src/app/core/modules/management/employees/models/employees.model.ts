import { Role } from './../../../../models/role.model';
export class BaseEmployees {
    userName: string;
}

export class Employees extends BaseEmployees {
    role: string;
}

export class ResponseEmployees extends BaseEmployees {
    _id: string;
    role: Role;
}