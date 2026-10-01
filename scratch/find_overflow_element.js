const proc = require('child_process').spawn('C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe', [
  '--headless',
  '--remote-debugging-port=9222',
  '--window-size=375,667',
  'file:///d:/GitHub/PID-conference/index.html'
]);

setTimeout(async () => {
  try {
    const res = await fetch('http://localhost:9222/json');
    const targets = await res.json();
    const pageTarget = targets.find(t => t.url.includes('index.html'));
    if (!pageTarget) { proc.kill(); return; }
    
    const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);
    ws.addEventListener('open', () => {
      ws.send(JSON.stringify({
        id: 1,
        method: 'Runtime.evaluate',
        params: {
          expression: `
            JSON.stringify(
              Array.from(document.querySelectorAll('*'))
                .map(el => {
                  const rect = el.getBoundingClientRect();
                  return {
                    tag: el.tagName,
                    id: el.id,
                    className: el.className,
                    right: rect.right,
                    width: rect.width,
                    scrollWidth: el.scrollWidth,
                    vw: window.innerWidth
                  };
                })
                .filter(item => item.right > item.vw + 5 || item.scrollWidth > item.vw + 5)
            )
          `
        }
      }));
    });
    ws.addEventListener('message', (evt) => {
      const msg = JSON.parse(evt.data);
      if (msg.id === 1) {
        const overflowingElements = JSON.parse(msg.result.result.value);
        console.log('Overflowing elements on 375px viewport:', overflowingElements);
        ws.close();
        proc.kill();
      }
    });
  } catch (err) {
    console.error(err);
    proc.kill();
  }
}, 1500);
