import ListGroup from "./components/ListGroup";

function App(){

    let items = [
        "One piece",
        "Attack on Titan",
        "Naruto",
        "Jujutsu Kaisen",
        "FMAB",
      ];

const handleSelectItem = (item:string) => {
  console.log(item);
}
return <div><ListGroup items = {items} heading = "Anime" onSelectItem={handleSelectItem} /></div>
}


export default App;