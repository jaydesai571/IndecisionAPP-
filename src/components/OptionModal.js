import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal 
        isOpen={!!props.selectedOption}
        contentLabel="Selected Option"
        onRequestClose={props.handleClearSelectedOption}
        closeTimeoutMS={500}
        className="Modal"
    >
        <h3 className="modal_title">Selected Option</h3>
        {props.selectedOption && <p className="modal_body">{props.selectedOption}</p>}

        <button className="button" onClick={props.handleClearSelectedOption}>Close</button>
    </Modal>
);

export default OptionModal;