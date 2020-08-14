<template>
  <v-card>
    <v-toolbar text dense flat>
      <v-toolbar-title>
        工程列表
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>
    <v-divider></v-divider>

    <v-card-text class="pa-0">
      <v-data-table :headers="headers" :items="projects" hide-default-footer>
        <template v-slot:item.progress="{ item }">
          <v-progress-linear
            :value="item.progress"
            height="5"
            :color="item.color"
          />
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon
            small
            class="mr-2"
          >
            mdi-pencil
          </v-icon>
          <v-icon
            small
          >
            mdi-delete
          </v-icon>
        </template>

      </v-data-table>
      <v-divider />
    </v-card-text>
  </v-card>
</template>

<script>
 import { Projects } from '@/api/project2'
 export default {
   data() {
     return {
       headers: [
         { text: '项目ID',
           sortable: true,
           value: 'id'
         },
         {
           text: '工程名称',
           align: 'left',
           value: 'name'
         },
         { text: '传感器地址范围', value: 'deadline' },
         { text: '进度', value: 'progress' },
         { text: '动作', value: 'actions', align: 'right' }
       ],
       actions: [
         {
           text: 'View Item',
           icon: 'mdi-eye',
           click: this.handleViewItem
         },
         {
           text: 'Edit Item',
           icon: 'mdi-pencil',
           click: this.handleEditItem
         },
         {
           text: 'Delete Item',
           icon: 'mdi-close',
           click: this.handleDeleteItem
         }
       ]
     }
   },
   computed: {
     projects() {
       return Projects
     }
   }
 }
</script>
