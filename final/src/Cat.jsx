import './Cat.css'
import { useEffect, useState } from 'react';
import SimpleMap from './SimpleMap';
function Cat(){
    const [imagePresent, setImagePresent] = useState(false)
    const [location, setlocation] = useState({"lat":'', "lng":''})

    // set image present when yes radio = pressed
    return (
        <>
            <div id='addCat'>
                <h1>Add a Cat</h1>
                <form action="">
                    <label>
                        What color was the cat?
                        <input type="text" required/>
                    </label>

                    <label htmlFor='size'>
                        How big was the cat?
                        <select name="size" id="cat-size" required>
                            <option value="xsmall">Extra Small</option>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                            <option value="xlarge">Extra Large</option>
                        </select>
                    </label>
                    <label htmlFor='fur'>
                        What was the hair length?
                        <select name="fur" id="cat-fur" required>
                            <option value="short">Short</option>
                            <option value="long">Long</option>
                            <option value="none">No</option>

                        </select>
                    </label>
                    <fieldset id="collar">
                        <legend>Did the cat have a collar?</legend>

                        <label htmlFor="no-collar">
                            <input type="radio" name="cat-collar" id="no-collar"/>
                            No
                        </label>
                    
                        <label htmlFor="yes-collar">
                            <input type="radio" name="cat-collar" value="yes" id="yes-collar"/>
                            Yes
                        </label>                    
                    </fieldset>
                    {/* <label htmlFor="img-upload">
                        Upload image of the Cat you saw
                        <input type="file" name='img-upload'/>
                    </label> */}
                    {/* <fieldset id="upload-img">
                        <legend>Do you have an image of the sighted cat?</legend>

                        <label htmlFor="no-img">
                            <input type="radio" name="cat-img" id="no-img"/>
                            No
                        </label>
                    
                        <label htmlFor="yes-img">
                            <input type="radio" name="cat-img" value="yes" id="yes-img"/>
                            Yes
                        </label>                    
                    </fieldset> */}
                    <div id='map-loc'>
                        <label>
                            Where did you see the cat?
                            <SimpleMap setlocation={setlocation}/>
                        </label>     

                        <div id='coordinates'>
                            <label>Latitude:</label>
                                <input type="text" value={location.lat} readOnly />

                            <label>Longitude:</label>
                            <input type="text" value={location.lng} readOnly />
                        </div>
                    </div>

                    <button type='submit'>Add Cat</button>
                </form>
            </div>
        </>
    )
}

export default Cat