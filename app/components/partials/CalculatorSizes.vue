<script setup lang="ts">
interface Size {
  id: string;
  title: string;
  dimension: string;
  weight: string;
}

const sizes: Size[] = [
  {
    id: '1',
    title: 'کوچک',
    dimension: "تا ابعاد ۳۰x ۳۰ سانتی‌متر",
    weight: "۰,۱ تا ۲ کیلوگرم",
  }, {
    id: '2',
    title: 'متوسط',
    dimension: "تا ابعاد ۵۰x۵۰ سانتی‌متر",
    weight: "۲ تا ۴ کیلوگرم",
  }, {
    id: '3',
    title: 'بزرگ',
    dimension: "تا ابعاد ۷۰x ۷۰ سانتی‌متر",
    weight: "۴ تا ۶ کیلوگرم",
  }, {
    id: '4',
    title: 'خیلی بزرگ',
    dimension: "بیش از ۷۰x۷۰ سانتی‌متر",
    weight: "بالای ۶ کیلوگرم ",
  },
]

const selected_size = ref<string>('1');

function updateActive(new_val:string) {
  selected_size.value = new_val;
}
</script>

<template>
  <div class="size-select">
    <div class="size-select__header">
      <img src="../../assets/icons/size.svg" alt="size">
      <h4>اندازه بسته</h4>
      <span>*</span>
    </div>
    <div class="sizes">
      <div :class="['size-item', {'active': item.id == selected_size}]" v-for="item in sizes" @click="updateActive(item.id)">
        <h5>{{ item.title }}</h5>
        <p>{{item.dimension}}</p>
        <p>{{ item.weight}}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>