import ListGroup from "./components/ListGroup";
import Alert from "./components/alert";
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
return (
<div>
  
<ListGroup items = {items} heading = "Anime" onSelectItem=  {handleSelectItem} />
  
<Alert>
    <span>
      mugiwara no luffy
    </span>

  </Alert>
  </div>
  );
}


export default App;