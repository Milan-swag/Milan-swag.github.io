// Navbar
document.querySelector(".header-left").addEventListener("click", function() {
    window.open ("/?ref=navbar_text", "_parent")
});

document.addEventListener("DOMContentLoaded", function() {
    console.log('%cStop!', 'color: red; font-size: 30px; font-weight: bold;');
    console.log('%cThis is a browser feature intended for developers only and may contain sensitive links and information. If someone has told you to copy-paste something here to unlock a feature, share certain information or hack an account, this is fraud and your data is at risk!', 'color: red; font-size: 12.5px;');

    function getDeviceType() {
        const userAgent = navigator.userAgent.toLowerCase();
        if (/mobile|android|iphone|ipad|ipod|blackberry|windows phone/i.test(userAgent)) {
           return "mobile";
        } else {
            return "desktop";
        }
    }
    
    function getBrowser() {
        const userAgent = navigator.userAgent;
        if (userAgent.indexOf("Firefox") > -1) {
            return "mf_mozilla-firefox";
        } else if (userAgent.indexOf("SamsungBrowser") > -1) {
            return "si_samsung-internet";
        } else if (userAgent.indexOf("Opera") > -1 || userAgent.indexOf("OPR") > -1) {
            return "op_opera";
        } else if (userAgent.indexOf("Trident") > -1) {
            return "ie_internet-Explorer";
        } else if (userAgent.indexOf("Edge") > -1) {
            return "me_microsoft-edge";
        } else if (userAgent.indexOf("Chrome") > -1) {
            return "gc_google-chrome";
        } else if (userAgent.indexOf("Safari") > -1) {
            return "as_apple-safari";
        } else {
            return "uk_unknown";
        }
    }
    
    const deviceType = getDeviceType();
    const browser = getBrowser();
    
    console.log(`set-userdevice=${deviceType}`);
    console.log(`set-userbrowser=${browser}`);
});


// Custom CSS styles based on DIV properties
(function() {
    function generateStyles() {
        const elements = document.querySelectorAll('*');
        const styles = new Set();

        elements.forEach(element => {
        const classList = element.classList;

        classList.forEach(cls => {
            if (cls.startsWith('w') || cls.startsWith('h')) {
            const parts = cls.substring(1).split('-');
            const value = parts[0];
            const decimal = parts[1] ? '.' + parts[1] : ''; 
            const finalValue = value + decimal;
            const property = cls.charAt(0) === 'w' ? 'width' : 'height';

            if (!isNaN(finalValue)) {
                styles.add(`.${cls} { ${property}: ${finalValue}px; }`);
            }
            }
        });
        });
        return Array.from(styles).join('\n');
    }

    const styleTag = document.createElement('style');
    styleTag.type = 'text/css';
    styleTag.appendChild(document.createTextNode(generateStyles()));
    document.head.appendChild(styleTag);
})();