
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import EngineRepair from "./pages/EngineRepair";
import Transmission from "./pages/Transmission";
import Electrical from "./pages/Electrical";
import BrakeSystem from "./pages/BrakeSystem";
import Suspension from "./pages/Suspension";
import Diagnostics from "./pages/Diagnostics";
import Parts from "./pages/Parts";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Appointment from "./pages/Appointment";
import Maintenance from "./pages/Maintenance";
import BodyRepair from "./pages/BodyRepair";
import ExpressService from "./pages/ExpressService";
import WarrantyService from "./pages/WarrantyService";
import Corporate from "./pages/Corporate";
import Prices from "./pages/Prices";
import Reviews from "./pages/Reviews";
import Blog from "./pages/Blog";
import Warranty from "./pages/Warranty";
import TireService from "./pages/TireService";
import AirConditioning from "./pages/AirConditioning";
import Exhaust from "./pages/Exhaust";
import FuelSystem from "./pages/FuelSystem";
import Cooling from "./pages/Cooling";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/engine-repair" element={<EngineRepair />} />
          <Route path="/transmission" element={<Transmission />} />
          <Route path="/electrical" element={<Electrical />} />
          <Route path="/brake-system" element={<BrakeSystem />} />
          <Route path="/suspension" element={<Suspension />} />
          <Route path="/diagnostics" element={<Diagnostics />} />
          <Route path="/parts" element={<Parts />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/body-repair" element={<BodyRepair />} />
          <Route path="/express-service" element={<ExpressService />} />
          <Route path="/warranty-service" element={<WarrantyService />} />
          <Route path="/corporate" element={<Corporate />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/warranty" element={<Warranty />} />
          <Route path="/tire-service" element={<TireService />} />
          <Route path="/air-conditioning" element={<AirConditioning />} />
          <Route path="/exhaust" element={<Exhaust />} />
          <Route path="/fuel-system" element={<FuelSystem />} />
          <Route path="/cooling" element={<Cooling />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
