import {IScraperEngine} from "@scom/scom-scraper";

export default class GitbookManager {

    private scraperEngine: IScraperEngine;

    constructor(scraperEngine: IScraperEngine) {
        this.scraperEngine = scraperEngine;
    }

    async init() {
        await this.scraperEngine.init();
    }

    async scrap(url: string) {
        const htmlMenu = await this.scrapMenuByHTML(url);
        const httpMenu = await this.scrapMenuByHTTP(url);
        console.log('htmlMenu', htmlMenu);
        console.log('httpMenu', httpMenu);
    }

    private async scrapMenuByHTML(url: string) {
        await this.scraperEngine.goto(url);
        await this.scraperEngine.waitForNavigation(30000, "domcontentloaded");
        const html = await this.scraperEngine.waitForSelector("html", 30000);
        console.log('html', html);
        return [];
    }

    private async scrapMenuByHTTP(url: string) {
        return [];
    }

}