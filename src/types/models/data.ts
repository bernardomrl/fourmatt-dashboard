export interface DataModel {
  date: string;
  category: 'Produtividade' | 'RH' | 'Video Chamada' | 'BI';
  application:
    | 'Jira'
    | 'Microsoft Office 365'
    | 'Power BI'
    | 'Solides'
    | 'Zoom';
  spend: number;
  active_users: number;
  inactive_users: number;
}
