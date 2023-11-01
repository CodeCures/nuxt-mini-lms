interface UserLoginI {
    email: string;
    password: string;
}

export class User {
    name = 'Super Admin';
    email = 'admin@example.com';
    password = 'pass123';

    has(payload: UserLoginI): boolean {
        return this.email === payload.email
            && this.password === payload.password
    }
}