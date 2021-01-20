export interface Routine{
    "id"?: number;
    "from" : string;
    "to": string;
    "repeat": string;
    "zone": string;
    "status": string
}

export interface Schedule{
    "date_from": string;
    "date_to": string;
    "status": string;
    "watering_id": number;
    "zone_id": number
}