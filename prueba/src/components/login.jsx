import React, { Component } from 'react'
export default class Login extends Component {
  render() {
    return (
      <form>
        <h3>Inicio de Sesion</h3>
        <div className="mb-3">
          <label>Correo Electronico</label>
          <input
            type="correo electronico"
            className="form-control"
            placeholder="Ingrese Correo"
          />
        </div>
        <div className="mb-3">
          <label>Contraseña</label>
          <input
            type="Contraseña"
            className="form-control"
            placeholder="Ingrese Contraseña"
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Recordar
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Iniciar
          </button>
        </div>
        <p className="forgot-password text-right">
          Olvidaste <a href="#">la Contraseña?</a>
        </p>
      </form>
    )
  }
}
