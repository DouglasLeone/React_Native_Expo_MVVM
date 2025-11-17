import { useState } from "react";
import Book from "../model/entities/Book";

type homeState = {
    books: Book[];
    error: string | null;
};

type homeActions = {
    handleAddBook: (title : string, author : string, year : number, pages : number) => Promise<void>;
    handleListBook: () => Promise<void>;
};

export function useHomeViewModel() : homeState & homeActions {
    const [books, setBooks] = useState<Book[]>([]); 
    const [error, setError] = useState<string | null>(null);
    
    async function handleAddBook(title : string, author : string, year : number, pages : number) {
        try {
            if(!title || !author || !year || !pages) {
                setError("Preencha todos os campos.");
                return;
            }

            const newBook : Book = {
                title,
                author,
                year: Number(year),
                pages: Number(pages)
            };

            setBooks((item) => [...item, newBook]);
            setError(null);

        } catch (error : any) {
            setError(error.message);
        }
    }

    async function handleListBook() { // Implementado quando houver um banco de dados ou persistência de dados local
        try {
            setError(null);
        } catch (error : any) {
            setError(error.message);
        }
    }
    
    return {
        books, error, handleAddBook, handleListBook
    };
}