
import PageHome from "pages/PageHome";
import PageForm from "pages/PageForm";
import PageVideo from "pages/PageVideo";
import { BrowserRouter,Route, Routes } from "react-router-dom";


function AppRoutes() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageHome/>}/>
          <Route path="form" element={<PageForm/>} />
          <Route path="video" element={<PageVideo/>} />
        </Routes>
      </BrowserRouter>
    );
  }
  
  export default AppRoutes;
