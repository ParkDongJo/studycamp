interface Props {
  title: string;
}
export default function Card({ title }: Props) {
  return <div>{title}</div>;
}
