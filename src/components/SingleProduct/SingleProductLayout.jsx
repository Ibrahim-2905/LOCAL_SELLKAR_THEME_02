import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import ProductTabs from "./ProductTabs";
import ProductShowcase from "./ProductShowcase";
import { Separator } from "@/components/ui/separator";
import ProductCarousel from "../ProductCardCarousel/ProductCarousel";
import { products } from "../ProductsCard/ProductsData";
import NewsLetterEmailSection from "../NewsLetterEmailSection/NewsLetterEmailSection";
import NewsletterEmailSection2 from "../NewsLetterEmailSection/NewsLetterEmailSection2";

export default function SingleProductLayout({ product }) {
  return (
    <section className="max-w-7xl mx-auto  py-12">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        <ProductGallery image={product.image} />
        <ProductInfo product={product} />
      </div>

      <div className="mt-16">
        <ProductTabs product={product} />
      </div>

      <div className="mt-5">
        <ProductShowcase />
      </div>

    <div className="my-15">

      <ProductCarousel products={products.slice(0, 12)} title="You May Also Like" />
    </div>

    <div>
      <NewsletterEmailSection2 />
    </div>

    </section>
  );
}