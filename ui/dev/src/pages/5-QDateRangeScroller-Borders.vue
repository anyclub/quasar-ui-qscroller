<template>
  <div class="q-pa-md row q-gutter-sm full-width">
    <div class="row full-width">
      <div class="text-h4">'date-range' Scroller</div>
    </div>

    <q-card class="q-pa-md">
      <q-card-section class="col-12">
        vertical-bar, no-footer
      </q-card-section>
      <q-card-section class="col-12">
        <q-scroller
          v-model="value"
          view="date-range"
          no-footer
          vertical-bar
          style="max-width: 270px; height: 200px;"
        ></q-scroller>
      </q-card-section>
    </q-card>

    <q-card class="q-pa-md">
      <q-card-section class="col-12">
        vertical-bar, bar-color, no-footer
      </q-card-section>
      <q-card-section class="col-12">
        <q-scroller
          v-model="value"
          view="date-range"
          no-footer
          vertical-bar
          bar-color="primary"
          style="max-width: 270px; height: 200px;"
        ></q-scroller>
      </q-card-section>
    </q-card>

    <q-card class="q-pa-md">
      <q-card-section class="col-12">
        vertical-bar, bar-color, border-color, no-footer
      </q-card-section>
      <q-card-section class="col-12">
        <q-scroller
          v-model="value"
          view="date-range"
          no-footer
          vertical-bar
          bar-color="primary"
          border-color="primary"
          style="max-width: 270px; height: 200px;"
        ></q-scroller>
      </q-card-section>
    </q-card>

  </div>
</template>

<script>
export default {
  data () {
    return {
      value: ''
    }
  }
}
</script>
