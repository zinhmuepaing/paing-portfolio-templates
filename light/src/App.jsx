import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Layout from "./Layout";
import Home from "./pages/Home";

export default function App() {
  return (
    // The theme is light only; next-themes keeps the dark: tokens switched off.
    <ThemeProvider attribute="class" forcedTheme="light" enableSystem={false}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}
