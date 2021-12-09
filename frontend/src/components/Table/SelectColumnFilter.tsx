import React from "react";

const SelectColumnFilter: React.ReactNode = ({ column }: { column: any }) => {
  const options = React.useMemo(() => {
    const options = new Set();
    column.preFilteredRows.forEach((row: any) => {
      options.add(row.values[column.id]);
    });
    return [...options.values()];
  }, [column.id, column.preFilteredRows]);

  return (
    <label className="flex gap-x-2 items-baseline">
      <span className="text-gray-700">{column.render("Header")}: </span>
      <select
        className="mt-1 block w-1/7 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        name={column.id}
        id={column.id}
        value={column.filterValue}
        onChange={(e) => {
          column.setFilter(e.target.value || undefined);
        }}
      >
        <option value="">All</option>
        {options.map((option, i) => (
          <option key={i} value={option as string}>
            {option as string}
          </option>
        ))}
      </select>
    </label>
  );
};

export default SelectColumnFilter;
