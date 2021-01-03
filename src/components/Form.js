import React from 'react'; 
import styled from 'styled-components';

const InputForm = styled.form`
    width: 100%;
    padding: 8px;
`

const Input = styled.input`
    display: block;
    border: 1px solid lightgrey;
    border-radius: 2px;
    padding: 8px;
    margin: 8px;
`
const Label = styled.label`
  color: #87ceeb;
  font-weight: 200;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`

const Button = styled.button`
  background-color: white;
  color: #87ceeb;
  border: 2px solid #87ceeb;
  border-radius: 4px;
  font-family: Arial, Helvetica, sans-serif;
`

const CenterDiv = styled.div`
  text-align: center;
`
class Form extends React.Component{
    constructor(){
        super()
        this.state={
            book: 0, 
            wordsPerMinute: 0, 
            time:''
        }
    }



    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    calculateTime = () => {
        let wpm = this.state.wordsPerMinute 
        let books = this.state.book
        let minutes = Math.floor((books * 90000)/wpm) || 0
        let hours = Math.floor(minutes/60) || 0
        let days = (hours/24).toFixed(1) || 0

        this.setState({
            time:`It'll take about ${minutes} minutes to get through your TBR list if you read continuously. That translates to ${hours} hours or about ${days} days.`
        })
            
        
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.calculateTime()
    }


    render(){
        return(
            <div>
            <InputForm>
                
               <Label>Number of books on your TBR</Label>
               <Input
               placeHolder="enter the number of books"
               type="number"
               name="book"
               value={this.state.book}
               onChange={ (e) => this.handleChange(e) }
               />
               <Label>Reading Speed (wpm)</Label>
               <Input
               placeHolder="enter the number of words you read per minute (wpm)"
               type="number"
               name="wordsPerMinute"
               value={this.state.wordsPerMinute}
               onChange={ (e) => this.handleChange(e) }
               />

          
            </InputForm>
            <CenterDiv>
            <Button onClick={this.calculateTime}>Calculate</Button>
            <p>{this.state.time ? this.state.time : null}</p>
            </CenterDiv>
            </div>
        )
    }
}

export default Form;