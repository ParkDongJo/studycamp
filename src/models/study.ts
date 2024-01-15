import { Leader, Member } from '@/models/user';

export interface Study {
  id: number;
  name: string;
  type: 'project' | 'study';
  numOfMembers: number;
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
  startDate: Date;
  createdAt: Date;
  updatedAt: Date;
}
