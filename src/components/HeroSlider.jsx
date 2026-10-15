import { Link } from "react-router-dom";
import Slider from "./Slider";

const slides = [
  {
    id: 1,
    subtitle: "SUMMER 2020",
    title: "NEW COLLECTION",
    description:
      "We know how large objects will act, but things on a small scale",
  },
  {
    id: 2,
    subtitle: "SUMMER STYLE",
    title: "FIND YOUR STYLE",
    description:
      "Discover your next favorite look from our summer collection",
  },
];

export default function HeroSlider() {
  return (
    <Slider label="Koleksiyon tanıtımları">
      {slides.map((slide) => (
        <div
          key={slide.id}
          className="flex min-h-[640px] items-center bg-[url('/images/hero-woman.jpg')] bg-cover bg-[position:35%_center] bg-no-repeat lg:min-h-[700px] lg:bg-center"
        >
          <div className="mx-auto flex w-full max-w-[1050px] flex-col items-center gap-8 px-12 py-20 text-center lg:items-start lg:text-left">
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
              to="/shop"
              className="rounded bg-[#2DC071] px-10 py-4 text-xl font-bold"
            >
              SHOP NOW
            </Link>
          </div>
        </div>
      ))}
    </Slider>
  );
}