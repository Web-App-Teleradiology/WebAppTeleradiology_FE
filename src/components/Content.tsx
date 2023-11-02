import Table from "./tables/table";
interface ContentProps {
  title: string;
}

export function Content(props: ContentProps) {
  return (
    <div className="mt-4">
      <div className="mb-5 text-2xl font-medium text-gray-700">
        {props.title}
      </div>
      <Table />
    </div>
  );
}
