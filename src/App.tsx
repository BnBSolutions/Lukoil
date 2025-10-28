import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PetrolStations from "./pages/PetrolStations";
import Fleet from "./pages/Fleet";
import Lubricants from "./pages/Lubricants";
import ProductsServices from "./pages/ProductsServices";
import ClubLukoil from "./pages/ClubLukoil";
import ForBusiness from "./pages/ForBusiness";
import Responsibility from "./pages/Responsibility";
import CompanyAbout from "./pages/CompanyAbout";
import CompanyContacts from "./pages/CompanyContacts";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/petrol-stations" element={<PetrolStations />} />
          <Route path="/fleet" element={<Fleet />} />
          <Route path="/lubricants" element={<Lubricants />} />
          <Route path="/products-services" element={<ProductsServices />} />
          <Route path="/club-lukoil" element={<ClubLukoil />} />
          <Route path="/for-business" element={<ForBusiness />} />
          <Route path="/responsibility" element={<Responsibility />} />
          <Route path="/company/about" element={<CompanyAbout />} />
          <Route path="/company/contacts" element={<CompanyContacts />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
