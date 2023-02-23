export const capitalize = (s) => {
    const capital = s.charAt(0).toUpperCase();
    const rest = s.slice(1);
    return capital + rest;
}