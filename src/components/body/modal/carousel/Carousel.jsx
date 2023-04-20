import React from "react";
import estilos from './Slider.module.scss';
import leftArrow from '../../../img/left-arrow.svg'
import rightArrow from '../../../img/right-arrow.svg'

function CertCarousel({ imagenes }) {
	const [imagenActual, setImagenActual] = React.useState(0);
	const cantidad = imagenes?.length;
	
	if (!Array.isArray(imagenes) || cantidad === 0) return;

	const siguienteImagen = () => {
		setImagenActual(imagenActual === cantidad - 1 ? 0 : imagenActual + 1);
	};

	const anteriorImagen = () => {
		setImagenActual(imagenActual === 0 ? cantidad - 1 : imagenActual - 1);
	};

	return (
		<div className={estilos.container}>
			<button onClick={anteriorImagen} className="buttonArrow"><img src={leftArrow} alt="leftArrow" className="arrows"/></button>
			{imagenes.map((imagen, index) => {
				return (
					<div 
						className={
							imagenActual === index
								? `${estilos.slide} ${estilos.active}`
								: estilos.slide
						}>
						{imagenActual === index && (
							<img className="certs" key={index} src={imagen} alt="imagen"/>
						)}
					</div>
				);
			})}
			<button onClick={siguienteImagen} className="buttonArrow"><img src={rightArrow} alt="rightArrow" className="arrows"/></button>
		</div>
	);
}

export default CertCarousel;