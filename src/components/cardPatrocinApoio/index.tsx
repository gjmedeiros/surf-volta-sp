import support from '../../assets/images/icons/support.svg'
import './style.css'

const PatrocinApoio = () => {
    return (
      <article className="card-barcas">
        <header>
            <img className='img-support' src={support} alt="" />
          <div className='apoiadors' >
              <h2>Apoiadpres</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente architecto ducimus porro deserunt fugiat maiores numquam necessitatibus suscipit nulla deleniti cumque fuga excepturi, eaque natus sit doloremque, pariatur dolor eveniet.</p>
          </div>
          <div className='patrocinadors' >
              <h2>Patrocinadores</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas vero tenetur, beatae, perferendis quas impedit nobis magnam quasi optio inventore itaque ex. Pariatur animi aliquid voluptas obcaecati, deleniti dolores quibusdam.</p>
          </div>
      </header>
      </article>
    )
   }

export default PatrocinApoio
