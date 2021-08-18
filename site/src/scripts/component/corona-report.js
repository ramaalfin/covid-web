class CovidReportItem extends HTMLElement{
    connectedCallback(){
        this.render();
    }
    set coronaItem(item){
        this._coronaItem = item;
        this.render();
    }

    render(){
        this.innerHTML = `
        <style>          
            section#data{
                background-color: var(--blue);
                min-height: 90vh;
                padding-top: 12rem;
            }
            .container {
                width: 80%;
                margin: 0 auto;
                border-radius: 24px;
                background: #F6F5F0;
                padding: 2%;
                box-shadow: 0px 7px 6px -8px rgb(0 0 0 / 70%);
                text-align: center;
                align-items: center;
            }
            .board {
                column-count: 3;
                column-gap: 1rem;
                text-align: center;
            }
            .container h2 {
                margin: 0 0 30px;
                text-align: center;
                font-size: 2rem;
            }

            .card {
                padding: 8%;
                margin-bottom: 20px;
                border-radius: 6px;
                color: black;
            }
            .card.a {
                background: #f9f9f9;
            }
            .card.cr {
                background: #f9f9f9;
            }
            .card.r {
                background: #f9f9f9;
            }
            .card.ca {
                background: #f9f9f9;
            }
            .card.d {
                background: #f9f9f9;
            }
            .card.t {
                background: #f9f9f9;
            }
            .card h5 {
                margin: 0;
                font-size: 1.4rem;
                font-weight: normal;
            }
            .card span {
                font-size: 3rem;
                font-weight: 700;
                letter-spacing: 4px;
            }
            .card i {
                font-size: 3rem;
            }

            @media screen and (max-width: 991px){
                section#data{
                    padding-top: 9rem;
                }
            }

            @media screen and (max-width: 767px){
                section#data{
                    padding-top: 5rem;
                    padding-bottom: 5rem;
                }
                .board {
                    column-count: 2;
                }
                .card span {
                    font-size: 2.5rem;
                }
              }
              @media screen and (max-width: 450px){
                section#data{
                    padding-top: 2rem;
                    padding-bottom: 2rem;
                }
                .board {
                    column-count: 1;
                }
              }
          </style>
          <section id="data">
            <div class="container">
                <h2>COVID-19 Cases in ${this._coronaItem?.Country}</h2>
                <div class="board">
                    <div class="card a">
                    <h5>New Confirmed</h5>
                    <span>${this._coronaItem?.NewConfirmed}</span>
                    </div>
                    <div class="card ca">
                    <h5>Total Confirmed</h5>
                    <span>${this._coronaItem?.TotalConfirmed}</span>
                    </div>
                    <div class="card cr">
                    <h5>New Deaths</h5>
                    <span>${this._coronaItem?.NewDeaths}</span>
                    </div>
                    <div class="card d">
                    <h5>Total Deaths</h5>
                    <span>${this._coronaItem?.TotalDeaths}</span>
                    </div>
                    <div class="card r">
                    <h5>New Recovered</h5>
                    <span>${this._coronaItem?.NewRecovered}</span>
                    </div>
                    <div class="card t">
                    <h5>Total Recovered</h5>
                    <span>${this._coronaItem?.TotalRecovered}</span>
                    </div>
                </div>
            </div>
          </section>
        `;
    }
}
customElements.define('corona-report',CovidReportItem);