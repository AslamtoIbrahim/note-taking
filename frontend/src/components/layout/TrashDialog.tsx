import { useState } from "react";
import { InView } from "react-intersection-observer";
import { useTrashNote } from "../../hooks/use-query-note";
import Loader from "../ui/Loader";
import SearchInput from "../ui/SearchInput";
import TrashItem from "../ui/TrashItem";
import { CgClose } from "react-icons/cg";

type TrashDialogProp = {
  onClick?: () => void;
};
const TrashDialog = ({onClick}: TrashDialogProp) => {
  const [search, setSearch] = useState("");
  const { data, error, status, hasNextPage, fetchNextPage } =
    useTrashNote(search);

  const onChangeSearchHandler = (value: string) => {
    setSearch(value);
  };

  const onFetchNoteHandler = (inView: boolean) => {
    if (inView) {
      fetchNextPage();
    }
  };

  if (status === "error") {
    return (
      <div className="my-auto flex h-full items-center justify-center ">
        <p className="text-red-500">{error.message}</p>
      </div>
    );
  }

  return (
    <div className="lg:h-full lg:w-full ">
      <div className="py-2 px-4 flex justify-end">
        <CgClose className="border rounded-full text-black cursor-pointer dark:text-white/65 hover:text-red-500 dark:hover:text-red-400" onClick={onClick}/>
      </div>
      <div className="marx h-96 lg:h-full space-y-2 rounded-sm bg-white dark:bg-text-dark px-8 py-8 lg:pt-0">
        <h2 className="dark:text-white/65">Notes in Trash are deleted after 30 days</h2>
        <SearchInput
          className="text-sm"
          search={search}
          onChangeSearch={onChangeSearchHandler}
        />
        <div>
          {status === "pending" && (
            <div className="my-auto flex h-full items-center justify-center">
              <Loader />
            </div>
          )}
          <div className="h-56 lg:h-92 py-2 space-y-2 overflow-auto">
            {data &&
              data.pages.map((p) =>
                p.notes.map((n) => <TrashItem searchForCaching={search} key={n._id} note={n} />),
              )}
            {hasNextPage && (
              <InView className="py-4" onChange={onFetchNoteHandler}>
                <Loader className="mx-auto" />
              </InView>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrashDialog;
