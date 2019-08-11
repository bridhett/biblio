import React from 'react';
import {Button, Checkbox} from 'antd'
import './App.css';

class App extends React.Component {

  state = {
    books: [{
      bookName: 'Call Me By Your Name',
      read: false, 
      readBy:''
    }]
  }

  render() {
    const {books} = this.state
    return (
      <div className="App">
        <header className="App-header">
          biblio 
        </header>
        <Button>add a book</Button>
        {books.map((t,i) => {
          return <Book key ={i} {...t}
            bookRead={(e)=>console.log(e)}
          />
        })}
      </div>
    );
  }
}

function Book({bookName, read, readBy, bookRead, setReadBy}) {
  return (<div className="book">
    <Checkbox checked={read} onChange={bookRead} />
    <span className="book-title">{bookName}</span>
    <span className="book-readby">{readBy}</span>
  </div>)
}

export default App;
