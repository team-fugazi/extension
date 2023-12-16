export interface subredditModel {
  id: string;
  name: string;
  title: string;
  created_utc: string;
  subscribers: string;
  display_name: string;
  public_description: string;
}


export interface statistics {
  actions:number | null,
  comments: number |null
  reports: number | null 
}
