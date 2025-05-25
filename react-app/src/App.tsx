// import Message from "./message"
// function App(){
//   return <div className=""><Message /></div>
// }
// export default App;

function Message (){
  const name = 'harrison';
  if(name){
    return <h1>hello {name}</h1>
  }
    return <h1>hello world</h1>
}
export default Message;
