import { ROUTE_NEW_WISH } from "./const.js";
import { createElement, createOptionCurrency } from "./helper.js"

export const createEditWish = async (id) => {
    if (id = ROUTE_NEW_WISH) {
        // to do new wish
    }

    const sectionEditWish = createElement('section', {
        className: 'edit edit_wish',
    });

    const container = createElement('div', {
        className: 'container',
    });

    const wishForm = createElement('form', {
        className: 'edit__form',
    });

    const editWish = createElement('fieldset', {
        className: ' edit__wish',
    });

    const labelTitle = createElement('label', {
        className: 'edit__label',
    });

    const labelTextTitle = createElement('span', {
        className: 'edit__label-text',
        textContent: 'Описание:',
    });

    const inputTitle = createElement('input', {
        className: 'edit__input ',
        name: 'title',
        type: 'text',
    });
    labelTitle.append(labelTextTitle, inputTitle);

    const labelCategory = createElement('label', {
        className: 'edit__label',
    });

    const labelTextCategory = createElement('span', {
        className: 'edit__label-text',
        textContent: 'Категория:',
    });

    const inputCategory = createElement('input', {
        className: 'edit__input',
        name: 'category',
        type: 'text',
    });
    labelCategory.append(labelTextCategory, inputCategory);

    const priceWrapper = createElement('div', {
        className: 'edit__label edit__wish-price',
    });

    const labelPrice = createElement('label', {
        className: 'edit__label_price',
    });

    const labelTextPrice = createElement('span', {
        className: 'edit__label-text',
        textContent: 'Цена:',
    });

    const inputPrice = createElement('input', {
        className: 'edit__input',
        name: 'price',
        type: 'number',
    });
    labelPrice.append(labelTextPrice, inputPrice);

    const labelCurrency = createElement('label', {
        className: 'edit__label_price edit__label_select',
    });

    const selectCurrency = createElement('select', {
        className: 'edit__label edit__label_price edit__label_select',
        name: 'currency',
    });

    createOptionCurrency(selectCurrency);

    labelCurrency.append(selectCurrency);

    priceWrapper.append(labelPrice, labelCurrency);

    const labelLink = createElement('label', {
        className: 'edit__label',
    });

    const labelTextLink = createElement('span', {
        className: 'edit__label-text',
        textContent: 'Ссылка:',
    });

    const inputLink = createElement('input', {
        className: 'edit__input ',
        name: 'link',
        type: 'text',
    });
    labelLink.append(labelTextLink, inputLink);

    editWish.append(labelTitle, labelCategory, priceWrapper, labelLink);
    container.append(editWish);
    sectionEditWish.append(container);

    /*        
    edit__wish-photo 
    edit__label-photo 
    edit__wish-image 
    edit__input-file 
    edit__input-file_wish 
    edit__wish-delete 
    edit__submit-wrapper 
    edit__submit-btn 
    edit__delete-btn 
    */

    const formWish = createElement('form');


    return { sectionEditWish, formWish }
}