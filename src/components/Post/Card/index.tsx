import Header from './Header';
import Contents from './Contents';
import Footer from './Footer';

export interface Props {
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
  const { title, candidatesCount, viewsCount, techTags, deadlineDate, user } = props;
  return (
    <div className="max-w-sm overflow-hidden text-white bg-gray-800 rounded-lg shadow-lg">
      <Header tags={techTags} deadlineDate={deadlineDate} />
      <Contents title={title} fields={techTags} />
      <Footer
        user={user}
        count={{
          views: viewsCount,
          candidates: candidatesCount,
          recruits: 0,
        }}
      />
    </div>
  );
}
