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
  CheckCircle2,
  Globe,
  Activity,
  Zap,
  Briefcase
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
      <div className="min-h-screen bg-[#fafafa] font-sans selection:bg-brand-accent selection:text-white overflow-hidden">
        <Head>
          <title>STE-CLM | Sistema de Gestión Unificada</title>
        </Head>

        {/* Premium Background Decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-50/50 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-pink-50/50 rounded-full blur-[120px]" />
        </div>

        <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-5xl"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white border border-gray-100 shadow-premium text-brand-muted font-bold text-xs mb-10 tracking-widest uppercase"
            >
              <span className="flex h-2 w-2 rounded-full bg-brand-highlight animate-pulse" />
              Gestión Gubernamental STE-CLM
            </motion.div>

            <h1 className="text-7xl md:text-9xl font-black text-brand-primary leading-[0.9] mb-10 tracking-tight">
              Control <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-highlight">Absoluto.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-brand-muted mb-16 max-w-2xl mx-auto font-medium leading-relaxed tracking-tight">
              La plataforma definitiva para la gestión de afiliados, noticias y comunicaciones del STE-CLM. Eficiencia técnica al servicio del trabajador.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24">
              <button 
                onClick={() => document.getElementById('login-box')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-10 py-5 bg-brand-primary text-white font-black rounded-2xl shadow-premium hover:shadow-[0_25px_60px_-12px_rgba(15,23,42,0.3)] transition-all transform hover:-translate-y-1 flex items-center gap-3 group"
              >
                Acceder al Portal
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform text-brand-highlight" />
              </button>
              <button className="px-10 py-5 bg-white text-brand-primary font-black rounded-2xl border border-gray-100 shadow-premium hover:bg-gray-50 transition-all">
                Documentación
              </button>
            </div>
          </motion.div>

          {/* Luxury Login Box */}
          <motion.div 
            id="login-box"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full max-w-md bg-white/80 backdrop-blur-xl p-12 rounded-[3rem] shadow-premium border border-white/20 z-10"
          >
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-brand-primary rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <ShieldCheck size={40} className="text-brand-highlight" />
              </div>
              <h2 className="text-3xl font-black text-brand-primary tracking-tight">Autenticación</h2>
              <p className="text-brand-muted font-bold text-sm mt-2 tracking-wide uppercase">Solo personal autorizado</p>
            </div>

            <form className="space-y-8" onSubmit={handleLogin}>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-brand-muted uppercase tracking-[0.2em] ml-2">ID Corporativo</label>
                <input 
                  type="email" 
                  required 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-16 bg-gray-50/50 border border-gray-100 rounded-2xl px-6 font-bold text-brand-primary focus:ring-2 focus:ring-brand-accent outline-none transition-all placeholder:text-gray-300"
                  placeholder="admin@ste-clm.es" 
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-brand-muted uppercase tracking-[0.2em] ml-2">Clave de Seguridad</label>
                <input 
                  type="password" 
                  required 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-16 bg-gray-50/50 border border-gray-100 rounded-2xl px-6 font-bold text-brand-primary focus:ring-2 focus:ring-brand-accent outline-none transition-all placeholder:text-gray-300"
                  placeholder="••••••••" 
                />
              </div>
              <button 
                type="submit" 
                disabled={loading}
                className="w-full py-6 bg-brand-accent text-white font-black rounded-2xl shadow-xl shadow-indigo-100 hover:shadow-indigo-200 transition-all active:scale-[0.98] disabled:opacity-50"
              >
                {loading ? "Verificando..." : "Entrar al Sistema"}
              </button>
            </form>
          </motion.div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f4f4f5] flex font-sans selection:bg-brand-accent selection:text-white">
      <Head>
        <title>Control Center | STE-CLM Enterprise</title>
      </Head>

      {/* Enterprise Sidebar */}
      <aside className="w-80 bg-brand-primary hidden lg:flex flex-col p-10 sticky top-0 h-screen overflow-hidden">
        <div className="absolute top-[-50px] left-[-50px] w-40 h-40 bg-brand-accent/20 rounded-full blur-[60px]" />
        
        <div className="relative z-10 mb-16">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-2xl shadow-brand-highlight/20">
              <Zap size={24} className="text-brand-highlight" />
            </div>
            <span className="text-white font-black text-2xl tracking-tighter">STE-CLM</span>
          </div>
        </div>
        
        <nav className="flex-1 space-y-4 relative z-10">
          <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-8 ml-2">Módulos de Gestión</div>
          
          <button className="flex items-center gap-4 w-full p-5 bg-white/10 text-white rounded-2xl font-bold transition-all border border-white/5 shadow-inner">
            <LayoutDashboard size={20} className="text-brand-highlight" />
            <span>Centro de Control</span>
          </button>
          
          <button className="flex items-center gap-4 w-full p-5 text-slate-400 hover:text-white hover:bg-white/5 rounded-2xl font-bold transition-all group">
            <Bell size={20} className="group-hover:scale-110 transition-transform" />
            <span>Comunicaciones</span>
          </button>
          
          <button className="flex items-center gap-4 w-full p-5 text-slate-400 hover:text-white hover:bg-white/5 rounded-2xl font-bold transition-all group">
            <Users size={20} className="group-hover:scale-110 transition-transform" />
            <span>Base Afiliados</span>
          </button>
          
          <button className="flex items-center gap-4 w-full p-5 text-slate-400 hover:text-white hover:bg-white/5 rounded-2xl font-bold transition-all group">
            <Briefcase size={20} className="group-hover:scale-110 transition-transform" />
            <span>Recursos Humanos</span>
          </button>
        </nav>

        <button 
          onClick={() => setIsLogged(false)}
          className="mt-auto relative z-10 flex items-center gap-4 w-full p-5 text-slate-500 hover:text-brand-highlight transition-all font-bold group"
        >
          <LogOut size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Cerrar Sesión</span>
        </button>
      </aside>

      {/* Master Content Area */}
      <main className="flex-1 p-8 lg:p-20 overflow-y-auto">
        <header className="flex flex-col xl:flex-row justify-between items-start xl:items-center mb-20 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-brand-accent/10 text-brand-accent rounded-lg text-[10px] font-black uppercase tracking-widest border border-brand-accent/20">Modo Administrador</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-400 text-xs font-bold flex items-center gap-2"><Globe size={14} /> Servidor Cloud: Madrid</span>
            </div>
            <h2 className="text-5xl font-black text-brand-primary tracking-tighter">Panel de Emisión</h2>
            <p className="text-brand-muted font-medium mt-3 text-lg">Distribución global de avisos y directivas sindicales.</p>
          </div>
          
          <div className="flex items-center gap-6 bg-white p-4 rounded-[2rem] shadow-premium border border-gray-50">
            <div className="flex -space-x-3">
              {[1,2,3].map(i => (
                <div key={i} className="w-10 h-10 rounded-xl bg-gray-100 border-4 border-white flex items-center justify-center text-[10px] font-black">AD</div>
              ))}
            </div>
            <div className="h-8 w-[1px] bg-gray-100" />
            <div className="pr-4">
              <p className="text-sm font-black text-brand-primary">Control Central</p>
              <p className="text-[10px] text-green-500 font-black uppercase tracking-widest flex items-center gap-1">
                <span className="h-1.5 w-1.5 bg-green-500 rounded-full animate-pulse" /> Conectado
              </p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-16">
          {/* Main Control Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="xl:col-span-2"
          >
            <div className="bg-white p-12 md:p-16 rounded-[4rem] shadow-premium border border-white relative overflow-hidden">
              <AnimatePresence>
                {showSuccess && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-brand-primary/95 backdrop-blur-md z-50 flex flex-col items-center justify-center text-center p-12"
                  >
                    <motion.div 
                      initial={{ scale: 0.5, rotate: -45 }}
                      animate={{ scale: 1, rotate: 0 }}
                      className="w-24 h-24 bg-brand-highlight text-white rounded-3xl flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(244,63,94,0.4)]"
                    >
                      <CheckCircle2 size={48} />
                    </motion.div>
                    <h3 className="text-4xl font-black text-white mb-4 tracking-tighter">Emisión Completada</h3>
                    <p className="text-slate-400 font-bold text-lg max-w-xs mx-auto">La directiva ha sido cifrada y enviada a todos los nodos móviles.</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex items-center justify-between mb-16">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-brand-primary text-brand-highlight rounded-2xl flex items-center justify-center shadow-xl shadow-slate-200">
                    <Send size={28} />
                  </div>
                  <h3 className="text-3xl font-black text-brand-primary tracking-tight">Nueva Directiva</h3>
                </div>
                <div className="px-4 py-2 bg-gray-50 rounded-xl border border-gray-100 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">ID: TX-9042</div>
              </div>

              <form className="space-y-12" onSubmit={handlePublish}>
                <div className="space-y-5">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] ml-2">Título del Comunicado</label>
                  <input 
                    placeholder="Ej: Resolución oficial plazas vacantes 2026..." 
                    className="w-full h-20 bg-gray-50/50 border border-gray-100 rounded-[1.5rem] px-8 text-xl font-bold text-brand-primary focus:ring-2 focus:ring-brand-accent outline-none transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-5">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] ml-2">Canal de Distribución</label>
                    <select className="w-full h-20 rounded-[1.5rem] border border-gray-100 bg-gray-50/50 px-8 font-bold text-brand-primary focus:ring-2 focus:ring-brand-accent outline-none transition-all cursor-pointer appearance-none">
                      <option>Todos los afiliados</option>
                      <option>Sector Primaria</option>
                      <option>Sector Secundaria</option>
                      <option>Comité de Formación</option>
                    </select>
                  </div>
                  <div className="space-y-5">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] ml-2">Nivel de Urgencia</label>
                    <div className="flex gap-4 p-2 bg-gray-50 rounded-[1.5rem] border border-gray-100">
                      <button type="button" className="flex-1 h-14 bg-white text-brand-highlight rounded-xl font-black shadow-sm border border-gray-100">Crítico</button>
                      <button type="button" className="flex-1 h-14 text-slate-400 rounded-xl font-bold hover:bg-white transition-all">Normal</button>
                    </div>
                  </div>
                </div>

                <div className="space-y-5">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] ml-2">Cuerpo de la Noticia</label>
                  <textarea 
                    className="w-full p-10 bg-gray-50/50 border border-gray-100 rounded-[2.5rem] text-lg font-medium text-brand-primary focus:ring-2 focus:ring-brand-accent transition-all resize-none min-h-[350px] leading-relaxed shadow-inner-soft"
                    placeholder="Redacte aquí el contenido íntegro de la noticia..."
                  />
                </div>

                <div className="space-y-5">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] ml-2">Archivos Adjuntos (Cifrados)</label>
                  <div className="border-2 border-dashed border-slate-200 rounded-[2.5rem] p-16 text-center hover:bg-slate-50 hover:border-brand-accent/30 transition-all group cursor-pointer relative bg-white">
                    <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
                    <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:bg-white group-hover:shadow-premium transition-all duration-500">
                      <Paperclip className="text-slate-400 group-hover:text-brand-accent transition-colors" size={32} />
                    </div>
                    <p className="text-brand-primary font-black text-2xl tracking-tighter">Adjuntar Documentación Pro</p>
                    <p className="text-slate-400 font-bold mt-2">Soporta PDF, DOCX, XLS (Máx. 50MB)</p>
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full py-8 bg-brand-primary text-white font-black text-2xl rounded-[2rem] shadow-[0_30px_70px_-12px_rgba(15,23,42,0.4)] hover:shadow-[0_40px_80px_-12px_rgba(15,23,42,0.5)] transition-all transform hover:-translate-y-1 active:scale-[0.99] flex items-center justify-center gap-5 group overflow-hidden relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-accent to-brand-highlight opacity-0 group-hover:opacity-10 transition-opacity" />
                  {loading ? "Sincronizando..." : (
                    <>
                      <span>Transmitir Directiva</span>
                      <Zap size={28} className="text-brand-highlight group-hover:scale-125 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* System Telemetry Column */}
          <div className="space-y-16">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-brand-primary p-12 rounded-[4rem] text-white shadow-premium relative overflow-hidden"
            >
              <div className="absolute top-[-20%] right-[-20%] w-60 h-60 bg-brand-accent/30 rounded-full blur-[80px]" />
              <h4 className="text-2xl font-black mb-12 relative z-10 tracking-tight">Telemetría del Sistema</h4>
              
              <div className="space-y-10 relative z-10">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Afiliados Activos</p>
                    <p className="text-5xl font-black tracking-tighter">4.120</p>
                  </div>
                  <div className="h-12 w-24 flex items-end gap-1">
                    {[4,7,5,9,6,8].map((h, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ height: 0 }} 
                        animate={{ height: `${h*10}%` }} 
                        transition={{ delay: i*0.1, duration: 1 }}
                        className="flex-1 bg-brand-accent/40 rounded-t-sm" 
                      />
                    ))}
                  </div>
                </div>

                <div className="space-y-6 pt-10 border-t border-white/10">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 font-bold text-xs uppercase tracking-widest flex items-center gap-2"><Activity size={14} /> Latencia</span>
                    <span className="text-brand-highlight font-black">12ms</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 font-bold text-xs uppercase tracking-widest flex items-center gap-2"><Zap size={14} /> Rendimiento</span>
                    <span className="text-green-400 font-black">99.9%</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-12 rounded-[4rem] border border-gray-100 shadow-premium"
            >
              <h4 className="text-2xl font-black text-brand-primary mb-10 tracking-tight">Historial de Emisión</h4>
              <div className="space-y-10">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex gap-6 items-start group cursor-pointer">
                    <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-brand-highlight group-hover:text-white transition-all shadow-inner-soft">
                      <FileText size={24} />
                    </div>
                    <div>
                      <h5 className="font-black text-brand-primary text-base group-hover:text-brand-accent transition-colors leading-tight mb-2">Directiva {i == 1 ? 'Seguridad' : 'Docente'} #0{45+i}</h5>
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Hace {i*3}h</span>
                        <span className="text-slate-200">•</span>
                        <span className="text-[10px] font-black text-brand-highlight uppercase tracking-widest">Verificado</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-12 py-5 bg-gray-50 text-slate-400 font-black rounded-2xl border border-gray-100 hover:bg-brand-primary hover:text-white transition-all text-sm uppercase tracking-widest">Archivo Completo</button>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
