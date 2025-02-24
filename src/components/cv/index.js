import React from 'react';
import PropTypes from 'prop-types';
import mergeClassNames from 'classnames';
import {config} from '@fortawesome/fontawesome-svg-core';
import BulmaCSS from './cv.module.css';
import Me from './Me';
import Styles from './styles.module.css';
import Section from './SectionDiv';
import Experiences from './Experiences';
import GenericList from './GenericList';

import '@fortawesome/fontawesome-svg-core/styles.css';
import CategorisedSkills from "./CategorisedSkills";
import Navigation from "./Navigation";
import Certificate from './Certificate';

config.autoAddCss = false;

const componnentMap = {
  'experiences': Experiences,
  'certificate': Certificate,
  'skills': CategorisedSkills,
  text: Section,
  'generic': GenericList,
};

export default function CemCV({personalData, sections}) {
  return (
    <div>
      <Navigation sections={sections}></Navigation>
      <section className={mergeClassNames(Styles.appContainer, BulmaCSS.section)}>

        <main className={BulmaCSS.container}>
          <div className={mergeClassNames(Styles.cvContainer, BulmaCSS.box)}>
            <Me
              {...personalData}
            />
            {
              sections.map((sectionDetails, i) => {
                const {type} = sectionDetails;
                const Comp = componnentMap[type] || Section; // Fallback to section for any case.
                return <Comp {...sectionDetails} key={i}/>;
              })
            }

          </div>
        </main>
      </section>
    </div>
  );
}

CemCV.propTypes = {
  personalData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string,
    contacts: PropTypes.arrayOf(PropTypes.shape({
      type: PropTypes.oneOf(['email', 'website', 'phone', 'location', 'linkedin', 'github', 'twitter']),
      value: PropTypes.string,
    })),
    interests: PropTypes.arrayOf(PropTypes.string),
  }),
  sections: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string,
    title: PropTypes.string,
  })),
};

