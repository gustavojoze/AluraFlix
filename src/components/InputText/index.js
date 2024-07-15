import styles from "./InputText.module.css"

function InputText({campName,placeholder,style, storeValue, fieldName, value}){
    return(
    <div className={styles.containerInput}>
    <p>{campName}</p>
    <input placeholder={placeholder} className={style} onChange={storeValue} name={fieldName} value={value} required/>
    </div>
    )
}

export default InputText