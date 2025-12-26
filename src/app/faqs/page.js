import { CarouselBanner } from "@/components/CrouselDynamicBanner";
import EmailSubscription2 from "@/components/EmailSubscription/EmailSubscription2";
import NewsletterEmailSection2 from "@/components/NewsLetterEmailSection/NewsLetterEmailSection2";
import AccordionFaqs from "@/components/Shadcn/Accordian/accordion-09";
import { Separator } from "@/components/ui/separator";





export default function Faqs() {
    return (
        <div className="">

          
            <CarouselBanner
                title="Faqs"
                backgroundImage="/ThemePictures/watch2.jpeg"
                showCategory={false}
                minHeight="320px"
            />


          <div className="flex flex-col justify-center items-center  mt-10">
                <p className="text-gray-400 text-center  text-1xl tracking-[0.1em]">Ask Us Anything</p>
                <h1 className="text-4xl text-center ">Frequently Asked <br /> Questions</h1>
            </div>
            <div className=" mt-12 flex justify-center items-center">
                 <AccordionFaqs />
            </div>


            <div className="my-20"> 
                <NewsletterEmailSection2 />
            </div>
           

           <div>
            <Separator />
           </div>
        
           
           

            
        </div>
    )
}