const fs = require('fs');
const puppeteer = require('puppeteer');

async function run(){
    const browser = await puppeteer.launch(); 
    const page = await browser.newPage();
    await page.goto('https://sapo.pt'); //website to scrap

    //await page.screenshot({path: 'example.png', fullPage: true}); //tira print ao site
    //await page.pdf({path: 'example.pdf', format: 'A4'}); //tira print e faz um pdf

    //const html = await page.content();
    //console.log(html);

    //const title = await page.evaluate(() => document.title);
    //console.log(title);

    //const text = await page.evaluate(() => document.body.innerText);
    //console.log(text);

    const links = await page.evaluate(() => 
         Array.from(document.querySelectorAll('a'), (e) => e.href )
    );
    console.log(links);

    // const junk = await page.evaluate(() => 
    //      Array.from(document.querySelectorAll('#courses .card'), (e) => ({
    //         title: e.querySelector('.card-body h3').innerText,
    //         title: e.querySelector('.card-body .level').innerText,
    //         url: e.querySelector('.card-body a').href
    //      }) )
    // );
    // console.log(junk);

    //save data to JASON File
    // fs.writeFile('junk.json', JSON.stringify(links), (err) => {
    //     if (err) throw err;
    //     console.log('file saved');
    // });

    await browser.close();
}
console.log('DONE!');
run();
