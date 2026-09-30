import { Link } from "react-router-dom";
import HeroSlider from "../components/HeroSlider";

export default function HomePage() {
    return (
        <div className="px-4 lg:px-8">
            <HeroSlider />
        </div>
    );
}