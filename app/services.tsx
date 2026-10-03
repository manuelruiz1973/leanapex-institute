export interface ServiceItem {
  id: number;
  category: string;
  title: string;
  description: string;
  topics: string[];
  problemSolved: string;
  icon: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 1,
    category: "Gestión de Planta y Productividad",
    title: "Eficiencia Operacional y Lean Manufacturing",
    description: "Capacitaciones diseñadas para eliminar el desperdicio en el piso de planta y agilizar los flujos de trabajo de manufactura.",
    topics: ["Lean Manufacturing & Kaizen", "Identificación de Cuellos de Botella (TOC)", "Control de la Producción y Balanceo de Líneas"],
    problemSolved: "Retrasos en entregas, mermas elevadas y desorganización en flujos de producción.",
    icon: "⚙️"
  },
  {
    id: 2,
    category: "Gestión de Activos",
    title: "Mantenimiento Industrial y TPM",
    description: "Programas técnicos para optimizar el ciclo de vida de la maquinaria y garantizar la continuidad operativa en la planta.",
    topics: ["Mantenimiento Productivo Total (TPM)", "Confiabilidad Operacional (RCM)", "Control de Mantenimiento Preventivo"],
    problemSolved: "Paradas inesperadas de maquinaria pesada o líneas de costura, y altos costos reactivos.",
    icon: "🛡️"
  },
  {
    id: 3,
    category: "Dirección y Finanzas",
    title: "Planeamiento Estratégico y OPEX / CAPEX",
    description: "Formación de alto nivel para alinear las finanzas operativas con los objetivos estratégicos y el crecimiento del negocio.",
    topics: ["Planeamiento Estratégico y KPIs", "Optimización de Presupuestos (OPEX)", "Evaluación y Asignación de CAPEX"],
    problemSolved: "Desconexión entre la alta gerencia y la planta, presupuestos inflados o inversiones ineficientes.",
    icon: "📊"
  }
];
