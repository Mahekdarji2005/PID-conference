const sizes = [
  [1920, 1080],
  [1440, 900],
  [1366, 768],
  [1024, 768],
  [768, 1024],
  [375, 667]
];

async function testViewport(w, h) {
  const proc = require('child_process').spawn('C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe', [
    '--headless',
    '--remote-debugging-port=9222',
    '--window-size=' + w + ',' + h,
    'file:///d:/GitHub/PID-conference/index.html'
  ]);
  await new Promise(r => setTimeout(r, 1200));
  try {
    const res = await fetch('http://localhost:9222/json');
    const targets = await res.json();
    const pageTarget = targets.find(t => t.url.includes('index.html'));
    if (!pageTarget) { proc.kill(); return; }
    
    await new Promise((resolve) => {
      const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);
      ws.addEventListener('open', () => {
        ws.send(JSON.stringify({
          id: 1,
          method: 'Runtime.evaluate',
          params: {
            expression: 'JSON.stringify({ viewport: "' + w + 'x' + h + '", scrollWidth: document.documentElement.scrollWidth, innerWidth: window.innerWidth, overflow: document.documentElement.scrollWidth > window.innerWidth })'
          }
        }));
      });
      ws.addEventListener('message', (evt) => {
        const msg = JSON.parse(evt.data);
        if (msg.id === 1) {
          const val = JSON.parse(msg.result.result.value);
          console.log(`Viewport ${val.viewport}: scrollWidth=${val.scrollWidth}, innerWidth=${val.innerWidth}, overflow=${val.overflow}`);
          ws.close();
          proc.kill();
          resolve();
        }
      });
    });
  } catch (err) {
    console.error(err);
    proc.kill();
  }
}

(async () => {
  for (const item of sizes) {
    await testViewport(item[0], item[1]);
    await new Promise(r => setTimeout(r, 500));
  }
})();
