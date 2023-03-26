import React from "react";

function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <div>
      <p className="footer">Copyright © {currentYear} GrocerRia</p>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7933047442679365"
        crossorigin="anonymous"
      ></script>
      <ins
        class="adsbygoogle"
        style="display:inline-block;width:200px;height:800px"
        data-ad-client="ca-pub-7933047442679365"
        data-ad-slot="4232650593"
      ></ins>
      <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
    </div>
  );
}

export default Footer;
