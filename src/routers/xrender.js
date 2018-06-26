import XRenderIndex from '../views/xrender/Index';
import Start from '../views/xrender/pages/Start';
import Render from '../views/xrender/pages/Render';
import Node from '../views/xrender/pages/Node';

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
    }, {
        path: 'node',
        name: 'node',
        component: Node
    }]
};
