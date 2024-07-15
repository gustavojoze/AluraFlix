import styles from "./Modal.module.css";
import InputText from "components/InputText";
import SelectCategory from "components/SelectCategory";
import Button from "components/Button";
import { useEffect, useContext, useState } from "react";
import { VideosContext } from "context";

function Modal({ formModal, setFormModal }) {
  const { actualVideo, findVideos } = useContext(VideosContext);
  const [updatedVideo, setUpdatedVideo] = useState(null);
  const [formErrors, setFormErrors] = useState({
    title: false,
    image: false,
    url: false,
    category: false,
    description: false,
  });

  useEffect(() => {
    setUpdatedVideo({ ...actualVideo });
  }, [actualVideo]);

  const registerVideo = async (video) => {
    const options = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(video),
    };

    try {
      const response = await fetch(
        `https://669179aa26c2a69f6e8fdad7.mockapi.io/videos/${video.id}`,
        options
      );
      if (!response.ok) {
        throw new Error("Erro ao atualizar vídeo");
      }
      const updatedVideo = await response.json();
      console.log("Vídeo atualizado:", updatedVideo);
      findVideos();
      setFormModal(false);
    } catch (error) {
      console.error(error);
    }
  };

  const observeChange = (event) => {
    const { name, value } = event.target;
    setUpdatedVideo((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    if (form.checkValidity()) {
      await registerVideo(updatedVideo);
    } else {
      form.reportValidity();
    }
  };

  const handleClearForm = () => {
    setUpdatedVideo({
      title: "",
      image: "",
      url: "",
      category: "",
      colors: "",
      description: "",
    });
  };

  useEffect(() => {
    if (updatedVideo?.category) {
      switch (updatedVideo?.category) {
        case "frontend":
          setUpdatedVideo((state) => ({ ...state, colors: "#6BD1FF" }));
          break;
        case "backend":
          setUpdatedVideo((state) => ({ ...state, colors: "#00C86F" }));
          break;
        case "mobile":
          setUpdatedVideo((state) => ({ ...state, colors: "#FFBA05" }));
          break;
        default:
          return setUpdatedVideo();
      }
    }
  }, [updatedVideo?.category]);

  return formModal ? (
    <div className={styles.containerDialog}>
      <dialog className={styles.dialog} open={!!formModal}>
        <form onSubmit={handleFormSubmit} className={styles.formContainer}>
          <img
            src="/images/closeModel.png"
            alt="Close Modal"
            className={styles.imgClose}
            onClick={() => setFormModal(false)}
          />
          <h1>EDITAR CARD:</h1>
          <div className={styles.containerInputs}>
            <InputText
              placeholder="Título do vídeo"
              campName="Título"
              style={styles.input}
              value={updatedVideo?.title || ""}
              fieldName="title"
              storeValue={observeChange}
              error={formErrors.title}
              required
            />
            <InputText
              placeholder="Link da imagem"
              campName="Imagem"
              style={styles.input}
              value={updatedVideo?.image || ""}
              fieldName="image"
              storeValue={observeChange}
              error={formErrors.image}
              required
            />
            <InputText
              placeholder="Link do vídeo"
              campName="Vídeo"
              style={styles.input}
              value={updatedVideo?.url || ""}
              fieldName="url"
              storeValue={observeChange}
              error={formErrors.url}
              required
            />
            <SelectCategory
              style={styles.select}
              category={updatedVideo?.category || ""}
              fieldName="category"
              storeValue={observeChange}
              error={formErrors.category}
              required
            />

            <InputText
              placeholder="Descrição do vídeo"
              campName="Descrição"
              style={styles.inputDesc}
              value={updatedVideo?.description || ""}
              fieldName="description"
              storeValue={observeChange}
              error={formErrors.description}
              required
            />
          </div>
          <div className={styles.buttons}>
            <Button type="submit">Alterar</Button>
            <Button type="button" onClick={handleClearForm}>
              Limpar
            </Button>
          </div>
        </form>
      </dialog>
    </div>
  ) : null;
}

export default Modal;

