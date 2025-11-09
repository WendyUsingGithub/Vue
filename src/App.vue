<template>
  <v-app id="inspire">

      <v-app-bar color="grey-darken-1">
        <v-toolbar-title>My files</v-toolbar-title>

        <template v-if="$vuetify.display.mdAndUp">
          <v-btn icon="mdi-magnify" variant="text"></v-btn>
          <v-btn icon="mdi-filter" variant="text"></v-btn>
        </template>

        <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
      </v-app-bar>

    <v-navigation-drawer color="grey-lighten-3" rail>
      <v-avatar
        @click.stop="drawer = !drawer"
        class="d-block text-center mx-auto mt-4"
        color="grey-darken-1"
        size="36"
      ></v-avatar>

      <v-divider class="mx-3 my-5"></v-divider>

      <v-avatar
        v-for="n in 6"
        :key="n"
        class="d-block text-center mx-auto mb-9"
        color="grey-lighten-1"
        size="28"
      ></v-avatar>
    </v-navigation-drawer>

    <v-navigation-drawer v-model="drawer" :location="$vuetify.display.mobile ? 'bottom' : undefined">
      <v-list :items="items"></v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <v-card>
          <v-form v-model="valid">
            <v-container>
              <v-row>
                <v-col cols="12" md="3">
                  <v-select
                    :items="['種類', '雞', '鴨', '魚']"
                    placeholder="請選擇">
                    <template #prepend-inner>
                      <span class="prepend-inner">種類：</span>
                    </template>
                  </v-select>

                </v-col>
                <v-col cols="12" md="3">
                  <v-select
                    :items="['雞', '鴨', '魚']"
                    placeholder="請選擇"
                    >
                    <template #prepend-inner>
                      <span class="prepend-inner mr-2">品項名稱：</span>
                    </template>
                  </v-select>

                </v-col>
                <v-col cols="12" md="3">
                  <v-select
                    label="品種"
                    :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                    disabled
                  ></v-select>
                </v-col>
                <v-col cols="12" md="3">
                  <v-select
                    :items="['公', '母']"
                    placeholder="請選擇">
                    <template #prepend-inner>
                      <span class="prepend-inner mr-2">性別：</span>
                    </template>
                  </v-select>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" md="3">
                  <v-menu
                    v-model="menu"
                    :close-on-content-click="false"
                    transition="slide-y-transition"
                    offset-y
                    min-width="290px"
                  >
                    <template #activator="{ props }">
                      <v-select
                        v-bind="props"
                        v-model="date"
                        placeholder="請選擇日期"
                        :items="[]"
                        readonly
                      >
                        <template #prepend-inner>
                          <span class="prepend-inner">生產日期：</span>
                        </template>
                      </v-select>
                    </template>

                    <v-date-picker
                      v-model="date"
                      @update:modelValue="menu = false"
                    ></v-date-picker>
                  </v-menu>
                </v-col>
                <v-col cols="12" md="3">
                  <v-select
                    label="畜禽舍"
                    :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                  ></v-select>
                </v-col>
                <v-col cols="12" md="3">
                  <v-select
                    label="財產歸屬"
                    :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                  ></v-select>
                </v-col>
                <v-col cols="12" md="3">
                  <v-select
                    label="取得日期"
                    :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                  ></v-select>
                </v-col>
              </v-row>

              <v-row>

                
              </v-row>

              <v-row>
                <v-col>
                  <v-btn class="me-4" type="submit">確定</v-btn>
                  <v-btn @click="handleReset">clear</v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, watch } from 'vue'

const items = [
  { title: 'Foo', value: 'foo' },
  { title: 'Bar', value: 'bar' },
  { title: 'Fizz', value: 'fizz' },
  { title: 'Buzz', value: 'buzz' },
]

const drawer = ref(false)
const group = ref(null)

watch(group, () => {
  drawer.value = false
})


const menu = ref(false)
const date = ref('')

const selected = ref(null)
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&display=swap');

html, body, #app, #inspire {
  font-family: 'Noto Sans TC', sans-serif !important;
}

.v-application,
.v-application * {
  font-family: 'Noto Sans TC', sans-serif !important;
}

/* 保留字重加粗樣式 */
.v-list-item-title,
.v-field__input,
.v-field__input placeholder
{
  color: #424242;
  font-weight: 600 !important;
  color: rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity));
}

.v-field__input placeholder
{

  font-weight: 600 !important;

}

.v-field__overlay {
  z-index: -1;
}
.prepend-inner {
  font-weight: 600 ;
  white-space: nowrap;
  overflow: hidden;
  color: rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity));
}


.v-select .v-field__input {
  color: rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity));
}

.v-select .v-select__selection-text {
  color: rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity));
}
</style>
