import ProductsListing from "./components/product/ProductsListing";
import Header from "./components/common/header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <ProductsListing />
      </main>
    </>
  );
}
