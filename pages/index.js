import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [isLogged, setIsLogged] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) setIsLogged(true);
  };

  if (!isLogged) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <Head>
          <title>STE-CLM | Login Gestión</title>
        </Head>
        <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
          <div className="text-center">
            <div className="bg-ste-pink text-white font-bold py-3 px-8 rounded-xl text-3xl inline-block mb-6 shadow-md">
              STE-CLM
            </div>
            <h2 className="text-2xl font-extrabold text-gray-900">Acceso Gestión</h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Email corporativo</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none rounded-xl relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-ste-pink focus:border-ste-pink sm:text-sm"
                  placeholder="admin@ste-clm.es"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none rounded-xl relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-ste-pink focus:border-ste-pink sm:text-sm"
                  placeholder="********"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-xl text-white bg-ste-pink hover:bg-ste-darkPink focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ste-pink transition-all shadow-lg hover:shadow-pink-200"
              >
                Entrar al Panel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>STE-CLM | Crear Contenido</title>
      </Head>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="bg-ste-pink text-white font-bold py-2 px-6 rounded-lg text-2xl inline-block mb-4 shadow-sm">
            STE-CLM
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Panel de Publicación App</h1>
          <p className="mt-2 text-gray-600">Completa los campos para notificar a los afiliados.</p>
        </div>

        <div className="bg-white shadow-2xl rounded-3xl overflow-hidden border border-gray-100">
          <div className="p-8 sm:p-12">
            <form className="space-y-8">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Asunto / Título</label>
                <input
                  type="text"
                  className="block w-full px-4 py-4 border border-gray-300 rounded-2xl shadow-sm focus:ring-2 focus:ring-ste-pink focus:border-ste-pink sm:text-lg transition-all"
                  placeholder="Ej: Convocatoria de Traslados Secundaria 2026"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Introducción / Cuerpo del Mensaje</label>
                <textarea
                  rows="6"
                  className="block w-full px-4 py-4 border border-gray-300 rounded-2xl shadow-sm focus:ring-2 focus:ring-ste-pink focus:border-ste-pink sm:text-md transition-all"
                  placeholder="Escriba aquí los detalles que verán los usuarios en su aplicación móvil..."
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Documentación Adjunta</label>
                <div className="mt-1 flex justify-center px-6 pt-10 pb-10 border-2 border-gray-300 border-dashed rounded-3xl hover:border-ste-pink transition-colors group cursor-pointer bg-gray-50">
                  <div className="space-y-2 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400 group-hover:text-ste-pink transition-colors"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <span className="relative cursor-pointer rounded-md font-bold text-ste-pink hover:text-ste-darkPink focus-within:outline-none transition-colors">
                        Sube archivos PDF o imágenes
                      </span>
                    </div>
                    <p className="text-xs text-gray-500">Hasta 10MB por archivo</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  className="w-full flex justify-center py-5 px-4 border border-transparent shadow-xl text-lg font-bold rounded-2xl text-white bg-ste-pink hover:bg-ste-darkPink focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ste-pink transition-all transform hover:-translate-y-1"
                >
                  🚀 Publicar Noticia y Notificar a la App
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <button 
            onClick={() => setIsLogged(false)}
            className="text-gray-400 hover:text-gray-600 text-sm font-medium transition-colors"
          >
            Cerrar sesión segura
          </button>
        </div>
      </div>
    </div>
  );
}
