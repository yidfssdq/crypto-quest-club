import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { GeminiChat } from "./components/GeminiChat";
import Index from "./pages/Index";
import Home from "./pages/Home";
import SafeHome from "./pages/SafeHome";
import Onboarding from "./pages/Onboarding";
import Pricing from "./pages/Pricing";
import Search from "./pages/Search";
import LessonPage from "./pages/LessonPage";
import NotFound from "./pages/NotFound";
import AuthPage from "./pages/AuthPage";
import ProfilePage from "./pages/ProfilePage";
import { LanguageProvider } from "./contexts/LanguageContext";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <GeminiChat />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route element={<Layout />}>
              <Route path="/home" element={<Home />} />
              <Route path="/safe-home" element={<SafeHome />} />
              <Route path="/search" element={<Search />} />
              <Route path="/lesson/:lessonId" element={<LessonPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Route>
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
