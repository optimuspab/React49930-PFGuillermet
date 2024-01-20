const Form = ({ formData, saveInputData, sendOrder }) => {
  return (
    <div className="formulario-container">
      <h2>Por favor complete con sus datos para seguir con la compra 🛍️</h2>
      <form className="formulario" onSubmit={sendOrder}>
        <label htmlFor="nombre">Nombre Completo</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={saveInputData}
          required
        />

        <label htmlFor="telefono">Telefono</label>
        <input
          type="text"
          id="telefono"
          name="telefono"
          value={formData.telefono}
          onChange={saveInputData}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={saveInputData}
          required
        />

        <label htmlFor="emailRepetido">Repetir Email</label>
        <input
          type="email"
          id="emailRepetido"
          name="emailRepetido"
          value={formData.emailRepetido}
          onChange={saveInputData}
          required
        />

        <button type="submit">Enviar orden</button>
      </form>
    </div>
  );
};
export default Form;
