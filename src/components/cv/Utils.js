import {marked} from 'marked';
import React from 'react';

// It is the responsibility of the parent project to sanitize the markdown
export function MarkdownRender({markdown}) {
  const html = marked.parse(markdown || ''); 
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    />
  );
}

export const getFixedUrl = (url) => (
  /^(http|https|ftp)/.test(url) ? url : `https://${url}`
);

export const formatAnchorValue = (type, value) => {
  switch (type) {
    case 'email':
      return `mailto:${value}`;
    case 'phone':
      return `tel:${value}`;
    case 'location':
      return `https://maps.google.com/?q=${encodeURIComponent(value)}`;
    case 'website':
    case 'github':
    case 'linkedin':
    case 'twitter':
      return getFixedUrl(value);
    default:
      return value;
  }
};
