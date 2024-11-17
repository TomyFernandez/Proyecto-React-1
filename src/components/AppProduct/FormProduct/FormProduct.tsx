import { Form } from 'react-bootstrap'
import { useForm } from '../../hooks/useForm';
import {FC} from 'react';


interface IPropsFormProduct {
    handleAddProduct: Function;
}

const FormProduct: FC<IPropsFormProduct> = ({handleAddProduct}) => {

    const {handleChange, values, resetForm} = useForm({
    nombre: '',
    imagen: '',
    precio: 0,
  });

  const handleSubmitForm = () => {
    handleAddProduct(values);
    resetForm();
  }

  return (
    <Form className = "p-4 border rounded m-3">
      <Form.Group controlId="formNombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" name="nombre" placeholder="Nombre del producto"  value={values.nombre} onChange={handleChange}/>
      </Form.Group>
      <Form.Group controlId="formImagen">
        <Form.Label>imagen</Form.Label>
        <Form.Control type="text" name="imagen" placeholder="Imagen"  value={values.imagen} onChange={handleChange}/>
      </Form.Group>
      <Form.Group controlId="formPrecio">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="number" name="precio" placeholder="Precio"  value={values.precio} onChange={handleChange}/>
      </Form.Group>
      <div className="d-flex justifyy-content-center mt-4">
        <button onClick={handleSubmitForm}>Enviar Producto</button>
      </div>
    </Form>
  )
}

export default FormProduct;