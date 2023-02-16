let template = document.createElement("template");

template.innerHTML = `
    <div class='header'></div>

    <style>
        .header{
            width:100%;
            height:600px;
            background:blue;
        }
    </style>
`;



export default class home extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:"open"});
        this.shadowRoot.append(template.content.cloneNode(true))
    }
}


customElements.define("home-component",home);