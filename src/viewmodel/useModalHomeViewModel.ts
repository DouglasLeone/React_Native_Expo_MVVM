import { useState } from "react";

type ModalState = {
    modalVisible : boolean;
    title : string;
    author : string;
    year : number;
    pages: number;
    error : string | null;
};

type ModalActions = {
    isModalVisible() : Promise<void>
    updateTitle(value : string) : Promise<void>
    updateAuthor(value : string) : Promise<void>
    updateYear(value : string) : Promise<void>
    updatePages(value : string) : Promise<void>
}

export function useModalHomeViewModel() : ModalState & ModalActions {
    const [modalVisible, setModalVisible] = useState(false);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [year, setYear] = useState(0);
    const [pages, setPages] = useState(0);
    const [error, setError] = useState(null);

    async function isModalVisible() {
        try {
            setError(null);

            if (!modalVisible) {
                setTitle("");
                setAuthor("");
                setYear(0);
                setPages(0);
            }

            setModalVisible(prev => !prev);

        } catch (error : any) {
            setError(error.message);
        }
    }

    async function updateTitle(value : string) {
        setTitle(value);
    }

    async function updateAuthor(value : string) {
        setAuthor(value);
    }

    async function updateYear(value : string) {
        setYear(Number(value));
    }
    async function updatePages(value : string) {
        setPages(Number(value));
    }

    return {
        modalVisible, title, author, year, pages, error, isModalVisible, updateTitle, updateAuthor, updateYear, updatePages
    }
}