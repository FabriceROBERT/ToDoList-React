import { useState } from "react";

const AddTechno = (props) => {
  const [techno, setTechno] = useState({
    idname: "",
    technoname: "",
    technocategory: "",
    technodescription: "",
  });
  const { handleAddTechno } = props;

  function handleSubmit(evt) {
    evt.preventDefault();
    handleAddTechno(techno);
    // reset l'état dans App
    setTechno({
      idname: "",
      technoname: "",
      technocategory: "",
      technodescription: "",
    });
  }
  function handleChange(evt) {
    const { name, value } = evt.target;
    // Cloner l'objet techno avec "..." dans setTechno({...techno})
    setTechno({ ...techno, [name]: value });
  }
  return (
    <div className="techno-add">
      <h1>Add A Techno</h1>
      <form
        onSubmit={(evt) => {
          handleSubmit(evt);
        }}
      >
        <label htmlFor="technoname">Your Name : </label>
        <br />
        <input
          type="text"
          name="idname"
          id="idname"
          value={techno.idname}
          onChange={(evt) => handleChange(evt)}
        />
        <label htmlFor="technoname">Techno you use : </label>
        <input
          type="text"
          name="technoname"
          id="technoname"
          value={techno.technoname}
          onChange={(evt) => handleChange(evt)}
        />
        <br />
        <label htmlFor="technocategory">Category :</label>
        <br />
        <select
          name="technocategory"
          id="technocategory"
          value={techno.technocategory}
          onChange={(evt) => handleChange(evt)}
        >
          <option value="">Choose a category</option>
          <option value="Front">Front</option>
          <option value="Back">Back</option>
          <option value="FullStack">Full Stack</option>
          <option value="Other">Other</option>
        </select>
        <br />
        <label htmlFor="technodescription">Description :</label>
        <br />
        <textarea
          name="technodescription"
          id="technodescription"
          cols="30"
          rows="10"
          value={techno.technodescription}
          onChange={(evt) => handleChange(evt)}
        ></textarea>
        <br />
        <input type="submit" className="btn" value="ADD TECHNO" />
      </form>
    </div>
  );
};

export default AddTechno;
