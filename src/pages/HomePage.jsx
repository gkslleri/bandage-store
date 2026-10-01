import BestsellerProducts from "../components/BestsellerProducts";
import EditorsPick from "../components/EditorsPick";
import HeroSlider from "../components/HeroSlider";

export default function HomePage() {
    return (
        <>
            <HeroSlider />
            <EditorsPick />
            <BestsellerProducts />
        </>
    );
}