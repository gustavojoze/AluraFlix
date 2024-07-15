import styles from "./SelectCategory.module.css";

function SelectCategory({ category, storeValue, fieldName }) {
  return (
    <div className="listTeamsContainer">
      <p>Selecione seu time</p>
      <select
        name={fieldName}
        onChange={storeValue}
        value={category}
        id="categories"
        className={styles.selectTeams}
        required
      >
        <option value="frontend">Front End</option>
        <option value="backend">Back End</option>
        <option value="mobile">Mobile</option>
      </select>
    </div>
  );
}

export default SelectCategory;
