import ProductCard from "./ProductCard.jsx";

const products = [
    {
        id: 1,
        image: '/images/product/1.png',
        name: 'Graphic Design',
        price: 16.48,
        discountPrice: 6.48,
    },
];

export default function BestsellerProducts() {
    return (
        <section className="px-6 py-20">
            <div className="mx-auto flex max-w-[1050px] flex-col gap-12">
                <div className="flex flex-col items-center gap-3 text-center">
                    <p className="text-xl text-[#737373]">
                        Featured Products
                    </p>

                    <h2 className="text-2xl font-bold text-[#252B42]">
                        BESTSELLER PRODUCTS
                    </h2>

                    <p className="text-sm text-[#737373]">
                        Problems trying to resolve the conflict between
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-x-6 pag-y-12">
                    {products.map((product) => (
                        <div 
                            key={product.id}
                            className="w-full max-w-[325px] md:w-[calc((100%-24px)/ 2)] md:max-w-none lg:w-[calc((100%-72px)/4)]"
                        >
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}