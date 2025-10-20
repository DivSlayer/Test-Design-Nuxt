<script lang="ts" setup>
interface CTA {
  title: string,
  details: string,
}

const cta_steps: CTA[] = [
  {
    title: "ثبت نام در ۱ دقیقه",
    details: 'فرآیند ثبت نام سریع با تأیید فوری برای رانندگان واجد شرایط. مدارک خود را بارگذاری کنید و فوراً شروع به کار کنید.',
  }, {
    title: "درخواست‌های تحویل را بپذیرید",
    details: 'تحویل‌های موجود در منطقه خود را مرور کنید و مواردی را که با برنامه و تنظیمات مسیر شما مطابقت دارند، بپذیرید.'
  },
  {
    title:
        "تحویل دهید و درامد داشته باشین",
    details: 'تحویل‌ها را با استفاده از مسیرهای بهینه‌شده ما انجام دهید و پس از هر تحویل موفق، تأیید پرداخت فوری دریافت کنید.'
  }
];
</script>

<template>
  <section class="cta container" id="cta-sec">

    <div class="right">
      <h2>همین امروز کسب درآمد را شروع کنید</h2>
      <p>سفر یا زمان آزاد خود را به درآمد تبدیل کنید. ما مسیر پیوستن و آغاز همکاری را ساده کرده‌ایم تا تنها چند دقیقه با
        اولین سفر خود فاصله داشته باشید.</p>
      <ul>
        <li v-for="(cta, index) in cta_steps" :key="index">
          <span class="counter">{{index + 1}}</span>
          <div>
            <h4>{{ cta.title}}</h4>
            <p>{{ cta.details}}</p>
          </div>
        </li>
      </ul>
      <div class="cta-button">
        <button class="btn-primary">
          <img src="../../assets/icons/arrow.svg" alt="arrow">
          <span>  شروع به کسب درآمد</span>
        </button>
      </div>
    </div>
    <div class="left">
      <img src="../../assets/images/delivery_2.png" alt="deliver with us"/>
    </div>

  </section>
</template>

<script setup>
</script>
