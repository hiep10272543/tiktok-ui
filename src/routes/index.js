// Layout
import { OnlyHeader } from '~/components/Layout';

// Public
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Contact from '~/pages/Contact';
import Upload from '~/pages/Upload';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/contact', component: Contact, layout: null },
    { path: '/upload', component: Upload, layout: OnlyHeader },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
