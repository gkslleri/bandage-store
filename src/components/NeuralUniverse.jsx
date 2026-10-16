export default function NeuralUniverse() {
    return (
        <section className="bg-white">
            <div className="mx-auto flex max-w-[1440px] flex-col lg:flex-row">
                <div className="flex w-full items-end justify-center lg:w-1/2">
                    <img
                        src="/images/sarilanlar.png"
                        alt="Sarılan asyalı insanlar"
                        className="block h-auto w-full"
                    />
                </div>

                <div className="flex w-full flex-col items-center justify-center gap-8 px-8 py-20 text-center lg:w-1/2 lg:items-start lg:px-16 lg:text-left">
                    <p className="text-base font-bold text-[#BDBDBD]">
                        SUMMER 2020
                    </p>

                    <h2 className="max-w-sm text-4xl font-bold leading-tight text-[#252B42]">
                        Part of the Neural Universe
                    </h2>

                    <p className="max-w-sm text-xl leading-relaxed text-[#737373]">
                        We know how large objects will act, but things on a small scale.
                    </p>

                    <div className="flex flex-col gap-4 sm:flex-row">
                        <button
                            type="button"
                            className="rounded border border-[#2DC071] bg-[#2DC071] px-10 py-4 text-sm font-bold text-white"
                        >
                            BUY NOW
                        </button>

                        <button
                            type="button"
                            className="rounded border border-[#2DC071] px-10 py-4 text-sm font-bold text-[#2DC071]"
                        >
                            READ MORE
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}