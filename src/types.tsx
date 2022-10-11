export interface JsonSchemaPropertyProps {
    name: string
    type: string
    description: string
    required: boolean
    properties: Properties
    allowedValues: string[]
    defaultValue: string
}

export interface JsonSchemaViewerProps {
    schema: {
        properties: Properties
    }
}


export type Properties = {
    [k: string]: JsonSchemaPropertyProps
}


