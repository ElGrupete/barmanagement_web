import { BaseResponse } from '../../../models/responses/base-response.interface';
import { User } from '../../../models/user.model';

export class SignupResponse implements BaseResponse {
    Result: {
        user: User,
        users: User[]
    }
}