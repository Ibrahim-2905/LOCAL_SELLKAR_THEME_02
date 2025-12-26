import ContactForm3 from "@/components/Form/ContactForm3";
import NewsletterEmailSection2 from "@/components/NewsLetterEmailSection/NewsLetterEmailSection2";
import ShowLocation from "@/components/ShowLocation/ShowLocation";




export default function ContactUs() {
    return (
        <div className="">

            {/* <CarouselBanner
                title="Contact Us"
                backgroundImage="/ThemePictures/bigsofa.webp"
                showCategory={false}
                minHeight="320px"
            /> */}
        
           
           
<div className="px-4">
<ShowLocation />
</div>





<div className="px-4 py-10">
    <ContactForm3 />
</div>

<div className=" py-20 px-4">
    <NewsletterEmailSection2 />
</div>
        </div>
    )
}