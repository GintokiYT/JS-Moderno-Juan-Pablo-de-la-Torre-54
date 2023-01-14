const Resultado = (props) => {
  const { total, plazo, cantidad } = props;

  const cantidadSalida = cantidad.toFixed(2);
  const plazoSalida = plazo;
  const pagoMensualSalida = (total / plazo).toFixed(2);
  const totalSalida = total.toFixed(2);

  return (  
    <div className="u-full-width resultado">
      <h2>Resumen</h2>
      <p>Cantidad solicitada es: <strong>${cantidadSalida}</strong> </p>
      <p>A pagar en: <strong>{plazoSalida} Meses</strong></p>
      <p>Su pago mensual es: <strong>${pagoMensualSalida}</strong></p>
      <p>Total a pagar: <strong>${totalSalida}</strong></p>
    </div>
  );
}
 
export default Resultado;