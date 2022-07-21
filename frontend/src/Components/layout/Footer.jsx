
import "../../Components/layout/styles/Footer.css"

const Footer = (props) => {
    return (

        <footer>
            <div className="principal">
                <div className="links">
                    <h2>Enlaces de interes</h2>
                    <ul>
                        <li>
                            <a href="">Politicas de privacidad</a>
                        </li>
                        <li>
                            <a href="">Teminos y condiciones</a>
                        </li>
                        <div className="extra">
                            <label id="extra">
                                © 2021-2022</label>
                        </div>
                    </ul>
                </div>

                <div class="text">
                    <h2>GRACIAS POR VISITAR</h2>
                    <h3>GUITAR SHOP</h3>
                    <h3>Paga seguro </h3>
                    <img src="/img/pinpng.com-mercado-png-4241166.png" />
                </div>


                <div class="social-media-menu">
                    <h3>Siguenos en nuestras redes</h3>
                    <ul>
                        <li><a href=""><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href=""><i class="fab fa-instagram"></i></a></li>
                        <li><a href=""><i class="fab fa-twitter"></i></a></li>
                    </ul>
                </div>


                <div class="contact">
                    <div class="fixed-mail">
                        <a href="mailto:mtraiano76@gmail?subject=Asistencia" target="_blank"><i class="fa-regular fa-envelope"></i></a>
                    </div>
                    <div class="fixed-wp">
                        <a href="https://wa.me/+541132595762" target="_blank"><i class="fab fa-whatsapp"></i></a>
                    </div>
                </div>
            </div>
        </footer >
    );
}
export default Footer;