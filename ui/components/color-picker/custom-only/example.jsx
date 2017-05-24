// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import ColorPicker from '../';

export default (
  <ColorPicker hasPredefined={false} />
);

export const states = [
  {
    id: 'custom-color-picker-open',
    label: 'Custom Only Color Picker Open',
    element: <ColorPicker isOpen hasPredefined={false} />
  }
];
