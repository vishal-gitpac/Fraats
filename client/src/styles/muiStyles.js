import { makeStyles } from '@material-ui/core/styles';

export const useMainPaperStyles = makeStyles(
  (theme) => ({
    root: {
      width: '100vW',
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      minHeight: '100vH',
    },
    homepage: {
      minWidth: '98%',
      marginTop: '0.5em',
      display: 'flex',
      [theme.breakpoints.down('md')]: {
        marginTop: '0',
        display: 'block',
      },
    },
    postsPanel: {
      minWidth: '40vW',
      flexGrow: 1,
    },
  }),
  { index: 1 }
);

export const useNavStyles = makeStyles(
  (theme) => ({
    leftPortion: {
      flexGrow: 1,
      display: 'flex',
      alignItems: 'center',
      [theme.breakpoints.down('xs')]: {
        marginLeft: '1em',
      },
    },
    logoWrapper: {
      marginRight: theme.spacing(10),
      [theme.breakpoints.down('xs')]: {
        marginRight: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
      },
    },
    logo: {
      fontFamily: 'Lovelo',
      textTransform: 'none',
      fontSize: '1.3em',
      padding: '0.1em',
      marginRight: '0.3em',
    },
    Logo: {
      marginRight: '0.3em',
      borderRadius: '50%',
    },
    user: {
      marginRight: 10,
    },
    titleButton: {
      textTransform: 'none',
      fontSize: 20,
      marginRight: 12,
    },
    navButtons: {
      '&:hover': {
        backgroundColor: 'inherit',
      },
    },
    search: {
      //flexGrow: 0.75,
      [theme.breakpoints.down('sm')]: {
        flexGrow: 1,
        padding: '0 0.5em',
      },
      width: '40em',
      outline: '0',
    },
    searchbar: {
      backgroundColor: '#FFFFFF',
      //paddingTop :'1em',
      //paddingBottom :'1em',
      height : '2.5em',
      justifyContent: 'flex-start',
      width : '40em',
      outline: '0',
    },
    searchBtn: {
      padding: '0.2em',
      backgroundColor: 'inherit', 
    },
    feature:{
     marginRight: '-1em',
    },
    features: {
       display: 'flex',
       //justifyContent: 'space-between',
    },
  }),
  { index: 1 }
);

export const useAuthStyles = (authType) =>
  makeStyles(
    (theme) => ({
      authWrapper: {
        display: 'flex',
        flexDirection: authType === 'login' ? 'row' : 'row-reverse',
        [theme.breakpoints.down('xs')]: {
          flexDirection: 'column',
          marginTop: 10,
        },
      },
      form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
        [theme.breakpoints.down('xs')]: {
          padding: '0 0 0 0',
        },
      },
      formTitle: {
        textAlign: 'center',
        [theme.breakpoints.down('xs')]: {
          fontSize: '1.5em',
        },
      },
      switchText: {
        textAlign: 'center',
        marginBottom: '1.2em',
        [theme.breakpoints.down('xs')]: {
          marginBottom: 0,
          fontSize: '1em',
        },
      },
      submitButton: {
        marginTop: '1.8em',
      },
      input: {
        display: 'flex',
        alignItems: 'flex-end',
      },
      inputIcon: {
        marginRight: 8,
      },
      sidePanel: {
        padding: 20,
        margin: 'auto 0',
      },
      divider: {
        marginLeft: 40,
        marginRight: 40,
      },
    }),
    { index: 1 }
  );

export const useDialogStyles = makeStyles(
  (theme) => ({
    dialogWrapper: {
      padding: 0,
      overflow: 'hidden',
      [theme.breakpoints.down('xs')]: {
        padding: 0,
      },
    },
    createPostWrapper: {
      display: 'flex',
      width: 'auto',
      borderRadius: 0,
      marginBottom: 10,
      //marginLeft: '10em',
      padding: 6,
      alignItems: 'center',
    },
    createBtn: {
      //width:'15em',
      marginLeft: 8,
      textTransform: 'none',
      justifyContent: 'flex-start',
    },
    fab: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
      zIndex: 1000,
    },
    iconGroup: {
      display: 'flex',
    },
    dialogTitle: {
      fontSize: '1.2em',
    },
    createSubBtn: {
      marginLeft: '4.5em',
      marginTop: '1em',
      width: '15em',
    },
    defaultAvatar: {
      backgroundColor: theme.palette.secondary.main,
    },
  }),
  { index: 1 }
);

