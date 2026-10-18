import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import ShopCategories from "../components/ShopCategories";
import ShopToolbar from "../components/ShopToolbar";
import ShopProducts from "../components/ShopProducts";
import ShopPagination from "../components/ShopPagination";
import BrandsLogos from "../components/BrandsLogos";

const products = [
  {
    id: 1,
    image: "/images/category-men.png",
    name: "Graphic Design",
    department: "English Department",
    price: 16.48,
    discountPrice: 6.48,
  },
  {
    id: 2,
    image: "/images/category-women.png",
    department: "English Department",
    price: 16.48,
    discountPrice: 6.48,
  }
];

export default function ShopPage() {
    return (
        <>
            <section className="bg-[#FAFAFA] px-6 py-8">
                <div className="mx-auto flex max-w-[1050px] flex-col gap-6">
                    <h1 className="text-2xl font-bold text-[#252B42]">
                        Shop
                    </h1>

                    <nav aria-label="Sayfa yolu">
                        <ol className="flex items-center gap-3 text-sm font-bold">
                            <li>
                                <Link to="/" className="text-[#252B42]">
                                    Home
                                </Link>
                            </li>

                            <li aria-hidden="true">
                                <ChevronRight
                                    size={16}
                                    className="text-[#BDBDBD]"
                                />
                            </li>

                            <li aria-current="page" className="text-[#737373]">
                                Shop
                            </li>
                        </ol>
                    </nav>
                </div>
            </section>

            <ShopCategories />
            <ShopToolbar total={products.length} />
            <ShopProducts products={products} />
            <ShopPagination />
            <BrandsLogos />
        </>

    )
}