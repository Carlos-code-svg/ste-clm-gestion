import React, { useState, useRef, useEffect } from 'react';
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
  Briefcase,
  ChevronDown,
  Check
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

const CHANNELS = [
  "Todos los afiliados",
  "Sector Primaria",
  "Sector Secundaria",
  "Comité de Formación",
  "Interinos",
  "Concurso de Traslados"
];

export default function Home() {
  const [isLogged, setIsLogged] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  // Estado para el Combobox Multi-selección
  const [isOpen, setIsOpen] = useState(false);
  const [selectedChannels, setSelectedChannels] = useState<string[]>(["Todos los afiliados"]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleChannel = (channel: string) => {
    if (channel === "Todos los afiliados") {
      setSelectedChannels(["Todos los afiliados"]);
    } else {
      let newSelection = selectedChannels.filter(c => c !== "Todos los afiliados");
      if (newSelection.includes(channel)) {
        newSelection = newSelection.filter(c => c !== channel);
        if (newSelection.length === 0) newSelection = ["Todos los afiliados"];
      } else {
        newSelection.push(channel);
      }
      setSelectedChannels(newSelection);
    }
  };

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
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-50/50 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-pink-50/50 rounded-full blur-[120px]" />
        </div>
        <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-center max-w-5xl">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white border border-gray-100 shadow-premium text-brand-muted font-bold text-xs mb-10 tracking-widest uppercase">
              <span className="flex h-2 w-2 rounded-full bg-brand-highlight animate-pulse" />
              Gestión Gubernamental STE-CLM
            </div>
            <h1 className="text-7xl md:text-9xl font-black text-brand-primary leading-[0.9] mb-10 tracking-tight">
              Control <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-highlight">Absoluto.</span>
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24">
              <button onClick={() => document.getElementById('login-box')?.scrollIntoView({ behavior: 'smooth' })} className="px-10 py-5 bg-brand-primary text-white font-black rounded-2xl shadow-premium hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center gap-3">
                Acceder al Portal <ArrowRight size={20} className="text-brand-highlight" />
              </button>
            </div>
          </motion.div>
          <motion.div id="login-box" className="w-full max-w-md bg-white/80 backdrop-blur-xl p-12 rounded-[3rem] shadow-premium border border-white/20 z-10">
            <form className="space-y-8" onSubmit={handleLogin}>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-brand-muted uppercase tracking-[0.2em] ml-2">ID Corporativo</label>
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full h-16 bg-gray-50/50 border border-gray-100 rounded-2xl px-6 font-bold text-brand-primary focus:ring-2 focus:ring-brand-accent outline-none" placeholder="admin@ste-clm.es" />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-brand-muted uppercase tracking-[0.2em] ml-2">Clave de Seguridad</label>
                <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="w-full h-16 bg-gray-50/50 border border-gray-100 rounded-2xl px-6 font-bold text-brand-primary focus:ring-2 focus:ring-brand-accent outline-none" placeholder="••••••••" />
              </div>
              <button type="submit" disabled={loading} className="w-full py-6 bg-brand-accent text-white font-black rounded-2xl shadow-xl transition-all active:scale-[0.98]">
                {loading ? "Verificando..." : "Entrar al Sistema"}
              </button>
            </form>
          </motion.div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f4f4f5] flex font-sans">
      <Head><title>Control Center | STE-CLM Enterprise</title></Head>
      <aside className="w-80 bg-brand-primary hidden lg:flex flex-col p-10 sticky top-0 h-screen overflow-hidden">
        <div className="relative z-10 mb-16 flex items-center gap-4">
          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center"><Zap size={24} className="text-brand-highlight" /></div>
          <span className="text-white font-black text-2xl tracking-tighter">STE-CLM</span>
        </div>
        <nav className="flex-1 space-y-4 relative z-10">
          <button className="flex items-center gap-4 w-full p-5 bg-white/10 text-white rounded-2xl font-bold transition-all"><LayoutDashboard size={20} className="text-brand-highlight" /><span>Centro de Control</span></button>
          <button className="flex items-center gap-4 w-full p-5 text-slate-400 hover:text-white rounded-2xl font-bold transition-all"><Users size={20} /><span>Base Afiliados</span></button>
        </nav>
        <button onClick={() => setIsLogged(false)} className="mt-auto flex items-center gap-4 w-full p-5 text-slate-500 hover:text-brand-highlight transition-all font-bold group"><LogOut size={20} /><span>Cerrar Sesión</span></button>
      </aside>

      <main className="flex-1 p-8 lg:p-20 overflow-y-auto">
        <header className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-brand-accent/10 text-brand-accent rounded-lg text-[10px] font-black uppercase tracking-widest border border-brand-accent/20">AWS Cloud Deploy</span>
          </div>
          <h2 className="text-5xl font-black text-brand-primary tracking-tighter">Panel de Emisión</h2>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-16">
          <div className="xl:col-span-2">
            <div className="bg-white p-12 md:p-16 rounded-[4rem] shadow-premium border border-white relative">
              <AnimatePresence>
                {showSuccess && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-brand-primary/95 backdrop-blur-md z-50 flex flex-col items-center justify-center text-center p-12 rounded-[4rem]">
                    <div className="w-24 h-24 bg-brand-highlight text-white rounded-3xl flex items-center justify-center mb-8 shadow-2xl"><CheckCircle2 size={48} /></div>
                    <h3 className="text-4xl font-black text-white mb-4">Emisión Completada</h3>
                  </motion.div>
                )}
              </AnimatePresence>

              <form className="space-y-12" onSubmit={handlePublish}>
                <div className="space-y-5">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] ml-2">Título del Comunicado</label>
                  <input placeholder="Ej: Resolución oficial plazas vacantes 2026..." className="w-full h-20 bg-gray-50/50 border border-gray-100 rounded-[1.5rem] px-8 text-xl font-bold text-brand-primary focus:ring-2 focus:ring-brand-accent outline-none transition-all" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {/* Combobox Multi-selección con Checkboxes */}
                  <div className="space-y-5 relative" ref={dropdownRef}>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] ml-2">Canal de Distribución (Multi)</label>
                    <button 
                      type="button"
                      onClick={() => setIsOpen(!isOpen)}
                      className="w-full h-20 bg-gray-50/50 border border-gray-100 rounded-[1.5rem] px-8 flex items-center justify-between font-bold text-brand-primary focus:ring-2 focus:ring-brand-accent outline-none transition-all"
                    >
                      <span className="truncate max-w-[200px]">
                        {selectedChannels.length === 1 ? selectedChannels[0] : `${selectedChannels.length} canales seleccionados`}
                      </span>
                      <ChevronDown size={20} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute z-50 w-full mt-2 bg-white border border-gray-100 rounded-2xl shadow-2xl p-4 space-y-2"
                        >
                          {CHANNELS.map((channel) => (
                            <div 
                              key={channel}
                              onClick={() => toggleChannel(channel)}
                              className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors group"
                            >
                              <div className="flex items-center gap-3">
                                <div className={`w-6 h-6 rounded-md border-2 transition-all flex items-center justify-center ${selectedChannels.includes(channel) ? 'bg-brand-accent border-brand-accent' : 'border-gray-200 bg-white'}`}>
                                  {selectedChannels.includes(channel) && <Check size={14} className="text-white" />}
                                </div>
                                <span className={`font-bold text-sm ${selectedChannels.includes(channel) ? 'text-brand-primary' : 'text-slate-400'}`}>{channel}</span>
                              </div>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="space-y-5">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] ml-2">Nivel de Urgencia</label>
                    <div className="flex gap-4 p-2 bg-gray-50 rounded-[1.5rem] border border-gray-100 h-20 items-center">
                      <button type="button" className="flex-1 h-14 bg-white text-brand-highlight rounded-xl font-black shadow-sm border border-gray-100">Crítico</button>
                      <button type="button" className="flex-1 h-14 text-slate-400 rounded-xl font-bold">Normal</button>
                    </div>
                  </div>
                </div>

                <div className="space-y-5">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] ml-2">Cuerpo de la Noticia</label>
                  <textarea className="w-full p-10 bg-gray-50/50 border border-gray-100 rounded-[2.5rem] text-lg font-medium text-brand-primary focus:ring-2 focus:ring-brand-accent transition-all resize-none min-h-[300px] shadow-inner-soft" placeholder="Redacte aquí el contenido íntegro..." />
                </div>

                <button type="submit" disabled={loading} className="w-full py-8 bg-brand-primary text-white font-black text-2xl rounded-[2rem] shadow-premium hover:shadow-2xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-5 group">
                  {loading ? "Transmitiendo..." : <><span>Transmitir Directiva</span><Zap size={28} className="text-brand-highlight group-hover:scale-125 transition-transform" /></>}
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-16">
            <div className="bg-brand-primary p-12 rounded-[4rem] text-white shadow-premium relative overflow-hidden">
              <div className="absolute top-[-20%] right-[-20%] w-60 h-60 bg-brand-accent/30 rounded-full blur-[80px]" />
              <h4 className="text-2xl font-black mb-12 relative z-10 tracking-tight text-brand-highlight">AWS AWS Status</h4>
              <div className="space-y-10 relative z-10">
                <div className="flex justify-between items-center border-b border-white/10 pb-6">
                  <span className="text-slate-400 font-bold text-xs uppercase tracking-widest">Region</span>
                  <span className="font-black">eu-west-1</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-6">
                  <span className="text-slate-400 font-bold text-xs uppercase tracking-widest">Infraestructura</span>
                  <span className="text-green-400 font-black">AWS Amplify</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
