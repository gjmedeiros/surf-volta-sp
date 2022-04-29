import facebook from '../../../assets/images/icons/facebook.svg'
import instagram from '../../../assets/images/icons/instagram.svg'
import whatsapp from '../../../assets/images/icons/whatsapp.svg'

import './styles.css'

const Footer = () => {
  return (
    <footer className="block-footer">
      <strong>Siga nas Redes Sociais</strong>

      <div className="block-icons">
        <div className="block-icons-sociais">
          <button type="button" className="facebook">
            <img src={facebook} alt="facebook" />
          </button>
          <button type="button" className="instagram">
            <img src={instagram} alt="instagram" />
          </button>
        </div>

        <button type="button" className="block-icons-group">
          <img src={whatsapp} alt="whatsapp" />
          <strong>Grupo do WhatsApp</strong>
        </button>
      </div>
    </footer>
  )
}
export default Footer
