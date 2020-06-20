import {
  FaSearch,
  FaRegBell,
  FaChevronDown,
  FaBuilding,
  FaCheckCircle,
} from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-white h-32 pl-32 pr-32 shadow-sm border-b">
      <div className="flex justify-between  h-12 border-b">
        <div className="flex items-center ">
          <FaSearch className="fill-current text-gray-500" />
          <input
            type="text"
            placeholder="Search transactions"
            className="placeholder-gray-600 ml-3 h-full text-sm"
          />
        </div>
        <div className="flex items-center">
          <FaRegBell className="fill-current text-gray-600" />
          <div className="w-6 h-6 rounded-full overflow-hidden ml-6">
            <img
              src="/assets/images/avatar.jpg"
              alt="girl avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-baseline ml-2 text-gray-900 text-sm font-semibold">
            Emilia Birch
            <FaChevronDown className="fill-current text-gray-500 h-3 w-3 ml-1" />
          </div>
        </div>
      </div>
      <div className="h-20 flex items-center justify-between">
        <div className="flex">
          <div className="h-12 w-12 rounded-full overflow-hidden mr-5">
            <img
              src="/assets/images/avatar.jpg"
              alt="girl avatar"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-bold text-xl">Good morning, Emilia Birch</h2>
            <div className="flex mt-1">
              <div className="flex items-center text-gray-700 text-sm font-medium">
                <FaBuilding className="fill-current text-gray-500 w-4 h-4 mr-3" />
                Duke Street Styudio
              </div>
              <div className="flex items-center ml-5 text-gray-600 text-sm font-medium">
                <FaCheckCircle className="fill-current text-green-500 w-4 h-4 mr-3" />
                Verified
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <button className="rounded border shadow-xs pt-2 pb-2 w-28 font-semibold text-sm">
            Add money
          </button>
          <button className="rounded w-28 ml-3 bg-teal-700 text-teal-100 font-semibold text-sm">
            Send money
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
