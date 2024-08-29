"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GitbookManager {
    constructor(scraperEngine) {
        this.scraperEngine = scraperEngine;
    }
    async init() {
        await this.scraperEngine.init();
    }
    async scrap(url) {
        const htmlMenu = await this.scrapMenuByHTML(url);
        const httpMenu = await this.scrapMenuByHTTP(url);
        console.log('htmlMenu', htmlMenu);
        console.log('httpMenu', httpMenu);
    }
    async scrapMenuByHTML(url) {
        await this.scraperEngine.goto(url);
        await this.scraperEngine.waitForNavigation(30000, "domcontentloaded");
        const html = await this.scraperEngine.waitForSelector("html", 30000);
        console.log('html', html);
        return [];
    }
    async scrapMenuByHTTP(url) {
        return [];
    }
}
exports.default = GitbookManager;
