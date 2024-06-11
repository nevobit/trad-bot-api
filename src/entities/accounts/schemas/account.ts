export interface Account {
    _id?: string;
    id: string;
    name: string;
    username: string;
    password: string;
    budget: number;
    market: string;
    system: string;
    provider: string;
    status: string;
}