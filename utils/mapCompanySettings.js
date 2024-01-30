export const mapCompanySettings = (companySettings) => {
    return companySettings.map(companySetting => ({
        name: companySetting.name || null,
        description: companySetting.description || null,
        address: companySetting.address || null,
        phone: companySetting.phone || null,
        email: companySetting.email || null,
    }));
};