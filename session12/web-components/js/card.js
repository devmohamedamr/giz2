let template = document.createElement("template");

template.innerHTML = `
    <div>
        <h1></h1>
        <h2></h2>

    </div>

    <style>
        h1{
            color:red
        }
    </style>
`;



export default class card extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"});
        this.shadowRoot.append(template.content.cloneNode(true));

        this.shadowRoot.querySelector("h1").innerText = this.getAttribute("name");
        this.shadowRoot.querySelector("h2").innerText = this.getAttribute("age");

    }
}

customElements.define("card-component",card);

