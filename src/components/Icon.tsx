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
  return (
    <div className="text-3xl font-bold underline">
      <img src={svgIcon} className="logo" alt={icon} />
    </div>
  );
}
