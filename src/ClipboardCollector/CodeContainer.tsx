import * as React from 'react';
import {UnControlled as CodeMirror} from 'react-codemirror2';
import { html } from 'js-beautify';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/theme/neat.css';
import 'codemirror/mode/htmlembedded/htmlembedded.js';

export default (props: any) => {
  const { value, type } = props;
  if (type === 'text/html') {
    return <CodeMirror
              value={html(value, {
                end_with_newline: true,
                unformatted: false,
                content_unformatted: false
              })}
              options={{
                mode: 'htmlembedded',
                theme: 'material',
                lineNumbers: true,
                readOnly: true,
              }}></CodeMirror>;
  }
  return <pre className="clipboard-content"> {value} </pre>;
}
