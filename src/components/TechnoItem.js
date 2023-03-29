import React from "react";
const TechnoItem = (props) => {
  const { techno, handleDeleteTechno } = props;
  return (
    <div className="card" key={techno.technoid}>
      <h3>Name :</h3>
      <p>{techno.idname}</p>
      <h3>Techno used :</h3>
      <p>{techno.technoname}</p>
      <h3>Category :</h3>
      <p>{techno.technocategory}</p>
      <h3>Descriptions :</h3>
      <p>{techno.technodescription}</p>
      <div className="footer">
        <button
          className="btn-delete"
          onClick={() => handleDeleteTechno(techno.technoid)}
        >
          DELETE
        </button>
      </div>
    </div>
  );
};

export default TechnoItem;
