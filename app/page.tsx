import HeroSection from "@/components/hero-section"
import CategoriesSection from "@/components/categories-section"
import FeaturedProducts from "@/components/featured-products"
import CollectionsShowcase from "@/components/collections-showcase"
import AIProductRecommendations from "@/components/ai-product-recommendations"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AIChatbot from "@/components/ai-chatbot"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <CategoriesSection />
      <FeaturedProducts />
      <AIProductRecommendations />
      <CollectionsShowcase />
      <Footer />
      <AIChatbot />
    </div>
  )
}
