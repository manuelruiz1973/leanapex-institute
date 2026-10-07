"use client";
import { useState } from 'react';

export default function SeccionTextil() {
  const [activeModulo, setActiveModulo] = useState<number | null>(null);

  const modulos = [
    { num: 1, titulo: "Introducción a Fibras y Tecnología del Hilado", horas: "8 hrs", desc: "Anatomía de fibras naturales, sintéticas y artificiales. Metrología textil y control de calidad del hilado mediante reportes Uster IPI." },
    { num: 2, titulo: "Tejeduría de Punto y Plano", horas: "8 hrs", desc: "Estructuras de ligamentos básicos, análisis de rendimiento de tela, cálculo de encogimientos y densidades comerciales." },
    { num: 3, titulo: "Tintorería y Acabados Textiles", horas: "8 hrs", desc: "Química de colorantes, agotamiento y continuidad. Procesos de acabado físico-químico y control de solidez al frote y lavado." },
    { num: 4, titulo: "Estampación Textil (Rotativa y Digital)", horas: "8 hrs", desc: "Preparación de pastas, tintas reactivas y plastisoles. Calibración de maquinaria rotativa y flujos de impresión digital directa (DTG)." },
    { num: 5, titulo: "Ingeniería del Producto y Desarrollo Técnico", horas: "8 hrs", desc: "Anatomía del Tech Pack industrial. Construcción del Bill of Materials (BOM) y metrología de puntos de medición (POM)." },
    { num: 6, titulo: "Estudio de Tiempos y Movimientos", horas: "8 hrs", desc: "Medición del tiempo con cronómetro continuo y micro-movimientos. Calificación Westinghouse y cálculo matemático del SAM." },
    { num: 7, titulo: "Lean Manufacturing en Confecciones", horas: "8 hrs", desc: "Identificación de las 7 Mudas. Mapeo de Flujo de Valor (VSM) actual y futuro. Diseño de Células en U y flujo continuo." },
    { num: 8, titulo: "Aseguramiento de la Calidad y Auditoría", horas: "8 hrs", desc: "Muestreo estadístico bajo norma ISO 2859-1 (ANSI/ASQ Z1.4). Tablas AQL, sistema de 4 puntos y auditorías finales." },
    { num: 9, titulo: "Industria 4.0 y Gestión Estratégica", horas: "8 hrs", desc: "Automatización CAD/CAM en corte, sistemas MES, costos textiles avanzados basados en el SAM e ingeniería financiera OPEX/CAPEX." }
  ];

  return (
    <section id="credenciales" className="py-16 bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4">
        <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-md bg-white text-slate-900">
          <div className="bg-[#0F1E36] text-white p-6 md:p-8 space-y-2">
            <span className="inline-block bg-[#F27420] text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Especialización Avanzada
            </span>
            <h2 className="text-2xl md:text-3xl font-black tracking-tight">
              Ingeniería de Procesos Textiles y Confecciones
            </h2>
            <p className="text-slate-300 max-w-3xl text-xs md:text-sm font-light">
              Malla curricular analítica estructurada en <strong>72 horas cronológicas (144 horas académicas)</strong>. Certificación con validez curricular por LeanApex Institute (RUC 10).
            </p>
          </div>

          <div className="divide-y divide-slate-100 bg-white px-6 py-2">
            {modulos.map((m) => (
              <div key={m.num} className="py-3.5">
                <button
                  type="button"
                  onClick={() => setActiveModulo(activeModulo === m.num ? null : m.num)}
                  className="w-full flex items-center justify-between text-left font-bold text-slate-800 hover:text-[#F27420] transition-colors focus:outline-none"
                >
                  <span className="text-xs md:text-sm pr-4">
                    <span className="text-[#F27420] font-mono mr-1">Módulo {m.num}:</span> {m.titulo}
                  </span>
                  <div className="flex items-center gap-2.5 shrink-0">
                    <span className="text-[10px] bg-slate-50 text-slate-400 font-semibold px-1.5 py-0.5 rounded border border-slate-100">
                      {m.horas}
                    </span>
                    <span className="text-sm font-mono text-slate-400 w-3 text-center">
                      {activeModulo === m.num ? '−' : '+'}
                    </span>
                  </div>
                </button>
                {activeModulo === m.num && (
                  <div className="mt-2 text-slate-600 text-xs pl-3 border-l-2 border-[#F27420] leading-relaxed">
                    {m.desc}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="bg-slate-50/70 p-6 md:p-8 border-t border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="space-y-3">
              <h4 className="font-extrabold text-[#0F1E36] text-sm">Inversión y Canales Oficiales</h4>
              <ul className="space-y-1 text-xs text-slate-600 font-medium">
                <li>• Módulo Individual: <strong className="text-slate-900">S/. 200.00</strong></li>
                <li>• Preventa Programa Completo: <strong className="text-[#F27420]">S/. 1,500.00</strong></li>
                <li>• Tarifa Corporativa (Grupal 3+): <strong className="text-[#0F1E36]">S/. 1,290.00 c/u</strong></li>
              </ul>
              <div className="pt-1.5 font-mono text-[11px] text-slate-500 space-y-0.5 border-t border-slate-200/60">
                <p>📱 <strong>YAPE:</strong> 904 017 098</p>
                <p>🏦 <strong>BCP Soles:</strong> 191-37144710-0-08</p>
                <p>📞 <strong>Soporte Comercial:</strong> 947107589 / 934910866</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <a 
                href="https://wa.me/51924244300" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block bg-[#F27420] hover:bg-[#D95F14] text-white text-xs font-extrabold px-6 py-3 rounded-lg shadow transition-all transform hover:-translate-y-0.5"
              >
                Matrícula Directa WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
