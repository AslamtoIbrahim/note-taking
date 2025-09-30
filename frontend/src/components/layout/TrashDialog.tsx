import { useState } from "react";
import { InView } from "react-intersection-observer";
import { useTrashNote } from "../../hooks/use-query-note";
import Loader from "../ui/Loader";
import SearchInput from "../ui/SearchInput";
import TrashItem from "../ui/TrashItem";

type TrashDialogProp = {
  onClick?: () => void;
};
const TrashDialog = ({}: TrashDialogProp) => {
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
      <div className="my-auto flex h-[30rem] items-center justify-center md:h-[35rem]">
        <p className="text-red-500">{error.message}</p>
      </div>
    );
  }

  return (
    <div>
      <div className="marx h-96 space-y-2 rounded-sm bg-white px-8 py-8">
        <h2>Notes in Trash are deleted after 30 days</h2>
        <SearchInput
          className="text-sm"
          search={search}
          onChangeSearch={onChangeSearchHandler}
        />
        <div>
          {status === "pending" && (
            <div className="my-auto flex h-[10rem] items-center justify-center">
              <Loader />
            </div>
          )}
          <div className="h-56 space-y-2 overflow-auto">
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
