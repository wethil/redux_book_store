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

  edit(book){
    console.log('book')
    console.log(book)
    this.props.edit(book)
  }

  render(){
    let titleInput;
    let descInput;
    console.log(this.props.books)
    return(
      <div>
        <h3>Books</h3>
        <ul>
          {this.props.books.map((b, i) => <li key={i}>{b.title} {b.desc} 
            <button onClick={ e => {
                e.preventDefault()
                this.edit(b)
              }
            } > change </button>
           </li> )}
        </ul>
        <div>
          <h3>Books Form</h3>
          <form onSubmit={e => {
            e.preventDefault();
            var input = {
              id:Date.now(),
              title: titleInput.value,
              desc : descInput.value
              };
            this.submitBook(input);
            e.target.reset();
          }}>
            <input type="text" name="title" placeholder='title'  ref={node => titleInput = node}/>
            <input type="text" name="desc" placeholder='desc' ref={node => descInput = node}/>
            
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
    createBook: book => dispatch(bookActions.createBook(book)),
    edit:book=> dispatch(bookActions.edit(book))
  }
};

// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(Book);