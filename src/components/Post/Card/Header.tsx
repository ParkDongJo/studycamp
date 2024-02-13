import moment from 'moment';
import Badge from '@/components/Badge';

interface Props {
  tags: string[];
  deadlineDate: Date;
}
export default function Header({ tags, deadlineDate }: Props) {
  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {tags?.map(tag => (
            <Badge key={tag} title={tag} theme="bg-blue-500 text-white" />
          ))}
        </div>
      </div>
      <p className="pt-2 text-red-400">리더가 배정된 스터디입니다.</p>
      <p className="pt-2 text-gray-400">마감일 : {moment(deadlineDate).format('YYYY.MM.DD').toString()}</p>
    </div>
  );
}
