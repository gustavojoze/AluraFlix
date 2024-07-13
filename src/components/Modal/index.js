
import styles from "./Modal.module.css"
import InputText from "components/InputText"
import SelectCategory from "components/SelectCategory"
import Button from "components/Button"

function Modal({ formModal, setFormModal }) {
    return (
      formModal?<div className={styles.containerDialog}>
            <dialog className={styles.dialog} open={!!formModal} onClose={false}>
                <form method="dialog" className={styles.formContainer}>
                    <img src="/images/closeModel.png" alt="the component modal" className={styles.imgClose} onClick={()=>setFormModal(false)}/>
                        <h1>EDITAR CARD:</h1>
                        <div className={styles.containerInputs}>
                            <InputText
                                placeholder="titulo do video"
                                campName="Titulo"
                                style={styles.input} />
                            <InputText
                                placeholder="link da imagem"
                                campName="Imagem"
                                style={styles.input} />
                            <InputText
                                placeholder="link do video"
                                campName="Vídeo"
                                style={styles.input} />
                            <SelectCategory 
                            style={styles.input} />
                            <InputText
                                placeholder="descrição do video"
                                campName="Descrição"
                                style={styles.inputDesc} />
                        </div>
                        <div className={styles.buttons}>
                            <Button className={styles.button}>
                                Cadastrar
                            </Button>
                            <Button>
                                Limpar
                            </Button>
                        </div>
                </form>
            </dialog>
        </div>:""
    )
}

export default Modal