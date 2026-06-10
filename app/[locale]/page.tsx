import Navbar from "../components/navbar";
import Home from "../components/section/home";
import Project from "../components/section/project";
import About from "../components/section/about";
import Skill from "../components/section/skill";

export default function Page() {
  return (
    <div className="px-2">
      <Navbar />
      <Home />
      <About/>
      <Project/>
      <Skill/>
    </div>
  );
}