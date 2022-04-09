import {createSelector} from 'reselect';

export const selectHeader= state => state.header;

export const selectDrawer = createSelector(
    [selectHeader],
    state => state.drawer
);