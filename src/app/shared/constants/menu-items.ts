import { IMenuItem } from "../models/menu-items.model";

export const MenuItems: IMenuItem[] = [
    {url: 'home', icon: 'home', name: 'Inicio'},
    {url: 'management', icon: 'dashboard', name: 'Administración'},
    {name: 'Nuestro menú', submenus: [
        {url: 'management', icon: 'restaurant', name: 'sugerencias del chef'},
        {url: 'management', icon: 'restaurant', name: 'entradas'},
        {url: 'management', icon: 'restaurant', name: 'sandwiches'},
        {url: 'management', icon: 'restaurant', name: 'platos principales'},
        {url: 'management', icon: 'restaurant', name: 'postres'},
    ]},
    {url: '', icon: 'restaurant', name: 'mi pedido'},
    {url: 'signout', icon: 'directions_run', name: 'Desconectarse'},
];