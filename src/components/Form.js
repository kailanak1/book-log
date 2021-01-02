import React from 'react'; 
import styled from 'styled-components';

const Form = styled.form`
    width: 100%;
    padding: 8px;
`

const Input = styled.input`
    display: block;
    border: 1px solid lightgrey;
    border-radius: 2px;
    width: 750px;
    height: 500px;
    padding: 8px;
    margin: 8px;
`

class Form extends React.Component{
    constructor(){
        state={
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
            e.target.name: e.target.value
        })
    }


    render(){
        return(
            <Form>
                <Input
                type="number of adult books"
                value={this.state.numAdult}
                name="numAdult"
                onChange={(e)=>this.handleChange(e)}
                />
               
            </Form>
        )
    }
}

export default Form;