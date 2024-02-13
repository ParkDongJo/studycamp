interface Props {
  title: string;
  fields: string[];
}
export default function Contents({ title, fields }: Props) {
  return (
    <div className="p-4">
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <div className="flex flex-start">
        {fields?.map(field => (
          <span
            key={field}
            className="inline-block px-2 py-1 mr-1 text-xs font-semibold text-yellow-600 uppercase bg-black rounded-full last:mr-0"
          >
            {field}
          </span>
        ))}
      </div>
    </div>
  );
}
