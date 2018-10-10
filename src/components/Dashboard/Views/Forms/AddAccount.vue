<template>
  <div class="row">

    <div class="col-md-6">
      <register-form @on-submit="onRegisterSubmit"></register-form>
    </div>
    <div class="col-md-6">
      <login-form @on-submit="onLoginSubmit"></login-form>
    </div>
    <div class="col-md-12">
      <type-validation-form @on-submit="onTypeValidationSubmit"></type-validation-form>
    </div>
  </div>
</template>
<script>
  import TypeValidationForm from './ValidationForms/AddAccountValidationForm.vue'

  export default {
    components: {
      TypeValidationForm
    },
    data () {
      return {
        registerModel: {},
        loginModel: {},
        typeValidationModel: {}
      }
    },
    methods: {
      onRegisterSubmit (model, isValid) {
        this.registerModel = model
      },
      onLoginSubmit (model, isValid) {
        this.loginModel = model
      },
      onTypeValidationSubmit (model, isValid) {
        this.typeValidationModel = model
      }
    }
  }
</script>
<style>
</style>
