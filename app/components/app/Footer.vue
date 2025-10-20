<script lang="ts" setup>
import LinkdinIcon from '~/components/icons/LinkdinIcon.vue';
import InstagramIcon from '~/components/icons/InstagramIcon.vue';
import TwitterIcon from '~/components/icons/TwitterIcon.vue';
import FaceBookIcon from '~/components/icons/FacebookIcon.vue';

interface MainLink {
  href: string;
  title: string;
}

type SocialLink = {
  id: string,
  link: string,
  icon: any,
}

interface BatchLinks {
  title: string;
  links: MainLink[];
}

const social_links = [
  {
    id: "1",
    link: '#',
    icon: LinkdinIcon,
  },
  {
    id: "2",
    link: '#',
    icon: InstagramIcon,
  },
  {
    id: '3',
    link: '#',
    icon: TwitterIcon,
  },
  {
    id: '4',
    link: '#',
    icon: FaceBookIcon,
  }
] as SocialLink[];

const batches: BatchLinks[] = [
  {
    title: "شرکت",
    links: [
      {
        title: 'درباره ما',
        href: '#'
      }, {
        title: 'نحوه کارکرد',
        href: '#'
      }, {
        title: 'سیاست حفظ حریم خصوصی',
        href: '#'
      },
    ]
  },
  {
    title: "پشتیبانی",
    links: [
      {
        title: 'تماس با ما',
        href: '#'
      }, {
        title: 'مرکز راهنمایی',
        href: '#'
      }, {
        title: 'شرایط خدمات',
        href: '#'
      },
    ]
  }
]

</script>

<template>
  <footer>
    <div class="footer-cta">
      <div class="container">
        <h2>آماده تجربه ای متفاوت در روند ارسال هستید؟</h2>
        <p>
          سفر یا بسته خود را به راحتی در پلتفرم ما با چند کلیک ثبت کنید و عضوی از شبکه بزرگ ترولوت شوید. ‍
        </p>
        <button class="btn">همین حالا شروع کنید</button>
      </div>
    </div>

    <div class="site-footer">
      <div class="container">
        <div class="footer__content">
          <div class="footer__links">
            <div class="footer__signature">
              <img src="../../assets/icons/logo-light.png" alt="signature">
              <p>ارائه تعالی، یک بسته در هر زمان.</p>
              <ul class="social__links">
                <li v-for="sLink in social_links" :key="sLink.id">
                  <a :href="sLink.link">
                    <component :is="sLink.icon"/>
                  </a>
                </li>
              </ul>
            </div>
            <div class="footer__main_links">
              <div class="footer__link_batch" v-for="(batch, idx) in batches" :key="idx">
                <h4>{{batch.title}}</h4>
                <ul>
                  <li v-for="main_link in batch.links">
                    <a :href="main_link.href">
                      {{main_link.title}}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="enamad">
            <img src="../../assets/images/enamad.png">

          </div>
        </div>
        <hr>
        © ۱۴۰۳ ترولوت. تمامی حقوق محفوظ است.
      </div>
    </div>
  </footer>
</template>

