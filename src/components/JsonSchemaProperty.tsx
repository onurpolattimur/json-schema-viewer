import React, {useState} from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import JsonSchema from "./JsonSchema";
import {JsonSchemaPropertyProps} from "../types";
import ArrowSvg from "./ArrowSvg";

const PropertyIdentifierHorizontalLine = ({hasSubProperties}: { hasSubProperties: boolean }) => {
    return (
        <div className={`property-identifier-horizontal-line ${hasSubProperties ? 'has-sub-property' : ''}`}></div>
    )
}

const SubPropertyToggleIcon = ({subPropertyVisible}: { subPropertyVisible: boolean }) => {
    return (
        <div className={`sub-property-toggle-icon ${subPropertyVisible ? 'rotate-90' : ''}`}>
            <div className="svg"><ArrowSvg/></div>
        </div>
    )
}

const RequiredLabel = ({required}: { required: boolean }) => {
    if (required) {
        return <>
            <div className="required-hl"></div>
            <div className="required-text">required</div>
        </>
    }
    return <></>
}

const AllowedValues = ({values}: { values: string[] }) => {
    return (
        <div className="allowed-values-container">
            <div className="allowed-values-title">Allowed Values:</div>
            {values.map((value) => (
                <div className="value-item">{value}</div>
            ))}
        </div>
    )
}

const DefaultValue = ({value}: { value: string }) => {
    return (
        <div className="default-value-container">
            <div className="default-value-title">Default Value:</div>
            <div className="value-item">{value}</div>
        </div>
    )
}


const JsonSchemaProperty = ({name, type, description, required, properties, allowedValues, defaultValue}: JsonSchemaPropertyProps) => {
    const [subPropertyVisible, setSubPropertyVisible] = useState(false);
    const hasSubProperties = !!properties
    return (
        <div className="json-schema-property">
            <PropertyIdentifierHorizontalLine hasSubProperties={hasSubProperties}/>
            <div className="json-schema-property-content">
                <div className={`flex-item-center ${hasSubProperties ? "cursor-pointer" : ""}`} onClick={() => hasSubProperties && setSubPropertyVisible(!subPropertyVisible)}>
                    {hasSubProperties && <SubPropertyToggleIcon subPropertyVisible={subPropertyVisible}/>}
                    <div className="flex-item-center">
                        <div className="property-name">
                            {name}
                        </div>
                        <div>
                            {type}
                        </div>
                    </div>
                    <RequiredLabel required={required}/>
                </div>
                {description && <div className="property-description"><ReactMarkdown rehypePlugins={[rehypeRaw]} skipHtml={false} children={description}></ReactMarkdown></div>}
                {allowedValues && <AllowedValues values={allowedValues}/>}
                {defaultValue && <DefaultValue value={defaultValue}/>}
                {!!properties && subPropertyVisible && <JsonSchema properties={properties}/>}
            </div>
        </div>
    )
}

export default JsonSchemaProperty
