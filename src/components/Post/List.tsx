import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}
export default function List({ children }: Props) {
  return <div>{children}</div>;
}
