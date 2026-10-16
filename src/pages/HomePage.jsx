import BestsellerProducts from "../components/BestsellerProducts";
import EditorsPick from "../components/EditorsPick";
import HeroSlider from "../components/HeroSlider";
import NeuralUniverse from "../components/NeuralUniverse";
import VitaClassic from "../components/VitaClassic";

export default function HomePage() {
    return (
        <>
            <HeroSlider />
            <EditorsPick />
            <BestsellerProducts />
            <VitaClassic />
            <NeuralUniverse />
        </>
    );
}