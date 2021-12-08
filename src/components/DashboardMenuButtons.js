import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const images = [
  {
    url: 'http://alememy.pl/wp-content/uploads/2020/05/grill-na-kwarantannie.jpg',
    title: 'Wykończenia wnętrz',
    width: '30%',
    src: '/wykończenia-wnetrz'
  },
  {
    url: 'https://www.blasty.pl/upload/images/large/2017/07/a-ty-po-ktorej-kostce-sie-usmiechasz_2017-07-01_22-21-05.jpg',
    title: 'Nawierzchnie',
    width: '30%',
    src: '/nawierzchnie'
  },
  {
    url: 'https://www.blasty.pl/upload/images/large/2016/04/robotnicy-tak-maja.jpg',
    title: 'Budowlanka',
    width: '30%',
    src: '/budowlanka'
  },
  {
    url: 'https://img26.dmty.pl//uploads/201508/1439557626_rjorkj_600.jpg',
    title: 'Stop drink',
    width: '30%',
    src: '/stop-drink'
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw-c2j102UBWn-eXMzCrC0bh_iHM1YskDQsY27r4Bf6QB8ISsPPQ_Aco4nXwTNnNOVIJk&usqp=CAU',
    title: 'Mechanik',
    width: '30%',
    src: '/mechanik'
  },
  {
    url: 'https://img.redro.pl/obrazy/praca-mechanik-samochodowy-400-31477.jpg',
    title: 'Other',
    width: '30%',
    src: '/other'
  }
];

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
    justifyContent: 'center'
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15
      },
      '& $imageMarked': {
        opacity: 0
      },
      '& $imageTitle': {
        border: '4px solid currentColor'
      }
    }
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%'
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity')
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
      theme.spacing(1) + 6
    }px`
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity')
  }
}));

export default function ButtonBases() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {images.map(image => (
        <ButtonBase
          component={Link}
          to={image.src}
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>
  );
}
