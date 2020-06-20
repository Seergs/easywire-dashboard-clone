import { IconType } from "react-icons/lib";

type RowProps = {
  rowData: RowData;
};
const Row = ({ rowData }: RowProps) => {
  return (
    <div className="flex bg-white border-b p-4">
      <span className="flex items-center w-2/5 text-gray-600 text-sm tracking-wide">
        <rowData.icon className="fill-current text-gray-500 mr-3 h-4 w-4" />
        {rowData.transaction}
      </span>
      <span className="w-1/5 text-gray-800 text-sm font-medium">
        {rowData.amount}
        <span className="text-gray-600 text-sm font-normal"> USD</span>
      </span>
      <div className="w-1/5">
        <span
          className={
            rowData.status === "Success"
              ? "bg-green-200 text-green-800 text-xs rounded-full px-2 font-medium"
              : rowData.status === "Processing"
              ? "bg-yellow-200 text-yellow-800 text-xs rounded-full px-2 font-medium"
              : "bg-red-100 text-red-800 text-xs rounded-full px-2 font-medium"
          }
        >
          {rowData.status}
        </span>
      </div>
      <span className="text-sm text-gray-600">{rowData.date}</span>
    </div>
  );
};

export default Row;

export interface RowData {
  icon: IconType;
  transaction: string;
  amount: string;
  status: string;
  date: string;
}
