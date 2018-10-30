import * as React from 'react';
import CodeContainer from './CodeContainer';
import './index.less';

interface Props {
  types: string[];
  details: string[];
}

const ClipboardCollector = (props: Props) => {
  const { types, details } = props;
  return (
    <ul id="clipboard-types">
      {
        types.map((type, index) => (
          <li key={type}>
            {type}
            <CodeContainer value={details[index] || ''} type={type} />
          </li>
        ))
      }
    </ul>
  );
}

export default ClipboardCollector;
