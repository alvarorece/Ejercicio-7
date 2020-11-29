class Controller {
    hideElement(elementType) {
        $(elementType).hide();
    }
    showElement(elementType) {
        $(elementType).show();
    }
    randomizeText(...textElements) {
        textElements.forEach(element => {
            const r = Math.random().toString(36).substring(7);
            $(element).text(r);
        });
    }
    addRow(colNumber) {
        const newRow = document.createElement('tr');
        for (let i = 0; i < colNumber; i++) {
            $(newRow).append('<td>nueva</td>');
        }
        $('table').append(newRow);
    }
    removeLastRow() {
        $('tr:last-child').remove();
    }
    DOMReport() {
        const elements = [...$("*", document.body)];
        const report = elements.reduce((acc, element) => acc + `*Etiqueta: ${element.tagName}, Etiqueta padre: < ${$(element).parent().get(0).tagName} >, valor:\n ${element.innerText} \n\n`, '');
        const output = $('textarea')[0];
        output.value += report;
        output.scrollTop = output.scrollHeight;
    }
    showTableInfo(){
        const rowNumber = $('tr').length;
        const colNumber = $('td').length;
        const output = $('textarea')[0];
        output.value += `La tabla tiene un total de ${rowNumber} filas y ${colNumber} columnas\n`
        output.scrollTop = output.scrollHeight;
    }
}
const controller = new Controller();