export const useAlertStyles = makeStyles(
  (theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
      marginTop: '0.8em',
      marginBottom: '0.8em',
    },
  }),
  { index: 1 }
);

export const usePostListStyles = makeStyles(
  (theme) => ({
    root: {
      //marginLeft: '10em',
      width: '100%',
      marginBottom: '1em',
    },
    loadBtnWrapper: {
      display: 'flex',
      justifyContent: 'center',
    },
    loadBtn: {
      marginTop: '0.8em',
      width: '50%',
    },
    noSubscribedPosts: {
      textAlign: 'center',
      marginTop: '5em',
    },
    loadSpinner: {
      textAlign: 'center',
      marginTop: '12em',
      marginBottom: '6em',
    },
  }),
  { index: 1 }
);

export const useCardStyles = makeStyles(
  (theme) => ({
    root: {
      display: 'flex',
      width: 'auto',
      borderRadius: 0,
    },
    votesWrapper: {
      display: 'flex',
      flexDirection: 'column',
      width: 30,
      alignItems: 'center',
      backgroundColor: theme.palette.type === 'light' ? '#f7f5f3' : '#2f271f',
    },
    thumbnailWrapper: {
      alignSelf: 'center',
      marginLeft: 5,
    },
    thumbnail: {
      fontSize: '2em',
      width: 70,
      height: 90,
      textAlign: 'center',
      backgroundColor: theme.palette.type === 'light' ? '#f7f5f3' : '#2f271f',
      borderRadius: 8,
      [theme.breakpoints.down('xs')]: {
        width: 60,
        height: 80,
      },
    },
    thumbnailIcon: {
      marginTop: 30,
    },
    postInfoWrapper: {
      padding: 10,
      paddingBottom: 0,
    },
    userAndDate: {
      marginLeft: 10,
    },
    commentsBtn: {
      textTransform: 'none',
      color: theme.palette.type === 'light' ? '#787878' : '#dadada',
    },
    title: {
      marginRight: 5,
      [theme.breakpoints.down('xs')]: {
        fontSize: '1em',
        margin: 0,
        color: '#45AB0F',
      },
    },
    bottomBtns: {
      display: 'flex',
    },
  }),
  { index: 1 }
);

export const usePostFormStyles = makeStyles(
  (theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 20,
      flexGrow: 1,
      [theme.breakpoints.down('xs')]: {
        padding: '0 0 0 0',
      },
    },
    formTitle: {
      textAlign: 'center',
      [theme.breakpoints.down('xs')]: {
        fontSize: '1.5em',
      },
    },
    submitButton: {
      marginTop: '1.8em',
    },
    input: {
      display: 'flex',
      alignItems: 'flex-end',
      marginTop: '0.7em',
    },
    inputIcon: {
      marginRight: 8,
    },
    inputIconText: {
      padding: 2,
      paddingBottom: 0,
      marginRight: 9,
      fontWeight: 700,
      wordBreak: 'keep-all',
    },
    typeBtnGroup: {
      marginBottom: 5,
    },
    imageInput: {
      marginTop: '1em',
    },
    imageBtnsWrapper: {
      display: 'flex',
      alignItems: 'flex-end',
    },
    imagePreview: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '0.7em',
    },
    clearSelectionBtn: {
      padding: '0.25em',
    },
    selectBtn: {
      textTransform: 'capitalize',
    },
    textInput: {
      display: 'flex',
      alignItems: 'flex-end',
      marginTop: '1.5em',
    },
  }),
  { index: 1 }
);

