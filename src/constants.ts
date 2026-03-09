import { Project, Skill, ContactInfo } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Dự án Desktop quản lý cửa hàng sách',
    description: 'Ứng dụng quản lý cửa hàng sách với các tính năng nhập xuất, quản lý kho và doanh thu.',
    tags: ['Java', 'Swing', 'JDBC'],
    image: 'https://picsum.photos/seed/bookstore/800/600',
    link: '#'
  },
  {
    id: '2',
    title: 'Web bán hàng',
    description: 'Trang web bán hàng trực tuyến với giao diện thân thiện, hỗ trợ xem sản phẩm và giỏ hàng.',
    tags: ['HTML', 'CSS', 'JS'],
    image: 'https://picsum.photos/seed/shop/800/600',
    link: '#'
  },
  {
    id: '3',
    title: 'Web school bus',
    description: 'Hệ thống quản lý xe buýt cho trường học, giúp theo dõi lộ trình và quản lý học sinh.',
    tags: ['HTML', 'CSS', 'JS', 'Next.js'],
    image: 'https://picsum.photos/seed/bus/800/600',
    link: '#'
  }
];

export const SKILLS: Skill[] = [
  { name: 'HTML', level: 95, category: 'Frontend' },
  { name: 'CSS', level: 90, category: 'Frontend' },
  { name: 'JavaScript', level: 85, category: 'Frontend' },
  { name: 'Java', level: 80, category: 'Backend' },
  { name: 'PHP', level: 75, category: 'Backend' },
  { name: 'Node.js (JS)', level: 80, category: 'Backend' },
  { name: 'MySQL', level: 85, category: 'Other' },
  { name: 'SQL Server', level: 80, category: 'Other' },
  { name: 'Xampp', level: 90, category: 'Tools' }
];

export const CONTACT: ContactInfo = {
  email: 'thanhtu104050@gmail.com',
  phone: '0378857105',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  location: 'Đại học Sài Gòn, TP.HCM'
};
