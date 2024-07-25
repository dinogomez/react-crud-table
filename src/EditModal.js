import React, { useState } from "react";

function EditModal({ value, onSave, onClose }) {
  const [inputValue, setInputValue] = useState(value);

  const handleSave = () => {
    onSave(inputValue);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold mb-4">Edit Value</h2>
        <input
          type="text"
          className="border border-gray-300 rounded p-2 w-full mb-4"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div className="flex justify-end">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded mr-2"
            onClick={handleSave}
          >
            Save
          </button>
          <button
            className="bg-gray-500 text-white py-2 px-4 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditModal;
