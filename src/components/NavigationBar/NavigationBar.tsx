import "./NavigationBar.css";
import { NavigationLink } from "./NavigationLink";

export const NavigationBar = () => {
  return (
    <div>
      <nav>
        <ul id="navigation">
          <NavigationLink to="/" title="Najeem Kanishka" left={true} />
          {/* Reverse Order */}
          <li><a href="https://www.linkedin.com/in/najeemkanishka/">LinkedIn</a></li>
          <li><a href="https://www.github.com/najeemk/">GitHub</a></li>
          {/* <NavigationLink to="" title="World Travel Map" /> */}
          <NavigationLink to="/summary" title="Professional Summary" />
          <NavigationLink to="/about" title="About" />
        </ul>
      </nav>
    </div>
  );
};
