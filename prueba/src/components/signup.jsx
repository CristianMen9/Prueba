import React, { Component } from 'react'
export default class SignUp extends Component {
  render() {
    return (
      <form>
        <h3>Registro</h3>
        <div className="mb-3">
          <label>Primer Nombre</label>
          <input
            type="text"
            className="form-control"
            placeholder="Ingrese el primer nombre"
          />
        </div>
        <div className="mb-3">
          <label>Segundo Nombre</label>
          <input type="text" className="form-control" placeholder="Ingrese el segundo nombre"/>
        </div>
        <div className="mb-3">
          <label>Correo Electronico</label>
          <input
            type="email"
            className="form-control"
            placeholder="Ingrese el correo electronico"
          />
        </div>
        <div className="mb-3">
          <label>Contraseña</label>
          <input
            type="password"
            className="form-control"
            placeholder="Ingrese contraseña"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Registrarme
          </button>
        </div>
        <p className="forgot-password text-right">
          Ya te habias <a href="/sign-in">registrado?</a>
        </p>
      </form>
    )
  }
}
