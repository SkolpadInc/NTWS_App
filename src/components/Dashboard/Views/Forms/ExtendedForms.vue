<template>
  <div class="card">
    <form class="form-horizontal">
      <div class="card-header">
        <h4 class="card-title">
          Account Information
        </h4>
      </div>
      <div class="card-content">
        <fieldset>
          <div class="form-group">
            <label class="col-sm-2 control-label">Account Number</label>
            <div class="col-sm-2">
              <input type="text"
                     name="accountNum"
                     v-validate="modelValidations.accountNum"
                     v-model="model.accountNum"
                     class="form-control">
            </div>
          </div>
        </fieldset>
        <fieldset>
          <div class="form-group">
            <label class="col-sm-2 control-label">Full Name</label>
            <div class="col-sm-6">
              <label class="control-label">Juan dela Cruz</label>
            </div>
          </div>
        </fieldset>
        <fieldset>
          <div class="form-group">
            <label class="col-sm-2 control-label">Address</label>
            <div class="col-sm-6">
              <label class="control-label">Lot 2 Talisay, Cebu City</label>
            </div>
          </div>
        </fieldset>
        <fieldset>
          <div class="form-group">
            <label class="col-sm-2 control-label">Barangay</label>
            <div class="col-sm-6">
              <label class="control-label">Lot 2 Talisay, Cebu City</label>
            </div>
          </div>
        </fieldset>
        <fieldset>
          <div class="form-group">
            <label class="col-sm-2 control-label">Cluster</label>
            <div class="col-sm-6">
              <label class="control-label">Lot 2 Talisay, Cebu City</label>
            </div>
          </div>
        </fieldset>
        <fieldset>
          <div class="form-group">
            <label class="col-sm-2 control-label">Ammount Due</label>
            <div class="col-sm-6">
              <label class="control-label">P2,000.00</label>
            </div>
          </div>
        </fieldset>
                <fieldset>
          <div class="form-group">
            <label class="col-sm-2 control-label">Payment</label>
            <div class="col-sm-2">
              <input type="text"
                     name="payment"
                     v-validate="modelValidations.accountNum"
                     v-model="model.accountNum"
                     class="form-control">
            </div>
          </div>
        </fieldset>
      </div>
      <div class="card-footer text-center">
        <button type="submit" @click.prevent="validate" class="button">Save Payment</button>
      </div>
    </form>

  </div>
</template>
<script>
  import {mapFields} from 'vee-validate'

  export default {
    computed: {
      ...mapFields(['name', 'username', 'address', 'number', 'url', 'password', 'confirm_password'])
    },
    data () {
      return {
        radios: {
          radio1: '1',
          radio2: '2',
          radio3: '2'
        },
        model: {
          name: '',
          username: '',
          address: '',
          number: '',
          url: '',
          password: '',
          confirm_password: ''
        },
        modelValidations: {
          name: {
            required: true
          },
          username: {
            required: true
          },
          address: {
            required: true
          },
          number: {
            required: true,
            decimal: true
          },
          url: {
            required: true,
            url: true
          },
          password: {
            required: true
          },
          confirm_password: {
            required: true,
            confirmed: 'password'
          }
        }
      }
    },
    methods: {
      getError (fieldName) {
        return this.errors.first(fieldName)
      },
      validate () {
        this.$validator.validateAll().then(isValid => {
        })
      }
    }
  }
</script>
<style>
</style>
