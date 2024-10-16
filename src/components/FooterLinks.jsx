const styles = {
    imgSize : {
        width: "50px",
        height: "50px"
    }
}
function FooterLinks() {
    
    const routeChange = (site) => {
        let path = '';
       if (site === "github") {
        path = `https://github.com/melanieprimpas`;
       } else if (site === "linkedin") {
        path = `https://www.linkedin.com/in/melanie-primpas-b5b49715b`;
       } else {
        path = `https://x.com/MPrimpas26015`
       }
       window.open(path, '_blank'); 
    }

    return (
        <div className="footer-links">

            <section onClick={() => routeChange("github")}>
            <img src = "/assets/github-mark.svg" alt="github" style = {styles.imgSize}/>
            </section> 
            <section onClick={() => routeChange("linkedin")}>
            <img src = "/assets/In-White-96.png" alt="linkedin" style = {styles.imgSize}/>
            </section>   
            <section onClick={() => routeChange("twitter")}>
            <img src = "/assets/logo-black.png" alt="twitter" style = {styles.imgSize}/>
            </section>     
        </div>
    )
}
export default FooterLinks;