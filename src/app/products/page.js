"use client"

import AnimatedButton from '@/components/Button/Button';
import CarouselBanner from '@/components/CrouselDynamicBanner/CarouselBanner';
import NewsletterEmailSection2 from '@/components/NewsLetterEmailSection/NewsLetterEmailSection2';
import ProductGrid from '@/components/ProductGridView/ProductGridView';
import ProductList from '@/components/ProductList/ProductList';
import { products } from '@/components/ProductsCard/ProductsData';
import React, { useState } from 'react';


const Products = () => {

  const handleCategoryChange = (category) => {
    console.log('Selected category:', category);
  };

  return (

    

    <div>
      <CarouselBanner
        title="Products"
        backgroundImage="/ThemePictures/shopcarousel.png"
        onCategoryChange={handleCategoryChange}
        showCategory={true} 
      />

      

      <div className='px-3 py-10'>
        <ProductGrid products={products} paginationType="pagination" />
      </div>

      <div className='py-20'>
        <NewsletterEmailSection2 />
      </div>

    </div>



  );
};

export default Products;