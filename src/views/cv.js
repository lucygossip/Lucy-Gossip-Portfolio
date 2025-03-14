import React from "react";
import "../styles/base.css";
import "../styles/cv.css";
import CvItem from "../components/cv-components/cvItem";
import CvContent from "../components/cv-components/cvContent";

const CV = () => {
  return (
    <>
      <h2>CV</h2>
      <div class="cv-container">
        <section id="skills">
          <div class="cv-left">Skills</div>
          <div class="cv-right">
            Test
            <hr></hr>
          </div>
        </section>
        <section id="experience">
          <div class="cv-left">Experience</div>
          <div class="cv-right">
            <CvItem
              headerInfo="testHeader"
              detailsInfo="testDetails"
              contentInfo={
                <CvContent item1="duties" item2="skill1" item3="skill2" />
              }
            />
            <hr></hr>
          </div>
        </section>
        <section id="education">
          <div class="cv-left">Education</div>
          <div class="cv-right">Test</div>
        </section>
      </div>
    </>
  );
};

export default CV;
