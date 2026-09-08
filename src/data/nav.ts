export interface NavItem {
  label: string;
  hash: string;
}

export const navItems: NavItem[] = [
  { label: '소개', hash: '#intro' },
  { label: '경력', hash: '#career' },
  { label: '프로젝트', hash: '#projects' },
  { label: '기술', hash: '#skills' },
  { label: '교육 · 활동', hash: '#education' },
  { label: '연락', hash: '#contact' },
];
