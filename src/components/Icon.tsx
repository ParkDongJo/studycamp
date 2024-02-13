import viteIcon from '@/assets/vite.svg';

const Icons = {
  vite: viteIcon,
};

interface Props {
  icon: keyof typeof Icons;
  color?: string;
  size?: number;
}
export default function Icon({ icon, color, size }: Props) {
  const svgIcon = Icons[icon];
  return <img src={svgIcon} alt={icon} className="w-[16px] h-[16px]" />;
}
