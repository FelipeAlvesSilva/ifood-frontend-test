import React, { useEffect, useState, Fragment } from 'react';
import { Collapse } from 'antd';
import { BsFilter } from 'react-icons/bs';
import { mockyAPI } from '../../services/mockyApi';
import { FiltersType, Filter } from '../../utils/filtersLabels';

type FilterPanelProps = {
  filterLabel: Filter
};

const FilterPanel = (props: FilterPanelProps): JSX.Element => {
  switch (props.filterLabel.id.toLocaleLowerCase()) {
    case ('locale'):
      return (
        <Fragment>locale</Fragment>
      );
    case ('country'):
      return (
        <Fragment>country</Fragment>
      );
    case ('timestamp'):
      return (
        <Fragment>timestamp</Fragment>
      );
    case ('limit'):
      return (
        <Fragment>limit</Fragment>
      );
    case ('offset'):
      return (
        <Fragment>offset</Fragment>
      );
    default:
      return (
        <Fragment></Fragment>
      ); // No filters available
  }
};

// UX - Clean filters option
const Filters = () => {
  const { Panel } = Collapse;
  const [filters, setFilters] = useState<FiltersType>({ labels: [] });

  useEffect(() => {
    mockyAPI.get('/')
      .then(res => {
        setFilters(filters => res.data.filters);
      });
  }, []);

  const extraIcon = (): JSX.Element => <BsFilter onClick={(e) => e.stopPropagation()} />;

  return (
    <Collapse bordered={false} expandIconPosition='right' className='m-3'>
      <Panel header='Filters' key='1' extra={extraIcon()}>
        {/* {filters.labels?.length > 0
          ? filters.labels.map(filter => <FilterPanel key={filter.id} filterLabel={filter} />) 
          : null} */}
      </Panel>
    </Collapse>
  )
};

export default Filters;