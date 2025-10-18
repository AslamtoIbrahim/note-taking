import { twMerge } from "tailwind-merge";

type PopupMenuProp = {
  className?: string;
  onShowDeleteDialogClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isArchived: boolean;
  onArchiveClick?: () => void;
  onShowTagsDialogClick?: () => void;
};
const PopupMenu = ({
  className,
  onShowDeleteDialogClick,
  onArchiveClick,
  isArchived,
  onShowTagsDialogClick,
}: PopupMenuProp) => {
  const onClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div
      onClick={onClickHandler}
      className={twMerge(className, "rounded bg-white dark:bg-text-dark dark:border dark:border-secondary py-2 shadow-lg")}
    >
      <div className=" flex flex-col">
        <button onClick={onShowDeleteDialogClick} className="popup-button">
          Delete note
        </button>
        <button onClick={onArchiveClick} className="popup-button">
          {isArchived ? "Unrachive" : "Archive"} note
        </button>
        <button onClick={onShowTagsDialogClick} className="popup-button">
          Change tags
        </button>
      </div>
    </div>
  );
};

export default PopupMenu;
