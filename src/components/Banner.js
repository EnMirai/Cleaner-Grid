import banner from "../assets/images/banner.png"
import bannerbg from "../assets/images/banner-bg.jpg"
const Banner = () => {
    return (
        <section className="siteBanner" style={{backgroundImage:`url(${bannerbg})`}}>
            <div className="container">
                <div className="contentWrapper">
                    <h1>Remote Energy Management:<span>Boosting Sustainability and Efficiency</span></h1>
                    <p>Solutions for monitoring and managing sustainable energy, driven by cutting-edge technologies on a single, user-friendly platform</p>
                    <button className="btn" onClick={() => {window.scrollTo({top: parseInt(document.querySelector("#stepform").offsetTop),behavior:"smooth"})}}>Save Now</button>
                </div>
                <figure className="bannerBlock">
                    <img src={banner} alt="Save Energy" className="bannerfigure" />
                </figure>
            </div>
        </section>
    )
}

export default Banner