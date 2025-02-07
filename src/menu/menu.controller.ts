import { Controller } from "@nestjs/common";
import { Get } from "@nestjs/common";
import { MenuService } from "./menu.service";

class TopCard {
    title: string | undefined;
    Amount: string | undefined;
    time: string | undefined;
    image: string | undefined;
}

@Controller('menu')
export class MenuController{
    constructor(private readonly menuservice : MenuService){};

    @Get('/get-menu')
    async getTopCards() : Promise<TopCard[]>{
        return this.menuservice.getMenu();
    }

}