import { IconContext } from "react-icons";
import { FaSearch } from "react-icons/fa";

export default function SearchButton() {
  return (
    <button type="submit" className="bg-sky-500 rounded-[5px] ">
      <IconContext.Provider
        value={{ className: "h-[15px] w-[15px] text-white" }}
      >
        <FaSearch />
      </IconContext.Provider>
    </button>
  );
}
