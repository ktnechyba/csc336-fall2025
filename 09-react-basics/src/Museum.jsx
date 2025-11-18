import { useState, useEffect } from 'react' 
import './Museum.css'
import MuseumObject from './MuseumObject';

function Museum(){
    const [artifactID, setArtifactID] = useState(100);
    const [artifact, setArtifact] = useState("");

    
    function fetchRandomArtifact(){
        
        fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artifactID}`)
        .then(res=> res.json())
        .then(data => {
          console.log(data)
            if ('message' in data){
              console.log("Message is present!")
              setArtifact({
                objectID: artifactID,
                message: data.message})
            } else {
              console.log("everything is fine")
              setArtifact({
                objectID: data.objectID,
                image: data.primaryImageSmall,
                name: data.objectName,
                title: data.title,
                culture: data.culture,
                dimensions: data.dimensions,
                artist: data.artistDispayName,
                message: data.message ? data.message: ""
              })
            }
          })
          .catch(err => {
            // If the fetch fails, set the Pokemon state to null.
            setArtifact("");
          });
    }

    function id(){
        setArtifactID(Math.floor(Math.random()*498582) +1)
    }


    //use button to get a random object id
    useEffect(()=> {
        fetchRandomArtifact()
      }, [artifactID]); //run when the object id changes

    return (
        <div className='background museum-page'>
          <h1>Artifacts in the Metropolitan Museum of Art</h1>
            <button onClick={id} id='random-num'>Peruse an Object at the Metropolitan Museum of Art</button>

            <MuseumObject artifact={artifact}></MuseumObject>

        </div>
    )
}

export default Museum