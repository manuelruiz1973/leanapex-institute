'use client';
import { ProgramasEspecializacion } from './components/ProgramasEspecializacion';
import React from 'react';
import { servicesData } from './services';
import SeccionTextil from './components/SeccionTextil';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased">
      {/* 1. BARRA DE NAVEGACIÓN */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-extrabold tracking-tight text-slate-950">
                LeanApex<span className="text-blue-600">Institute</span>
              </span>
            </div>
            <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
              <a href="#inicio" className="hover:text-blue-600 transition-colors">Inicio</a>
              <a href="#servicios" className="hover:text-blue-600 transition-colors">Servicios</a>
              <a href="#credenciales" className="hover:text-blue-600 transition-colors">Trayectoria</a>
              <a href="#contacto" className="hover:text-blue-600 transition-colors">Contacto</a>
            </div>
            <div>
              <a href="#contacto" className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all shadow-sm">
                Solicitar Propuesta
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <header id="inicio" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 mb-6 uppercase tracking-wider">
              Enfoque Operativo y Rentabilidad Industrial en el Perú
            </span>
            <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-6xl md:text-7xl leading-none">
              Maximizamos la eficiencia y <span className="text-blue-600">rentabilidad</span> de tu infraestructura industrial.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
              Capacitaciones técnicas y estratégicas de alto impacto. Transformamos operaciones complejas mediante Lean Manufacturing, TPM, optimización de costos y planeamiento estratégico adaptado a los sectores textil, industrial, salud y startups.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <a href="#contacto" className="px-6 py-3.5 text-base font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-xl transition-all shadow-md">
                Agendar Diagnóstico Operativo
              </a>
              <a href="#servicios" className="px-6 py-3.5 text-base font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all">
                Ver Catálogo de Programas
              </a>
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-50/40 rounded-full blur-3xl -z-10" />
      </header>

      {/* 3. SECCIÓN DE SERVICIOS */}
      <section id="servicios" className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-blue-600 uppercase tracking-widest">Programas de Capacitación</h2>
            <p className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Soluciones diseñadas para resolver desafíos reales de planta</p>
            <p className="mt-4 text-base text-slate-600">Nuestros módulos prácticos e in-house combinan rigurosidad técnica, herramientas digitales y analítica de datos para asegurar un retorno real de inversión.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service: any) => (
              <div key={service.id} className="flex flex-col justify-between bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-all duration-300">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-2xl bg-blue-50 p-2.5 rounded-xl">{service.icon}</span>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{service.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-950 mb-3">{service.title}</h3>
                  <p className="text-sm text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                  <div className="mb-6">
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Módulos Clave:</h4>
                    <ul className="space-y-2">
                      {service.topics.map((topic: string, index: number) => (
                        <li key={index} className="flex items-start text-sm text-slate-600">
                          <span className="text-blue-500 font-bold mr-2">✓</span>{topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <p className="text-xs font-bold text-red-600 mb-1">⚠️ Mitiga directamente:</p>
                  <p className="text-xs italic text-slate-500">"{service.problemSolved}"</p>
                  <a href="#contacto" className="mt-6 w-full bg-slate-950 hover:bg-slate-800 text-white text-sm font-semibold py-2.5 rounded-xl transition-colors text-center block">Cotizar Taller Corporativo</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 4. CREDENCIALES Y EXPERIENCIA */}
      {/* 5. VENTANA DESPLEGABLE ÚNICA UNIFICADA DE PROGRAMAS */}

      <section id="credenciales" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <h2 className="text-xs font-bold text-blue-600 uppercase tracking-widest">Respaldo de Autoridad</h2>
              <p className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Liderazgo técnico avalado por resultados medibles</p>
              <p className="mt-4 text-base text-slate-600 leading-relaxed">Nuestra dirección académica cuenta con más de **28 años de sólida experiencia liderando operaciones, reingeniería de procesos y gestión de planta** en los sectores industriales más exigentes del país.</p>
              <div className="mt-6 p-4 bg-slate-50 rounded-xl border border-slate-200">
                <p className="text-sm font-semibold text-slate-800">💡 Enfoque de Innovación Sostenible:</p>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">Diseñamos e integramos ecosistemas digitales de alta eficiencia (utilizando Power BI, Lean y automatización ligera) que elevan la trazabilidad sin requerir pesadas infraestructuras.</p>
              </div>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                <span className="text-2xl">🎓</span>
                <h4 className="text-base font-bold text-slate-950 mt-3">Maestría Ejecutiva (MBA)</h4>
                <p className="text-xs text-slate-500 mt-1">Grado de Alta Dirección</p>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">Formación avanzada en dirección de empresas, gestión de costos, presupuestos y viabilidad de inversiones financieras.</p>
              </div>
              <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                <span className="text-2xl">🏅</span>
                <h4 className="text-base font-bold text-slate-950 mt-3">Excelencia Operacional</h4>
                <p className="text-xs text-slate-500 mt-1">Especialización Avanzada</p>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">Expertise experto implementando metodologías Kaizen, TPM, Seis Sigma y desarticulación técnica de restricciones críticas.</p>
              </div>
              <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                <span className="text-2xl">🏛️</span>
                <h4 className="text-base font-bold text-slate-950 mt-3">Contrataciones del Estado</h4>
                <p className="text-xs text-slate-500 mt-1">Programa de Especialización</p>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">Conocimiento estructural del marco normativo público, óptimo para la gestión de licitaciones y consultorías gubernamentales.</p>
              </div>
              <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                <span className="text-2xl">🍃</span>
                <h4 className="text-base font-bold text-slate-950 mt-3">Sostenibilidad Industrial</h4>
                <p className="text-xs text-slate-500 mt-1">Economía Circular</p>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">Diseño de proyectos de reconversión industrial orientados a la reducción de huella de carbono y optimización de recursos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ProgramasEspecializacion />
           <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:flex md:justify-between md:items-center">
        <div className="text-sm">
          <span className="text-white font-bold tracking-tight">LeanApex Institute</span> &copy; 2026. Todos los derechos reservados.
        </div>
      </div>
    </footer>

  </div>
);
}
