class FooterContent extends HTMLElement{
    connectedCallback(){
        this.render();
    }
    render(){
        this.innerHTML = `
        <style>
            .footer{
                background-size: cover;
                background-position: center;
                background-attachment: fixed;
            }
            
            .footer .credit{
                font-size: 2rem;
                font-weight: normal;
                text-align: center;
                border-top: .1rem solid rgba(0,0,0,.1);
                padding: 1rem 0rem;
                color:var(--dark-blue);
            }
            
            .footer .credit a{
                color:var(--blue);
            }

            @media screen and (max-width: 990px){
                .footer .credit{
                    padding: 5px 0px;
                    font-size: 1.5rem;
                }
            }
            @media screen and (max-width: 767px){
                .footer .credit{
                    padding: 3px 0px;
                    font-size: 1.4rem;
                }
            }
            @media screen and (max-width: 450px){
                .footer .credit{
                    padding: 1px 0px;
                    font-size: 1.2rem;
                }
            }
        </style>
        <div class="footer">
            <h1 class="credit"> Dibuat oleh <a href="#">Korban PPKM</a> &copy; copyright @ 2021 </h1>
        </div>
        `;
    }
}
customElements.define('footer-content', FooterContent);