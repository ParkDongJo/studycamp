interface User {
  id: number;
  name: string;
  profileImage: string;
  nickname: string;
  email: string;
  role: 'leader' | 'member';
  studiesAsMember: string[];
}

export interface Manager extends User {}

export interface Leader extends User {
  careers: string[];
  studiesAsLeader: string[];
  grade: 'junior' | 'middle' | 'senior';
  annual: number;
}

export interface Member extends User {}
