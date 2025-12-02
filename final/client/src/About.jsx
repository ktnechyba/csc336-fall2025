import './About.css'
function About(){
    return (
        <div className='background about-page'>
            <h1>About</h1>
            <div className='about-card'>
                <h2 className='topic'>What is this website about?</h2>
                <p>This website allows users to document cats they've seen in the DMV Area. While it is not limited to said area (due to being able to freely zoom in and out), it is intended for documenting cats in that specific region.</p>
            </div>
            <div className='about-card'>
                <h2 className='topic'>How to Use</h2>
                <p>
                    When clicking "Home," the user will be directed to a page with a form. This form gathers information on the cat that was spotted. The user is prompted for size, color, and whether there was a collar on the cat or not. Additionally, if the user was able to take a photo, they will be able to upload the image of the cat. The last item on the form is an interactive map. Users will locate the rough location of where they spotted the cat. Once submitting the form, the cat will be added to the DC Cats page and onto the map below the form which depicts other cats that have been sighted.
                </p>
            </div>
            <div className='about-card'>
                <h2 className='topic'>Why Cats?</h2>
                <p>
                    The creator of this website loves cats and would love to either a) help people find their lost cats or b) let others know that a cat is around if the cat escapes before anything else can be done to help it.
                </p>
            </div>

                
            
        </div>
    )
}

export default About