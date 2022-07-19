const RegistroPage = (props) => {
    return(
 
        <div className="">
        <h2>Fromulario de Registro</h2>
          <form>
              <label>
                  <input type="text" name="name" placeholder="Ingrese su Nombre"></input>
              </label>
              <label>
                  <input type="text" name="name" placeholder="Ingrese su Apellido"></input>
              </label>
              <label>
                  <input type="text" name="name" placeholder="Ingrese su Email"></input>
              </label>
              <label>
                  <input type="text" name="name" placeholder="Ingrese su Telefono"></input>
              </label>
              <label>
                  <input type="password" name="name" placeholder="Ingrese un Password"></input>
              </label>
              <label>
                  <input type="password" name="name" placeholder="Confirme su Password"></input>
              </label>
              <label>
              <input class="button" type="submit" value="Registrar"></input>
              </label>
          </form>
      </div>
        
    );
}
export default RegistroPage;