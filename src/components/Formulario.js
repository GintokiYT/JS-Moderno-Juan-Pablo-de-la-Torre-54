import { calcularTotal } from '../helpers';

import { Fragment, useState } from "react";

const Formulario = (props) => {

  const { cantidad, setCantidad, plazo, setPlazo, total, setTotal, setCargando } = props;

  const [error, setError] = useState(false);

  const calcularPrestamo = (e) => {
    e.preventDefault();

    if(cantidad <= 0 || isNaN(cantidad)) return setError(true);
    
    if(![3,6,12,24].includes(plazo)) return setError(true);

    setError(false);

    setCargando(true);

    setTimeout(() => {
      const totalAPagar = calcularTotal(cantidad, plazo);
      setTotal(totalAPagar);
      setCargando(false);
    }, 1000);
  }

  return (  
    <Fragment>
      <form onSubmit={ calcularPrestamo }>
        <div className='row'>
          <div>
            <label>Cantidad Prestamo</label>
            <input 
              className='u-full-width'          
              type='number'
              placeholder='Ejemplo: 3000'
              onChange={e => setCantidad(parseFloat(e.target.value))}
            />
          </div>
          <div>
            <label>Plazo para pagar</label>
            <select
              className='u-full-width'
              defaultValue=''
              onChange={e => setPlazo(parseInt(e.target.value))}
            >
              <option value='' disabled>Seleccionar</option>
              <option value="3">3 meses</option>
              <option value="6">6 meses</option>
              <option value="12">12 meses</option>
              <option value="24">24 meses</option>
            </select>
          </div>
          <div>
            <input 
              type="submit"
              value='Calcular'
              className="button-primary u-full-width"
            />
          </div>
        </div>
      </form>
      { 
        (error)
        ? <p className="error">Todos los campos son obligatorios</p> 
        : null 
      }
    </Fragment>
  );
}
 
export default Formulario;