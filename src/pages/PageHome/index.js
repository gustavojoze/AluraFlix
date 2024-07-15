import Category from "components/Category";
import Banner from "components/Banner";
import {useState } from "react";
import Modal from "components/Modal";


function PageHome() {
  const [formModal, setFormModal] = useState(null)

  
  

  return (  
      <div className="PageHome">
       <Banner/>
       <Category changeFormModal={modal=>setFormModal(modal)}/>
       <Modal formModal={formModal} setFormModal={setFormModal}/>
      </div>
    );
  }
  
  export default PageHome;
  