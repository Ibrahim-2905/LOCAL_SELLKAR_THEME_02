import NewsletterEmailSection2 from "@/components/NewsLetterEmailSection/NewsLetterEmailSection2";
import ProductCarousel from "@/components/ProductCardCarousel/ProductCarousel";
import { products } from "@/components/ProductsCard/ProductsData";
import ShoppingCartTable from "@/components/ShoppingCart/ShoppingCartTable";


export default function ShoppingCart(){
    return(
        <div className="min-h-screen px-4">
            
            <div>
                <ShoppingCartTable />
                <div className="my-20"> 
                     <ProductCarousel products={products.slice(0, 12)} title="You May Also Like" />
                </div>


                <div>
                    <NewsletterEmailSection2 />
                </div>
               
                
            </div>
        </div>
    )
}