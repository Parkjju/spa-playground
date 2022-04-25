const Home = async () => {
    const div = document.createElement('div');
    const posts = await await (
        await fetch('https://jsonplaceholder.typicode.com/todos')
    ).json();

    posts.map((item) => {
        const p = document.createElement('p');
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.checked = item.completed;
        p.innerText = `${item.title}`;
        p.appendChild(input);
        div.appendChild(p);
    });

    return div;
};

export default Home;
