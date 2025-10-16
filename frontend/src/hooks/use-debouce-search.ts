import { useEffect, useState } from "react";

const useSearchDebounce = (search: string, delay = 500) => {
  const [value, setValue] = useState(search);
  useEffect(() => {
    const id = setTimeout(() => {
        setValue(search)
    }, delay);
    return () => clearTimeout(id);
  }, [search, delay]);

  return value;
};

export default useSearchDebounce;
