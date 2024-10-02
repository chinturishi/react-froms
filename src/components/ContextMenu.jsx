import React from "react";

const ContextMenu = ({
  menuPosition,
  setMenPosition,
  setExpense,
  rowId,
  setExpenses,
  expense,
  editRowId,
  setEditRowId,
}) => {
  //console.log(menuPosition);
  if (!menuPosition.left) {
    return;
  }
  return (
    <div className="context-menu" style={menuPosition}>
      <div
        onClick={() => {
          //console.log("editting");
          const { title, category, amount } = expense.find(
            (item) => item.id === rowId
          );
          setExpenses({ title, category, amount });
          setMenPosition({});
          setEditRowId(rowId);
        }}
      >
        Edit
      </div>
      <div
        onClick={() => {
          //console.log("editting");
          setExpense((prev) => {
            return prev.filter((item) => item.id !== rowId);
          });
          setMenPosition({});
        }}
      >
        Delete
      </div>
    </div>
  );
};

export default ContextMenu;
