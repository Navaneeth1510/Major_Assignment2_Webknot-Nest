import { Injectable } from "@nestjs/common";

class TopCard {
    title: string | undefined;
    Amount: string | undefined;
    time: string | undefined;
    image: string | undefined;
}

@Injectable()
export class DashPageService{
    
    async getTopCards() : Promise<TopCard[]> {
        const response = await fetch("http://localhost:5010/dash");
        const tiles = await response.json();
        return tiles;
    }   
}