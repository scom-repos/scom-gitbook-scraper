import { IScraperEngine } from "@scom/scom-scraper";
export default class GitbookManager {
    private scraperEngine;
    constructor(scraperEngine: IScraperEngine);
    init(): Promise<void>;
    scrap(url: string): Promise<void>;
    private scrapMenuByHTML;
    private scrapMenuByHTTP;
}
