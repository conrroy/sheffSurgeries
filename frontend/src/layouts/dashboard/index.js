import { useEffect, useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
// hooks
import { observer } from 'mobx-react-lite';
import useCollapseDrawer from '../../hooks/useCollapseDrawer';
// config
import { HEADER, NAVBAR } from '../../config';
//
import DashboardHeader from './header';
import NavbarVertical from './navbar/NavbarVertical';
import { getToken } from '../../utils/token'
import { RootStore } from '../../store';

// ----------------------------------------------------------------------

const MainStyle = styled('main', {
  shouldForwardProp: (prop) => prop !== 'collapseClick',
})(({ collapseClick, theme }) => ({
  flexGrow: 1,
  paddingTop: HEADER.MOBILE_HEIGHT + 24,
  paddingBottom: HEADER.MOBILE_HEIGHT + 24,
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: HEADER.DASHBOARD_DESKTOP_HEIGHT + 24,
    paddingBottom: HEADER.DASHBOARD_DESKTOP_HEIGHT + 24,
    width: `calc(100% - ${NAVBAR.DASHBOARD_WIDTH}px)`,
    transition: theme.transitions.create('margin-left', {
      duration: theme.transitions.duration.shorter,
    }),
    ...(collapseClick && {
      marginLeft: NAVBAR.DASHBOARD_COLLAPSE_WIDTH,
    }),
  },
}));

// ----------------------------------------------------------------------

const DashboardLayout = function () {
  const { collapseClick, isCollapse } = useCollapseDrawer();
  const [open, setOpen] = useState(false);
  const { logined } = RootStore
  const token = getToken()

  useEffect(() => {
    if (!logined) {
      RootStore.getAccountProfile()
    }
  }, [])

  if (token) {
    if (logined) {
      return (
        <Box
          sx={{
            display: { lg: 'flex' },
            minHeight: { lg: 1 },
          }}
        >
          <DashboardHeader isCollapse={isCollapse} onOpenSidebar={() => setOpen(true)} />
          <NavbarVertical isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} />
          <MainStyle collapseClick={collapseClick}>
            <Outlet />
          </MainStyle>
        </Box>
      );
    }
    return null
  }
  return <Navigate to="/login" />

}

export default observer(DashboardLayout)