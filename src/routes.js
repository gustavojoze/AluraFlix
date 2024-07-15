
import PageHome from "pages/PageHome";
import PageForm from "pages/PageForm";
import PageVideo from "pages/PageVideo";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import PageDefault from "pages/PageDefault";


function AppRoutes() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageDefault />}>
          <Route index element={<PageHome/>}/>
          <Route path="form" element={<PageForm/>} />
          <Route path="/video/:id" element={<PageVideo/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
  
  export default AppRoutes;
