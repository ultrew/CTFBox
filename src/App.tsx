
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CVEExplorer from "./pages/CVEExplorer";
import ProfessionTools from "./pages/ProfessionTools";
import Tools from "./pages/Tools";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cve-explorer" element={<CVEExplorer />} />
          <Route path="/tools" element={<Tools />} />
          
          {/* Profession Tool Routes */}
          <Route path="/pen-testers" element={<ProfessionTools />} />
          <Route path="/red-teamers" element={<ProfessionTools />} />
          <Route path="/blue-teamers" element={<ProfessionTools />} />
          <Route path="/bug-bounty-hunters" element={<ProfessionTools />} />
          <Route path="/dfir" element={<ProfessionTools />} />
          <Route path="/crypto-privacy" element={<ProfessionTools />} />
          <Route path="/network-security" element={<ProfessionTools />} />
          <Route path="/osint" element={<ProfessionTools />} />
          <Route path="/secure-devs" element={<ProfessionTools />} />
          <Route path="/threat-intel" element={<ProfessionTools />} />
          
          {/* Catch all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
