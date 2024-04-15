import React, {useState} from 'react';

import CVStyles from './cv.module.css';
import Styles from './styles.module.css';
import mergeClassNames from "classnames";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faFilePdf} from "@fortawesome/free-solid-svg-icons";

export default function Navigation({
    sections,
  }) {
  const [isActive, setIsActive] = useState(false);
  //add the active class
  const toggleHamburger = () => {
    setIsActive(!isActive);
  };


  //clean up function to remove the active class
  const removeHamburger = () => {
    setIsActive(false)
  }

  return (
    <div className={mergeClassNames(Styles.divTable)}>
      <div className={mergeClassNames(Styles.divTableBody, Styles.stickyNavBar)}>
        <div
          className={`${mergeClassNames(CVStyles.container, Styles.divTableRow)}`}>
          {sections.map((sectionDetails, i) => {
            return (
              <a key={i} className={`${isActive ? Styles.divTableRow: Styles.divTableCell}`}
                 href={'#' + sectionDetails.title}
                 onClick={removeHamburger}
                 role='button'>
                {sectionDetails.title}
              </a>
            );
          })}
          <div className={Styles.rightNavBarSection}>
            <a className={mergeClassNames(CVStyles.levelRight, Styles.pdfDownload)}
               href="./EthemCemOzkanCV.pdf" onClick={removeHamburger} download>
              <FontAwesomeIcon icon={faFilePdf}></FontAwesomeIcon>
            </a>
            <a onClick={toggleHamburger}
               href
               className={mergeClassNames(Styles.hamburgerMenu, CVStyles.levelRight)}>
              <FontAwesomeIcon icon={faBars}/>
            </a>
        </div>
        </div>
      </div>
    </div>
  );
}
