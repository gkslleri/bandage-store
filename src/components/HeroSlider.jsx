import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const slides = [
    {
        id: 1,
        subtitle: "SUMMER 2020",
        title: "NEW COLLECTION",
        description: "We know how large objects will act, but things on a small scale",
    },
    {
        id: 2,
        subtitle: "SUMMER STYLE",
        title: "FIND YOUR STYLE",
        description: "Discover your next favorite look from our summer collection",
    },
];

export default function HeroSlider() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true});
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        if(!emblaApi) return;

        const updateSelectedIndex = () => {
            setSelectedIndex(emblaApi.selectedScrollSnap());
        };

        updateSelectedIndex();

        emblaApi.on('select', updateSelectedIndex);
        emblaApi.on('reInit', updateSelectedIndex);

        return () => {
            emblaApi.off('select', updateSelectedIndex);
            emblaApi.off('reInit', updateSelectedIndex);
        };
    }, [emblaApi]);

    return (
        <section
            aria-label="Koleksiyon tanıtımları"
            className="relative text-white"
        >
            <div ref={emblaRef} className="overflow-hidden">
                <div className="flex touch-pan-y">
                    {slides.map((slide) => (
                        <div
                            key={slide.id}
                            className="flex min-h-[640px] min-2-0 flex-[0_0_100%] items-center bg-[url('/images/hero-woman.jpg')] bg-cover bg-[position:35_center] bg-no-repeat lg:min-h-[700px] lg:bg-center"
                        >
                            <div className="mx-auto flex w-full max-w-[1050] flex-col items-center gap-8 px-12 py-20 text-center lg:items-start lg:text-left">
                                <p className="text-base font-bold tracking-widest">
                                    {slide.subtitle}
                                </p>

                                <h2 className="text-4xl font-bold leading-tight lg:text-6xl">
                                    {slide.title}
                                </h2>

                                <p className="max-w-xs text-xl lg:max-w-sm">
                                    {slide.description}
                                </p>

                                <Link
                                    to='/shop'
                                    className='rounded bg-[#2DC071] px-10 py-4 text-xl font-bold'
                                >
                                SHOP NOW
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button
                type="button"
                aria-label="Önceki sayfa"
                onClick={() => emblaApi?.scrollPrev()}
                className="absolute left-1 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center lg:left-6"
            >
                <ChevronLeft size={40} />
            </button>

            <button
                type="button"
                aria-label="Sonraki sayfa"
                onClick={() => emblaApi?.scrollPrev()}
                className="absolute right-1 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center lg:right-6"
            >
                <ChevronRight size={40} />
            </button>

            <div
                aria-label="Slayt seçimi"
                className="absolute bottom-6 left-1/2 flex -translate-x-1/2"
            >
                {slides.map((slide, index) => (
                    <button
                        key={slide.id}
                        type="button"
                        aria-label={`${index + 1}. slayta git`}
                        aria-current={selectedIndex === index ? 'true' : undefined}
                        onClick={() => emblaApi?.scrollTo(index)}
                        className="flex h-11 w-12 items-center justify-center"
                    >
                        <span 
                            className={`h-1 w-full ${selectedIndex === index ? 'bg-white' : 'bg-white/50'}`}
                        />
                    </button>
                ))}
            </div>
        </section>
    )
}