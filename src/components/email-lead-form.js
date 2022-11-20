class EmailLeadForm extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            hasFilledContact:true
        };
    }
    render(){
        if(this.state.hasFilledContact)
            return <a href="#" class="c-dark button button-green"><span>Book Consultation </span></a>;
        else
            return <h1>Thank you very much contacting us.</h1>;
    }
}

const domContainer = document.getElementById('email-lead-form');
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(EmailLeadForm));