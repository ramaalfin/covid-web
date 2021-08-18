import '../scripts/component/header-content.js';
import '../scripts/component/home-content.js';
import '../scripts/component/footer-content.js';
import '../scripts/component/corona-report.js';

const main = () => {
    const baseUrl = 'https://api.covid19api.com';

    const getData = () => {
        fetch(`${baseUrl}/summary`)
            .then(response => response.json())
            .then(results => {
                const coronaReportElement = document.querySelector('corona-report');
                coronaReportElement.coronaItem = results.Countries[77];
            })
            .catch(() => showMessage());
    };

    const showMessage = (message = 'Periksa koneksi internet...') =>{
        alert(message);
    };

    getData();
};

export default main;