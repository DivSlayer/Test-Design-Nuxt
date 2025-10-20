<script lang="ts" setup>

import type {InfoCard} from "~/utils/types";
import {computed, onMounted, onUnmounted, ref} from "vue";

interface Props {
  info_card: InfoCard;
}

const props = defineProps<Props>();

const hoverShadowColor = 'rgba(34, 112, 99, 0.3)';
const shadowBlur = "12px";

const defaultShadow = '0 4px 20px rgba(0, 0, 0, 0.05)';

const mouseX = ref(0);
const mouseY = ref(0);

const isHovering = ref(false);
const trackingDivRef = ref<HTMLDivElement | null>(null);

let animationFrameId: number | null = null;

const updateShadow = () => {
  if (isHovering.value && trackingDivRef.value) {
    const rect = trackingDivRef.value.getBoundingClientRect();
    const x = mouseX.value;
    const y = mouseY.value;
    const shadowX = (x / rect.width) * 20 - 10;
    console.log(`shadowX: ${shadowX}`);
    const shadowY = (y / rect.height) * 20 - 10;
    trackingDivRef.value.style.boxShadow = `${shadowX}px ${shadowY}px ${shadowBlur} ${hoverShadowColor}`;
  }
  animationFrameId = requestAnimationFrame(updateShadow);
};

onMounted(() => {
  animationFrameId = requestAnimationFrame(updateShadow);
});
onUnmounted(() => {
  cancelAnimationFrame(animationFrameId!);
});

// Event handlers
const handleMouseMove = (e: MouseEvent) => {
  if (trackingDivRef.value) {
    const rect = trackingDivRef.value.getBoundingClientRect();
    mouseX.value = Math.round(e.clientX - rect.left);
    mouseY.value = Math.round(e.clientY - rect.top);
  }
};
const handleMouseEnter = () => {
  isHovering.value = true;
};
const handleMouseLeave = () => {
  if (trackingDivRef.value) {
    isHovering.value = false;
    // Reset the shadow to a fixed one on mouse leave, as per the original script
    trackingDivRef.value.style.boxShadow = defaultShadow;
    mouseX.value = 0;
    mouseY.value = 0;
  }
};
const dynamicBoxShadow = computed(() => {
  // Initially, or when not hovering (before mouseleave fires a direct style update),
  // we can set a default or just rely on the CSS classes' styles.
  // The main tracking logic is inside updateShadow to use requestAnimationFrame.
  return "none"; // The style is updated directly in updateShadow for the RAF loop
});


</script>

<template>
  <div class="offer-card"
       ref="trackingDivRef"
       @mousemove="handleMouseMove"
       @mouseenter="handleMouseEnter"
       @mouseleave="handleMouseLeave"
  >
    <div class="offer-card__icon">
      <img :src="info_card.icon" alt="people"/>
    </div>
    <h5>{{ info_card.title }}</h5>
    <p>
      {{ info_card.text }}
    </p>
  </div>
</template>