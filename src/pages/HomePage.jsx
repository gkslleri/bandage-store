import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <section className="flex min-h-[640px] items-center bg-[url('/images/hero-woman.jpg')] bg-cover bg-[position:35%_center] bg-no-repeat text-white lg:min-h-[700px] lg:bg-center">
            <div className="mx-auto flex w-full max-w-[1050px] flex-col items-center gap-8 px-8 py-20 text-center lg:items-start lg:text-left">
                <p className="text-base font-bold tracking-widest">
                    SUMMER 2020
                </p>

                <h2 className="text-4xl font-bold leading-tight lg:text-6xl">
                    NEW COLLECTION
                </h2>

                <p className="max-w-xs text-xl lg:max-w-sm">
                    We know how large objects will act,
                    but things on a small scale.
                </p>

                <Link
                    to="/shop"
                    className="rounded bg-[#2DC071] px-10 py-4 text-xl font-bold"
                >
                    SHOP NOW
                </ Link>
            </div>
        </section>
    );
}