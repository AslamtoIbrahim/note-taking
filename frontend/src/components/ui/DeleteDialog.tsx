type DeleteDialogProp = {
  onDeleteClick?: () => void;
  onCancelClick?: () => void;
};
const DeleteDialog = ({ onDeleteClick, onCancelClick }: DeleteDialogProp) => {
  const onClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };
  return (
    <div
      onClick={onClickHandler}
      className="dark:bg-text-dark dark:border-secondary absolute top-1/2 right-1/2 z-10 translate-x-1/2 -translate-y-24 cursor-default space-y-8 rounded bg-white p-4 px-4 shadow-lg dark:border dark:text-white/65"
    >
      <section className="space-y-2">
        <h3>Delete Note</h3>
        <p className="text-sm">Are you sure you want to delete this note?</p>
      </section>
      <section className="flex items-center gap-x-16 px-4 md:justify-between md:px-8">
        <button
          onClick={onCancelClick}
          className="bg-secondary/30 hover:bg-secondary/50 delete-button"
        >
          Cancel
        </button>

        <button
          onClick={onDeleteClick}
          className="delete-button bg-primary hover:bg-primary/80"
        >
          Delete
        </button>
      </section>
    </div>
  );
};

export default DeleteDialog;
