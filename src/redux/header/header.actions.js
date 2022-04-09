import HeaderActionTypes from './header.types';

export const toggleDrawerCheck = ({anchor,open,event}) =>({
    type: HeaderActionTypes.TOGGLE_DRAWER_CHECK,
    payload: {anchor,open,event}
});

export const toggleDrawer = ({anchor,open}) =>({
    type: HeaderActionTypes.TOGGLE_DRAWER,
    payload: {anchor,open}
});