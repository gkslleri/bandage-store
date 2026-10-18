import ProductCard from "./ProductCard";

export default function ShopProducts({ products }) {
    return (
        <section aria-label="Mağaza ürünleri" className="px-6 py-12">
            <div className="mx-auto flex max-w-[1050px] flex-wrap justify-center gap-x-6 gap-y-12">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="w-full max-w-[348px] md:w-[calc((100%-24px)/2)] md:max-w-none lg:w-[239px]"
                    >
                        <ProductCard
                            product={product}
                            imageHeight="h-[427px] lg:h-[300px]"
                            imageFit="object-contain lg:object-cover lg:object-top"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}