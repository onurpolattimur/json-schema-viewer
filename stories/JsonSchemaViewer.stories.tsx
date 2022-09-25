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
        test: {
            description: "<b>Hello</b>"
        },
        binNumber: {
            type: "number",
            description: "Taksit sorgulama yapılacak olan kartın ilk 6 hanesi. Eğer gönderilmezse tüm taksitler dönülür. Gönderilirse eğer sadece bin numarasına ait kart ailesinin taksit sayıları dönülür <br/><b> 19.04.2022 14:00 tarihinde yapılacak olan 8 haneli bin geçişi sonrası 8 hane olarak gönderilmelidir</b>",
            required: true
        },
        price: {type: 'bigdecimal', description: 'Fiyat', required: true},
        currency: {
            type: 'string',
            defaultValue: 'TRY',
            allowedValues: [
                "TRY", "USD", "GBP"
            ],
            description: 'Taksit sorgulama işleminin hangi kur için yapılacağı. bkz: [Para Birimleri](/api#para-birimleri)'
        },
        distinctCardBrandsWithLowestCommissions: {
            type: 'boolean',
            description: 'Taksit sorgulama sonucunda aynı kart ailesine ait birden fazla sonuç oluşması durumunda en düşük komisyona göre tekilleştirilmesi için kullanılır.'
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

