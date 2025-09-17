import { GoClock, GoTag } from "react-icons/go";

const Metadata = () => {
  return (
    <div className="text-secondary space-y-4 py-2">
      <section className="flex items-center gap-x-8">
        <div className="flex items-center gap-x-2">
          <GoTag />
          <p>Tags</p>
        </div>
        <p>Dev, React</p>
      </section>
      <section className="flex items-center gap-x-8">
        <div className="flex items-center gap-x-2">
          <GoClock />
          <p>Last edited</p>
        </div>
        <p>12 Oct 2025</p>
      </section>
    </div>
  );
};

export default Metadata;
