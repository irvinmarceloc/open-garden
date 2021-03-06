export interface Routine{
    "id"?: number;
    "from" : string;
    "to": string;
    "repeat": string;
    "zone": string;
    "status": string
}

export interface ScheduleUpdate{
    "date_from"?: string;
    "time_from"?: string;
    "date_to"?: string;
    "time_to"?: string;
    "status"?: string;
    "watering_id"?: number;
    "zone_id"?: number
}

export interface ScheduleSend{
    "date_from": string;
    "time_from": string;
    "date_to": string;
    "time_to": string;
    "status": string;
    "watering_id"?: number;
    "zone_id": number
}

export interface Rutina{
    "date_from": string;
    "date_to": string;
    "status": string;
    "watering_id"?: number;
    "zone_id": number
}