function MuseumObject({artifact}){
    if (!artifact){
        return <h1>No artifact Selected</h1>
    }

    if (artifact.message){
        return <h1>Can't find object with ID {artifact.objectID}</h1>
    }

    function Image() {
        if(artifact.image) {
            return <img src={artifact.image} alt={artifact.name} />
        } else {
            return <h3>An Object: {artifact.name}</h3>
        }
    }

    function Artist(){
        if (artifact.image) {
            if (!artifact.artist){
                return <h4>No artist information in API</h4>
            } else{
                return <h4>By {artifact.artist}</h4>
            }
        } else {
            if (!artifact.artist){
                return <h3>No artist information in API</h3>
            } else{
                return <h3>By {artifact.artist}</h3>
            }
        }
    }
    function Culture(){
        if (artifact.culture){
            return <p>From {artifact.culture} Culture</p>
        } else if (!artifact.culture){
            return <p>No information on the object's culture</p>
        }
    }

    function Dimensions(){
        if (artifact.dimensions){
            return <p>Dimensions: {artifact.dimensions}</p>
        } 
    }


    return (
        <div id='artifact'>
            <h2>{artifact.title}</h2>
            <Image></Image>
            <Artist></Artist>
            <Culture></Culture>
            <Dimensions></Dimensions>
            

        </div>
    )
}

export default MuseumObject