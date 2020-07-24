// Stateless Functionsl Component

class IndecisionApp extends React.Component {
    constructor (props) {
        super(props);
        this.handleDeleteOption = this.handleDeleteOption.bind(this),
        this.handlePick = this.handlePick.bind(this),
        this.handleAddOption = this.handleAddOption.bind(this),
        this.state = {
            options: props.options
        };
    }

    handleDeleteOption() {
        this.setState(() => {
            return {
                options: []
            };
        });
    }

    handlePick() {
        this.setState(() => {
            const randomNum = Math.floor(Math.random() * this.state.options.length)
            const option = this.state.options[randomNum];
                   
                alert(option);
            
        });
    }

    handleAddOption (option) {
        if (!option) {
            return 'Enter Valid value to add item';
        }
        else if(this.state.options.indexOf(option) > -1 ){
            return 'This Option already exists';
        }
        
        this.setState((prevState) => {
            return {
                options: prevState.options.concat([option])
            }
        })
        
    }

    render() {
        const title= 'Indecision App';
        const subtitle = 'Put your life in hands of computer';

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick = {this.handlePick}    
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOption = {this.handleDeleteOption}
                />
                <Addoption 
                    handleAddOption = {this.handleAddOption}
                />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
}

const Header = (props) => {
    return(
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: 'Some Default!'
};

// class Header extends React.Component {
//     render() {
//         console.log(this.props);
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         );
//     }
// }

const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePick} disabled={!props.hasOptions}>
            What should I do
            </button>
        </div>
    );
};
// class Action extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>
//                 What should I do
//                 </button>
//             </div>
//         );
//     }
// }

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOption}>Remove ALL</button>
            {
                props.options.map((option) => <Option key={option} optionText={option} />)
            }
        </div>
    );
};
// class Options extends React.Component {
    
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handleDeleteOption}>Remove ALL</button>
//                 {
//                     this.props.options.map((option) => <Option key={option} optionText={option} />)
//                 }
//             </div>
//         );
//     }
// }

const Option = (props) => {
    return (
        <div>Option: {props.optionText}</div>
    );
};
// class Option extends React.Component {
//     render() {
//         return (
//             <div>Option: {this.props.optionText}</div>
//         );
//     }
// }

class Addoption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    handleAddOption (e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(() => {
            return {
                error: error
            };
        });
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type='text' name='option' />
                    <button>Add New Option</button>
                </form>
            </div>
        );
    }
}

// const jsx = (
//     <div>
//         <Header />
//         <Action />
//         <Options />
//         <Addoption />
//     </div>
// );

// const User = (props) => {
//     return(
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// };

ReactDOM.render(<IndecisionApp options={['Devils den', 'second District']} />,document.getElementById('app'))