import { User } from './user.model';

export class LoginResponse {
    Result: {
        user: User,
        token: string
    }
}