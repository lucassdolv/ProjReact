import "./banner.css"
const Banner = ({titulo, subTitulo}) => {
    return (
        <div className="banner-container">
            <h1 className="title-banner">{titulo}</h1>
            <h2 className="text-banner">{subTitulo}.</h2>
            <img src="https://as1.ftcdn.net/v2/jpg/07/22/99/72/1000_F_722997203_Nv7Ta14wF9aBZy0MAYoMlLEEI1izCMhM.jpg" alt="" className="banner-img" />
        </div>
    )
}
export default Banner;