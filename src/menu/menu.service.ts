import { Injectable } from "@nestjs/common";

class TopCard {
    title: string | undefined;
    Amount: string | undefined;
    time: string | undefined;
    image: string | undefined;
}

@Injectable()
export class MenuService{
    
    async getMenu() : Promise<TopCard[]> {
        const response = await fetch("http://localhost:5010/menu");
        const tiles = await response.json();
        return tiles;
    }   
}