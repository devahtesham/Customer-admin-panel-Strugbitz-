// global functions
const sortByID = (users)=> {
    return users.sort((a, b) => a.id - b.id);
}

const sortByEmail = (users)=> {
    return users.sort((a, b) => a.email.localeCompare(b.email));
}

const sortByName = (users)=> {
    return users.sort((a, b) => {
        const nameA = `${a.first_name} ${a.last_name}`;
        const nameB = `${b.first_name} ${b.last_name}`;
        return nameA.localeCompare(nameB);
    });
}

export{
    sortByID,sortByEmail,sortByName
}