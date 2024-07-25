import React, { useState } from "react";
import Table from "./Table";
import EditModal from "./EditModal";
import AddRowModal from "./AddRowModal";

const initialData = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
];

function App() {
  const [data, setData] = useState(initialData);
  const [modalInfo, setModalInfo] = useState({
    visible: false,
    row: null,
    field: "",
  });
  const [addRowModalVisible, setAddRowModalVisible] = useState(false);

  const handleCellEdit = (row, field) => {
    setModalInfo({ visible: true, row, field });
  };

  const handleSaveEdit = (newValue) => {
    const updatedData = data.map((d) =>
      d.id === modalInfo.row.id ? { ...d, [modalInfo.field]: newValue } : d
    );
    setData(updatedData);
    setModalInfo({ visible: false, row: null, field: "" });
  };

  const closeModal = () => {
    setModalInfo({ visible: false, row: null, field: "" });
  };

  const handleAddRow = () => {
    setAddRowModalVisible(true);
  };

  const handleSaveNewRow = (newRow) => {
    const newRowWithId = { ...newRow, id: data.length + 1 };
    setData([...data, newRowWithId]);
    setAddRowModalVisible(false);
  };

  const closeAddRowModal = () => {
    setAddRowModalVisible(false);
  };

  const handleDeleteRow = (rowId) => {
    setData(data.filter((d) => d.id !== rowId));
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4">
      <button
        className="mb-4 bg-green-500 text-white py-2 px-4 rounded"
        onClick={handleAddRow}
      >
        Add Row
      </button>
      <Table
        data={data}
        onCellEdit={handleCellEdit}
        onDeleteRow={handleDeleteRow}
      />
      {modalInfo.visible && (
        <EditModal
          value={modalInfo.row[modalInfo.field]}
          onSave={handleSaveEdit}
          onClose={closeModal}
        />
      )}
      {addRowModalVisible && (
        <AddRowModal onSave={handleSaveNewRow} onClose={closeAddRowModal} />
      )}
    </div>
  );
}

export default App;
