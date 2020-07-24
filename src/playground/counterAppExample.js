class Counter extends React.Component {
    constructor (props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleSubOne = this.handleSubOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: props.count
        };
    }

    handleAddOne() {
        // this.state.count = this.state.count + 1;
        // console.log(this.state.count);
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }

    handleSubOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }

    handleReset() {
        this.setState(() => {
            return {
                count: 0
            };
        });
    }

    render() {

        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleSubOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}

Counter.defaultProps = {
    count: 0
}

ReactDOM.render(<Counter count={5} />, document.getElementById('app'));

// let count = 0;
// const someId = 'my-id'
// const addOne = () => {

//     count++;
//     console.log('addOne', count);
//     renderCounterApp();
// };

// const minusOne = () => {
//     count--;
//     console.log('minusOne', count);
//     renderCounterApp();
// };

// const reset = () => {
//     count = 0;
//     console.log('Reset Clicked', count);
//     renderCounterApp();
// };

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button id={someId} className="button-1" onClick={addOne}>Click for +1</button> <br/>
//             <button id={someId} className="button-2" onClick={minusOne}>Click for -1</button> <br/>
//             <button id={someId} className="button-3" onClick={reset}>Clock to Reset</button>
//         </div>
//     );
//     console.log(templateTwo);
//     const appRoot = document.getElementById('app');

//     ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();

