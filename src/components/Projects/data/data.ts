import LEARNING_CARDS from 'assets/images/images_projects/learning_cards.jpg';
import SOCIAL_NETWORK from 'assets/images/images_projects/social_network.jpg';
import TO_DO_LIST from 'assets/images/images_projects/to_do_list.jpg';

export type ProjectsType = {
  title: string;
  img: {
    backgroundImage: string;
  };
  description: string;
};

type ProjectItemsType = ProjectsType & { url: string };

export const projectItems: ProjectItemsType[] = [
  {
    title: 'Learning Cards',
    img: { backgroundImage: `url(${LEARNING_CARDS})` },
    description:
      "You have deck with cards. Every card has question and answer. After answer, you can rate a card. You can create new card and change existing card. There is searching about card's name and about count cards. Would you want check yourself ?",
    url: 'https://metaloziz.github.io/Learning_cards/',
  },
  {
    title: 'To do list',
    img: { backgroundImage: `url(${TO_DO_LIST})` },
    description:
      'Application for recording your tasks. Tasks are collected in sheets. Sheets can be edited (change the name, delete and create new ones). Tasks can be sorted by importance and also edited (change the name, delete and create new ones).',
    url: 'https://github.com/Metaloziz/to_do_list',
  },
  {
    title: 'Social Network',
    img: { backgroundImage: `url(${SOCIAL_NETWORK})` },
    description:
      'It is app like facebook, but a few less. You can write a message, following on your friends and change your profile page. From profile page you can set your avatar, personal data and contacts. Of course you can set likes. A login page has a captcha.',
    url: 'https://metaloziz.github.io/samurai_way_my/',
  },
];
