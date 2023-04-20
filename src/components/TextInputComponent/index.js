import {Component} from 'react'

import {
  BgMainContainer,
  InputContainer,
  InputElementCard,
  InputElement,
  Heading,
  SaveButton,
  TextSaved,
} from './styledComponents'

class TextInputComponent extends Component {
  state = {inputText: '', isSaved: false}

  changeTheInputText = event => {
    this.setState({inputText: event.target.value})
  }

  saveTheText = () => {
    this.setState(prevState => ({isSaved: !prevState.isSaved}))
  }

  editTextView = () => {
    this.setState(prevState => ({isSaved: !prevState.isSaved}))
  }

  renderInputView = () => {
    const {inputText} = this.state

    return (
      <InputContainer>
        <InputElement
          type="text"
          placeholder="Enter Text"
          onChange={this.changeTheInputText}
          value={inputText}
        />
        <SaveButton type="button" onClick={this.saveTheText}>
          Save
        </SaveButton>
      </InputContainer>
    )
  }

  renderTextView = () => {
    const {inputText} = this.state

    return (
      <InputContainer>
        <TextSaved>{inputText}</TextSaved>
        <SaveButton type="button" onClick={this.editTextView}>
          Edit
        </SaveButton>
      </InputContainer>
    )
  }

  render() {
    const {isSaved} = this.state

    return (
      <BgMainContainer>
        <InputElementCard>
          <Heading>Editable Text Input</Heading>
          {isSaved ? this.renderTextView() : this.renderInputView()}
        </InputElementCard>
      </BgMainContainer>
    )
  }
}

export default TextInputComponent
