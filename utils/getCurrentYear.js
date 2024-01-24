export const getCurrentYear = () => {
    const date = new Date();
    const year = date.getFullYear();

    return year;
}