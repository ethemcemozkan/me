import React from 'react';
import PropTypes from 'prop-types';
import GenericList from './GenericList';
import './styles.module.css';

function Experiences({items, ...props}) {
  const convertedItems = (items || []).map((item) => {
    const {
      company, companyWebSite, companyMeta, datesBetween, breakAfter, ...rest
    } = item;
    return {
      authority: company,
      authorityWebSite: companyWebSite,
      authorityMeta: companyMeta,
      rightSide: datesBetween,
      ...rest,
    };
  });
  return (
    <GenericList
      {...props}
      items={convertedItems}
    />
  );
}

Experiences.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})),
  title: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.string]),
};

export default Experiences;
