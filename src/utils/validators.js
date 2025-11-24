export const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
};

export const validatePhoneNumber = (phone) => {
    const re = /^\d{10}$/;
    return re.test(String(phone));
};

export const validateClaimAmount = (amount) => {
    return amount > 0;
};

export const validateRequiredField = (value) => {
    return value.trim() !== '';
};