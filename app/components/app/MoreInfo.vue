<script lang="ts" setup>
import peopleIcon from "../../assets/icons/people.svg";
import shieldIcon from "../../assets/icons/shield.svg";
import phoneIcon from "../../assets/icons/phone.svg";
import { type InfoCard } from "../../utils/types";
import InfoCardComponent from "~/components/partials/InfoCardComponent.vue";

const info_cards: InfoCard[] = [
  {
    title: "تعامل مستقیم با کاربران",
    text: "شما در هر زمان امکان ارتباط مستقیم را با کاربران مرتبط خواهید داشت.",
    icon: peopleIcon,
  },
  {
    title: "پوشش بیمه",
    text: "تمامی سفارش‌ها و بسته‌ها شامل بیمه پایه می‌باشند.",
    icon: shieldIcon,
  },
  {
    title: "اپلیکیشن مناسب موبایل",
    text: "وب سایت ما برای گوشی موبایل بهینه شده. استفاده آسان, سیستم چت, کیف پول دیجیتال, و غیره... همگی در گوشی همراه شما. ",
    icon: phoneIcon,
  },
];
</script>

<template>
  <section class="split container">
    <div class="heading">
      <h2>تحویل دهید و درآمد کسب کنید</h2>
      <p>
        به هزاران نفری بپیوندید که با ترولوت، سفرهای خود را به فرصتی برای کسب
        درآمد تبدیل کرده‌اند. با ترولوت، برنامه‌ سفر خود را در دست دارید،
        درآمدتان را افزایش می‌دهید و از آزادی و استقلال در مسیر لذت می‌برید.
      </p>
    </div>
    <div class="row">
      <div class="img-wrap">
        <img src="../../assets/images/delivery.png" alt="delivery person" />
      </div>
      <div class="main-cards-wrapper">
        <h3>سفر کن و از این سفر دارمد بساز.</h3>
        <p>
          هر سفر را به یک فرصت تبدیل کنید. سیستم تطبیق هوشمند ما شما را با
          درخواست‌های تحویل در طول مسیرتان مرتبط می‌کند و درآمد شما را به حداکثر
          می‌رساند و در عین حال مسافت‌های خالی را به حداقل می‌رساند.
        </p>
        <div class="info-cards">
          <div class="info-card">
            <div class="icon">
              <img src="../../assets/icons/calendar.svg" alt="info" />
            </div>
            <div class="card-details">
              <h4>آزادی کامل در برنامه</h4>
              <p>
                هر زمان که می‌خواهید، هر کجا که می‌خواهید کار کنید. بدون حداقل
                ساعت کاری، بدون برنامه زمانی ثابت. شما کنترل کامل پتانسیل درآمدی
                خود را در دست دارید.
              </p>
            </div>
          </div>
          <div class="info-card">
            <div class="icon">
              <img src="../../assets/icons/green-money.svg" alt="info" />
            </div>
            <div class="card-details">
              <h4>پرداخت سریع بعد از تحویل</h4>
              <p>
                شفافیت در قیمت‌گذاری به شما اطمینان می‌دهد که پیش از پذبرش هر
                گونه سفارش حمل و نقل، از درآمد خود آگاه باشید.
              </p>
            </div>
          </div>
          <div class="info-card">
            <div class="icon">
              <img src="../../assets/icons/route.svg" alt="info" />
            </div>
            <div class="card-details">
              <h4>مسیر های تضمین شده</h4>
              <p>
                بسیاری از مسیر ها بسته های متفاوتی دارند. مسیر ها را ببینید,
                بسته ها را انتخاب کنید, درامد داشته باشد.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="offers__cards">
      <InfoCardComponent v-for="info_card in info_cards" :info_card/>
    </div>
  </section>
</template>

<script setup></script>
