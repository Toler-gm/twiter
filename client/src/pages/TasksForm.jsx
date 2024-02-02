import { Formik } from "formik";
import { createUsersRequest } from "../api/users.api";
const Logo = ({ w, h , style }) => {
  return (
    <svg width={w} height={h} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M36.6526 3.80762H43.3995L28.6594 20.6546L46 43.5796H32.4225L21.7881 29.6757L9.61989 43.5796H2.86886L18.6349 25.5598L2 3.80762H15.9222L25.5348 16.5163L36.6526 3.80762ZM34.2846 39.5412H38.0232L13.8908 7.63388H9.87892L34.2846 39.5412Z" className={style} />
    </svg>
  )

}


function TasksForm() {
  return (
    <>
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
              <h1 className="flex items-center justify-center my-2"><Logo w={24} h={24}  style={"fill-white"}/></h1>
              
              <form onSubmit={handleSubmit} className="md:w-96 w-full">
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
    </>
  );
}

export default TasksForm;
