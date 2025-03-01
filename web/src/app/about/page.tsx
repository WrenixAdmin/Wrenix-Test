import AboutHero from "./_components/AboutHero";
import CountComponent from "./_components/CountComponent";
import VisionMission from "./_components/VisionMission";

export default function About() {
    return (
        <div className="min-h-screen">
            <AboutHero />
            <CountComponent />
            <VisionMission />
        </div>
    )
}