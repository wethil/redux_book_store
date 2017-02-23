import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as bookActions from '../../actions/bookActions';

class EditBook extends Component {
    constructor(props){
    super(props);
  
  }



  render() {
      let titleInput;
      let descInput;
      const {book} = this.props; 
      const {id, title , desc} =book;

      return (
         <div>
            <input type="text" className='form-control' defaultValue={title} placeholder='title'  ref={node => titleInput = node}/>
            <input type="text" className='form-control'  defaultValue={desc} placeholder='desc' ref={node => descInput = node}/>
            <button onClick={ () => {
                  var input = {
                    id:id,
                    title: titleInput.value,
                    desc : descInput.value
              };
                this.props.onEdit(input)
              }
            } > edit </button>
         </div>
      )
}




}



// Use connect to put them together
export default EditBook