<template>
  <!--The footer of the page-->
  <div id="footer" class="ft">
    <div class="ft-inner clearfix">
      <div class="ft-helper clearfix">
        <dl>
          <dt>About us</dt>
          <dd>
            <NuxtLink to="/about/profile">Company</NuxtLink
            ><NuxtLink to="/about/leader">our team</NuxtLink
            ><NuxtLink to="/about/report">Notice</NuxtLink>
          </dd>
        </dl>
        <dl>
          <dt>business</dt>
          <dd>
            <NuxtLink to="/invest">Invest</NuxtLink
            ><NuxtLink to="/borrow">Loan</NuxtLink>
          </dd>
        </dl>
        <dl>
          <dt>Help Center</dt>
          <dd>
            <NuxtLink to="/help">Getting started</NuxtLink
            ><NuxtLink to="/user">My account</NuxtLink>
          </dd>
        </dl>
        <dl>
          <dt>Contact us</dt>
          <dd><NuxtLink to="/about">Contact us</NuxtLink></dd>
        </dl>
      </div>
      <div class="ft-service">
        <dl>
          <dd>
            <p>
              <strong>000-000-0000</strong><br />
              workday 9:00-22:00<br />
              Facebook group:<em>12345678</em><br />
              workday 9:00-22:00 / Saturday 9:00-18:00<br />
            </p>
            <div class="ft-serv-handle clearfix">
              <a
                class="icon-hdSprite icon-ft-sina a-move a-moveHover"
                title="blog"
                target="_blank"
                href="#"
              ></a>
              <a
                class="icon-hdSprite icon-ft-heart a-move a-moveHover"
                title="aaa"
                target="_blank"
                href="#"
              ></a>
              <a
                class="icon-ft-qun a-move a-moveHover"
                title="group"
                target="_blank"
                href="#"
              ></a>
              <a
                class="icon-hdSprite icon-ft-email a-move a-moveHover mrn"
                title="email"
                target="_blank"
                href="mailto:xz@shangrongbao.com"
              ></a>
            </div>
          </dd>
        </dl>
      </div>
      <div class="ft-wap clearfix">
        <dl>
          <dt>barcode</dt>
          <dd>
            <span class="icon-ft-erweima">
              <img src="~/assets/images/code.png" style="display: inline;" />
            </span>
          </dd>
        </dl>
      </div>
    </div>
    <div class="ft-record">
      <div class="ft-approve clearfix">
        <a class="icon-approve approve-0 fadeIn-2s" target="_blank" href="#">
        </a>
        <a class="icon-approve approve-1 fadeIn-2s" target="_blank" href="#">
        </a>
        <a class="icon-approve approve-2 fadeIn-2s" target="_blank" href="#">
        </a>
        <a class="icon-approve approve-3 fadeIn-2s" target="_blank" href="#">
        </a>
      </div>
      <div class="ft-identity">
        ©2022 srb All rights reserved&nbsp;&nbsp;&nbsp;
        <span class="color-e6">|</span>&nbsp;&nbsp;&nbsp;
        xxxxx Company,Inc.&nbsp;&nbsp;&nbsp;
        <span class="color-e6">|</span>&nbsp;&nbsp;&nbsp;
        <a target="_blank" href="https://github.com/zhezhang01">
          Link to my github
        </a>
      </div>
    </div>
  </div>
</template>
