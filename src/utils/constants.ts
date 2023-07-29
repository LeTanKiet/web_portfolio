import config from '../configs';
import { Product } from '../models/product';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import addressIcon from '../assets/logo-address.svg';
import cameraIcon from '../assets/logo-camerasvg.svg';
import product1 from '../assets/products/1.jpg';
import product2 from '../assets/products/2.jpg';
import product3 from '../assets/products/3.jpg';
import product4 from '../assets/products/4.jpg';
import slide_img_1 from '../assets/carousel_img/1.jpg';
import slide_img_2 from '../assets/carousel_img/2.jpg';
import slide_img_3 from '../assets/carousel_img/3.jpg';
import slide_img_4 from '../assets/carousel_img/4.jpg';
import slide_img_5 from '../assets/carousel_img/5.jpg';
import slide_img_6 from '../assets/carousel_img/6.jpg';

export const PHONE_NUMBER = '0938284212';
export const ADDRESS = 'Ho Chi Minh City';
export const EMAIL = 'shop@gmail.com';
export const QR_CODE =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/640px-QR_code_for_mobile_English_Wikipedia.svg.png';

export const NAVIGATION_TABS = [
  {
    name: 'Home',
    path: config.routes.home,
  },
  {
    name: 'About us',
    path: config.routes.about_us,
  },
  {
    name: 'Portfolio',
    path: config.routes.portfolio,
  },
];

export const ICON_LIST = [
  {
    name: 'Instagram',
    href: '/',
    icon: faInstagram,
  },
  {
    name: 'Mail',
    href: `${config.routes.about_us}#contact`,
    icon: faEnvelope,
  },
];

export const CONTACT_LIST = [
  {
    label: 'Address',
    description: '78 Nguyễn Văn Cừ, Quận 5, Ho Chi Minh City',
    icon: addressIcon,
  },
  {
    label: 'Time Work',
    description: 'Thời gian làm việc: 8:00 - 21:00| T2 - CN',
    icon: cameraIcon,
  },
];

export const HERO_SECTIONS = [
  'https://images.unsplash.com/photo-1614104490393-c53a4157e9f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1614104490393-c53a4157e9f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1614104490393-c53a4157e9f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1614104490393-c53a4157e9f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1614104490393-c53a4157e9f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1614104490393-c53a4157e9f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
];

export const PRODUCT_LIST: Product[] = [
  {
    id: 1,
    name: 'Product 1',
    description: `Description 1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, illo nostrum dignissimos inventore
    maiores necessitatibus numquam mollitia enim dolorem repellendus molestias voluptas laborum amet
    perspiciatis quae quasi totam consectetur? Ea?`,
    thumbnail: product1,
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Description 2',
    thumbnail: product2,
  },
  {
    id: 3,
    name: 'Product 3',
    description: `Description 3 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, illo nostrum dignissimos inventore
    maiores necessitatibus numquam mollitia enim dolorem repellendus molestias voluptas laborum amet
    perspiciatis quae quasi totam consectetur? Ea?`,
    thumbnail: product3,
  },
  {
    id: 4,
    name: 'Product 4',
    description: 'Description 4',
    thumbnail: product4,
  },
  {
    id: 5,
    name: 'Product 5',
    description: `Description 1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, illo nostrum dignissimos inventore
    maiores necessitatibus numquam mollitia enim dolorem repellendus molestias voluptas laborum amet
    perspiciatis quae quasi totam consectetur? Ea?`,
    thumbnail: product1,
  },
  {
    id: 6,
    name: 'Product 6',
    description: 'Description 2',
    thumbnail: product2,
  },
  {
    id: 7,
    name: 'Product 7',
    description: `Description 3 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, illo nostrum dignissimos inventore
    maiores necessitatibus numquam mollitia enim dolorem repellendus molestias voluptas laborum amet
    perspiciatis quae quasi totam consectetur? Ea?`,
    thumbnail: product3,
  },
  {
    id: 8,
    name: 'Product 8',
    description: 'Description 4',
    thumbnail: product4,
  },
];

export const CAROUSEL_IMAGES = [
  slide_img_1,
  slide_img_2,
  slide_img_3,
  slide_img_4,
  slide_img_5,
  slide_img_6,
  slide_img_1,
  slide_img_2,
  slide_img_3,
  slide_img_4,
  slide_img_5,
  slide_img_6,
];

export const LANGUAGE_LIST = [
  {
    label: 'English',
    code: 'en',
  },
  {
    label: 'Tiếng Việt',
    code: 'vi',
  },
];

export const PORTFOLIO_IMAGES = Array(50).fill(
  'https://images.unsplash.com/photo-1614104490393-c53a4157e9f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
);

export const NUMBER_OF_IMAGES_IN_GALLERY = 12;
