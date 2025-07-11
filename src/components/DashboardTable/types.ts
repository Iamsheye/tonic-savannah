export interface Asset {
  type: "AP" | "SAP";
  name: string;
}

export interface DateTimeInfo {
  date: string;
  time: string;
}

export type InternetExposureStatus = "secured" | "exposed" | null;
export type FindingStatus = "Assigned" | "Accepted" | "Ignored" | "Unassigned";
export type SeverityLevel = "critical" | "high" | "medium" | "low";

export interface DashboardData {
  id: number;
  finding: string;
  asset: Asset;
  affectedSoftware: string;
  ownedBy: string;
  internetExposed: InternetExposureStatus;
  status: FindingStatus;
  severity: SeverityLevel;
  source: string;
  firstSeen: DateTimeInfo;
  lastSeen: DateTimeInfo;
}
