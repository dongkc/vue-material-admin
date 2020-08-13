<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <plain-table />
        </v-col>
        <v-col cols="12">
          <plain-table-order />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import API from '@/api'
import PlainTable from '@/components/widgets/list/PlainTable2'
import PlainTableOrder from '@/components/widgets/list/PlainTableOrder'
import Material from 'vuetify/es5/util/colors'
export default {
  name: 'PageDashboard',
  components: {
    PlainTable,
    PlainTableOrder
  },
  data: () => ({
    color: Material,
  }),
  computed: {
    activity() {
      return API.getActivity()
    },
    posts() {
      return API.getPost(3)
    },
    siteTrafficData() {
      return API.getMonthVisit
    },
    locationData() {
      return API.getLocation
    }
  }
}
</script>
