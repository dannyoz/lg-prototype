export const kebabify = (str) => {
    const regex = new RegExp(' ', 'g');
    return str.toLocaleLowerCase().replace(regex, '-')
}
