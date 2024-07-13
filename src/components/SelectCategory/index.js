import styles from "./SelectCategory.module.css"

function SelectCategory(){
    return(
        <div className='listTeamsContainer'>
            <p>Selecione seu time</p>
            <select name="cars" id="cars" className={styles.selectTeams}>
            <option value="volvo">Front End</option>
            <option value="saab">Back End</option>
            <option value="audi">Mobile</option>
            </select>   
        </div>
        )
}
export default SelectCategory