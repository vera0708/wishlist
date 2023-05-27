export const createElement = (tagName, attribute) => {
    const elem = document.createElement(tagName);
    Object.assign(elem, attribute);
    return elem
    // так сложнее:  for (const key in object) {
    //     if (Object.hasOwnProperty.call(object, key)) {
    //         elem.setAttribute(key, attribute[key]);
    //     } }

}