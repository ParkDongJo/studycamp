import { Leader, Member } from '@/models/user';

export interface Post {
  id: number;
  grade: 'free' | 'gold';
  name: string;
  type: 'project' | 'study';
  recruitsCount: number;
  membersCount: number;
  viewsCount: number;
  channel: 'online' | 'offline';
  connect: 'slack' | 'kakao' | 'discord' | 'etc';
  field: 'frontend' | 'backend' | 'android' | 'ios' | 'design' | 'etc';
  techTags: string[];
  leader: Leader;
  candidates: Member[];
  members: Member[];
  description: string;
  isPublic: boolean;
  isDeleted: boolean;
  daedlineDate: Date;
  startDate: Date;
  createdAt: Date;
  updatedAt: Date;
}
