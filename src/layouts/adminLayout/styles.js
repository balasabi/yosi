const styles = theme => ({
    topbar: {
      position: 'fixed',
      width: '100%',
      top: 0,
      left: 0,
      right: 'auto',
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    drawerPaper: {
      borderRight: 0,
      zIndex: 1200,
      width: '150px',
      top: theme.topBar.height,
    },
    sidebar: {
      width: '150px'
    },
    content: {
      minHeight: '100vh',
      padding: theme.spacing(3),
      paddingTop: theme.spacing(4),
      backgroundColor: "#efefef",
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    contentShift: {
      marginLeft: '150px',
      minHeight: "100vh"
    },
    [theme.breakpoints.down('sm')]: {
      content: {
        padding: 0,
        paddingTop: theme.spacing(4)
      }
    }
  });
  export default styles;