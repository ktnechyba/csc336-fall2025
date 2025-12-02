function CatInfo({cats}) {
    function ShowImage(){
        if (cats.upload=="Yes"){
            return <img src="/vite.svg"></img>
        }
    }
    return (
        <div key={cats.time}>
            <ShowImage></ShowImage>
            <h2>Description: {cats.size} cat with {cats.fur} {cats.color} hair</h2>
        </div>
    )
}

export default CatInfo