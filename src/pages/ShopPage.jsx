import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import ShopCategories from "../components/ShopCategories";

export default function ShopPage() {
    return (
        <>
            <section className="px-6 py-12">
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
        </>

    )
}