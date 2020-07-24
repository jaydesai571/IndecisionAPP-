class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
        this.state = {
            togglevalue: true,
            text: 'Hey. These are some details you can see now!'
        };
    }
    handleToggle () {
        if(this.state.togglevalue) {
            this.setState((prevState) => {
                return {
                    togglevalue: false,
                    text: ''
                    
                };
            });
            
        }
        else{
            this.setState((prevState) => {
                return {
                    togglevalue: true,
                    text: 'Hey. These are some details you can see now!'
                };
                
            });
        }

        
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle App</h1>
                <button onClick={this.handleToggle}>{this.state.togglevalue == true ? 'Hide Text' : 'Show Text'}</button>
                <p>{this.state.text}</p>
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// const app = {
//     toggle: true,
//     text: 'Hey. These are some details you can see now!'
// };
// const show = (e) => {
//     e.preventDefault();
//     if (app.toggle) {
//         app.toggle = false;
//         app.text = ' ';
//         console.log(app.toggle, app.text);
//     }
//     else {
//         app.toggle = true;
//         app.text = 'Hey. These are some details you can see now!';
//         console.log(app.toggle, app.text);
//     }
//     render();
// }

// const render = () => {
//     const template = (
//         <div>
//             <h1>Toggle App</h1>
//             <button onClick={show}>{app.toggle == true ? 'Hide Text' : 'Show Text'}</button>
//             <p>{app.text}</p>
//         </div>
//     )
//     const appRoot = document.getElementById('app');

//     ReactDOM.render(template, appRoot);
// };

// render();