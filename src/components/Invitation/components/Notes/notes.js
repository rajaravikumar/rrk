import React from "react";

const Notes = ({ items, onEdit, onDelete }) =>
  items.length ? (
    items.map(({ id, title, note }, index) => (
      <div key={id} className="card">
        {note}
        <h4 className="card__title">by {title}</h4>
       {/* <div className="card__action">
       <button onClick={() => onDelete(id)}>Delete</button>
       <button onClick={() => onEdit(index)}>Edit</button>
     </div> */} 
      </div>

    ))
  ) : (
    <p className="text-center">Note</p>
  );

export default Notes;
