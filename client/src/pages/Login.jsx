import { useState } from "react";
import { Formik } from "formik";
import { createUsersRequest } from "../api/users.api";
import apple from "../img/apple.svg"
import google from "../img/google.svg"

// logo brutal 

const Logo = ({ w, h, style }) => {
  return (
    <svg width={w} height={h} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M36.6526 3.80762H43.3995L28.6594 20.6546L46 43.5796H32.4225L21.7881 29.6757L9.61989 43.5796H2.86886L18.6349 25.5598L2 3.80762H15.9222L25.5348 16.5163L36.6526 3.80762ZM34.2846 39.5412H38.0232L13.8908 7.63388H9.87892L34.2846 39.5412Z" className={style} />
    </svg>
  )

}

// modalpe






export default function App() {

  // abrir cerrar modal

  const [showCartModal, setShowCartModal] = useState(false);

  const handleOpenCart = () => {
    setShowCartModal(true);
  };

  const handleCloseCart = () => {
    setShowCartModal(false);
  };

  function CartModal({ onClose }) {


    return (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white/10 bg-opacity-50 z-20">
        <div className="bg-black relative px-10 py-5 rounded-xl">
          <div className="absolute top-0 left-0 m-2 cursor-pointer hover:opacity-75 duration-200 ease-linear"  onClick={handleCloseCart} >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </div>
          <div className="flex items-center justify-center my-2">
            <Formik
              initialValues={{
                user_handle: "",
                email_address: "",
                first_name: "",
                last_name: "",
                phonenumber: "",
              }}
              onSubmit={async (values) => {
                console.log(values);
                try {
                  const response = await createUsersRequest(values);
                  console.log(response);
                } catch (error) {
                  console.log(error);
                }
              }}
            >
              {({ handleChange, handleSubmit }) => (
                <div>
                  <h1 className="flex items-center justify-center mb-10">
                    <Logo w={24} h={24} style={"fill-white"} />
                  </h1>

                  <form onSubmit={handleSubmit} className="md:w-96  w-full">
                    <div className="flex flex-col gap-3 ">
                      <input
                        className=" font-normal py-3 px-2 border border-gray-500 bg-black rounded-md placeholder:text-gray-600"
                        type="text"
                        placeholder="Usuario"
                        name="user_handle"
                        onChange={handleChange}
                      />
                      <input
                        className=" font-normal py-3 px-2 border border-gray-500 bg-black rounded-md placeholder:text-gray-600"
                        type="email"
                        placeholder="Correo Electronico"
                        name="email_address"
                        onChange={handleChange}
                      />
                      <input
                        className=" font-normal py-3 px-2 border border-gray-500 bg-black rounded-md placeholder:text-gray-600"
                        type="text"
                        placeholder="Nombres"
                        name="first_name"
                        onChange={handleChange}
                      />
                      <input
                        className=" font-normal py-3 px-2 border border-gray-500 bg-black rounded-md placeholder:text-gray-600"
                        type="text"
                        placeholder="Apellidos"
                        name="last_name"
                        onChange={handleChange}
                      />
                      <input
                        className=" font-normal py-3 px-2 border border-gray-500 bg-black rounded-md placeholder:text-gray-600"
                        type="number"
                        placeholder="Número telefonico"
                        name="phonenumber"
                        onChange={handleChange}
                      />
                      <button
                        type="submit"
                        className="py-2 px-10 border-gray-400 font-bold text-black rounded-full bg-gray-500 hover:opacity-25 duration-150"
                      >
                        Siguiente
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </Formik>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl m-auto">
      <div className="flex md:flex-row flex-col justify-center items-center h-screen md:my-0 my-10 ">

        <div className="w-full flex justify-center items-center md:relative absolute md:opacity-100 opacity-10 -z-10 ">
          <Logo w={300} h={300} style={"fill-white"} />

        </div>
        <div className="w-full md:px-0 px-10 relative">

          <div className="flex flex-col gap-10">
            <div>
              <h2 className="text-6xl font-bold">Lo que está <br /> pasando ahora</h2>
            </div>
            <div className="">
              <p className="text-3xl font-bold mb-7">
                Únete Hoy
              </p>
              <div className=" md:w-72 w-full font-semibold ">
                <div className="flex flex-col items-start gap-2">
                  <button className="bg-white w-full py-2 px-5 rounded-full text-black flex items-center gap-2 justify-center">
                    <img className=" w-7 h-7" src={google} alt="" />
                    Registrarse con Google</button>
                  <button className="bg-white w-full py-2 px-5 rounded-full text-black flex items-center gap-2 justify-center">
                    <img className=" w-7 h-7" src={apple} alt="" />
                    Registrarse con Apple</button>
                </div>
                <div className="text-center my-2">
                  <span className="">o</span>
                </div>
                <div>
                  <button onClick={handleOpenCart} className="w-full py-2 px-5 rounded-full bg-sky-500 hover:bg-sky-600 duration-300 ease-out">Crear Cuenta</button>
                  {showCartModal && (
                    <CartModal
                      onClose={handleCloseCart}
                    />
                  )}
                </div>
                <p className="text-xs font-light text-gray-400 pt-2">Al registrarse, acepta los <a className="text-sky-500" href="">terminos y condiciones</a>y la <a className="text-sky-500" href="">politica de privacidad.</a>incluida la politica de <a className="text-sky-500" href="">Uso de Cookies</a></p>
              </div>

            </div>
            <div className="md:w-72 w-full">
              <h3 className="text-xl font-bold">¿Ya tienes una cuenta?</h3>
              <button className="py-2 px-5 mt-2 border-gray-600 rounded-full border w-full text-sky-500" >Iniciar Sesión</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}