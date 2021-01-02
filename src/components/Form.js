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

class Form extends React.Component{
    constructor(){
        super()
        this.state={
            numAdult: 0, 
            numChild:0, 
            numYA: 0,
            timeAdult:0, 
            timeChild:0, 
            timeYA:0
        }
    }


    handleChange (e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render(){
        return(
            <InputForm>
                <label>Number of adult books</label>
                <Input
                placeHolder="number of adult books"
                value={this.state.numAdult}
                name="numAdult"
                onChange={(e)=>this.handleChange(e)}
                />

            <label>Number of YA books</label>
                <Input
                placeHolder="number of young adult books"
                value={this.state.numYA}
                name="numYA"
                onChange={(e)=>this.handleChange(e)}
                />

            <label>Number of Children's books</label>
                <Input
                placeHolder="number of children's books"
                value={this.state.numChild}
                name="numChild"
                onChange={(e)=>this.handleChange(e)}
                />  
               
            </InputForm>
        )
    }
}

export default Form;