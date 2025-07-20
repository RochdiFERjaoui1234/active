import { useEffect } from 'react';
import { sanitizeInput } from 'active-core';

export function SecureComponent(WrappedComponent) {
  return function Secured(props) {
    const sanitizedProps = {};

    useEffect(() => {
      Object.keys(props).forEach(async (key) => {
        if (key === 'dangerouslySetInnerHTML') {
          const sanitized = await sanitizeInput(props[key].__html);
          sanitizedProps[key] = sanitized ? { __html: sanitized } : {};
        }
      });
    }, [props]);

    return <WrappedComponent {...sanitizedProps} />;
  };
}