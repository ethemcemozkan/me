import React from 'react';

import mc from 'classnames';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope, faPhone, faGlobeAmericas, faExclamation, faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import CVStyles from './cv.module.css';
import {formatAnchorValue} from './Utils';
import Styles from './styles.module.css';

const iconMap = {
  email: faEnvelope,
  phone: faPhone,
  location: faMapMarkerAlt,
  website: faGlobeAmericas,
  linkedin: faLinkedin,
  github: faGithub,
};

export function ContactList({items = []}) {
  return (
    <div className={mc(Styles.contactListContainer, CVStyles['has-text-white'])}>
      {items.map((item, i) => {
        const icon = iconMap[item.type] || faExclamation;
        return (
          <div className={Styles.contactListItem} key={i}>
            <FontAwesomeIcon icon={icon}/>
            <a className={Styles.contactListItemContent} href={formatAnchorValue(item.type, item.value)} target="_blank"
               rel="noreferrer">
              {item.value}
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default function Me({
                             name, title, contacts, image,
                           }) {
  return (
    <div
      className={mc(CVStyles.container, CVStyles.box, CVStyles.hero, CVStyles['is-primary'], CVStyles['is-paddingless'], CVStyles['is-marginless'])}>
      <div className={CVStyles['hero-body']}>
        <div className={mc(CVStyles.columns)}>
          <div className={mc(CVStyles.column, CVStyles['is-full'])}>
            <div className={CVStyles.level}>
              <div className={CVStyles['level-left']}>
                <div className={CVStyles['level-item']}>
                  <figure className={mc(CVStyles.image, CVStyles['is-128x128'])}>
                    <img className={CVStyles['is-rounded']} src={image} alt="Profile"/>
                  </figure>
                </div>
                <div className={CVStyles['has-text-centered']}>
                  <h1 className={mc(CVStyles.title, CVStyles['is-size-4'])}>{name}</h1>
                  <h3 className={mc(CVStyles.subtitle, CVStyles['is-size-6'])}>{title}</h3>
                </div>
              </div>
              <div className={CVStyles['level-right']}>
                <div className={CVStyles['level-item']}>
                  <ContactList
                    items={contacts}
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
