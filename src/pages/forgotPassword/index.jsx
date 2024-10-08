import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { forgotPassword } from "../../services/authService";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleLoginNavigation = () => {
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    try {
      await forgotPassword(email);
      setSuccess("Um e-mail de recuperação foi enviado para você.");
      setTimeout(() => setSuccess(null), 3000);
    } catch (error) {
      setError("Erro ao enviar o e-mail. Tente novamente mais tarde.");
    }
  };

  return (
    <section className="dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Esqueceu senha
            </h1>

          
            {success && (
              <div className="mb-4 p-4 text-green-800 bg-green-200 rounded-lg animate-fadeIn" role="alert">
                {success}
              </div>
            )}

          
            {error && (
              <p className="text-red-500">{error}</p>
            )}

            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="adriana@clinvet.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Enviar
              </button>

              <button onClick={handleLoginNavigation}>
                <p className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                  Fazer Login{" "}
                </p>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ForgotPassword;
