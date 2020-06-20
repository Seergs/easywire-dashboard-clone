import Row, { RowData } from "./Row";
import { data } from "../data";

const Recent = () => {
  return (
    <div className="pl-32 pr-32 pt-8 pb-8">
      <h4 className="font-semibold text-gray-800 text-lg tracking-wide">
        Recent activity
      </h4>
      <div className="rounded-lg shadow-sm border mt-2 overflow-hidden">
        <div className="flex bg-white border-b p-4">
          <span className="w-2/5 text-xs text-gray-600 font-medium tracking-wide">
            TRANSACTION
          </span>
          <span className="w-1/5 text-xs text-gray-600 font-medium tracking-wide">
            AMOUNT
          </span>
          <span className="w-1/5 text-xs text-gray-600 font-medium tracking-wide">
            STATUS
          </span>
          <span className="w-1/5 text-xs text-gray-600 font-medium tracking-wide">
            DATE
          </span>
        </div>
        <div>
          {data.map((rowData: RowData) => (
            <Row rowData={rowData} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recent;
