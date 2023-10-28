import { Request } from "express";

export interface Newspost {
    id: number;
    title: string;
    text: string;
    genre: 'Politic' | 'Business' | 'Sport' | 'Other';
    isPrivate: boolean;
    createdAt: Date;
    author: User
    // deleted: boolean
}

export interface User {
    id: number;
    email: string;
    password: string;
    // deleted: boolean
}

export interface PageOptions {
    size: number;
    page: number;
}

export interface PagedPosts {
    pageOptions: PageOptions;
    total: number;
    results: Newspost[];
}
  
export interface ExtRequest extends Request {
    pageOptions?: PageOptions;
    auth?: any; 
}
  