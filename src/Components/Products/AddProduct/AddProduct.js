import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import Button from '../../UI/Button/Button'
import Input from '../../UI/Input/Input';
import { updateObject, checkValidity } from '../../../shared/utility';
import * as actions from '../../../store/actions/index';


class AddProduct extends Component {
  state = { 
    controls: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'NAME'
        },
      value: '',
      validation: {
        required: 'true',
      },
      valid: false,
      touched: false,
      },
      description: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'DESCRIPTION'
        },
      value: '',
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
      },
      inventory: {
        elementType: 'input',
        elementConfig: {
          type: 'number',
          placeholder: 'INVENTORY'
        },
      value: '',
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
      },
      price: {
        elementType: 'input',
        elementConfig: {
          type: 'number',
          placeholder: 'PRICE'
        },
      value: '',
      validation: {
        required: true
      },
      valid: false,
      touched: false,
      },
      image: {
        elementType: 'image',
        elementConfig: {
          type: 'image',
          placeholder: 'Upload an Image'
        },
      value: '',
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
      },
    },
    added: false,
   }

  inputChangedHandler = (event, controlName) => {
    const updatedControls = updateObject(this.state.controls, {
      [controlName]: updateObject(this.state.controls[controlName], {
        value: event.target.value,
        valid: checkValidity(event.target.value, this.state.controls[controlName].validation),
        touched: true
      })
    });
    this.setState({controls: updatedControls})
  }

  picAddedHandler = (pictureURL) => {
    const updatedControls = updateObject(this.state.controls, {
      image: updateObject(this.state.controls["image"], {
        value: pictureURL,
        valid: true,
        touched: true
      })
    });
    this.setState({ controls: updatedControls})
  }

  submitHandler = (event) => {
    event.preventDefault();
    const product = {
      name: this.state.controls.name.value,
      description: this.state.controls.description.value,
      inventory: parseInt(this.state.controls.inventory.value, 10),
      price: parseInt(this.state.controls.price.value, 10),
      image: this.state.controls.image.value,
    }
    this.props.onAddProduct(product, this.props.token);
    this.setState({added: true})
  }

  onProductCancel = () => {
    this.props.history.goBack()
  }

  render() {

    const addedRedirect = this.state.added ? <Redirect to="/products"/> : null

    const formElementsArray = [];
    for (let key in this.state.controls) {
      formElementsArray.push({
        id: key,
        config: this.state.controls[key]
      })
    }

    const form = formElementsArray.map(formElement => (
      <Input 
        key={formElement.id}
        elementType={formElement.config.elementType}
        elementConfig={formElement.config.elementConfig}
        value={formElement.config.value}
        invalid={!formElement.config.valid}
        shouldValidate={formElement.config.validation}
        touched={formElement.config.touched}
        changed={(event) => this.inputChangedHandler(event, formElement.id)}
        picAdded={(url) => this.picAddedHandler(url)}
      />
    ))

    return (
      <div>
        {addedRedirect}
        <form onSubmit={this.submitHandler}>
          {form}
          <Button clicked={this.onProductCancel}  btnType="Danger">CANCEL</Button>
          <Button btnType="Success">SUBMIT</Button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddProduct: (product, token) => dispatch(actions.addProduct(product, token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);