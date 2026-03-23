import React, { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  ShieldCheck, 
  Send, 
  LayoutDashboard, 
  Bell, 
  FileText, 
  PlusCircle, 
  LogOut,
  Users,
  Paperclip,
  CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

export default function Home() {
  const [isLogged, setIsLogged] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      if (email && password) setIsLogged(true);
      setLoading(false);
    }, 1500);
  };

  const handlePublish = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }, 2000);
  };

  if (!isLogged) {
    return (
      <div className="min-h-screen bg-white font-sans overflow-hidden selection:bg-ste-pink selection:text-white">
        <Head>
          <title>STE-CLM | Gestión Profesional</title>
        </Head>

        {/* Hero Section */}
        <main className="relative flex flex-col items-center justify-center min-h-screen px-4 py-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,#fdf2f8_0%,transparent_50%),radial-gradient(circle_at_bottom_left,#fdf2f8_0%,transparent_50%)] pointer-events-none" />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl z-10"
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ste-light text-ste-pink font-bold text-sm mb-8 shadow-sm"
            >
              <ShieldCheck size={18} />
              Portal de Gestión Exclusivo para el STE-CLM
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-black text-gray-900 leading-tight mb-8 tracking-tighter">
              Aprender nunca fue tan <span className="text-ste-pink">divertido</span>.
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-500 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
              Desafía tu mente con la plataforma de gestión del STE-CLM. Mejora la comunicación con tus afiliados y compite por la excelencia.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="group" onClick={() => document.getElementById('login-form')?.scrollIntoView({ behavior: 'smooth' })}>
                Empezar Ahora
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="secondary" size="lg">
                Saber más
              </Button>
            </div>
          </motion.div>

          {/* Login Form Section */}
          <motion.div 
            id="login-form"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-40 w-full max-w-md bg-white p-10 rounded-[2.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.08)] border border-gray-50 z-10"
          >
            <div className="text-center mb-10">
              <div className="bg-ste-pink text-white font-black py-4 px-10 rounded-2xl text-4xl inline-block mb-6 shadow-xl shadow-pink-200">
                STE-CLM
              </div>
              <h2 className="text-3xl font-black text-gray-900 tracking-tight">Acceso Privado</h2>
            </div>

            <form className="space-y-6" onSubmit={handleLogin}>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 uppercase tracking-widest ml-1">Email Profesional</label>
                <Input 
                  type="email" 
                  required 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@ste-clm.es" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 uppercase tracking-widest ml-1">Contraseña</label>
                <Input 
                  type="password" 
                  required 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••" 
                />
              </div>
              <Button type="submit" className="w-full py-6 text-lg font-black rounded-2xl mt-4 shadow-xl" disabled={loading}>
                {loading ? "Iniciando..." : "Entrar al Panel"}
              </Button>
            </form>
          </motion.div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fcfcfc] flex font-sans selection:bg-ste-pink selection:text-white">
      <Head>
        <title>Dashboard | STE-CLM Pro</title>
      </Head>

      {/* Sidebar */}
      <aside className="w-80 bg-white border-r border-gray-100 hidden lg:flex flex-col p-8 sticky top-0 h-screen">
        <div className="bg-gradient-to-br from-ste-pink to-ste-darkPink text-white font-black py-3 px-6 rounded-2xl text-2xl inline-block mb-12 self-start shadow-lg">
          STE-CLM
        </div>
        
        <nav className="flex-1 space-y-3">
          <div className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-6 ml-2">Principal</div>
          <button className="flex items-center gap-4 w-full p-4 bg-ste-light text-ste-pink rounded-2xl font-bold transition-all shadow-sm">
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </button>
          <button className="flex items-center gap-4 w-full p-4 text-gray-400 hover:bg-gray-50 rounded-2xl font-bold transition-all group">
            <Bell size={20} className="group-hover:scale-110 transition-transform" />
            <span>Avisos App</span>
          </button>
          <button className="flex items-center gap-4 w-full p-4 text-gray-400 hover:bg-gray-50 rounded-2xl font-bold transition-all group">
            <Users size={20} className="group-hover:scale-110 transition-transform" />
            <span>Afiliados</span>
          </button>
          <button className="flex items-center gap-4 w-full p-4 text-gray-400 hover:bg-gray-50 rounded-2xl font-bold transition-all group">
            <FileText size={20} className="group-hover:scale-110 transition-transform" />
            <span>Recursos</span>
          </button>
        </nav>

        <button 
          onClick={() => setIsLogged(false)}
          className="mt-auto flex items-center gap-4 w-full p-4 text-gray-400 hover:text-red-500 transition-all font-bold group"
        >
          <LogOut size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Cerrar Sesión</span>
        </button>
      </aside>

      {/* Main Dashboard Content */}
      <main className="flex-1 p-8 lg:p-16 overflow-y-auto">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-black text-gray-900 tracking-tight">Crear Contenido</h2>
            <p className="text-gray-400 font-medium mt-2">Envía noticias y avisos directamente a los dispositivos de los afiliados.</p>
          </div>
          <div className="flex items-center gap-4 bg-white p-2 rounded-2xl shadow-sm border border-gray-50">
            <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center text-white font-bold text-lg">
              AM
            </div>
            <div className="pr-4 hidden sm:block">
              <p className="text-sm font-black text-gray-900">Admin STE-CLM</p>
              <p className="text-xs text-gray-400 font-medium">Albacete, España</p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
          {/* Form Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="xl:col-span-2"
          >
            <div className="bg-white p-10 md:p-12 rounded-[3rem] shadow-[0_20px_60px_rgba(0,0,0,0.04)] border border-gray-50 relative overflow-hidden">
              <AnimatePresence>
                {showSuccess && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="absolute inset-0 bg-white/95 backdrop-blur-sm z-50 flex flex-col items-center justify-center text-center p-8"
                  >
                    <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-3xl font-black text-gray-900 mb-2">¡Publicado con éxito!</h3>
                    <p className="text-gray-500 font-medium">La noticia ya está disponible en la App móvil.</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex items-center gap-4 mb-12">
                <div className="w-12 h-12 bg-pink-100 text-ste-pink rounded-2xl flex items-center justify-center">
                  <PlusCircle size={24} />
                </div>
                <h3 className="text-2xl font-black text-gray-900">Nueva Noticia</h3>
              </div>

              <form className="space-y-10" onSubmit={handlePublish}>
                <div className="space-y-4">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Asunto de la Noticia</label>
                  <Input placeholder="Ej: Convocatoria extraordinaria Secundaria 2026..." className="h-16 text-lg" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Categoría</label>
                    <select className="w-full h-16 rounded-xl border border-gray-200 bg-white px-6 font-bold text-gray-900 focus:ring-2 focus:ring-ste-pink outline-none transition-all cursor-pointer">
                      <option>General</option>
                      <option>Primaria</option>
                      <option>Secundaria</option>
                      <option>Traslados</option>
                      <option>Formación</option>
                    </select>
                  </div>
                  <div className="space-y-4">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Prioridad de Aviso</label>
                    <div className="flex gap-4">
                      <button type="button" className="flex-1 h-16 bg-ste-light text-ste-pink rounded-xl font-black shadow-sm">Alta</button>
                      <button type="button" className="flex-1 h-16 bg-gray-50 text-gray-400 rounded-xl font-bold">Normal</button>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Introducción / Cuerpo</label>
                  <textarea 
                    className="w-full p-8 bg-gray-50 border-none rounded-[2rem] text-gray-900 font-medium focus:ring-2 focus:ring-ste-pink transition-all resize-none min-h-[250px]"
                    placeholder="Describe los detalles importantes para los afiliados..."
                  />
                </div>

                <div className="space-y-4">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Adjuntar Archivos</label>
                  <div className="border-3 border-dashed border-gray-100 rounded-[2.5rem] p-12 text-center hover:bg-gray-50 hover:border-ste-pink/30 transition-all group cursor-pointer relative bg-gray-50/50">
                    <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-gray-50 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <Paperclip className="text-gray-400 group-hover:text-ste-pink transition-colors" />
                    </div>
                    <p className="text-gray-900 font-black text-lg">Haz clic para subir documentos</p>
                    <p className="text-gray-400 font-medium mt-1">PDF, Imágenes o Word (Máx. 25MB)</p>
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full py-8 text-xl font-black rounded-2xl shadow-2xl shadow-pink-100 group" disabled={loading}>
                  {loading ? "Publicando..." : (
                    <>
                      Publicar y Notificar App
                      <Send size={24} className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Right Column / Status */}
          <div className="space-y-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-900 p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:scale-110 transition-transform duration-700">
                <Bell size={150} />
              </div>
              <h4 className="text-2xl font-black mb-10 relative z-10">Estado Global</h4>
              <div className="space-y-8 relative z-10">
                <div className="flex justify-between items-center pb-6 border-b border-white/10">
                  <span className="text-gray-400 font-bold uppercase tracking-widest text-xs">Afiliados Online</span>
                  <span className="text-3xl font-black">2,840</span>
                </div>
                <div className="flex justify-between items-center pb-6 border-b border-white/10">
                  <span className="text-gray-400 font-bold uppercase tracking-widest text-xs">Avisos Enviados</span>
                  <span className="text-3xl font-black">452</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 font-bold uppercase tracking-widest text-xs">Sincronización</span>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-[0_0_15px_rgba(74,222,128,0.5)]" />
                    <span className="text-green-400 font-black">ACTIVA</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-10 rounded-[3rem] border border-gray-50 shadow-sm"
            >
              <h4 className="text-xl font-black text-gray-900 mb-8">Últimas Publicaciones</h4>
              <div className="space-y-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex gap-5 items-start group cursor-pointer">
                    <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 group-hover:bg-ste-light group-hover:text-ste-pink transition-all shadow-sm">
                      <FileText size={20} />
                    </div>
                    <div>
                      <h5 className="font-black text-gray-900 text-sm group-hover:text-ste-pink transition-colors leading-tight">Resolución definitiva plazas Secundaria...</h5>
                      <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest mt-2">Hace {i*2} horas • Albacete</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="ghost" className="w-full mt-10 font-black text-gray-400 hover:text-ste-pink">Ver todas las noticias</Button>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
