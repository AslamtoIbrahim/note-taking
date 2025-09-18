import TagItem from "../components/ui/TagItem";

const tags = ["cooking", "sport", "food", "studies"];
const TagsPage = () => {
  return (
    <div className="padx font-body h-full space-y-2 rounded-t-xl bg-white py-4">
      <h1 className="text-secondary">Tags</h1>
      <section className="space-y-2">
        {tags.map((t, i) => (
          <TagItem key={i} tag={t} />
        ))}
      </section>
    </div>
  );
};

export default TagsPage;
