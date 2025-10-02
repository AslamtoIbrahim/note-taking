import { use } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Settings from "../components/layout/Settings";
import SearchInput from "../components/ui/SearchInput";
import SideNav from "../navigation/SideNav";
import LayoutContext from "../store/layout-context";
import NoteContentPage from "./NoteContentPage";

const DesktopPage = () => {
  const { search, setSearch,} = use(LayoutContext);
  const navigate = useNavigate()
  const onChangeSearch = (value: string): void => {
    setSearch(value);
    navigate('search/')
  };

  

  return (
    <div className="divide-secondary/50 hidden h-screen grid-cols-5 divide-x lg:grid">
      {/* Side Nav Root */}
      <section className="col-span-1">
        <SideNav />
      </section>
      <section className="divide-secondary/50 col-span-4 grid grid-rows-10 divide-y">
        <div className="row-span-1 flex items-center justify-between px-8">
          <p className="text-2xl font-bold">All Notes</p>
          <div className="flex items-center gap-x-4">
            <SearchInput search={search} onChangeSearch={onChangeSearch} />
            <Settings />
          </div>
        </div>
        <div className="divide-secondary/50 row-span-9 grid grid-cols-4 divide-x">
          {/* Side Nav Outlet */}
          <section className="col-span-1">
            {/* <AllNotes /> */}
            <Outlet />
          </section>
          <NoteContentPage />
        </div>
      </section>
    </div>
  );
};

export default DesktopPage;



// {/* <section className="col-span-3 grid grid-cols-3">
//           {/* 🟢 Outlet Notes */}
//             <div
//               className={`col-span-2 grid grid-rows-9 ${isVisible ? "visible" : "visible"}`}
//             >
//               <div className="row-span-8 p-4">
//                 {/* NoteContentPage code here */}
//                 <NoteContentPage />
//                 <hr className="text-secondary/50" />
//               </div>
//               <div className="row-span-1 p-2">
//                 <div className="flex gap-x-4 px-4">
//                   <SaveNoteButton onclick={onSaveNoteHandler} />
//                   <CancelButton onclick={onCancelHandler} />
//                 </div>
//               </div>
//             </div>
//             <div
//               className={`col-span-1 space-y-4  p-4 ${isVisible ? "visible" : "visible"} `}
//             >
//               <ArchiveButton onclick={onArchiveHandler} />
//               <DeleteButton onclick={onDeleteHandler} />
//             </div>
//           </section> */}