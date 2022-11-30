import React from "react";
import "./styles.css";

function Form({ onCreate, onUpdate, onInputChange, mode, item = {} }) {
  const handleSubmit = e => {
    e.preventDefault();

    mode === "create" ? onCreate() : onUpdate();
  };

  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
    
        <label htmlFor="note">
          <textarea
            required
            value={item.note}
            placeholder="Take a note..."
            onChange={e => onInputChange("note", e.target.value)}
          />
        </label>
        <br  />
        <label htmlFor="title">
        <input
          type="text"
          value={item.title}
          placeholder="by"
          onChange={e => onInputChange("title", e.target.value)}
        />
      </label>
       <br />
        <button>{mode === "create" ? "Create" : "Save"}</button>
      </form>
    </div>
  );
}

export default Form;
