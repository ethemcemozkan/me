import React from 'react';

import CVStyles from './cv.module.css';
import Styles from './styles.module.css';
import mergeClassNames from "classnames";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFilePdf} from "@fortawesome/free-solid-svg-icons";

export default function Navigation({
    sections,
  }) {

  return (
    <div className={mergeClassNames(Styles.divTable)}>
      <div className={mergeClassNames(Styles.divTableBody, Styles.stickyNavBar)}>
        <div className={mergeClassNames(CVStyles.container, Styles.divTableRow)}>
          {sections.map((sectionDetails, i) => {
            return (
              <a key={i} className={mergeClassNames(Styles.divTableCell)}
                 href={'#' + sectionDetails.title}
                 role='button'>
                {sectionDetails.title}
              </a>
            );
          })}
          <a className={mergeClassNames(CVStyles.divTableCell, CVStyles.levelRight)}
             href="./EthemCemOzkanCV.pdf" download>
            <FontAwesomeIcon icon={faFilePdf}></FontAwesomeIcon>
          </a>
        </div>
      </div>
    </div>
  );
}
