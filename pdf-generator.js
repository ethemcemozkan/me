const puppeteer = require('puppeteer');
const path = require('path');
const httpServer = require('http-server'); // Import http-server

(async () => {
  // Define the path to serve and start the HTTP server
  const buildPath = path.resolve(__dirname, 'build');
  const server = httpServer.createServer({ root: buildPath });
  
  // Start the server on a specific port
  server.listen(8080);

  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();

  // Navigate to the local server URL
  await page.goto('http://localhost:8080', { waitUntil: 'networkidle0' });

  // Wait for a specific element to ensure content is loaded
  await page.waitForSelector('#root'); // Replace with a specific element from your app


  const errors = await page.evaluate(() =>
    Array.from(document.querySelectorAll('div'), (element) => element.textContent)
  );

  console.log('Errors:', errors);
  await page.emulateMediaType('print');
  // Generate PDF
  await page.pdf({
    path: 'build/EthemCemOzkanCV.pdf', 
    format: 'A4',
    printBackground: true,
    showBackground: false,
    
  });

  await browser.close();
  server.close(); // Close the server after PDF generation
  console.log('PDF generated successfully!');
})();