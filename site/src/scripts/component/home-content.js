import home from '../../image/home2.webp'
class HomeContent extends HTMLElement{
    connectedCallback(){
        this.render();
    }
    render(){
        this.innerHTML = `
        <style>
            .home{
                background:url(${home}) no-repeat;
                background-size:cover;
                background-position: auto;
                background-attachment: fixed;
            }
            
            
            .home .content{
                text-align: center;
                margin-top: 13%;
            }
            
            .home .content h1{
                font-size: 7rem;
                color:var(--dark-blue);
            }
            
            .home .content h3{
                font-size: 5rem;
                color:var(--blue);
                font-weight: normal;
            }
            
            .home .content .btn{
                display: inline-block;
                padding:.7rem 2rem;
                color:#fff;
                background:var(--blue);
                border-radius: .5rem;
                box-shadow: 0 .5rem 1rem rgba(0,0,0,.1);
                margin-top: 1rem;
                font-size: 2rem;
            }
            
            .home .content .btn:hover{
                background:var(--dark-blue);
                letter-spacing: 1px;
                transition: ease 0.4s;
            }

            @media screen and (max-width: 991px){
                .home .content h1{
                    font-size: 4rem;
                }
                .home .content h3{
                    font-size: 3.5rem;
                }
                .home .content .btn{
                    font-size: 1.5rem;
                    padding:.6rem 1.8rem;
                }
                .home .content .btn:hover{
                    letter-spacing: 1px;
                }
            }

            @media screen and (max-width:767px){
                .home .content h1{
                    font-size: 3.5rem;
                }
                .home .content h3{
                    font-size: 3rem;
                }
                .home .content .btn{
                    font-size: 1.3rem;
                    padding:.5rem 1.6rem;
                }
                .home .content .btn:hover{
                    letter-spacing: .8px;
                }
            }

            @media screen and (max-width:450px){
                .home .content h1{
                    font-size: 2.7rem;
                }
                .home .content h3{
                    font-size: 2rem;
                }
                .home .content .btn{
                    font-size: 1.3rem;
                    margin-top: .4rem;
                    padding:.4rem 1.4rem;
                }
                .home .content .btn:hover{
                    letter-spacing: .6px;
                }
            }
        </style>
        <section class="home" id="home">
            <div class="content">
                <h1>Data Corona Virus In Indonesia</h1>
                <h3>stay home stay health</h3>
                <a href="#data" class="btn">Check Tracker</a>
            </div> 
        </section>
        `;
    }
}
customElements.define('home-content', HomeContent);