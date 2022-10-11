import React, {FC, useRef} from 'react';
import './index.css';
import JsonSchema from "./components/JsonSchema";
import {JsonSchemaViewerProps} from "./types";


export const JsonSchemaViewer: FC<JsonSchemaViewerProps> = ({schema, themeOptions}) => {
    const {properties} = schema

    // useEffect(() => {
    //     if (!ref.current) return;
    //     const jsonSchemaContainer = ref.current as unknown as HTMLElement;
    //     jsonSchemaContainer.style.setProperty('--text-color', themeOptions.colors.textColor);
    //     jsonSchemaContainer.style.setProperty('--json-schema-border-color', themeOptions.colors.jsonSchemaBorderColor);
    //     jsonSchemaContainer.style.setProperty('--required-text-color', themeOptions.colors.requiredTextColor);
    //     jsonSchemaContainer.style.setProperty('--allowed-value-item-background-color', themeOptions.colors.allowedValueItemBackgroundColor);
    //     jsonSchemaContainer.style.setProperty('--property-name-color', themeOptions.colors.propertyNameColor);
    // }, [themeOptions])

    const ref = useRef(null);
    return (
        <div className={`json-schema-viewer-container ${themeOptions?.variant === 'dark' ? 'json-schema-viewer-container-dark' : ''}  `} ref={ref}>
            <JsonSchema properties={properties}/>
        </div>
    )
};

export default JsonSchemaViewer
