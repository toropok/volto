import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { withBlockExtensions } from '@plone/volto/helpers/Extensions';

import { default as ListingBody } from '@plone/volto/components/manage/Blocks/Listing/ListingBody';

const View = (props) => {
  const { data, path, pathname, className, style } = props;

  return (
    <div
      className={cx('block listing', data.variation || 'default', className)}
      style={style}
    >
      <ListingBody {...props} path={path ?? pathname} />
    </div>
  );
};

View.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  properties: PropTypes.objectOf(PropTypes.any).isRequired,
  block: PropTypes.string,
};

export default withBlockExtensions(View);
