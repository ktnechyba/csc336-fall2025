import './About.css'
function About(){
    return (
        <div className='background about-page'>
            <h1>About</h1>
            <div className='about-card'>
                <h2 className='topic'>What is this website about?</h2>
                <p>This website explores react.js and its uses of routers, fetch API calls, and components.</p>
            </div>
            <div className='about-card'>
                <h2 className='topic'>Why ask about desserts?</h2>
                <p>
                    Nothing says nostalgia like a sweet treat. Every culture has some type of dessert, whether it be too sweet or a little savory.
                    These desserts are a wonderful way to experience someone else's culture. Additionally, I love a sweet treat, and it's fun to see
                    which places have similar desserts, flavors, and methods.
                </p>
            </div>
            <div className='about-card'>
                <h2 className='topic'>Why use the Met API?</h2>
                <p>
                    The card above discusses the "Why desserts?". In short, a wonderful, fun way to experience other cultures. While very controversial,
                    another way to experience another country and people's culture is through a museum. While desserts showcase one part of a culture,
                    artifacts and other objects in a museum display another. Additionally, I think it's fascinating to highlight the difference between 
                    the act of eating and recreating a recipe to participate in a culture (most often willingly shared) vs going to a museum and looking 
                    at the exhibits (where who knows how many objects are being asked to return to their home). 
                </p>
                <p>
                    While this API was last updated in 2020, it still shows many objects that are or were displayed there. Plus, it costs money to see them 
                    at the Met if you are not a New York resident or a student in New York, New Jersey, or Connecticut. This API is FREE to use!
                </p>
            </div>

                
            
        </div>
    )
}

export default About