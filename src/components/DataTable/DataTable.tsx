import React, { useState } from "react";

export interface Column<T> {
  key: keyof T;
  header: string;
}

export interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  selectable?: boolean;
  onRowSelect?: (selectedRows: T[]) => void;
}

export function DataTable<T extends { id: string | number }>({
  data,
  columns,
  loading,
  selectable,
  onRowSelect,
}: DataTableProps<T>) {
  const [selected, setSelected] = useState<Set<string | number>>(new Set());

  const toggleRow = (id: string | number) => {
    const updated = new Set(selected);
    if (updated.has(id)) {
      updated.delete(id);
    } else {
      updated.add(id);
    }
    setSelected(updated);
    onRowSelect?.(data.filter((row) => updated.has(row.id)));
  };

  if (loading) return <div className="p-4">Loading...</div>;
  if (data.length === 0) return <div className="p-4">No data available</div>;

  return (
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr>
          {selectable && <th className="border p-2"></th>}
          {columns.map((col) => (
            <th key={col.key as string} className="border p-2 text-left">
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id} className="hover:bg-gray-100">
            {selectable && (
              <td className="border p-2">
                <input
                  type="checkbox"
                  checked={selected.has(row.id)}
                  onChange={() => toggleRow(row.id)}
                />
              </td>
            )}
            {columns.map((col) => (
              <td key={col.key as string} className="border p-2">
                {String(row[col.key])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
