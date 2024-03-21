import React, { useState, useEffect } from "react"; // Importar React y los hooks useState y useEffect
import { useDispatch, useSelector } from "react-redux"; // Importar useDispatch y useSelector de react-redux
import { getDogsTemperament, postDog } from "../../actions"; // Importar acciones de Redux
import { FormContainer } from "./StyledCreate"; // Importar estilos personalizados

// Función para validar el formulario
const validate = (input) => {
  let error = {};
  let regexUrl =
    /((http|ftp|https):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;

  if (input.name.length < 4) {
    error.name = "Name needs to be greater than four!";
  } else if (typeof input.name == "number") {
    error.name = "Name must not contain numbers";
  } else if (!input.name) {
    error.name = "Name is required!";
  }
  if (!input.weight) {
    error.weight = "Weight is required!";
  } else if (isNaN(input.weight)) {
    error.weight = "Weight needs to be a number!";
  }
  if (!input.height) {
    error.height = "Height is required!";
  } else if (isNaN(input.height)) {
    error.height = "Weight is required!";
  }
  if (!input.life_span) {
    error.life_span = "Lifespan is required!";
  } else if (isNaN(input.life_span)) {
    error.life_span = "Lifespan needs to be a number!";
  }
  if (!input.image_url) {
    error.image_url = "Image URL is required!";
  } else if (!regexUrl.test(input.image_url)) {
    error.image_url = "This camp needs to be a URL!";
  }
  if (input.temperament.length === 0) {
    error.temperament = "Temperament is required";
  }

  return error;
};

// Definición del componente funcional Create
const Create = () => {
  const dispatch = useDispatch(); // Obtener la función dispatch
  const temperaments = useSelector((state) => state.temperaments); // Obtener el estado de los temperamentos desde Redux

  // Estado local para manejar el formulario
  const [input, setInput] = useState({
    name: "",
    height: "",
    weight: "",
    life_span: "",
    image_url: "",
    temperament: [],
  });

  const [errors, setErrors] = useState({}); // Estado local para almacenar errores de validación
  const [isSubmit, setIsSubmit] = useState(false); // Estado local para indicar si se ha enviado el formulario

  // Efecto para obtener los temperamentos al montar el componente
  useEffect(() => {
    dispatch(getDogsTemperament());
  }, [dispatch]);

  // Manejador de cambio de input del formulario
  const handleOnChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  // Manejador de selección de temperamento
  const handleSelectTemperament = (e) => {
    setInput({
      ...input,
      temperament: [...input.temperament, e.target.value],
    });
  };

  // Manejador de envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evitar el comportamiento por defecto del formulario

    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );

    // Validar si hay errores en el formulario
    if (Object.keys(errors).length === 0) {
      // Enviar la solicitud de creación del perro al servidor
      dispatch(postDog(input));
      alert("Dog created succesfully");
      setInput({
        ...input,
        name: "",
        height: "",
        weight: "",
        life_span: "",
        image_url: "",
        temperament: [],
      });
      setIsSubmit(true);
    } else {
      alert("Error");
    }
  };

  // Renderizado del componente
  return (
    <div>
      <FormContainer>
        {/* Formulario para crear un nuevo perro */}
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <div>
            <input
              type="text"
              placeholder="Name"
              value={input.name}
              name="name"
              onChange={(e) => handleOnChange(e)}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
          <div>
            <input
              type="text"
              placeholder="Height"
              value={input.height}
              name="height"
              onChange={(e) => handleOnChange(e)}
            />
            {errors.height && <p className="error">{errors.height}</p>}
          </div>
          <div>
            <input
              type="text"
              placeholder="Weight"
              value={input.weight}
              name="weight"
              onChange={(e) => handleOnChange(e)}
            />
            {errors.weight && <p className="error">{errors.weight}</p>}
          </div>
          <div>
            <input
              type="text"
              placeholder="Lifespan"
              value={input.life_span}
              name="life_span"
              onChange={(e) => handleOnChange(e)}
            />
            {errors.life_span && <p className="error">{errors.life_span}</p>}
          </div>
          <div>
            <input
              type="text"
              placeholder="Image URL"
              value={input.image_url}
              name="image_url"
              onChange={(e) => handleOnChange(e)}
            />
            {errors.image_url && <p className="error">{errors.image_url}</p>}
          </div>
          <div>
            <label htmlFor="temperament">Select Temperament:</label>
            {/* Selector de temperamento */}
            <select onChange={(e) => handleSelectTemperament(e)}>
              {temperaments?.map((t) => {
                return (
                  <option value={t.name} key={t.id}>
                    {t.name}
                  </option>
                );
              })}
            </select>
            {errors.temperament && (
              <p className="error">{errors.temperament}</p>
            )}
          </div>
          <div>
            <button type="submit">Create</button>
          </div>
        </form>
      </FormContainer>
    </div>
  );
};

export default Create; // Exportar el componente Create

