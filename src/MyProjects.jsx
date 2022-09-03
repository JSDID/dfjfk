import "./Projects/Styles/Style.css";
import AboutProject01 from './Projects/AboutProject01';
import AboutProject02 from './Projects/AboutProject02';

const MyProjects = () => {
  return (
    <>
      <div className="Projects__item">
        <AboutProject01/>
        <AboutProject02/>
      </div>
    </>
  );
}
export default MyProjects;