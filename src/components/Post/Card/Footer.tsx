import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/Icon';

interface Props {
  user: {
    name: string;
    profileImage: string;
  };
  count: {
    views: number;
    candidates: number;
    recruits: number;
  };
}
export default function Footer({ user, count }: Props) {
  const { views, candidates, recruits } = count;
  return (
    <div className="flex items-center justify-between p-4 border-t border-gray-600">
      <div className="flex items-center">
        <Avatar>
          <AvatarImage src={user.profileImage} alt="@shadcn" />
          <AvatarFallback>{user.name}</AvatarFallback>
        </Avatar>
        <span>{user.name}</span>
      </div>
      <div className="flex items-center">
        <Icon icon={'vite'} />
        <span className="text-[12px]">{views}</span>
        <Icon icon={'vite'} />
        <span className="text-[12px]">{candidates}</span>
        <Icon icon={'vite'} />
        <span className="text-[12px]">{recruits}</span>
      </div>
    </div>
  );
}
