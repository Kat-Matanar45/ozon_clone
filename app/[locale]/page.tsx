import Image from "next/image";

import Header from "@/components/layout/header/Header";
import TopMenu from "@/components/layout/top-menu/TopMenu";
import Slider from "@/components/pages/home/slider/Slider";
import { getAllProducts } from "@/lib/actions/admin";
import { ProductItem } from "@/components/elements/product-item/ProductItem";

export default async function Home() {

  const products = await getAllProducts()

  return (
    <div className="container mx-auto">
      <Header />
      <TopMenu />
      <Image
        src="/banner.png"
        alt="Banner"
        width={1407}
        height={94}
        className="mx-auto mt-6"
      />
      <Slider />

      <div className="grid grid-cols-5 gap-5 mt-10 mb-20">
          {products.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
            />
          ))}
      </div>
    </div>
  );
}
