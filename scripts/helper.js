export const createElement = (tagName, attribute) => {
    const elem = document.createElement(tagName);
    Object.assign(elem, attribute);
    return elem
    // так сложнее:  for (const key in object) {
    //     if (Object.hasOwnProperty.call(object, key)) {
    //         elem.setAttribute(key, attribute[key]);    } }
};

export const pluralizeYears = (age) => {
    let years = age % 100;

    if (years >= 11 && years <= 19) {
        return 'лет';
    } else {
        let lastDigit = years % 10;
        if (lastDigit === 1) {
            return 'год';
        } else if (lastDigit >= 2 && lastDigit <= 4) {
            return 'года';
        } else {
            return 'лет';
        }
    }
};

export const handleImageFileSelection = (inputFile, image, inputHidden) => {
    const handleFileInputChange = (eve) => {
        if (eve.target.files.length > 0) {
            const file = eve.target.files[0];
            const reader = new FileReader();
            reader.addEventListener('load', () => {
                image.src = reader.result;
                if (inputHidden) {
                    inputHidden.value = reader.result;
                }
            });
            reader.readAsDataURL(file);
        }
    };
    inputFile.addEventListener('change', handleFileInputChange);
};

export const createSelectDate = (selectDay, selectMonth, selectYear, birthdate) => {
    for (let day = 0; day <= 31; day++) {
        const option = createElement('option', {
            value: day ? day : '',
            text: day ? day : '',
        });

        selectDay.append(option);
    }

    const months = ['', 'Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек',];

    for (let i = 0; i <= months.length; i++) {
        const option = createElement('option', {
            value: i,
            text: months[i],
        });

        selectMonth.append(option);
    }

    const currentYear = new Date().getFullYear();

    const optionYear = document.createElement('option');
    optionYear.value = '';
    optionYear.text = '';
    selectYear.append(optionYear);


    for (let year = currentYear; year >= currentYear - 100; year--) {
        const option = createElement('option', {
            value: year,
            text: year,
        });

        selectYear.append(option);
    }

    if (birthdate) {
        const [month, day, year] = birthdate.split('/');
        selectDay.value = day;
        selectMonth.value = month;
        selectYear.value = year;
    }

    [selectDay, selectMonth, selectYear].forEach(dateSelect => {
        dateSelect.addEventListener('change', ({ currentTarget }) => {
            currentTarget.blur();
        });
    });
};

export const createOptionCurrency = (select, currency) => {
    const currencies = ['RUB', 'USD', 'EUR', 'GBP'];

    for (let i = 0; i < currencies.length; i++) {
        const option = createElement('option', {
            value: currencies[i],
            text: currencies[i],
        });
        select.append(option);
    }
    select.value = currency ?? currencies[0];
}