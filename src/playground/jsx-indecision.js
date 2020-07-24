console.log('App.js is running');

// JSX -- Javascript XML

const app = {
    title: 'Indecision App',
    subtitle: 'REACT WEB APP',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option) {
        app.options.push(option);
        console.log("Form Submited", option);
        e.target.elements.option.value = '';
        renderApp();    
    }
};

const removeAll = (e) => {
    e.preventDefault();
    app.options = [];
    console.log("All data removed from the APP", app.options);
    renderApp();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
    console.log(randomNum);
};

const appRoot = document.getElementById('app');

const renderApp = () => { 
    const template = (
        <div>
            {app.title && <h1> {app.title}</h1>}
            <p>Author: {app.subtitle}</p>
            <p>{app.options.length   > 0 ? 'Number of options are' : 'No options'}</p>
            <p>{app.options.length}</p>
            <button disabled={app.options.length === 0 } onClick={onMakeDecision}>What should I do</button>
            <button onClick={removeAll}>Remove ALL</button>
            <ol>
                {/* Data are fetched from the array of app object into options properties */}
                {
                    app.options.map((option) => {
                        return <li key={option}>This are your Options are: {option}</li>
                    })
                }
            </ol>

            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add option</button>
            </form>
        </div>
    );



    ReactDOM.render(template, appRoot);
};

renderApp();