import React, {FC, useRef} from 'react';
import './index.css';
import JsonSchema from "./components/JsonSchema";
import {JsonSchemaViewerProps} from "./types";


export const JsonSchemaViewer: FC<JsonSchemaViewerProps> = ({schema}) => {
    const {properties} = schema
    const ref = useRef(null);
    return (
        <div className="json-schema-viewer-container" ref={ref}>
            <button onClick={() => {
                if (ref.current) {
                    const jsonSchemaContainer = ref.current as unknown as  HTMLElement;
                    jsonSchemaContainer.style.setProperty('--text-color', 'blueviolet')
                }
            }}>Change Color
            </button>
            <h1 className="h1">Hello</h1>
            <JsonSchema properties={properties}/>
        </div>
    )
};

export default JsonSchemaViewer
