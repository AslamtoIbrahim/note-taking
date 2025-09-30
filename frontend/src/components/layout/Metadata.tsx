import { GoClock, GoTag } from "react-icons/go";

type MetadataProp = {
  tags: string[] | undefined;
  lastEdit: Date |null | undefined;
};
const Metadata = ({ tags, lastEdit }: MetadataProp) => {
  return (
    <div className="text-secondary space-y-4 py-2">
      <section className="flex items-center gap-x-8">
        <div className="flex items-center gap-x-2">
          <GoTag />
          <p>Tags</p>
        </div>
        <p>{tags?.join(", ")}</p>
      </section>
      <section className="flex items-center gap-x-8">
        <div className="flex items-center gap-x-2">
          <GoClock />
          <p>Last edited</p>
        </div>
        <p>
          {lastEdit && new Date(lastEdit).toLocaleDateString("en-UK", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </p>
      </section>
    </div>
  );
};

export default Metadata;
