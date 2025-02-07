import { Controller } from "@nestjs/common";
import { Get } from "@nestjs/common";
import { DashPageService } from "./dash.service";

class TopCard {
    title: string | undefined;
    Amount: string | undefined;
    time: string | undefined;
    image: string | undefined;
}

@Controller('dash')
export class DashPageController{
    constructor(private readonly dashservice : DashPageService){};

    @Get('/get-dash')
    async getTopCards() : Promise<TopCard[]>{
        return this.dashservice.getTopCards();
    }

}