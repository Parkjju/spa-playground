import Home from '../components/Home.js';
import Post from '../components/Post.js';
import Users from '../components/Users.js';

const navigateTo = (url) => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const root = document.querySelector('#root');
    const routes = [
        { path: '/', component: Home },
        {
            path: '/posts',
            component: Post,
        },
        {
            path: '/users',
            component: Users,
        },
    ];

    const potentialMatches = routes.map((route) => {
        return {
            route: route,
            isMatch: location.pathname === route.path,
        };
    });

    let match = potentialMatches.find(
        (potentialMatch) => potentialMatch.isMatch
    );

    // 404 접속 시 처리 로직
    if (!match) {
        match = {
            route: routes[0],
            isMatch: true,
        };
    }
    const component = await match.route.component();
    if (root.firstElementChild) {
        root.replaceChild(component, root.firstElementChild);
    } else {
        root.appendChild(component);
    }
};
window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', (event) => {
        if (event.target.matches('[data-link]')) {
            event.preventDefault();
            navigateTo(event.target.href);
        }
    });
    router();
});
