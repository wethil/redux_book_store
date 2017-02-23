import React, { Component } from 'react'
import EditBook from './EditBook.js'
import { connect } from 'react-redux';
import * as bookActions from '../../actions/bookActions';


class SingleBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        }
    }


    edit(book) {
        console.log('book')
        console.log(book)
        this.props.edit(book)
        this.setState({ editing: false })
    }

    render() {
        const {id, title, desc} = this.props.book;

        let element;

        if (this.state.editing) {
            element = <EditBook book={this.props.book} onEdit={(book) => (
                this.edit(book)
            )} />
        } else {
            element = (<h3 key={id}>{title} {desc}
                <button className='btn btn-primary' onClick={() => this.setState({ editing: true })} > change </button>

            </h3>)
        }


        return (
            <div> {element} </div>
        )
    }




}

const mapDispatchToProps = (dispatch) => {
    return {
       

        edit: book => dispatch(bookActions.edit(book))
    }
};

// Use connect to put them together
export default connect(undefined, mapDispatchToProps)(SingleBook);