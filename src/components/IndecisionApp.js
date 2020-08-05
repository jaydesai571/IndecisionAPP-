import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header'

export default class IndecisionApp extends React.Component {
    state = {
        options: []
    };
    handleDeleteOptions = () => {
        this.setState(() => ({options: []}));
    };
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option;
            })
        }))
    };
    handlePick = () => {
        this.setState(() => {
            const randomNum = Math.floor(Math.random() * this.state.options.length)
            const option = this.state.options[randomNum];
                   
                alert(option);
            
        });
    };

    handleAddOption = (option) => {
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
    };

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
                <AddOption 
                    handleAddOption = {this.handleAddOption}
                />
            </div>
        );
    }
}