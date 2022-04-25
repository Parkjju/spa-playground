const Post = async () => {
    const div = document.createElement('div');
    const posts = await await (
        await fetch('https://jsonplaceholder.typicode.com/posts')
    ).json();

    posts.map((item) => {
        const p = document.createElement('p');
        p.innerText = `${item.title}`;
        div.appendChild(p);
    });

    return div;
};

export default Post;
