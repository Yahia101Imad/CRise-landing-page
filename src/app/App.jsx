import { Navigation } from "./components/Navigation";
import { CRiseHero } from "./components/CRiseHero";
import { CRiseFeatures } from "./components/CRiseFeatures";
import { HowItWorks } from "./components/HowItWorks";
import { ProductPreview } from "./components/ProductPreview";
import { Pricing } from "./components/Pricing";
import { FinalCTA } from "./components/FinalCTA";
import { CRiseFooter } from "./components/CRiseFooter";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <CRiseHero />
      <CRiseFeatures />
      <HowItWorks />
      <ProductPreview />
      <Pricing />
      <FinalCTA />
      <CRiseFooter />
    </div>
  );
}
