const Users = async () => {
    const div = document.createElement('div');
    const users = await (
        await fetch('https://jsonplaceholder.typicode.com/users')
    ).json();

    users.map((item) => {
        const user = document.createElement('p');
        user.innerText = `${item.username}`;
        div.appendChild(user);
    });

    return div;
};

export default Users;
