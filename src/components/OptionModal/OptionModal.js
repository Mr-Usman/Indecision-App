import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.hideModal}
    contentLabel="Selected Option">
        <h3>selectedOption</h3>
        {props.selectedOption && <p>{props.selectedOption}</p> }
        <button onClick={(ev) => props.hideModal(ev)}>OK</button>
    </Modal>
)

export default OptionModal;