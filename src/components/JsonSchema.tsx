import React from "react";
import {Properties} from "../types";
import JsonSchemaProperty from "./JsonSchemaProperty";

const JsonSchema = ({properties}: { properties: Properties }) => {
    return (
        <div className="json-schema">
            {Object.keys(properties).map((propertyName) => (
                <JsonSchemaProperty {...properties[propertyName]} name={propertyName}/>
            ))
            }
        </div>
    );
}

export default JsonSchema;
