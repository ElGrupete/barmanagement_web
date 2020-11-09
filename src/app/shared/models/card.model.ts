export interface ICard {
    id: string;
    name: string;
    price?: number; /** For products cards */
    role?: string; /** For employees cards */
    url?: string; /** For images */
}