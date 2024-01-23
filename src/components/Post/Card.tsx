import moment from 'moment';
import Icon from '@/components/Icon';

export interface Props {
  type: 'study' | 'project';
  channel: 'online' | 'offline';
  title: string;
  candidatesCount: number;
  viewsCount: number;
  techTags: string[];
  deadlineDate: Date;
  user: {
    name: string;
    profileImage: string;
  };
}
export default function Card(props: Props) {
  const { type, channel, title, candidatesCount, viewsCount, techTags, deadlineDate, user } = props;
  return (
    <div>
      <div>{type}</div>
      <div>{channel}</div>
      <div>{title}</div>
      <div>{candidatesCount}</div>
      <div>{viewsCount}</div>
      <div>
        {techTags?.map(tag => {
          return <div key={tag}>{tag}</div>;
        })}
      </div>
      <Icon icon={'vite'} />
      <div>마감일 : {moment(deadlineDate).format('YYYY.MM.DD').toString()}</div>
      <div>{user.name}</div>
      <div>{user.profileImage}</div>
    </div>
  );
}
