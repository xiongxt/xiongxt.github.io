import XRenderIndex from '../views/xrender/Index';
import Start from '../views/xrender/pages/Start';

export default {
    path: '/xrender',
    name: 'xrender',
    component: XRenderIndex,
    children: [{
        path: 'start',
        name: 'start',
        component: Start
    }]
};
