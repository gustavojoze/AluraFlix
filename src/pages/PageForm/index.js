import InputText from "components/InputText";
import styles from "./PageForm.module.css";
import Button from "components/Button";
import SelectCategory from "components/SelectCategory";
import { useContext, useEffect, useState } from "react";
import { VideosContext } from "context";

function PageForm() {
  const { findVideos } = useContext(VideosContext);
  const [newVideo, setNovoVideo] = useState({
    title: '',
    image: '',
    url: '',
    category: 'frontend',
    colors: '#6BD1FF',
    description: ''
  });

  const registerVideo = async (video) => {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(video)
    };

    await fetch("https://669179aa26c2a69f6e8fdad7.mockapi.io/videos", options);
    findVideos();
  };

  const observeChange = (evento) => {
    const { name, value } = evento.target;

    setNovoVideo((state) => ({
      ...state,
      [name]: value
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    if (form.checkValidity()) {
      registerVideo(newVideo);
    } else {
      form.reportValidity();
    }
  };

  const handleClearForm = () => {
    setNovoVideo({
      title: '',
      image: '',
      url: '',
      category: 'frontend',
      colors: '#6BD1FF',
      description: ''
    });
  };

  useEffect(() => {
    console.log(newVideo);
  }, [newVideo]);

  useEffect(() => {
    if (newVideo.category) {
      switch (newVideo.category) {
        case "frontend":
          setNovoVideo(state => ({ ...state, colors: "#6BD1FF" }));
          break;
        case "backend":
          setNovoVideo(state => ({ ...state, colors: "#00C86F" }));
          break;
        case "mobile":
          setNovoVideo(state => ({ ...state, colors: "#FFBA05" }));
          break;
        default:
          return setNovoVideo();
      }
    }
  }, [newVideo.category]);

  return (
    <>
      <form
        className={styles.formContainer}
        onSubmit={handleFormSubmit}
      >
        <h1>Criar novo vídeo</h1>
        <p>Preencha os campos para adicionar um novo vídeo</p>
        <div className={styles.containerInputs}>
          <InputText
            placeholder="Título do vídeo"
            campName="Titulo"
            style={styles.input}
            fieldName={"title"}
            storeValue={observeChange}
            value={newVideo.title} 
            required
          />

          <InputText
            placeholder="Link da imagem"
            campName="Imagem"
            style={styles.input}
            fieldName={"image"}
            storeValue={observeChange}
            value={newVideo.image} 
            required
          />

          <InputText
            placeholder="Link do vídeo"
            campName="Vídeo"
            style={styles.input}
            fieldName={"url"}
            storeValue={observeChange}
            value={newVideo.url} 
            required
          />

          <SelectCategory
            fieldName={"category"}
            category={newVideo.category}
            storeValue={observeChange}
            value={newVideo.category} 
            required
          />

          <InputText
            placeholder="Descrição do vídeo"
            campName="Descrição"
            style={styles.inputDesc}
            fieldName={"description"}
            storeValue={observeChange}
            value={newVideo.description}
            required
          />
        </div>

        <div className={styles.buttons}>
          <Button type="submit">
            Cadastrar
          </Button>

          <Button
            type="button" 
            onClick={handleClearForm}
          >
            Limpar
          </Button>
        </div>
      </form>
    </>
  );
}

export default PageForm;
