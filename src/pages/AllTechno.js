import React from "react";
import TechnoItem from "../components/TechnoItem";
const AllTechno = (props) => {
  const { technos, handleDeleteTechno} = props;
  return (
    <div className="TechnoList">
      <h1>All Technos</h1>
      <div>
        {/* mode javascript pour faire afficher le tableau  et bien utiliser les acolades*/}

        {technos.map((techno) => (
          <TechnoItem
            techno={techno}
            key={techno.technoid}
            handleDeleteTechno={handleDeleteTechno}
          />
        ))}
      </div>
    </div>
  );
};

export default AllTechno;
