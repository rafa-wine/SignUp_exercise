import React, { useState } from "react";
import "../styles/RegisterForm.css";

const RegisterForm = () => {
  const [showElement, setShowElement] = useState(false);

  const toggleElement = () => {
    setShowElement(true);
  };

  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    gender: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    errors: {},
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = {};

    if (!formState.firstName.trim()) {
      errors.firstName = "El campo Nombre es obligatorio";
    }
    if (!formState.lastName.trim()) {
      errors.lastName = "El campo Apellido Paterno es obligatorio";
    }
    if (!formState.middleName.trim()) {
      errors.middleName = "El campo Apellido Materno es obligatorio";
    }
    if (!formState.gender.trim()) {
      errors.gender = "El campo Género es obligatorio";
    }
    if (!formState.phone.trim()) {
      errors.phone = "El campo Teléfono es obligatorio";
    } else {
      const phoneRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;

      if (!phoneRegex.test(formState.phone.trim())) {
        errors.phone = "El numero telefonico no es válido";
      }
    }

    if (!formState.email.trim()) {
      errors.email = "El campo Correo es obligatorio";
    } else {
      const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

      if (!emailRegex.test(formState.email.trim())) {
        errors.email = "El correo electrónico no es válido";
      }
    }

    if (!formState.password.trim() && !formState.password.trim()) {
      errors.confirmPassword = "El campo Contraseña es obligatorio";
    }

    if (formState.password !== formState.confirmPassword) {
      errors.confirmPassword = "Las contraseñas no coinciden";
    }

    setFormState({ ...formState, errors });

    if (Object.keys(errors).length === 0) {
      console.log("Formulario enviado");
      toggleElement();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="text-welcome">
        <p className="title">¡Bienvenido!</p>
        <p className="sub-title">Comencemos tu registro</p>
      </div>
      <div>
        <label htmlFor="firstName">Nombre:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formState.firstName}
          onChange={handleChange}
        />
        {formState.errors.firstName && (
          <p className="error">{formState.errors.firstName}</p>
        )}
      </div>
      <div>
        <label htmlFor="lastName">Apellido Paterno:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formState.lastName}
          onChange={handleChange}
        />
        {formState.errors.lastName && (
          <p className="error">{formState.errors.lastName}</p>
        )}
      </div>
      <div>
        <label htmlFor="middleName">Apellido Materno:</label>
        <input
          type="text"
          id="middleName"
          name="middleName"
          value={formState.middleName}
          onChange={handleChange}
        />
        {formState.errors.middleName && (
          <p className="error">{formState.errors.middleName}</p>
        )}
      </div>
      <div>
        <label htmlFor="gender">Género:</label>
        <select
          id="gender"
          name="gender"
          value={formState.gender}
          onChange={handleChange}
        >
          <option value="">Seleccionar</option>
          <option value="male">Masculino</option>
          <option value="female">Femenino</option>
          <option value="other">Otro</option>
        </select>
        {formState.errors.gender && (
          <p className="error">{formState.errors.gender}</p>
        )}
      </div>
      <div>
        <label htmlFor="phone">Teléfono:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formState.phone}
          onChange={handleChange}
        />
        {formState.errors.phone && (
          <p className="error">{formState.errors.phone}</p>
        )}
      </div>
      <div>
        <label htmlFor="email">Correo:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formState.email}
          onChange={handleChange}
        />
        {formState.errors.email && (
          <p className="error">{formState.errors.email}</p>
        )}
      </div>
      <div>
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formState.password}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formState.confirmPassword}
          onChange={handleChange}
        />
        {formState.errors.confirmPassword && (
          <p className="error">{formState.errors.confirmPassword}</p>
        )}
      </div>
      <button type="submit">Registrarse</button>
      {showElement && (
        <div className="completed-conteiner">
          <img src="./like.png" alt="like" />
          <p>¡Registro completado!</p>
        </div>
      )}
    </form>
  );
};

export default RegisterForm;
