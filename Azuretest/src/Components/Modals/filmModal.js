import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class FilmModal extends Component {
    constructor (props){
        super (props);
        this.state = {
            show: false
        };
        this.toggle = this.toggle.bind(this);
    }

    componentDidUpdate (prevProps) {
        if(prevProps.show !== this.props.show){
            this.setState({show:this.props.show});
        }
    }

    toggle() {
        this.props.closeModal();
      }


    render(){
        return (
            <Modal isOpen={this.state.show} toggle={this.toggle} className={'filmModalClass'}>
            <ModalHeader toggle={this.toggle}>{'Films'}</ModalHeader>
            <ModalBody>
            {this.props.films.data.map((c, k) =>
                <div key={k} className='filmCard'>
                <div className='row'>
                    <div className='col-2'>
                        <label><b>{'Title :'}</b></label>
                    </div>
                    <div className='col-10'>{c.title}</div>
                    <div className='col-2'>
                        <label><b>{'Description :'}</b></label>
                    </div>
                    <div className='col-10'>{c.opening_crawl}</div>
                    <div className='col-2'>
                        <label><b>{'Diretor : '}</b></label>
                    </div>
                    <div className='col-10'>{c.director}</div>
                    <div className='col-2'>
                        <label><b>{'Producer : '}</b></label>
                    </div>
                    <div className='col-10'>{c.producer}</div>
                    <div className='col-2'>
                        <label><b>{'Release Date : '}</b></label>
                    </div>
                    <div className='col-10'>{c.release_date}</div>
                </div>
                </div>
            )}
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={this.toggle}>{'Ok'}</Button>
            </ModalFooter>
            </Modal>
            )
    }
}


FilmModal.propTypes = {
    show: PropTypes.bool
}

FilmModal.defaultProps = {
    peoples:false
}

export default FilmModal;