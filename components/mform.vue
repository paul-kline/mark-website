<template>
  <span
    ><!-- Begin Mailchimp Signup Form -->
    <!-- <link
      href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css"
      rel="stylesheet"
      type="text/css"
    />
    <style type="text/css">
      #mc_embed_signup {
        background: #fff;
        clear: left;
        font: 14px Helvetica, Arial, sans-serif;
      }
      /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
  We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
    </style> -->
    <div id="mc_embed_signup">
      <form
        action="https://markkline.us15.list-manage.com/subscribe/post?u=3c46d0ddd7c8be694b2c02abd&amp;id=954a78509d"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        class="validate bordered px-3 mb-2 ml-3 mr-5"
        target="_blank"
        novalidate
      >
        <div id="mc_embed_signup_scroll ">
          <h2>Subscribe for Email updates</h2>
          <!-- <div class="mc-field-group"> -->
          <v-text-field
            label="Email Address"
            :rules="emailRules"
            type="email"
            value=""
            name="EMAIL"
            class="required email mt-2"
            id="mce-EMAIL"
            dense
          />
          <!-- </div> -->
          <!-- <div class="mc-field-groups"> -->
          <v-text-field
            label="First Name"
            type="text"
            value=""
            name="FNAME"
            class=""
            id="mce-FNAME"
            dense
          />
          <!-- </div> -->
          <!-- <div class="mc-field-groups"> -->
          <v-text-field
            label="Last Name"
            type="text"
            value=""
            name="LNAME"
            class=""
            id="mce-LNAME"
            dense
          />
          <!-- </div> -->
          <div id="mce-responses" class="clear">
            <div
              class="response"
              id="mce-error-response"
              style="display:none"
            ></div>
            <div
              class="response"
              id="mce-success-response"
              style="display:none"
            ></div>
          </div>
          <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
          <div style="position: absolute; left: -5000px;" aria-hidden="true">
            <input
              type="text"
              name="b_3c46d0ddd7c8be694b2c02abd_954a78509d"
              tabindex="-1"
              value=""
            />
          </div>
          <div class="clear">
            <v-btn class="mb-2">
              <input
                type="submit"
                value="Subscribe"
                name="subscribe"
                id="mc-embedded-subscribe"
                class="btn"
            /></v-btn>
          </div>
        </div>
      </form>
    </div>
    <script
      type="text/javascript"
      src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
    ></script>
    <script type="text/javascript">
      (function($) {
        window.fnames = new Array();
        window.ftypes = new Array();
        fnames[0] = "EMAIL";
        ftypes[0] = "email";
        fnames[1] = "FNAME";
        ftypes[1] = "text";
        fnames[2] = "LNAME";
        ftypes[2] = "text";
      })(jQuery);
      var $mcj = jQuery.noConflict(true);
    </script>
    <!--End mc_embed_signup--></span
  >
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class HelloDecorator extends Vue {
  emailRules = [
    (value: string) => !!value || "Required.",
    (value: string) => {
      const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return pattern.test(value) || "Invalid e-mail.";
    }
  ];
}
</script>
<style>
.bordered {
  border: 1px solid rgb(151, 151, 151);
  border-radius: 5px;
}
</style>
