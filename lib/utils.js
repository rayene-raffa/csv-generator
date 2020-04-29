const extractHeaders = (jsonObj, headerObj = {}) => {
    if (Array.isArray(jsonObj)) {
        for (let item of jsonObj) {
            extractHeaders(item, headerObj);
        }
    } else {
        Object.keys(jsonObj).forEach(key => {
            if (key !== 'children') {
                headerObj[key] = '';
            } else if (jsonObj['children'].length) {
                extractHeaders(jsonObj['children'], headerObj);
            }
        });
    }
    return headerObj;
}

const extractValues = (jsonObj, headerObj, valuesArr = []) => {
    if (Array.isArray(jsonObj)) {
        for (let item of jsonObj) {
            extractValues(item, headerObj, valuesArr);
        }
    } else {
        let rowObj = Object.create(headerObj);
        Object.keys(jsonObj).forEach(key => {
            if (key !== 'children') {
                rowObj[key] = jsonObj[key];
            } else if (jsonObj['children'].length) {
                extractValues(jsonObj['children'], headerObj, valuesArr);
            }
        });
        valuesArr.push(rowObj);
    }
    return valuesArr;
}

exports.generateReport = jsonObj => {
    let headerObj = extractHeaders(jsonObj);
    let valuesArr = extractValues(jsonObj, headerObj);
    let dataArr = [];

    dataArr.push(Object.keys(headerObj).join(','));
    for (let rowObj of valuesArr) {
        var row = Object.keys(rowObj).map(key => (rowObj[key]));
        dataArr.push(row.join(','));
    }
    let csvData = dataArr.join('\n');
    console.log(csvData);
    return csvData;
}