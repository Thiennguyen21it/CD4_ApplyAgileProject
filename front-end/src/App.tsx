import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from "./layouts/PageLayout";
import Home from "./routes/home";
import Archivement from "./routes/archivements";
import AuthForm from "./routes/auth/AuthForm";
import Blog from './routes/blog';
import Contributors from "./routes/contributors";
import ContactPage from "./routes/qacontact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PageLayout>
              <Home />
            </PageLayout>
          }
        />
        <Route
          path="/achievement"
          element={
            <PageLayout>
              <Archivement />
            </PageLayout>
          }
        />
        <Route
          path="/contributors"
          element={
            <PageLayout>
              <Contributors />
            </PageLayout>
          }
        />
        <Route path="/login" element={<AuthForm />} />
        <Route path="/blog" element={<PageLayout>
          <Blog />
        </PageLayout>} />
        <Route path="/qa-contact" element={<PageLayout>
          <ContactPage />
        </PageLayout>} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
