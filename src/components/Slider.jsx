import { Children, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Slider({ children, label }) {
    const slides = Children.toArray(children);
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        duration: 40,
    });
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        if (!emblaApi) return;

        const updateSelectedIndex = () => {
            setSelectedIndex(emblaApi.selectedScrollSnap());
        };

        updateSelectedIndex();

        emblaApi.on("select", updateSelectedIndex);
        emblaApi.on("reInit", updateSelectedIndex);

        return () => {
            emblaApi.off("select", updateSelectedIndex);
            emblaApi.off("reInit", updateSelectedIndex);
        };
    }, [emblaApi]);

    return (
        <section aria-label={label} className="relative text-white">
            <div ref={emblaRef} className="overflow-hidden">
                <div className="flex touch-pan-y">
                    {slides.map((slide) => (
                        <div
                            key={slide.key}
                            className="min-w-0 flex-[0_0_100%]"
                        >
                            {slide}
                        </div>
                    ))}
                </div>
            </div>

            {slides.length > 1 && (
                <>
                    <button
                        type="button"
                        aria-label="Önceki slayt"
                        onClick={() => emblaApi?.scrollPrev()}
                        className="absolute left-1 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center lg:left-6"
                    >
                        <ChevronLeft size={40} />
                    </button>

                    <button
                        type="button"
                        aria-label="Sonraki slayt"
                        onClick={() => emblaApi?.scrollNext()}
                        className="absolute right-1 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center lg:right-6"
                    >
                        <ChevronRight size={40} />
                    </button>

                    <div
                        role="group"
                        aria-label="Slayt seçimi"
                        className="absolute bottom-6 left-1/2 flex -translate-x-1/2"
                    >
                        {slides.map((slide, index) => (
                            <button
                                key={slide.key}
                                type="button"
                                aria-label={`${index + 1}. slayta git`}
                                aria-current={
                                    selectedIndex === index ? "true" : undefined
                                }
                                onClick={() => emblaApi?.scrollTo(index)}
                                className="relative flex h-11 w-12 items-center justify-center overflow-hidden"
                            >
                                <span className="h-1 w-full bg-white/50" />

                                <span
                                    aria-hidden="true"
                                    className={`absolute left-0 top-1/2 h-1 w-full -translate-y-1/2 bg-white transition-transform duration-300 ease-in-out ${selectedIndex === index
                                            ? "translate-x-0"
                                            : selectedIndex > index
                                                ? "translate-x-full"
                                                : "-translate-x-full"
                                        }`}
                                />
                            </button>
                        ))}
                    </div>
                </>
            )}
        </section>
    );
}