'use client';

import React, { useState } from 'react';

export function ProgramasEspecializacion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const programas = [
    {
      titulo: "Ingeniería de Procesos Textiles y Confecciones",
      sub: "Optimización de planta, control de calidad y eficiencia productiva textil.",
      mallas: [
        "Módulo 1: Introducción a la Industria Textil y Cadena de Suministro",
        "Módulo 2: Fibras Textiles, Hilandería y su Impacto en el Proceso",
        "Módulo 3: Tejeduría Plana y de Punto: Estructuras y Parámetros",
        "Módulo 4: Tintorería, Acabados Químicos y Sostenibilidad Ambiental",
        "Módulo 5: Lean Manufacturing aplicado a Confecciones (Eliminación de Mudas)",
        "Módulo 6: Estudio de Tiempos, Métodos y Balance de Líneas de Costura",
        "Módulo 7: Control de Calidad, Auditoría de Prendas y Aseguramiento",
        "Módulo 8: Planeamiento y Control de la Producción Textil (PCP)",
        "Módulo 9: Gestión de Planta, Costos de Manufactura y Logística Global"
      ],
      detalles: "Inversión Contado: S/. 3,200 | 5 Cuotas de S/. 700 | Tarifa Corp: S/. 2,800"
    },
    {
      titulo: "Planner de Producción de Alto Rendimiento",
      sub: "Planificación avanzada, programación de operaciones y control de requerimientos.",
      mallas: [
        "Módulo 1: Fundamentos de la Planificación y Control de la Producción (PCP)",
        "Módulo 2: Pronósticos de Demanda y Modelos de Proyección Avanzada",
        "Módulo 3: Plan Agregado de Producción y Gestión de la Capacidad",
        "Módulo 4: Plan Maestro de Producción (MPS) y su Estabilización",
        "Módulo 5: Planificación de Requerimientos de Materiales (MRP) y CRP",
        "Módulo 6: Programación de Operaciones a Corto Plazo y Secuenciación",
        "Módulo 7: Control de la Actividad de Producción (PAC) y Teoría de Restricciones",
        "Módulo 8: Gestión y Control de Inventarios de Alto Rendimiento",
        "Módulo 9: Indicadores de Rendimiento (OEE, KPIs) y Analítica de Datos"
      ],
      detalles: "Inversión Contado: S/. 3,200 | 5 Cuotas de S/. 700 | Tarifa Corp: S/. 2,800"
    },
    {
      titulo: "Planeamiento Estratégico de Empresas Privadas",
      sub: "La fusión ágil entre Lean / Hoshin Kanri y las normativas de CEPLAN / SINAPLAN.",
      mallas: [
        "Módulo 1: Fundamentos y Normativa Sectorial (CEPLAN/SINAPLAN)",
        "Módulo 2: Diagnóstico Estratégico y Mapeo de Desperdicios Corporativos",
        "Módulo 3: Formulación y Despliegue con Hoshin Kanri (Matriz X)",
        "Módulo 4: Ejecución Ágil de Proyectos y Presupuestos Híbridos",
        "Módulo 5: Control Estratégico, KPIs Avanzados y Cuadros de Mando"
      ],
      detalles: "Inversión Contado: S/. 3,200 | 5 Cuotas de S/. 700 | Tarifa Corp: S/. 2,800"
    }
  ];

  return (
    <section className="bg-slate-50 py-16 border-t border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Programas de Especialización
          </h2>
          <p className="text-slate-600 mt-2">
            Programas ejecutivos virtuales sincrónicos diseñados para industrias competitivas y sectores regulados.
          </p>
        </div>

        <div className="space-y-4">
          {programas.map((prog, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm transition-all">
              <button
                onClick={() => toggleAccordion(idx)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors focus:outline-none"
              >
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{prog.titulo}</h3>
                  <p className="text-sm text-slate-500 mt-0.5">{prog.sub}</p>
                </div>
                <span className="text-xl font-mono text-slate-400 ml-4">
                  {openIndex === idx ? '−' : '+'}
                </span>
              </button>

              {openIndex === idx && (
                <div className="p-6 border-t border-slate-100 bg-slate-50/50">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-3">
                    Malla Curricular Analítica:
                  </h4>
                  <ul className="space-y-2 mb-6">
                    {prog.mallas.map((malla, mIdx) => (
                      <li key={mIdx} className="text-sm text-slate-700 flex items-start">
                        <span className="text-blue-500 font-bold mr-2">•</span>
                        {malla}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-slate-200 grid sm:grid-cols-2 gap-4 items-center">
                    <div>
                      <p className="text-xs text-slate-400 uppercase font-semibold">Inversión y Financiamiento:</p>
                      <p className="text-sm text-slate-700 font-medium mt-0.5">{prog.detalles}</p>
                      <p className="text-xs text-slate-500 mt-1">🏦 BCP Soles Corriente: 19137144710008 | CCI: 00219113714471000856</p>
                    </div>
                    <div className="sm:text-right">
                      <a
                        href="https://wa.me/51924244300"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold text-xs px-4 py-2.5 rounded-lg shadow-sm transition-colors"
                      >
                        💬 Consultar por WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
