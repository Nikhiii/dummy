const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch({
      headless: false,
      args: ['--headless', '--disable-gpu', '--remote-debugging-port=9222', '--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    try{
      await page.goto('https://api.example.com/');
      await page.setViewport({
        width:1200,
        height:1200,
      })
      await page.waitForSelector('div');
      await page.waitForSelector('h1');
      await page.waitForSelector('form');

      const result1 = await page.evaluate(()=>{
        let heading = document.querySelector(".container");
        return heading.innerHTML;
      })
      const result2 = await page.evaluate(()=>{
        let heading = document.querySelector(".form-title");
        return heading.innerHTML;
      })
   
      console.log('TESTCASE:testcase1:success');
    }
    catch(e){
      console.log('TESTCASE:testcase1:failure');
    }
    
    const page1 = await browser.newPage();
    try{
      await page1.goto('https://api.example.com/');
      await page1.setViewport({
        width:1200,
        height:800,
      })
      await page1.waitForSelector('label');
      await page1.waitForSelector('input');
      
    const result1 = await page1.evaluate(()=>{
        let heading = document.querySelector("#fullName");
        return heading.innerHTML;
    })
    const result2 = await page1.evaluate(()=>{
        let heading = document.querySelector("#username");
        return heading.innerHTML;
    })
    const result3 = await page1.evaluate(()=>{
        let heading = document.querySelector("#email");
        return heading.innerHTML;
    })
      console.log('TESTCASE:testcase2:success');
    }
    catch(e){
      console.log('TESTCASE:testcase2:failure');
    } 

    const page2 = await browser.newPage();
    try{
      await page2.goto('https://api.example.com/');
      await page2.setViewport({
        width:1200,
        height:800,
      })
      
    const result1 = await page2.evaluate(()=>{
        let heading = document.querySelector("#phoneNumber");
        return heading.innerHTML;
    })
    const result2 = await page2.evaluate(()=>{
        let heading = document.querySelector("#password");
        return heading.innerHTML;
    })
    const result3 = await page2.evaluate(()=>{
        let heading = document.querySelector("#confirmPassword");
        return heading.innerHTML;
    })
      
      console.log('TESTCASE:testcase3:success');
    }
    catch(e){
      console.log('TESTCASE:testcase3:failure');
    }

  const page3 = await browser.newPage();
  try{
    await page3.goto('https://api.example.com/');
    await page3.setViewport({
      width:1200,
      height:800,
    })
    await page3.waitForSelector('span'); 

    const result1 = await page3.evaluate(()=>{
        let heading = document.querySelector("#male");
        return heading.innerHTML;
    })
    const result2 = await page3.evaluate(()=>{
        let heading = document.querySelector("#female");
        return heading.innerHTML;
    })
    console.log('TESTCASE:testcase4:success');
  }
  catch(e){
    console.log('TESTCASE:testcase4:failure');
  }

  const page4 = await browser.newPage();
  try{
    await page4.goto('https://api.example.com/');
    await page4.setViewport({
      width:1200,
      height:800,
    })
    await page4.waitForSelector('button'); 

    const result1 = await page4.evaluate(()=>{
        let heading = document.querySelector("#other");
        return heading.innerHTML;
    })
  
    console.log('TESTCASE:testcase5:success');
  }
  catch(e){
    console.log('TESTCASE:testcase5:failure');
  }
  
  finally{
    await page.close();
    await page1.close();
    await page2.close();
    await page3.close();
    await page4.close();
    await browser.close();
  }
  
})();