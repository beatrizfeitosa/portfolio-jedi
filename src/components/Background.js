import AboutMe from "./AboutMe";
import Hobbies from "./Hobbies";
import Image from "./Image";
import Social from "./Social";
import TechSkills from "./TechSkills";

function Background() {
    return (
        <div className="background">
            <Image />
            <div className="background-content">
                <div className="left">
                    <AboutMe />
                    <Hobbies />
                </div>
                <div className="right">
                    <Social />
                    <TechSkills />
                </div>
            </div>
        </div>
    );
}

export default Background;