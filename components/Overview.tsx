import { FaBalanceScale, FaCheckCircle, FaSync } from "react-icons/fa";

const Overview = () => {
  return (
    <div className="pl-32 pr-32 pt-8">
      <h4 className="font-semibold text-gray-800 text-lg tracking-wide">
        Overview
      </h4>
      <div className="flex mt-2">
        <div className="flex-col bg-white w-1/3 rounded-lg shadow-md py-4 px-5 mr-6">
          <div className="flex items-center">
            <FaBalanceScale className="fill-current text-gray-500 w-6 h-6 mr-5" />
            <div className="flex-col">
              <h6 className="text-gray-600 text-sm font-medium">
                Account Balance
              </h6>
              <p className="mt-2 font-medium text-lg text-gray-900">
                $30,659.45
              </p>
            </div>
          </div>
          <span className="block mt-6 text-gray-700 text-sm font-medium">
            View all
          </span>
        </div>
        <div className="flex-col bg-white w-1/3 px-2 rounded-lg shadow-md py-4 px-5 mr-6">
          <div className="flex items-center">
            <FaBalanceScale className="fill-current text-gray-500 w-6 h-6 mr-5" />
            <div className="flex-col">
              <h6 className="text-gray-600 text-sm font-medium">
                Account Balance
              </h6>
              <p className="mt-2 font-medium text-lg text-gray-900">
                $30,659.45
              </p>
            </div>
          </div>
          <span className="block mt-6 text-gray-700 text-sm font-medium">
            View all
          </span>
        </div>
        <div className="flex-col bg-white w-1/3 px-2 rounded-lg shadow-md py-4 px-5">
          <div className="flex items-center">
            <FaBalanceScale className="fill-current text-gray-500 w-6 h-6 mr-5" />
            <div className="flex-col">
              <h6 className="text-gray-600 text-sm font-medium">
                Account Balance
              </h6>
              <p className="mt-2 font-medium text-lg text-gray-900">
                $30,659.45
              </p>
            </div>
          </div>
          <span className="block mt-6 text-gray-700 text-sm font-medium">
            View all
          </span>
        </div>
      </div>
    </div>
  );
};

export default Overview;
