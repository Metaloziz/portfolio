import avatar from 'assets/images/avatar/avatar.jpg';

export const particleParams = {
  fpsLimit: 30,
  particles: {
    width: {
      value: 1,
    },
    number: {
      value: 20,
      density: {
        enable: true,
        value_area: 1000,
      },
    },
    color: {
      value: '#5ab9ea',
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 1,
        color: '#000000',
      },
      polygon: {
        nb_sides: 1,
      },
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 1,
        sync: false,
      },
    },
    size: {
      value: 1,
      random: true,
      anim: {
        enable: false,
        speed: 0.1,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 300,
      color: '#66fcf1',
      opacity: 10,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      random: true,
      straight: true,
      bounce: true,
      attract: {
        enable: true,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
};

type BackgroundImage = {
  backgroundImage: string;
};

export const photoStyle: BackgroundImage = {
  backgroundImage: `url(${avatar})`,
};
