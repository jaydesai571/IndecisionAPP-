// Stateless Functionsl Component

class IndecisionApp extends React.Component {
    constructor (props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this),
        this.handlePick = this.handlePick.bind(this),
        this.handleAddOption = this.handleAddOption.bind(this),
        this.handleDeleteOption = this.handleDeleteOption.bind(this),
        this.state = {
            options: props.options
        };
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options) {
                this.setState(() => ({
                    options
                }));
            }
        }catch(e) {
            //DO NOTHING
        }
        
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json)
            console.log('saving');
        }
    }
    componentWillUnmount() {
        console.log('Component Will Unmount');
    }

    handleDeleteOptions() {
        this.setState(() => ({options: []}));
    }
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option;
            })
        }))
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
                    handleDeleteOptions = {this.handleDeleteOptions}
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
            <button onClick={props.handleDeleteOptions}>Remove ALL</button>
            {props.options.length === 0 && <p>Please add options to get Started!!</p>}
            {
                props.options.map((option) => (
                    <Option 
                    key={option} 
                    optionText={option} 
                    handleDeleteOption = {props.handleDeleteOption}
                />))

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
        <div>Option: {props.optionText}
            <button 
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText);
                }}
            >
            Remove
            </button>
        </div>
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
        this.setState(() => ({error: error}));
        if(!error) {
            e.target.elements.option.value = '';
        }
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