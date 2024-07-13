import Category from "components/Category";
import Banner from "components/Banner";
import Header from "components/Header";
import Footer from "components/Footer";
import { useContext, useState } from "react";
import Modal from "components/Modal";
import { VideosContext } from "context";

function PageHome() {
  const [formModal, setFormModal] = useState(null)

  
  

  return (  
      <div className="PageHome">
       <Header/>
       <Banner/>
       <Category mudandoFormModal={modal=>setFormModal(modal)}/>
       <Footer/>
       <Modal formModal={formModal} setFormModal={setFormModal}/>
      </div>
    );
  }
  
  export default PageHome;
  