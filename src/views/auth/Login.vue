<template>
  <v-container class="page-login" fill-height>
    <v-row>
      <v-col>
        <v-card class="pa-3 page-login__card" tile>
          <v-card-title>
            <!-- <img src="/static/m.png" alt="Vue Material Admin" width="55" /> -->
            <h1 class="primary--text display-1">
              AGV监控管理系统
            </h1>
          </v-card-title>
          <v-card-text>
            <v-form
              ref="form"
              class="my-10"
              lazy-validation
              v-model="formValid"
            >
              <v-text-field
                append-icon="person"
                autocomplete="off"
                name="login"
                label="登陆"
                placeholder="用户名"
                type="text"
                required
                :rules="formRule.username"
                v-model="fromModel.username"
              />
              <v-text-field
                append-icon="lock"
                autocomplete="off"
                name="password"
                label="密码"
                placeholder="Password"
                type="password"
                :rules="formRule.password"
                required
                v-model="fromModel.password"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn large tile color="primary" @click="login" :loading="loading">
              登陆
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
 import {setAuth} from '../../test'
 export default {

   name: 'PageLogin',
   data() {
     return {
       loading: false,
       formValid: false,
       fromModel: {
         username: '',
         password: ''
       },
       formRule: {
         username: [(v) => !!v || 'Username is required'],
         password: [(v) => !!v || 'Password is required']
       }
     }
   },
   computed: {
     prefix() {
       return ''
     }
   },
   methods: {
     login() {
       if (this.$refs.form.validate()) {
         // 验证登陆
         this.$store.dispatch("addUserName", this.fromModel.username);
         setAuth(true); 
         this.loading = true
         setTimeout(()  => {
           this.$router.push('/test')
           /* this.$router.push('/404') */
         }, 1000)
       }
     }
   }
 }
</script>

<style lang="sass" scoped>
 .page-login
   &__card
   max-width: 600px
   margin: 0 auto
</style>
