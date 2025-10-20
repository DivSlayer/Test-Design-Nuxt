<script setup lang="ts">
import { ref, computed } from 'vue'
import PackageIcon from '~/components/icons/PackageIcon.vue'
import ParcelIcon from '~/components/icons/ParacelIcon.vue'
import CalculatorSizes from "~/components/partials/CalculatorSizes.vue"
import type { Tab, Country, CalculatorFormData } from '~/utils/types'

const tabs: Tab[] = [
  { id: 0, title: 'مدرک', description: 'برای نامه ها و اوراق', icon: ParcelIcon },
  { id: 1, title: 'بسته', description: 'برای جعبه‌ها و بسته‌ها', icon: PackageIcon }
]

const selectedTab = ref<number>(0)
const departureCountry = ref<string>('')
const destinationCountry = ref<string>('')
const isLoading = ref<boolean>(false)
const error = ref<string>('')

const countries: Country[] = [
  { id: 'ir', name: 'ایران', code: 'IR' },
  { id: 'us', name: 'آمریکا', code: 'US' },
  { id: 'ca', name: 'کانادا', code: 'CA' },
  { id: 'de', name: 'آلمان', code: 'DE' }
]

const formData = computed<CalculatorFormData>(() => ({
  type: selectedTab.value === 0 ? 'document' : 'package',
  size: '',
  departureCountry: departureCountry.value,
  destinationCountry: destinationCountry.value
}))

const isFormValid = computed(() => {
  return departureCountry.value && destinationCountry.value && departureCountry.value !== destinationCountry.value
})

function updateTab(id: number): void {
  selectedTab.value = id
  error.value = ''
}

async function calculateEarnings(): Promise<void> {
  if (!isFormValid.value) {
    error.value = 'لطفاً کشور مبدا و مقصد را انتخاب کنید'
    return
  }

  if (departureCountry.value === destinationCountry.value) {
    error.value = 'کشور مبدا و مقصد نمی‌توانند یکسان باشند'
    return
  }

  try {
    isLoading.value = true
    error.value = ''
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Here you would make actual API call
    console.log('Calculating earnings for:', formData.value)
    
  } catch (err) {
    error.value = 'خطا در محاسبه درآمد. لطفاً دوباره تلاش کنید.'
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <section class="container calc-section" lang="fa" dir="rtl" aria-labelledby="calc-heading">
    <div class="calc-card">
      <header class="calc-section__header">
        <h2 id="calc-heading">محاسبه درآمد دریافتی</h2>
        <p>برای تحویل‌های خود، قیمت‌های فوری دریافت کنید یا ببینید چقدر می‌توانید درآمد کسب کنید</p>
      </header>

      <div class="calc-tabs" role="tablist" aria-label="نوع ارسال">
        <button
            v-for="tab in tabs"
            :key="tab.id"
            :class="['calc-tab', { active: selectedTab === tab.id }]"
            role="tab"
            :aria-selected="selectedTab === tab.id"
            :aria-controls="`tab-panel-${tab.id}`"
            @click="updateTab(tab.id)"
            @keydown.enter.space.prevent="updateTab(tab.id)"
            type="button"
        >
          <span class="calc-tab__icon" aria-hidden="true">
            <component :is="tab.icon"/>
          </span>

          <span class="calc-tab__details">
            <h5>{{ tab.title }}</h5>
            <p>{{ tab.description }}</p>
          </span>
        </button>
      </div>
      <CalculatorSizes/>

      <div class="calc-row">
        <div class="form-group">
          <label for="departure">
            <img src="../../assets/icons/nav.svg" alt="flag">
            <span>کشور مبدا</span>
          </label>
          <select 
            id="departure"
            v-model="departureCountry"
            class="select" 
            name="departure"
            :class="{ 'error': error && !departureCountry }"
          >
            <option value="" disabled>کشور مبدا را انتخاب کنید</option>
            <option 
              v-for="country in countries" 
              :key="country.id" 
              :value="country.id"
            >
              {{ country.name }}
            </option>
          </select>
        </div>
        
        <div class="form-group">
          <label for="destination">
            <img src="../../assets/icons/flag.svg" alt="flag">
            <span>کشور مقصد</span>
          </label>
          <select 
            id="destination"
            v-model="destinationCountry"
            class="select" 
            name="destination"
            :class="{ 'error': error && !destinationCountry }"
          >
            <option value="" disabled>کشور مقصد را انتخاب کنید</option>
            <option 
              v-for="country in countries" 
              :key="country.id" 
              :value="country.id"
            >
              {{ country.name }}
            </option>
          </select>
        </div>
      </div>

      <!-- Error Message -->
      <div v-if="error" class="error-message" role="alert">
        {{ error }}
      </div>

      <div class="calc-btn">
        <button 
          class="btn-primary"
          :disabled="!isFormValid || isLoading"
          @click="calculateEarnings"
        >
          <span v-if="isLoading">در حال محاسبه...</span>
          <span v-else>محاسبه درآمد</span>
        </button>
      </div>
    </div>
  </section>
</template>


