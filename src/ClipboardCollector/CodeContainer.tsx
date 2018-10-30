import * as React from 'react';
import {UnControlled as CodeMirror} from 'react-codemirror2';
import { html } from 'js-beautify';


import 'codemirror/mode/xml/xml';
import 'codemirror/addon/fold/foldcode';
import 'codemirror/addon/fold/foldgutter';
import 'codemirror/addon/fold/brace-fold';
import 'codemirror/addon/fold/xml-fold';
import 'codemirror/addon/fold/comment-fold';


import 'codemirror/lib/codemirror.css';
import 'codemirror/addon/fold/foldgutter.css';

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
                mode: 'xml',
                lineNumbers: true,
                foldGutter: true,
                gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
                readOnly: true,
              }}></CodeMirror>;
  }
  return <pre className="clipboard-content"> {value} </pre>;
}
