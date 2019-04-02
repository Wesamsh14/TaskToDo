import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      lists : [],
      title : '',
      subject : ''
    };
  }

  hendleSubmit= event => {
    event.preventDefault();
    const newList ={
      titleList : this.state.title,
      subjectList : this.state.subject
    }
    this.state.lists.push(newList);
    this.setState({title:"" , subject:""});
    console.log(this.state.lists);
  }

  inputChanger= event => {
  this.setState({[event.target.name]: event.target.value});

  }
 

  deletTask = (event, index)=>{
    const lists= this.state.lists.filter((value,ind)=> ind!==index);
    this.setState({lists});
  }

  render() {
    const {title, subject} = this.state
    return (
      <div>
        <h1>Tasks To Do</h1>
        <div>
          <h2>New Task:</h2>
          <form onSubmit={e=>this.hendleSubmit(e)}>
            <input type='text' placeholder='Title' name='title' value={title} onChange={this.inputChanger} /><br/>
            <textarea name='subject' value={subject} onChange={this.inputChanger} placeholder='What I must do???'></textarea><br/>
            <input type='submit' value='add one'></input>
          </form>
        </div>
        <div>{
            this.state.lists.map((value, index) => {
              return (
                <div key={index}>
                  <ul>
                    <li>
                      <p>
                        <b>title : </b>{value.titleList}
                        <br />
                        <b>subject: </b>{value.subjectList}
                        <br />
                        <a href='#' onClick={(event)=>this.deletTask(event,index)}>Done</a>                    
                      </p>
                    </li>
                  </ul>
                </div>
              );
            })}
        </div> 
      </div>
    );
  }
}

export default App;
