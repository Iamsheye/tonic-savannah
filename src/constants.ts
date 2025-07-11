import type { DashboardData } from "./components/DashboardTable/types";

export const SELECTS = [
  {
    id: "risk-level",
    name: "Risk Level",
  },
  {
    id: "asset",
    name: "Asset",
  },
  {
    id: "responsibility",
    name: "Responsibility",
  },
  {
    id: "resolving-group",
    name: "Resolving Group",
  },
  {
    id: "business-unit",
    name: "Business Unit",
  },
  {
    id: "internet-exposure",
    name: "Internet Exposure",
  },
  {
    id: "critical-asset",
    name: "Critical Asset",
  },
  {
    id: "regulation",
    name: "Regulation",
  },
  {
    id: "risk-state",
    name: "Risk State",
  },
];

export const VULNERABLE_ASSETS = [
  {
    id: 1,
    name: "D.G. ASUNTOS LEGALES",
    severity: [
      {
        id: "critical",
        count: 3,
      },
      {
        id: "high",
        count: 3,
      },
      {
        id: "medium",
        count: 1,
      },
    ],
  },
  {
    id: 2,
    name: "D.G. CLIENTE",
    severity: [
      {
        id: "critical",
        count: 3,
      },
      {
        id: "high",
        count: 13,
      },
      {
        id: "medium",
        count: 15,
      },
    ],
  },
  {
    id: 3,
    name: "D.G. E&P",
    severity: [
      { id: "critical", count: 2 },
      { id: "high", count: 42 },
      { id: "medium", count: 71 },
    ],
  },
];

export const DASHBOARD_DATA: Array<DashboardData> = [
  {
    id: 1,
    finding: "CVE-2024-4741",
    asset: {
      type: "AP",
      name: "AP_CORP_PORTAL..",
    },
    affectedSoftware:
      "La vulnerabilidad asociada con el Sling default POST Servlet enabled implica que el servlet predeterminado de POST de Apache Sling está habilitado sin las adecuadas restricciones de seguridad.",
    ownedBy: "Pedro Pablo",
    internetExposed: "secured",
    status: "Assigned",
    severity: "critical",
    source: "SOC",
    firstSeen: {
      date: "21/12/2023",
      time: "23:34:02",
    },
    lastSeen: {
      date: "12 Oct 2024",
      time: "23:34:02",
    },
  },
  {
    id: 2,
    finding: "CVE-2024-4741",
    asset: {
      type: "SAP",
      name: "SAP System",
    },
    affectedSoftware:
      "La vulnerabilidad asociada con el Sling default POST Servlet enabled implica que el servlet predeterminado de POST de Apache Sling está habilitado sin las adecuadas restricciones de seguridad.",

    ownedBy: "John Smith",
    internetExposed: "exposed",
    status: "Accepted",
    severity: "high",
    source: "Hacking",
    firstSeen: {
      date: "21/12/2023",
      time: "23:34:02",
    },
    lastSeen: {
      date: "12 Oct 2024",
      time: "23:34:02",
    },
  },
  {
    id: 3,
    finding: "CVE-2024-4741",
    asset: {
      type: "SAP",
      name: "SAP System",
    },
    affectedSoftware:
      "La vulnerabilidad asociada con el Sling default POST Servlet enabled implica que el servlet predeterminado de POST de Apache Sling está habilitado sin las adecuadas restricciones de seguridad.",

    ownedBy: "John Smith",
    internetExposed: null,
    status: "Ignored",
    severity: "critical",
    source: "DevSecOps",
    firstSeen: {
      date: "21/12/2023",
      time: "23:34:02",
    },
    lastSeen: {
      date: "12 Oct 2024",
      time: "23:34:02",
    },
  },
  {
    id: 4,
    finding: "CVE-2024-4741",
    asset: {
      type: "SAP",
      name: "SAP System",
    },
    affectedSoftware:
      "La vulnerabilidad asociada con el Sling default POST Servlet enabled implica que el servlet predeterminado de POST de Apache Sling está habilitado sin las adecuadas restricciones de seguridad.",

    ownedBy: "Pedro Pablo",
    internetExposed: null,
    status: "Unassigned",
    severity: "medium",
    source: "Hacking",
    firstSeen: {
      date: "21/12/2023",
      time: "23:34:02",
    },
    lastSeen: {
      date: "12 Oct 2024",
      time: "23:34:02",
    },
  },
];
