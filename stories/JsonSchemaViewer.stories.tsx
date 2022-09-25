import React from 'react';

import {JsonSchemaViewer} from "../src"

const schema = {
    properties: {
        size: {
            type: 'integer',
            description: 'The file size in bytes. Be careful parsing this integer as it can get very large and cause an integer overflow.',
            required: true
        },
        paidPrice: {
            type: 'bigdecimal',
            description: 'The file size in bytes. Be careful parsing this integer as it can get very large and cause an integer overflow.'
        },
        customer: {
            type: 'Customer',
            required: true,
            description: "Details about customer",
            properties: {
                name: {
                    type: 'string',
                    description: 'Name of the customer'
                },
                email: {
                    type: 'string',
                    description: 'Email  of the customer'
                }
            },
        },
        currency: {
            type: 'Currency',
            defaultValue: 'TRY',
            allowedValues: ["TRY", "USD", "GBP"],
            description: "Details about customer",

        }
    }
}
export default {
    title: 'JsonSchemaViewer',
    component: JsonSchemaViewer,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any) => <JsonSchemaViewer {...args} />;

export const Default = Template.bind({});
// @ts-ignore
Default.args = {
    schema: schema,
};