export const usePostCommentsStyles = makeStyles(
  (theme) => ({
    mainPaper: {
      marginTop: '0.5em',
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 0,
      minHeight: '90vH',
    },
    topPortion: {
      display: 'flex',
    },
    votesWrapper: {
      display: 'flex',
      flexDirection: 'column',
      width: 50,
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: theme.palette.type === 'light' ? '#f7f5f3' : '#2f271f',
      [theme.breakpoints.down('xs')]: {
        width: 35,
      },
    },
    postDetails: {
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      padding: '0.5em',
      borderRadius: 0,
    },
    title: {
      fontWeight: 500,
      marginBottom: '0.7em',
    },
    imagePost: {
      textAlign: 'center',
    },
    image: {
      width: '40%',
      [theme.breakpoints.down('xs')]: {
        width: '40%',
      },
      border: '1px solid #e9e3d8',
      borderRadius: 8,
    },
    bottomBar: {
      display: 'flex',
      marginTop: '0.8em',
      [theme.breakpoints.down('xs')]: {
        fontSize: '0.9em',
      },
    },
    bottomButton: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '1em',
    },
    commentIcon: {
      marginRight: 10,
    },
    commentsContainer: {
      marginLeft: '0.7em',
      [theme.breakpoints.down('xs')]: {
        marginLeft: '0.3em',
      },
    },
    divider: {
      marginBottom: '1em',
    },
    wholeComment: {
      marginBottom: '1em',
    },
    commentWrapper: {
      display: 'flex',
    },
    commentVotesWrapper: {
      display: 'flex',
      flexDirection: 'column',
      width: 30,
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    commentDetails: {
      display: 'flex',
      flexDirection: 'column',
      padding: '1em',
      paddingTop: '0.7em',
      width: '100%',
    },
    replyWrapper: {
      marginBottom: '0.2em',
      display: 'flex',
      marginLeft: '2em',
    },
    noCommentsBanner: {
      textAlign: 'center',
      marginTop: '5em',
    },
    loadSpinner: {
      textAlign: 'center',
      marginTop: '12em',
    },
  }),
  { index: 1 }
);

export const useCommentInputStyles = makeStyles(
  (theme) => ({
    wrapper: {
      marginTop: '0.5em',
      margin: '0.4em',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    commentBtn: {
      alignSelf: 'flex-end',
      marginTop: '0.1em',
    },
  }),
  { index: 1 }
);

export const useCommentAndBtnsStyles = makeStyles(
  (theme) => ({
    inputDiv: {
      display: 'flex',
      flexDirection: 'column',
    },
    submitBtns: {
      alignSelf: 'flex-end',
      marginTop: '0.1em',
    },
    btnStyle: {
      textTransform: 'none',
    },
    btnBar: {
      display: 'flex',
    },
    cancelBtn: {
      marginRight: '0.2em',
      marginTop: '0.1em',
    },
  }),
  { index: 1 }
);

export const useUserPageStyles = makeStyles(
  (theme) => ({
    mainPaper: {
      marginTop: '0.5em',
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 0,
      minHeight: '90vH',
      paddingBottom: '1em',
    },
    userInfoWrapper: {
      margin: '0.5em',
      padding: '0.8em',
      display: 'flex',
      justifyContent: 'space-around',
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
      },
    },
    itemWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    avatarWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    rightWrapper: {
      flexGrow: 0.3,
      display: 'flex',
      alignItems: 'end',
      justifyContent: 'space-between',
    },
    twoItemsDiv: {
      textAlign: 'center',
    },
    avatar: {
      width: '5em',
      height: '5em',
      [theme.breakpoints.down('xs')]: {
        width: '3em',
        height: '3em',
      },
    },
    cakeDay: {
      display: 'flex',
      alignItems: 'center',
    },
    postsPaper: {
      margin: '0.5em',
    },
    loadBtnWrapper: {
      display: 'flex',
      justifyContent: 'center',
    },
    loadBtn: {
      width: '50%',
    },
    noPosts: {
      textAlign: 'center',
      marginTop: '5em',
    },
    loadSpinner: {
      textAlign: 'center',
      marginTop: '12em',
    },
  }),
  { index: 1 }
);

