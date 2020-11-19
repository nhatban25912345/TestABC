const $template = document.getElementById("quiz-template");

export class Quiz extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild($template.content.cloneNode(true)); 

        this.$question = this.shadowRoot.getElementById("question");
        this.$answer1 = this.shadowRoot.getElementById("answer1")
        this.$answer2 = this.shadowRoot.getElementById("answer2")
        this.$answer3 = this.shadowRoot.getElementById("answer3")
        this.$answer4 = this.shadowRoot.getElementById("answer4")

    }
    static get observedAttributes(){
        return ["question","answer1","answer2","answer3","answer4"];
    }

    attributeChangedCallback(name,oldvalue,newValue){
        console.log("aahihi");
        console.log(name);
            switch (name) {
                
                case 'question':
                    this.$question.innerHTML = newValue;
                    break;
    
                case 'answer1':
                    this.$answer1.innerHTML = newValue;
                    break;
    
                case 'answer2':
                    this.$answer2.innerHTML = newValue;
                    break;
                
                case 'answer3':
                    this.$answer3.innerHTML = newValue;
                    break;

                case 'answer4':
                    this.$answer4.innerHTML = newValue;
                    break;
            }
        }
}
window.customElements.define("quiz-template",Quiz);