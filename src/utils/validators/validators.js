export const required = value => {
    if (value) return undefined;

    return 'Поле не заповнене!!!';

}
export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `Максисальна кількість ${maxLength} символів`;
    return undefined;
}