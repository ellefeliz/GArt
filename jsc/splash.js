
function initArtwalkSplash() {
  var STORAGE_KEY = "artwalkgr_splash_seen";

  // Avoid adding it twice if this ever gets called more than once.
  if (document.getElementById("splash-overlay")) return;

  // --- Inject styles (once) ---
  var style = document.createElement("style");
  style.textContent = `
    #splash-overlay {
      position: fixed;
      inset: 0;
      background: rgba(20, 20, 20, 0.55);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 999999; /* stays above the map regardless of its z-index */
      padding: 16px;
    }
    #splash-card {
      background: #fff;
      border-radius: 14px;
      max-width: 420px;
      width: 100%;
      padding: 28px 24px 24px;
      position: relative;
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.25);
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      animation: splash-pop 0.25s ease-out;
    }
    @keyframes splash-pop {
      from { transform: scale(0.95); opacity: 0; }
      to   { transform: scale(1);    opacity: 1; }
    }
    #splash-title { margin: 0 0 12px; font-size: 1.4rem; color: #1a1a1a; }
    #splash-body p { margin: 0 0 12px; color: #444; line-height: 1.5; font-size: 0.97rem; }
    #splash-body ul { margin: 0 0 12px; padding-left: 20px; color: #444; line-height: 1.6; font-size: 0.95rem; }
    #splash-body li { margin-bottom: 6px; }
    #splash-close {
      position: absolute; top: 12px; right: 14px;
      background: none; border: none; font-size: 1.5rem; line-height: 1;
      color: #999; cursor: pointer; padding: 4px;
    }
    #splash-close:hover { color: #333; }
    #splash-dismiss {
      width: 100%; padding: 12px 16px; border: none; border-radius: 8px;
      background: #e0393e; color: #fff; font-size: 1rem; font-weight: 600;
      cursor: pointer; margin-top: 4px;
    }
    #splash-dismiss:hover { background: #c72e33; }
    #splash-reopen {
      position: fixed; bottom: 20px; right: 20px;
      width: 42px; height: 42px; border-radius: 50%; border: none;
      background: #1a1a1a; color: #fff; font-size: 1.15rem; font-weight: 700;
      cursor: pointer; z-index: 999998;
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
    }
    #splash-reopen:hover { background: #333; }
    @media (max-width: 480px) {
      #splash-card { padding: 22px 18px 18px; }
      #splash-title { font-size: 1.2rem; }
    }
  `;
  document.head.appendChild(style);

  // --- Build overlay markup ---
  var overlay = document.createElement("div");
  overlay.id = "splash-overlay";
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.setAttribute("aria-labelledby", "splash-title");
  overlay.innerHTML = `
    <div id="splash-card">
      <button id="splash-close" aria-label="Close">&times;</button>
      <h2 id="splash-title">Welcome to ArtWalk GR</h2>
      <div id="splash-body">
        <p>This map shows public art and venues around Grand Rapids you can explore in person.</p>
        <ul>
          <li><strong>Tap a marker</strong> to see the venue's name, address, and a link with more details.</li>
          <li><strong>Tap "Recenter to Current Location"</strong> to find art near you.</li>
          <li><strong>Pinch or scroll</strong> to zoom in and explore different neighborhoods.</li>
        </ul>
        <p>Get out there and start exploring!</p>
      </div>
      <button id="splash-dismiss">Got it, let's explore</button>
    </div>
  `;

  var reopenBtn = document.createElement("button");
  reopenBtn.id = "splash-reopen";
  reopenBtn.setAttribute("aria-label", "How this works");
  reopenBtn.textContent = "?";

  // Append to the very end of body, so it renders on top of the map
  // regardless of what else is in there.
  document.body.appendChild(overlay);
  document.body.appendChild(reopenBtn);

  // --- Behavior ---
  function hideSplash() {
    overlay.style.display = "none";
    try { localStorage.setItem(STORAGE_KEY, "1"); } catch (e) { /* ignore */ }
  }
  function showSplash() {
    overlay.style.display = "flex";
  }

  var alreadySeen = false;
  try { alreadySeen = localStorage.getItem(STORAGE_KEY) === "1"; } catch (e) { /* ignore */ }
  if (alreadySeen) overlay.style.display = "none";

  document.getElementById("splash-dismiss").addEventListener("click", hideSplash);
  document.getElementById("splash-close").addEventListener("click", hideSplash);
  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) hideSplash();
  });
  reopenBtn.addEventListener("click", showSplash);
}
