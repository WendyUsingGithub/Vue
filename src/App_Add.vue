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
      <v-list v-model:opened="open" density="compact" nav>
        <v-list-item title="Home"></v-list-item>
        <v-list-group value="Users">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              title="Users"
            ></v-list-item>
          </template>

          <v-list-group value="Admin">
            <template v-slot:activator="{ props }">
              <v-list-item v-bind="props" title="Admin"></v-list-item>
            </template>

            <v-list-item
              v-for="([title, icon], i) in admins"
              :key="i"
              :title="title"
              :value="title"
            ></v-list-item>
          </v-list-group>

          <v-list-group value="Actions">
            <template v-slot:activator="{ props }">
              <v-list-item v-bind="props" title="Actions"></v-list-item>
            </template>

            <v-list-item
              v-for="([title, icon], i) in cruds"
              :key="i"
              :title="title"
              :value="title"
            ></v-list-item>
          </v-list-group>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-main class="bg-grey-lighten-5">
      <v-container>

        <v-card class="mb-5">
            <v-breadcrumbs  class="font-weight-medium" :items="['Foo', 'Bar', 'Fizz']"></v-breadcrumbs>
        </v-card>

        <v-card>
          <v-card-title class="text-h6 text-md-h5 text-lg-h5 font-weight-medium bg-grey-lighten-3 mb-5 pa-5">新增表單</v-card-title>

          <v-form v-model="valid">
            <v-container>
              <v-row>
                <v-col cols="12" md="3">
                  <v-select
                    :items="['雞', '鴨', '魚']"
                    placeholder="請選擇">
                    <template #prepend-inner>
                      <span class="prepend-inner">種類：</span>
                    </template>
                  </v-select>
                </v-col>

                <v-col cols="12" md="3">
                  <v-select
                    :items="['雞', '鴨', '魚']"
                    placeholder="請選擇">
                    <template #prepend-inner>
                      <span class="prepend-inner">品項名稱：</span>
                    </template>
                  </v-select>
                </v-col>

                <v-col cols="12" md="3">
                  <v-select
                    :items="['雞', '鴨', '魚']"
                    placeholder="請選擇">
                    <template #prepend-inner>
                      <span class="prepend-inner">品種：</span>
                    </template>
                  </v-select>
                </v-col>

                <v-col cols="12" md="3">
                  <v-select
                    :items="['公', '母']"
                    placeholder="請選擇">
                    <template #prepend-inner>
                      <span class="prepend-inner">性別：</span>
                    </template>
                  </v-select>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" md="3">
                  <v-menu
                    v-model="menu1"
                    :close-on-content-click="false"
                    transition="slide-y-transition"
                    min-width="290px">
                    <template #activator="{ props }">
                      <v-select
                        v-bind="props"
                        v-model="date1"
                        placeholder="請選擇日期"
                        :items="[]"
                        readonly>
                        <template #prepend-inner>
                          <span class="prepend-inner">生產日期：</span>
                        </template>
                      </v-select>
                    </template>
                    <v-date-picker
                      v-model="date1"
                      @update:modelValue="menu1 = false"
                    ></v-date-picker>
                  </v-menu>
                </v-col>

                <v-col cols="12" md="3">
                  <v-select
                    :items="['雞', '鴨', '魚']"
                    placeholder="請選擇">
                    <template #prepend-inner>
                      <span class="prepend-inner">畜禽舍：</span>
                    </template>
                  </v-select>
                </v-col>

                <v-col cols="12" md="3">
                  <v-select
                    :items="['雞', '鴨', '魚']"
                    placeholder="請選擇">
                    <template #prepend-inner>
                      <span class="prepend-inner">財務歸屬：</span>
                    </template>
                  </v-select>
                </v-col>

                <v-col cols="12" md="3">
                  <v-menu
                    v-model="menu2"
                    :close-on-content-click="false"
                    transition="slide-y-transition"
                    offset-y
                    min-width="290px">
                    <template #activator="{ props }">
                      <v-select
                        v-bind="props"
                        v-model="date2"
                        placeholder="請選擇日期"
                        :items="[]"
                        readonly>
                        <template #prepend-inner>
                          <span class="prepend-inner">取得日期：</span>
                        </template>
                      </v-select>
                    </template>
                    <v-date-picker
                      v-model="date2"
                      @update:modelValue="menu2 = false"
                    ></v-date-picker>
                  </v-menu>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" md="3">
                <v-text-field
                  model-value=" "
                  suffix="元">
                    <template #prepend-inner>
                      <span class="prepend-inner">單價：</span>
                    </template>
                  </v-text-field>

                </v-col>

                <v-col cols="12" md="3">
                  <v-select
                    :items="['雞', '鴨', '魚']"
                    placeholder="請選擇">
                    <template #prepend-inner>
                      <span class="prepend-inner">來源：</span>
                    </template>
                  </v-select>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-textarea>
                    <template #prepend-inner>
                      <span class="prepend-inner">備註：</span>
                    </template>
                  </v-textarea>
                </v-col>
              </v-row>
            </v-container>
          </v-form>

          <v-card-actions class="pa-5 bg-grey-lighten-3">
              <v-btn class="text-v-btn font-weight-medium bg-grey-darken-1 mr-2" type="submit">確定</v-btn>
              <v-btn class="text-v-btn font-weight-medium bg-grey-darken-1" @click="handleReset">取消</v-btn>
          </v-card-actions>
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
const open = ref(['Users'])

const admins = [
  ['Management', 'mdi-account-multiple-outline'],
  ['Settings', 'mdi-cog-outline'],
]

const cruds = [
  ['Create', 'mdi-plus-outline'],
  ['Read', 'mdi-file-outline'],
  ['Update', 'mdi-update'],
  ['Delete', 'mdi-delete'],
]

const menu1 = ref(false)
const menu2 = ref(false)
const date1 = ref(null)
const date2 = ref(null)

watch(group, () => {
  drawer.value = false
})

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

.v-list-item-title,
.v-field__input {
  font-weight: 500 !important;
  color: rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity));
}

.v-field__input placeholder {
  font-weight: 500 !important;
}
.prepend-inner {
  font-weight: 500 ;
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

.v-input .v-text-field__suffix__text {
  font-weight: 500 ;
  color: rgba(var(--v-theme-on-surface), calc(var(--v-high-emphasis-opacity) * var(--v-high-emphasis-opacity) * var(--v-disabled-opacity))) !important;
}

.text-v-btn {
  font-size: 15px !important;
}
</style>
