class HeaderContent extends HTMLElement{
    connectedCallback(){
        this.render();
    }
    set coronaItem(item){
        this._coronaItem = item;
        this.render();
    }
    render(){
        const date = new Date();
        const months = ['Januari','Februari','Maret','Aprl','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
        this.innerHTML = `
            <style>
                header{
                    width:100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    position: fixed;
                    top:0; left:0;
                    padding:2rem;
                    font-size: 2.5rem;
                    color:var(--blue);
                    background-color: #f9f9f9;
                }
                
                header span{
                    color:var(--dark-blue);
                }
            
                header.sticky{
                    background-color: var(--dark-blue);
                    padding: 2rem;
                }
                
                header.sticky a, 
                header.sticky span{
                    color: #f9f9f9;
                }

                @media screen and (max-width: 991px){
                    header,
                    header.sticky{
                        padding: 10px 20px;
                        font-size: 2rem;
                    }
                }

                @media screen and (max-width: 767px){
                    header, header.sticky{
                        padding: 5px 15px;
                        font-size: 1.8rem;
                    }
                }

                @media screen and (max-width: 450px){
                    font-size: 1.6rem;
                    padding: 2px 10px;
                }
            </style>
            <header>
                <a href="#home">Check<span>vid</span></a>
                <span>${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}</span>
            </header>
        `;
    }
}
customElements.define('header-content',HeaderContent);