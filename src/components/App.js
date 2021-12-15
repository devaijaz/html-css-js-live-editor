import React, {useState, useEffect} from 'react'
import './app.css';
import { useLocalStorage } from '../hooks';
import Editor from './Editor';
export const App = () => {
    const [srcDoc, setSrcDoc] = useState('');
    const [html, setHtml] = useLocalStorage("html");
    const [css, setCss] = useLocalStorage("css");
    const [js, setJs] = useLocalStorage("js");

    useEffect(()=> {
        const timeout = setTimeout(_=> {
        const template = `<html>
            <head> <style style="text/css"> ${css} </style> </head>
            <body>
                ${html}
                <script type="text/javascript">
                    ${js}
                </script>
            </body>
            </html>
        `;
        setSrcDoc(template);

        }, 500);
        return ()=>clearTimeout(timeout);
    }, [html, css, js]);

    return (
      <div className="editor">
        <div className="pane top-pane">
              <Editor
                language="xml"
                name="HTML"
                value={html}
                onChange={(editor, data, value) => {
                  setHtml(value);
                }}
              />
              <Editor
                language="css"
                name="CSS"
                value={css}
                onChange={(editor, data, value) => {
                  setCss(value);
                }}
              />
              <Editor
                language="javascript"
                name="JS"
                value={js}
                onChange={(editor, data, value) => {
                  setJs(value);
                }}
              />
              </div>
            
        <div className="pane bottom-pane">
          <iframe
            srcDoc={srcDoc}
            title="Output"
            frameBorder={0}
            width="100%"
            height="100%"
          ></iframe>
        </div>
      </div>
    );
}
