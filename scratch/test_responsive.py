import subprocess
import time
import json
import urllib.request
from websocket import create_connection

sizes = [
    (1920, 1080),
    (1440, 900),
    (1366, 768),
    (1024, 768),
    (768, 1024),
    (375, 667)
]

for w, h in sizes:
    proc = subprocess.Popen([
        r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
        "--headless",
        "--remote-debugging-port=9222",
        f"--window-size={w},{h}",
        "file:///d:/GitHub/PID-conference/index.html"
    ])
    time.sleep(1.2)
    try:
        req = urllib.request.urlopen("http://localhost:9222/json")
        targets = json.loads(req.read().decode('utf-8'))
        page_target = next((t for t in targets if "index.html" in t.get("url", "")), None)
        if page_target:
            ws_url = page_target["webSocketDebuggerUrl"]
            ws = create_connection(ws_url)
            eval_cmd = {
                "id": 1,
                "method": "Runtime.evaluate",
                "params": {
                    "expression": "JSON.stringify({ viewport: '" + str(w) + "x" + str(h) + "', scrollWidth: document.documentElement.scrollWidth, innerWidth: window.innerWidth, overflow: document.documentElement.scrollWidth > window.innerWidth })"
                }
            }
            ws.send(json.dumps(eval_cmd))
            result = ws.recv()
            res_data = json.loads(result)
            val = json.loads(res_data["result"]["result"]["value"])
            print(f"Viewport {w}x{h}: scrollWidth={val['scrollWidth']}, innerWidth={val['innerWidth']}, overflow={val['overflow']}")
            ws.close()
    except Exception as e:
        print(f"Error testing {w}x{h}:", e)
    finally:
        proc.terminate()
        time.sleep(0.5)