export const useUserPostCardStyles = makeStyles(
  (theme) => ({
    mainPaper: {
      display: 'flex',
      marginBottom: '1em',
      textDecoration: 'none',
      '&:hover': {
        border: `1px solid ${theme.palette.primary.main}`,
      },
    },
    votesWrapper: {
      display: 'flex',
      flexDirection: 'column',
      width: 50,
      alignItems: 'center',
      justifyContent: 'flex-start',
      [theme.breakpoints.down('xs')]: {
        width: 35,
      },
    },
    title: {
      fontWeight: 500,
      marginBottom: '0.7em',
      //backgroundColor: '#48096a',
    },
    imagePost: {
      textAlign: 'center',
    },
    image: {
      width: '30%',
      [theme.breakpoints.down('xs')]: {
        width: '40%',
      },
      border: '1px solid #e9e3d8',
      borderRadius: 8,
    },
    postInfo: {
      paddingTop: '0.5em',
      padding: '0.2em',
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
    },
    commentsBtn: {
      marginTop: '0.5em',
    },
  }),
  { index: 1 }
);

export const useSubPageStyles = makeStyles(
  (theme) => ({
    mainPaper: {
      marginTop: '0.5em',
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 0,
      minHeight: '90vH',
      paddingBottom: '1em',
    },
    subInfoWrapper: {
      margin: '0.5em',
      padding: '0.8em',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
        justifyContent: 'center',
      },
    },
    iconText: {
      display: 'flex',
      alignItems: 'flex-end',
      [theme.breakpoints.down('xs')]: {
        justifyContent: 'center',
      },
    },
    secondPanel: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      [theme.breakpoints.down('xs')]: {
        marginTop: '1em',
      },
    },
    joinBtn: {
      marginBottom: '0.4em',
    },
    description: {
      display: 'flex',
      alignItems: 'flex-end',
      flexWrap: 'wrap',
      margin: '0.3em 0',
      maxWidth: 300,
      [theme.breakpoints.down('xs')]: {
        justifyContent: 'center',
      },
    },
    inputDiv: {
      display: 'flex',
      flexDirection: 'column',
    },
    submitBtns: {
      alignSelf: 'flex-end',
      marginTop: '0.1em',
    },
    firstPanel: {
      [theme.breakpoints.down('xs')]: {
        textAlign: 'center',
      },
    },
    loadBtnWrapper: {
      display: 'flex',
      justifyContent: 'center',
    },
    loadBtn: {
      marginTop: '0.8em',
      width: '50%',
    },
    noPosts: {
      textAlign: 'center',
      marginTop: '5em',
    },
    loadSpinner: {
      textAlign: 'center',
      marginTop: '12em',
    },
  }),
  { index: 1 }
);

export const useSortTabStyles = makeStyles(
  (theme) => ({
    mainPaper: {
      borderRadius: 0,
      marginBottom: '0.6em',
      [theme.breakpoints.down('xs')]: {
        marginBottom: '0em',
      },
    },
  }),
  { index: 1 }
);

export const useSubPanelStyles = makeStyles(
  (theme) => ({
    mainPaper: {
      minWidth: '25%',
      borderRadius: 0,
      marginLeft: '0.5em',
      //padding: '0.5em',
      //backgroundColor: '#EBEBEB',
    },
    listPaper: {
      padding: '1em',
      //backgroundColor: '#EBEBEB'
      fontFamily: 'Quicksand Book Oblique, sans-serif',
      fontFamily: 'Quicksand Book, sans-serif',
      fontFamily: 'Quicksand Dash, sans-serif',
      fontFamily: 'Quicksand Light Oblique, sans-serif',
      fontFamily: 'Quicksand Light, sans-serif',
      fontFamily: 'Quicksand Bold Oblique, sans-serif',
      fontFamily: 'Quicksand Bold, sans-serif',
    },
    title: {
      textAlign: 'center',
      marginBottom: '0em',
      backgroundColor: '#48096a',
      color: '#ffffff',
      fontFamily: 'Quicksand Book Oblique, sans-serif',
      fontFamily: 'Quicksand Book, sans-serif',
      fontFamily: 'Quicksand Dash, sans-serif',
      fontFamily: 'Quicksand Light Oblique, sans-serif',
      fontFamily: 'Quicksand Light, sans-serif',
      fontFamily: 'Quicksand Bold Oblique, sans-serif',
      fontFamily: 'Quicksand Bold, sans-serif',
    },
    listItem: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '1.1em',
      fontFamily: 'Quicksand Book Oblique, sans-serif',
      fontFamily: 'Quicksand Book, sans-serif',
      fontFamily: 'Quicksand Dash, sans-serif',
      fontFamily: 'Quicksand Light Oblique, sans-serif',
      fontFamily: 'Quicksand Light, sans-serif',
      fontFamily: 'Quicksand Bold Oblique, sans-serif',
      fontFamily: 'Quicksand Bold, sans-serif',
    },
    listWrapper: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '1em',
    },
    count: {
      fontSize : '0.7em',
    },
  }),
  { index: 1 }
);

