interface Props {
  title: string;
  theme: string;
}
export default function Badge({ title, theme }: Props) {
  return (
    <span className={`inline-block py-2 px-3 ${theme ? theme : 'bg-gray-200 text-gray-800'} text-[12px] rounded-[4px]`}>
      {title}
    </span>
  );
}
