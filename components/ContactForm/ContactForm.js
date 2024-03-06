import { Input } from "components/Input";
import { Textarea } from "components/Textarea";
import { useState } from "react";

const INPUT = 'INPUT';
const TEXTAREA = 'TEXTAREA';

const initialFields = [
    {
        label: 'Name',
        component: INPUT,
        type: 'text',
        name: 'your-name',
        id: 'full_name',
        validation_error: false,
        validation_message: '',
    },
    {
        label: 'Email',
        component: INPUT,
        type: 'email',
        name: 'your-email',
        id: 'email',
        validation_error: false,
        validation_message: '',
    },
    {
        label: 'Subject',
        component: INPUT,
        type: 'text',
        name: 'your-subject',
        id: 'subject',
        validation_error: false,
        validation_message: '',
    },
    {
        label: 'Message',
        component: TEXTAREA,
        type: 'text',
        name: 'your-message',
        id: 'message',
        validation_error: false,
        validation_message: '',
    },
];

const ContactForm = () => {

    const [fields, setFields] = useState(initialFields);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setFields(fields.map(field => ({
            ...field,
            validation_error: false,
            validation_message: '',
        })))

        const formData = new FormData(e.target);

        const reqOptions = {
            method: 'POST',
            body: formData,
        };

        const req = await fetch('http://candelarioconsultores.local/wp-json/contact-form-7/v1/contact-forms/634/feedback', reqOptions);
        const response = await req.json();

        if(!response) return alert('An unexpected error ocurred. Try again later.');

        if(response.invalid_fields && response.invalid_fields.length > 0) {
            return setFields(fields.map(field => {
                const error = response.invalid_fields.find(x => x.field === field.name);
                
                return {
                    ...field,
                    validation_error: error ? true : false,
                    validation_message: error ? error.message : '',
                }
            }));
        }

        // console.log("CONTACT FORM RESPONSE: ", response);

        alert(response.message);
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <input type="hidden" name="_wpcf7_unit_tag" value="af0c817" />
            {fields.map(field => (
                <div key={field.id}>
                    <label htmlFor={field.id} className="text-slate-700">{field.label}</label>
                    {field.component === INPUT && <Input type={field.type} name={field.name} id={field.id} />}
                    {field.component === TEXTAREA && <Textarea name={field.name} id={field.id} />}
                    {field.validation_error && <div className="text-sm text-red-500">{field.validation_message}</div>}
                </div>
            ))}
            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
    )
}

export default ContactForm;