export const useSubredditFormStyles = makeStyles(
  (theme) => ({
    formWrapper: {
      [theme.breakpoints.down('xs')]: {
        marginTop: 10,
      },
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 20,
      [theme.breakpoints.down('xs')]: {
        padding: '0 0 0 0',
      },
    },
    formTitle: {
      textAlign: 'center',
      [theme.breakpoints.down('xs')]: {
        fontSize: '1.5em',
      },
    },
    submitButton: {
      marginTop: '1.8em',
      marginBottom: '0.5em',
    },
    input: {
      display: 'flex',
      alignItems: 'flex-end',
    },
    inputIcon: {
      marginRight: 8,
    },
    inputIconText: {
      padding: 2,
      paddingBottom: 0,
      marginRight: 9,
      fontWeight: 700,
      wordBreak: 'keep-all',
    },
    descInput: {
      display: 'flex',
      alignItems: 'flex-end',
      marginTop: '1.5em',
    },
  }),
  { index: 1 }
);

export const useUserMenuStyles = makeStyles(
  (theme) => ({
    userBtn: {
      textTransform: 'none',
      display: 'flex',
      color : '#ffffff',
    },
    avatar: {
      width: theme.spacing(4),
      height: theme.spacing(4),
      marginRight: '0.1em',
      backgroundColor: "primary",
      [theme.breakpoints.up('xs')]: {
        marginRight: '0.5em',
      },
    },
    userBtnMob: {
      color : '#ffffff',
    },
    navItems: {
      display: 'flex',
      alignItems: 'center',
    },
    karmaWrapper: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: '0.5em',
    },
    name: {
      color: "#FFF",
      backgroundColor: "#FFF",
    },
  }),
  { index: 1 }
);

export const useAvatarFormStyles = makeStyles(
  (theme) => ({
    root: {
      marginTop: '1em',
    },
    title: {
      textAlign: 'center',
    },
    selectBtn: {
      textTransform: 'none',
    },
    clearSelectionBtn: {
      padding: '0.25em',
    },
    imageBtnsWrapper: {
      display: 'flex',
      alignItems: 'flex-end',
      marginTop: '1em',
    },
    imagePreview: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '0.7em',
    },
    submitButton: {
      marginTop: '1.4em',
    },
    currentAvatar: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '0.5em',
    },
    currentAvatarText: {
      marginRight: '0.5em',
    },
  }),
  { index: 1 }
);

export const useSearchPageStyles = makeStyles(
  (theme) => ({
    mainPaper: {
      marginTop: '0.5em',
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 0,
      minHeight: '90vH',
      paddingBottom: '1em',
    },
    infoPaper: {
      padding: '0.8em',
      display: 'flex',
      alignItems: 'flex-start',
    },
    noResults: {
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      marginTop: '1em',
    },
    sorryIcon: {
      marginRight: '7px',
      fontSize: '4em',
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
    },
    loadBtnWrapper: {
      display: 'flex',
      justifyContent: 'center',
    },
    loadBtn: {
      marginTop: '0.8em',
      width: '50%',
    },
  }),
  { index: 1 }
);

export const useSortCommentsStyles = makeStyles(
  (theme) => ({
    root: {
      display: 'flex',
      alignItems: 'center',
    },
    label: {
      marginRight: 10,
      display: 'flex',
      alignItems: 'center',
    },
  }),
  { index: 1 }
);

export const useNotFoundPageStyles = makeStyles(
  (theme) => ({
    mainPaper: {
      marginTop: '0.5em',
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 0,
      minHeight: '90vH',
      paddingBottom: '1em',
      textAlign: 'center',
    },
    textWrapper: {
      marginTop: '20%',
    },
    icon: {
      fontSize: '8em',
      marginBottom: '0.3em',
    },
  }),
  { index: 1 }
);
