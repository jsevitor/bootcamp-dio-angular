class CardNews extends HTMLElement {

    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.text = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__right");

        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo") || "assets/foto-default.jpg";
        newsImage.alt = "Foto da Noticia";
        cardRight.appendChild(newsImage);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles() {
        const style = document.createElement("style");
        style.textContent = `
            .card {
                width: 80%;
                display: flex;
                flex-direction: row;
            }
            
            .card__left,
            .card__right {
                box-shadow: 5px 5px 20px 2px rgba(0, 0, 0, 0.53);
                -webkit-box-shadow: 5px 5px 20px 2px rgba(0, 0, 0, 0.53);
                -moz-box-shadow: 5px 5px 20px 2px rgba(0, 0, 0, 0.53);
            }
            
            .card__left {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: 10px;
            }
            
            .card__left>a {
                margin-top: 15px;
                font-size: 25px;
                text-decoration: none;
                color: black;
            }
            
            .card__left>span {
                font-weight: 400;
            }
            
            .card__left>p {
                color: rgb(70, 70, 70);
            }
            
            .card__right>img {
                width: 250px;
                height: 100%;
            }
        `

        return style;
    }
}

customElements.define('card-news', CardNews);