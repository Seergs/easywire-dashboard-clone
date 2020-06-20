import {
  FaHome,
  FaRegClock,
  FaBalanceScale,
  FaRegCreditCard,
  FaUsers,
  FaRegChartBar,
} from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="w-1/6 h-screen p-4  bg-teal-800">
      <div className="font-semibold text-2xl text-teal-100 tracking-wide">
        easywire
      </div>
      <ul className="mt-4">
        <li className="flex items-center p-3 -ml-2 -mr-1 rounded hover:bg-teal-700 cursor-pointer mb-1  text-teal-100 bg-teal-900">
          <FaHome className=" fill-current text-teal-200 mr-3" />
          Home
        </li>
        <li className="flex items-center p-3 -ml-2 -mr-1 rounded hover:bg-teal-700 cursor-pointer mb-1  text-teal-200">
          <FaRegClock className=" fill-current text-teal-300 mr-3" />
          History
        </li>
        <li className="flex items-center p-3 -ml-2 -mr-1 rounded hover:bg-teal-700 cursor-pointer mb-1  text-teal-200">
          <FaBalanceScale className=" fill-current text-teal-300 mr-3" />
          Balances
        </li>
        <li className="flex items-center p-3 -ml-2 -mr-1 rounded hover:bg-teal-700 cursor-pointer mb-1  text-teal-200">
          <FaRegCreditCard className=" fill-current text-teal-300 mr-3" />
          Cards
        </li>
        <li className="flex items-center p-3 -ml-2 -mr-1 rounded hover:bg-teal-700 cursor-pointer mb-1  text-teal-200">
          <FaUsers className=" fill-current text-teal-300 mr-3" />
          Recipients
        </li>
        <li className="flex items-center p-3 -ml-2 -mr-1 rounded hover:bg-teal-700 cursor-pointer mb-1  text-teal-200">
          <FaRegChartBar className=" fill-current text-teal-300 mr-3" />
          Reports
        </li>
      </ul>
    </div>
  );
}
