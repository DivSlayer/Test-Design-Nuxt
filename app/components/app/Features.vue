<script lang="ts" setup>
import handMoney from '../../assets/icons/hand_money.svg';
import money from '../../assets/icons/money.svg';
import time from '../../assets/icons/time.svg';
interface Feature {
  title: string;
  text: string;
  icon: string
}

const features_list: Feature[] = [
  {
    title: "نرخ‌های مقرون‌به‌صرفه",
    text: "ارسال با هزینه کمتر. شبکه بهینه ما تضمین می‌کند که برای هر محموله، چه بزرگ و چه کوچک، بهترین قیمت‌ها را دریافت کنید.",
    icon: handMoney
  }, {
    title: "درآمد پایدار",
    text: "با نرخ‌های رقابتی و مشوق‌های ویژه ما، درآمد خود را به حداکثر برسانید. هر چه بیشتر تحویل دهید، درآمد بیشتری کسب خواهید کرد.",
    icon: money
  }, {
    title: "برنامه انعطاف‌پذیر",
    text: "هر زمان که می‌خواهید، هر کجا که می‌خواهید کار کنید. ساعات کاری خودتان را تنظیم کنید و رئیس خودتان باشید. مناسب برای رانندگان تمام وقت یا کسانی که به دنبال درآمد اضافی هستند.",
    icon: time
  },
]
</script>

<template>
  <section class="features">
    <div class="container">
      <div class="grid">
        <div class="feature-item" v-for="(item, index) in features_list " :key="index">
          <div class="icon"><img :src="item.icon" :alt="item.title"></div>
          <h5>{{ item.title }}</h5>
          <p>{{item.text}}</p>
        </div>

      </div>
    </div>
  </section>
</template>

