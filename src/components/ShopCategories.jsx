const categories = [
    {id: 1, image: "/images/card/card-1.jpg"},
    {id: 2, image: "/images/hero-woman.jpg"},
    {id: 3, image: "/images/card/card-3.jpg"},
    {id: 4, image: "/images/card/card-4.jpg"},
    {id: 5, image: "/images/card/card-5.jpg"}
];

export default function ShopCategories() {
    return (
        <section aria-label="Ürün Kategorileri" className="bg-[#FAFAFA] px-6 pb-12">
            <div className="mx-auto flex max-w-[1050px] flex-col items-center gap-4 lg:flex-row lg:items-stretch">
               {categories.map((category) => (
                <div
                    key={category.id}
                    className="relative h-[300px] w-full max-w-[330px] overflow-hidden lg:h-[223px] lg:min-w-0 lg:max-w-none lg:flex-1"
                >
                    <img
                        src={category.image}
                        alt={`Giyim Koleksiyonu ${category.id}`}
                        className="h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-white">
                        <h2 className="text-base font-bold">
                            CLOTHS
                        </h2>

                        <p className="text-sm">
                            5 Items
                        </p>
                    </div>
                </div>
               ))}
            </div>
        </section>
    )
}