import React, {FC, useState} from 'react';
import "./tailwind.css"
import ArrowSvg from "./ArrowSvg"

export interface Property {
    name: string
    type: string
    description: string
    required: boolean
    properties: Property[]
    allowedValues: string[]
    defaultValue: string
}

export interface JsonSchemaViewerProps {
    schema: {
        properties: Property[]
    }
}

const RequiredLabel = ({required}: { required: boolean }) => {
    if (required) {
        return <>
            <div className="flex-1 h-px ml-2 mr-2 group-hover:bg-gray-200"></div>
            <div className="text-[#f46d2a]">required</div>
        </>
    }
    return <></>
}

const PropertyIdentifierHorizontalLine = ({hasSubProperties}: { hasSubProperties: boolean }) => {
    return hasSubProperties
        ? <>
            <div className="w-2 mt-2 border-t border-solid mr-3 -ml-3"></div>
        </>
        : <div className="w-3 mt-2 border-t border-solid mr-2 -ml-3"></div>
}

const SubPropertyToggleIcon = ({subPropertyVisible}: { subPropertyVisible: boolean }) => {
    return (
        <div className={`w-3 -ml-3 flex justify-center items-center ${subPropertyVisible ? 'rotate-90' : ''}`}>
            <div className="w-1.5"><ArrowSvg/></div>
        </div>
    )
}

const AllowedValues = ({values}: { values: string[] }) => {
    return (
        <div className="mt-1 flex items-center">
            <div className="mr-2">Allowed Values:</div>
            {values.map((value) => (
                <div className="mr-2 text-xs text-gray-700 py-0.5 px-1 flex items-center bg-gray-100 border-solid border ">{value}</div>
            ))}
        </div>
    )
}

const DefaultValue = ({value}: { value: string }) => {
    return (
        <div className="mt-1 flex items-center">
            <div className="mr-2">Default Value:</div>
            <div className="mr-2 text-xs text-gray-700 py-0.5 px-1 flex items-center bg-gray-100 border-solid border ">{value}</div>
        </div>
    )
}

const Property = ({name, type, description, required, properties, allowedValues, defaultValue}: Property) => {
    const [subPropertyVisible, setSubPropertyVisible] = useState(false);
    const hasSubProperties = !!properties
    return (
        <div className="flex pt-3 pl-3 pr-3 pb-3 group">
            <PropertyIdentifierHorizontalLine hasSubProperties={hasSubProperties}/>
            <div className="text-xs text-slate-600  w-full flex flex-col">
                <div className={`flex items-center ${hasSubProperties ? "cursor-pointer" : ""}`} onClick={() => hasSubProperties && setSubPropertyVisible(!subPropertyVisible)}>
                    {hasSubProperties && <SubPropertyToggleIcon subPropertyVisible={subPropertyVisible}/>}
                    <div className="flex items-center">
                        <div className="font-semibold text-slate-900 mr-2">
                            {name}
                        </div>
                        <div>
                            {type}
                        </div>
                    </div>
                    <RequiredLabel required={required}/>

                </div>
                {description && <div className="mt-1">{description}</div>}
                {allowedValues && <AllowedValues values={allowedValues}/>}
                {defaultValue && <DefaultValue value={defaultValue}/>}
                {!!properties && subPropertyVisible && <JsonSchema properties={properties}/>}
            </div>
        </div>
    )
}

const JsonSchema = ({properties}: { properties: Property[] }) => {
    return (
        <div className="border-l border-solid">
            {Object.keys(properties).map((propertyName) => (
                // @ts-ignore
                <Property name={propertyName} {...properties[propertyName]}/>
            ))
            }
        </div>
    );
}

export const JsonSchemaViewer: FC<JsonSchemaViewerProps> = ({schema}) => {
    const {properties} = schema
    console.log(properties)
    return (
        <JsonSchema properties={properties}/>
    )
};

export default JsonSchemaViewer
