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
    themeOptions?: ThemeOptions
}

export interface ThemeOptions {
    variant?: Variant
    colors?: {
        textColor: string,
        jsonSchemaBorderColor: string,
        requiredTextColor: string,
        allowedValueItemBackgroundColor: string,
        propertyNameColor: string,
    }
}


export  type Variant = 'light' | 'dark'

export type Properties = {
    [k: string]: JsonSchemaPropertyProps
}


