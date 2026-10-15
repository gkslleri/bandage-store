export default function VitaClassic() {
    return (
        <section className="overflow-hidden bg-[#23856D] text-white">
            <div className="mx-auto flex max-w-[1050px] flex-col items-center gap-16 pt-32 lg:min-h-[709px] lg:flex-row lg:items-end lg:gap-8 lg:pt-16">
                <div className="flex w-full flex-col items-center gap-8 px-12 text-center lg:w-1/2 lg:items-start lg:self-center lg:px-0 lg:pb-16 lg:text-left">
                    <p className="text-xl">
                        SUMMER 2020
                    </p>

                    <h2 className="max-w-sm text-4xl font-bold leading-tight lg:text-6xl">
                        Vita Classic Product
                    </h2>

                    <p className="max-w-xs text-xl lg:text-sm">
                        We know how large objects will act,
                        but things on a small scale.
                    </p>

                    <div className="flex-col flex items-center gap-5 lg:flex-row lg:gap-8">
                        <span className="text-2xl font-bold">
                            $16.48
                        </span>

                        <button type="button"
                            className="rounded bg-[#2DC071] px-10 py-4 text-sm font-fold"
                        >
                            ADD TO CART
                        </button>
                    </div>
                </div>

                <div className="flex w-full justify-center lg:w-1/2">
                    <img 
                        src="/images/hero_men.jpg"
                        alt="Gömlek giyen erkek model"
                        className="block h-auto w-full max-w-[443px] object-contain object-bottom lg:max-h-[645px]"
                    />
                </div>
            </div>
        </section>
    );
}