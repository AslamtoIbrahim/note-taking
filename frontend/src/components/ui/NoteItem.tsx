const tags = ["Dev", "React"];

type NoteItemProp = {
  onclick?: () => void;
};

const NoteItem = ({ onclick }: NoteItemProp) => {
  return (
    <div
      onClick={onclick}
      className="hover:bg-primary/10 cursor-pointer space-y-3 p-4 hover:rounded"
    >
      <h1 className="text-lg font-black capitalize">
        react performance optimization
      </h1>
      <div className="flex items-center gap-4">
        {tags.map((t, i) => {
          return (
            <p className="bg-secondary/20 rounded px-2" key={i}>
              {t}
            </p>
          );
        })}
      </div>
      <p className="text-secondary">29 Oct 2024</p>
    </div>
  );
};

export default NoteItem;
