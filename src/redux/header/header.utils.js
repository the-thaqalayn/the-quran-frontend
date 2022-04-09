export const applyToggleDrawer= (drawer,{anchor,open})=>({
    ...drawer,
    [anchor]: open
  });