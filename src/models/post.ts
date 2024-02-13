import { Leader, Member } from '@/models/user';

export interface Post {
  id: number;
  grade: 'free' | 'gold';
  title: string;
  type: 'project' | 'study';
  channel: 'online' | 'offline';
  connect: 'slack' | 'kakao' | 'discord' | 'etc';
  field: 'frontend' | 'backend' | 'android' | 'ios' | 'design' | 'etc';
  techTags: string[];
  leader: Leader;
  views: number;
  recruits: number;
  candidates: Member[];
  members: Member[];
  description: string;
  isPublic: boolean;
  isDeleted: boolean;
  deadlineDate: Date;
  startDate: Date;
  createdAt: Date;
  updatedAt: Date;
}
