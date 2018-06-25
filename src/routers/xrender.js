import XRenderIndex from '../views/xrender/Index';
import Start from '../views/xrender/pages/Start';
import Render from '../views/xrender/pages/Render';

export default {
    path: '/xrender',
    name: 'xrender',
    component: XRenderIndex,
    children: [{
        path: 'start',
        name: 'start',
        component: Start
    }, {
        path: 'render',
        name: 'render',
        component: Render
    }]
};
