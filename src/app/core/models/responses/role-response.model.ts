import { Role } from './../role.model';
import { BaseResponse } from './base-response.interface';

export class RoleResponse implements BaseResponse {
    Result: {
        base: Role,
        array: Role[]
    }
}