import styles from "./InputText.module.css"

function InputText({campName,placeholder,style}){
    return(
    <div className={styles.containerInput}>
    <p>{campName}</p>
    <input placeholder={placeholder} className={style}/>
    </div>
    )
}

export default InputText