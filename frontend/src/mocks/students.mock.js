import {v4 as uuidv4 } from 'uuid';

export let students = [
    {
        _id: uuidv4(),
        name: "DOE",
        firstname: "John",
        age: 18,
        promotion: "ING1"
    },
    {
        _id: uuidv4(),
        name: "DUPONT",
        firstname: "Martin",
        age: 20,
        promotion: "ING2"
    },
    {
        _id: uuidv4(),
        name: "TOTO",
        firstname: "Titi",
        age: 19,
        promotion: "ING1"
    }
]