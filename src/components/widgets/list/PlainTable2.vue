<template>
  <v-card>
    <v-toolbar text dense flat>
      <v-toolbar-title>
        项目列表
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog" max-width="500px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            dark
            class="mb-2"
            v-bind="attrs"
            v-on="on"
          >新建项目</v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>

          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field v-model="editedItem.id" label="项目编号"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field v-model="editedItem.name" label="项目名称"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field v-model="editedItem.range" label="传感器地址范围"></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
            <v-btn color="blue darken-1" text @click="save">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
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
            @click="editItem(item)"
          >
            mdi-pencil
          </v-icon>
          <v-icon
            small
            @click="deleteItem(item)"
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
       dialog: false,

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
         { text: '传感器地址范围', value: 'range' },
         /* { text: '进度', value: 'progress' }, */
         { text: '动作', value: 'actions', align: 'right', sortable: false}
       ],

       editedIndex: -1,

       editedItem: {
         name: '',
         calories: 0,
         fat: 0,
         carbs: 0,
         protein: 0,
       },
       defaultItem: {
         name: '',
         calories: 0,
         fat: 0,
         carbs: 0,
         protein: 0,
       },

       projects: [],

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

    created () {
      this.initialize()
    },

   computed: {
     formTitle () {
       return this.editedIndex === -1 ? '新建项目' : '编辑项目'
     },
   },

   methods: {

     initialize() {
       this.projects = Projects;
     },

     editItem (item) {
       this.editedIndex = this.projects.indexOf(item)
       this.editedItem = Object.assign({}, item)
       this.dialog = true
     },

     deleteItem (item) {
       const index = this.projects.indexOf(item)
       confirm('删除后数据不可恢复,确定删除此工程吗?') && this.projects.splice(index, 1)
     },

     save() {
        if (this.editedIndex > -1) {
          Object.assign(this.projects[this.editedIndex], this.editedItem)
        } else {
          this.projects.push(this.editedItem)
        }
        this.close()
     },

     close () {
       this.dialog = false
       this.$nextTick(() => {
         this.editedItem = Object.assign({}, this.defaultItem)
         this.editedIndex = -1
       })
     },
   },

   watch: {
     dialog (val) {
       val || this.close()
     },
   },

 }
</script>
