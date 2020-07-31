import React from 'react';
import { Collapse } from 'antd';

// consume the API of filters and show on screen all the options, applying on global search
// UX - Clean filters option
const Filters = () => {
  const { Panel } = Collapse;

  return (
      <Collapse className="m-3">
        <Panel header="Filters" key="1">
          <p>hello filters</p>
        </Panel>
      </Collapse>
  )
};

export default Filters;