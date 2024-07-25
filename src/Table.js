import React from "react";

function Table({ data, onCellEdit, onDeleteRow }) {
  return (
    <table className="min-w-full bg-white border">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b-2 border-gray-200">Name</th>
          <th className="py-2 px-4 border-b-2 border-gray-200">Email</th>
          <th className="py-2 px-4 border-b-2 border-gray-200">Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td
              className="py-2 px-4 border-b border-gray-200 cursor-pointer"
              onClick={() => onCellEdit(row, "name")}
            >
              {row.name}
            </td>
            <td
              className="py-2 px-4 border-b border-gray-200 cursor-pointer"
              onClick={() => onCellEdit(row, "email")}
            >
              {row.email}
            </td>
            <td className="py-2 px-4 border-b border-gray-200 text-center">
              <button
                className="bg-red-500 text-white py-1 px-2 rounded"
                onClick={() => onDeleteRow(row.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
