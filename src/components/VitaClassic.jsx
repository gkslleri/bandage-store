
const slides = [
    {
        id: 1,
        subtitle: "SUMMER 2020",
        title: "Vita Classic Product",
        description: "We know how large objects will act, but things on a small scale",
        price: 16.48,
        image: "/images/hero_men.png",
    }
    {
        id: 2,
        subtitle: "SUMMER 2020",
        title: "Discover Tour Style",
        description: "Discover your next favorite look from our summer collection.",
        price: 19.58,
        image: "/images/hero_men.png",
    }
]

export default function VitaClassic() {
    return (
        <Slider
            label="Vita Classic Product"
        >
            {slides.map((slide) => (
                <div key={slide.id}
                    className="overflow-hidden bg-[#23856D] text-white"
                >
                    <div className="mx-auto flex max-w-[1050px] flex-col items-center gap-16 pt-32 lg:min-h-[709px] lg:flex-row lg:items-end lg:gap-8 lg:pt-16">
                        <div className="flex w-full flex-col items-center gap-8 px-12 text-center lg:w-1/2 lg:items-start lg:self-center lg:px-0 lg:pb-16 lg:text-left">
                            <p>{slide.subtitle}</p>
                        </div>

                        <h2 className="max-w-sm text-4xl font-bold leading-tight lg:text-6xl">
                            {slide.title}
                        </h2>

                        <p className="max-w-xs text-xl lg:max-w-sm">
                            {slide.description}
                        </p>

                        <div className="flex flex-col items-center gap-5 lg:flex-row lg:gap-8">
                            <span className="text-2xl font-bold">
                                ${slide.price.toFixed(2)}
                            </span>

                            <button 
                                type="button"
                                className="rounded bg-[#2DC071] px-10 py-4 text-xl font-bold"
                            >
                                ADD TO CART
                            </button>
                        </div>
                    </div>
                    <div className="flex w-full justify-center lg:w-1/2">
                        <img src="/images/hero_men.png" alt="Beyaz Gömlek giyen adam"
                            className="block h-auto w-full max-w-[443px] object-contain object-bottom lg:max-h-[645px]"
                        />
                    </div>
                </div>
            ))}
        </Slider>
    );
}