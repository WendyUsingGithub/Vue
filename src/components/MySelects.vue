<template>
  <v-col cols="12" md>
    <v-select
      :items="items"
      :placeholder="placeholder"
      v-model="selected">
      <template #prepend-inner>
        <span class="prepend-inner">{{ label }}：</span>
      </template>
    </v-select>
  </v-col>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue'

console.log("???");

const props = defineProps({
  items: { type: Array, default: () => [] },
  placeholder: { type: String, default: '' },
  label: { type: String, default: '' },
  modelValue: { type: [String, Number, null], default: null } // 支援 v-model
})

const emit = defineEmits(['update:modelValue'])

const selected = ref(props.modelValue)

// 監聽子元件值改變，通知父元件
watch(selected, (val) => {
  emit('update:modelValue', val)
})
</script>
