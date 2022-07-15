(function() {

   const hasNativeLazyLoadSupport = 'loading' in HTMLImageElement.prototype;

   if (hasNativeLazyLoadSupport) {
    
      const lazyEls = document.querySelectorAll("[loading=lazy]");
     
      lazyEls.forEach(lazyEl => {
         const src = lazyEl.getAttribute("data-src");
         lazyEl.setAttribute("src", src);
      })
   } else {
     
      const script = document.createElement("script");
      script.async = true;
      script.src =
         "https://cdn.jsdelivr.net/npm/vanilla-lazyload@17.4.0/dist/lazyload.min.js";

      
      window.lazyLoadOptions = {
         elements_selector: "[loading=lazy]"
      }
    
      document.body.appendChild(script);
    }
  })()

  