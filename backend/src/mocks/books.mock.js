import { v4 as uuidv4 } from 'uuid';

export let books = [
    {
        _id: uuidv4(),
        title: "Titre",
        author: "Auteur",
        editor: "Editeur",
        date: new Date()
    },
    {
        _id: uuidv4(),
        title: "Titre 2",
        author: "Auteur 2",
        editor: "Editeur 2",
        date: new Date()
    },
    {
        _id: uuidv4(),
        title: "Titre 3",
        author: "Auteur 3",
        editor: "Editeur 3",
        date: new Date()
    }
]