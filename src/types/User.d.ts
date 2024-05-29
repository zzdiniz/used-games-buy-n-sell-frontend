export interface User {
    name: string;
    email: string;
    password: string;
    confirmedPassword?: string;
    image?: string;
    phone: string;
}