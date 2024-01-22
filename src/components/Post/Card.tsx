import moment from 'moment';
import Icon from '@/components/Icon';

export interface Props {
  type: 'study' | 'project';
  channel: 'online' | 'offline';
  title: string;
  recuitsCount: number;
  likeCount: number;
  viewCount: number;
  fields: string[];
  deadlineDate: Date;
  user: {
    name: string;
    profileImage: string;
  };
}
export default function Card(props: Props) {
  const { type, channel, title, recuitsCount, likeCount, viewCount, fields, deadlineDate, user } = props;
  return (
    <div>
      <div>{type}</div>
      <div>{channel}</div>
      <div>{title}</div>
      <div>{recuitsCount}</div>
      <div>{likeCount}</div>
      <div>{viewCount}</div>
      <div>{fields}</div>
      <Icon icon={'vite'} />
      <div>마감일 : {moment(deadlineDate).format('YYYY.MM.DD').toString()}</div>
      <div>{user.name}</div>
      <div>{user.profileImage}</div>
    </div>
  );
}
