import CODEWARS from 'assets/images/icons_contacts/codewars.png';
import GIT from 'assets/images/icons_contacts/github.png';
import LINK from 'assets/images/icons_contacts/linkedin.png';
import TELEGRAM from 'assets/images/icons_contacts/telegram.png';

type ContactsType = {
  id: number;
  img: string;
  url: string;
};

export const contactsData: ContactsType[] = [
  { id: 4, img: TELEGRAM, url: 'https://t.me/Andrew_minsk' },
  { id: 3, img: LINK, url: 'https://www.linkedin.com/in/andrew-gaityukevich-741070211/' },
  { id: 1, img: CODEWARS, url: 'https://www.codewars.com/users/Andrew%20Gaityukevich' },
  { id: 2, img: GIT, url: 'https://github.com/Metaloziz' },
];
