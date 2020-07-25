'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
    _inherits(Counter, _React$Component);

    function Counter(props) {
        _classCallCheck(this, Counter);

        var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

        _this.handleAddOne = _this.handleAddOne.bind(_this);
        _this.handleSubOne = _this.handleSubOne.bind(_this);
        _this.handleReset = _this.handleReset.bind(_this);
        _this.state = {
            count: 0
        };
        return _this;
    }

    _createClass(Counter, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            try {
                var json = localStorage.getItem('count');
                var count = JSON.parse(json);
                if (count) {
                    this.setState(function () {
                        return {
                            count: count
                        };
                    });
                }
            } catch (e) {}
            console.log('Mount');
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            var json = JSON.stringify(this.state.count);
            localStorage.setItem('count', json);

            console.log('Update');
        }
    }, {
        key: 'compnentWillUnMount',
        value: function compnentWillUnMount() {
            console.log('Unmount');
        }
    }, {
        key: 'handleAddOne',
        value: function handleAddOne() {
            // this.state.count = this.state.count + 1;
            // console.log(this.state.count);
            this.setState(function (prevState) {
                return {
                    count: prevState.count + 1
                };
            });
        }
    }, {
        key: 'handleSubOne',
        value: function handleSubOne() {
            this.setState(function (prevState) {
                return {
                    count: prevState.count - 1
                };
            });
        }
    }, {
        key: 'handleReset',
        value: function handleReset() {
            this.setState(function () {
                return {
                    count: 0
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Count: ',
                    this.state.count
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleAddOne },
                    '+1'
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleSubOne },
                    '-1'
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleReset },
                    'reset'
                )
            );
        }
    }]);

    return Counter;
}(React.Component);

ReactDOM.render(React.createElement(Counter, { count: 5 }), document.getElementById('app'));

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
