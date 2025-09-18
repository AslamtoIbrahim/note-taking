import { CgChevronRight } from 'react-icons/cg';
import { GoArchive } from 'react-icons/go';

const DeskArchivedNotesNav = () => {
    return (
        <button className="hover:bg-primary/10 text-text-dark flex w-full cursor-pointer items-center justify-between px-4 py-2 hover:rounded">
          <div className="flex items-center gap-x-2">
            <GoArchive />
            <p className="capitalize">archived notes</p>
          </div>
          <CgChevronRight className="size-5" />
        </button>
      );
}

export default DeskArchivedNotesNav
