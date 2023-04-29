import "../styles/styles.css";
export const FormikBasicPage = () => {
  return (
    <div>
      <h1>Formik Basic Tutorial</h1>
      <form action="" noValidate>
        <label htmlFor="firstName">Primer nombre</label>
        <input type="text" name="firstName" id="" />
        <span>El nombre es obligatorio</span>

        <label htmlFor="lastName">Apellido</label>
        <input type="text" name="lastName" id="" />
        <span>El apellido es obligatorio</span>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="" />
        <span>El email es obligatorio</span>
        <span>Debe ser un formato valido de email</span>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
