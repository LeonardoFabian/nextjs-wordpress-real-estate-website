import {v4 as uuid} from 'uuid';

export const mapWPForms = (forms) => {
    return (forms || []).map(form => ({
        id: uuid(),
        formId: form?.acfWpFormSelect || null,
        label: form?.acfWpFormLabel || null,
        positions: form?.position || []
    }));
};