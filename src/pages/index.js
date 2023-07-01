
import HeadMeta from '@/components/HeadMeta'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import CategoryPage from '@/components/CategoryPage'
import axiosClient from '@/libraries/axiosClient';
import ProductList from '@/components/ProductList';
import FlashSale from '@/components/FlashSale';
import HotSale from '@/components/HotSale';
import Main from '@/components/Layout/Main';



function HomePage({ categories, products, flashsale, hotsale }) {

  return (
    <>
     <HeadMeta
        title="NextJS"
      />
      <Header />

      <Main/>
     <CategoryPage categories = {categories} />
     <FlashSale flashsale = {flashsale}/>
     <HotSale hotsale = {hotsale}/>
     <ProductList products={products} />
     
      <Footer />
    </>
  );
}

export default HomePage;

// getServerSideProps - Server-Side Rendering
export async function getServerSideProps() {
  try {
    const response = await axiosClient.get('/categories');
    const response2 = await axiosClient.get('/products');
    const response3 = await axiosClient.get('/questions/2a');
    const response4 = await axiosClient.get('/questions/29');
  
    return {
      props: {
        categories: response.data.payload,
        products: response2.data.payload,
        flashsale: response3.data.payload,
        hotsale: response4.data.payload,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
