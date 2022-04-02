import TO_DO_LIST from 'assets/images/images_projects/justdoit.jpg';
import LEARNING_CARDS from 'assets/images/images_projects/Learning_cards.jpg';
import SOCIAL_NETWORK from 'assets/images/images_projects/social_network_2.jpg';
import { ProjectsType } from 'components/Projects/ProjectItem/ProjectItem';

export const projectItems: ProjectsType[] = [
  {
    title: 'Learning Cards',
    img: { backgroundImage: `url(${LEARNING_CARDS})` },
    description:
      "You have deck with cards. Every card has question and answer. After answer, you can rate a card. You can create new card and change existing card. There is searching about card's name and about count cards. Would you want check yourself ?",
  },
  {
    title: 'To do list',
    img: { backgroundImage: `url(${TO_DO_LIST})` },
    description:
      'Application for recording your tasks. Tasks are collected in sheets. Sheets can be edited (change the name, delete and create new ones). Tasks can be sorted by importance and also edited (change the name, delete and create new ones).',
  },
  {
    title: 'Social Network',
    img: { backgroundImage: `url(${SOCIAL_NETWORK})` },
    description:
      'It is app like facebook, but a few less. You can write a message, following on your friends and change your profile page. From profile page you can set your avatar, personal data and contacts. Of course you can set likes. A login page has a captcha.',
  },
];
