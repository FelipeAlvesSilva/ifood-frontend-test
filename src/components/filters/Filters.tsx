import React from 'react';
import { Collapse } from 'antd';
import { BsFilter } from 'react-icons/bs';

// UX - Clean filters option
const Filters = () => {
  const { Panel } = Collapse;

  const extraIcon = (): JSX.Element => <BsFilter onClick={(e) => e.stopPropagation()} />;

  return (
    <Collapse bordered={false} expandIconPosition='right' className='m-3'>
      <Panel header='Filters' key='1' extra={extraIcon()}>
        <p>hello filters</p>
      </Panel>
    </Collapse>
  )
};

export default Filters;