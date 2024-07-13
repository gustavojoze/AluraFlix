import InputText from "components/InputText"
import styles from "./PageForm.module.css"
import Button from "components/Button"

import Header from "components/Header"
import SelectCategory from "components/SelectCategory"

function PageForm(){
    return(
        <>
        <Header/>
        <form className={styles.formContainer}>
            <h1>Criar novo video</h1>
            <p>preencha os campos para que consiga adicionar um novo video</p>
        <div className={styles.containerInputs}>
           <InputText  
           placeholder="titulo do video" 
           campName="Titulo"
           style={styles.input}/>
           <InputText 
           placeholder="link da imagem" 
           campName="Imagem" 
           style={styles.input}/>
           <InputText 
           placeholder="link do video" 
           campName="Vídeo" 
           style={styles.input}/>
           <SelectCategory/>
            <InputText 
           placeholder="descrição do video" 
           campName="Descrição" 
           style={styles.inputDesc}/>
        </div>
            <div className={styles.buttons}>
            <Button>
                Cadastrar
            </Button>
            <Button>
                Limpar
            </Button>
            </div>
        </form>
        </>
    )
}

export default PageForm

