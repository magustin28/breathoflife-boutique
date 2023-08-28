import style from './pages.module.css';

const About = () => {
  return (
    <div>
      <h2 className={`my-3 text-center ${style.title}`}>Nosotros</h2>
      <div className="mt-4 d-flex justify-content-center">
        <div className="col-9">
          <p className="fs-5 fw-normal">
            Te invitamos a sumergirte en un espacio de serenidad diseñado especialmente para enriquecer tu práctica de yoga, donde la fluidez y la conexión son los pilares de nuestra selección de accesorios. En BreathOfLife Boutique, entendemos que el equilibrio en la vida diaria es esencial, y como apasionados amantes del yoga, queremos brindarte herramientas que te acompañen en este camino hacia el bienestar.
          </p>
          <p className="fs-5 fw-normal">
            Nuestro compromiso radica en ofrecerte productos que potencien tu práctica y se adapten a tus necesidades, sin importar si estás comenzando o eres un yogui experimentado. Cada artículo en nuestra colección ha sido cuidadosamente elegido para empoderar tu experiencia y ayudarte a encontrar esa conexión interna que todos buscamos.
          </p>
          <p className="fs-5 fw-normal">
            Desde Mat que brindan el soporte necesario hasta tacos que permiten una exploración más profunda de las posturas, cada elemento en nuestra tienda ha sido seleccionado para que te sientas centrado y cómodo mientras te adentras en tus movimientos y respiración.
          </p>
          <p className="fs-5 fw-normal">
            En BreathOfLife Boutique, estamos dedicados a servir a la comunidad de yoga en Argentina, ofreciendo más que productos; ofrecemos un apoyo continuo en tu viaje. Además de nuestra selección de accesorios, también proporcionamos recursos y consejos para enriquecer tu práctica y conocimiento.
          </p>
          <p className="fs-5 fw-normal">
            Te damos la bienvenida a explorar BreathOfLife Boutique, donde la pasión por el yoga se une a la calidad de nuestros productos. Explora nuestra gama, elige lo que resuena contigo y únete a nosotros mientras avanzamos juntos en un viaje de autodescubrimiento, movimiento fluido y transformación.
          </p>


        </div>
      </div>
    </div>
  );
};

export default About;
