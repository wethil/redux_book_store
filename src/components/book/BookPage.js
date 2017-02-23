import React from 'react';
import { connect } from 'react-redux';
import * as bookActions from '../../actions/bookActions';

class Book extends React.Component{
  constructor(props){
    super(props);
  }

  submitBook(input){
    this.props.createBook(input);
  }

  render(){
    let titleInput;
    console.log(this.props.books)
    return(
      <div>
        <h3>Books</h3>
        <ul>
          {this.props.books.map((b, i) => <li key={i}>{b.title}</li> )}
        </ul>
        <div>
          <h3>Books Form</h3>
          <form onSubmit={e => {
            e.preventDefault();
            var input = {title: titleInput.value};
            this.submitBook(input);
            e.target.reset();
          }}>
            <input type="text" name="title" ref={node => titleInput = node}/>
            <input type="submit" />
          </form>
        </div>
      </div>
    )
  }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    // avaiable by this.props.books
    books: state.books
  }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
  // avaiable by this.props.createBook
    createBook: book => dispatch(bookActions.createBook(book))
  }
};

// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(Book);