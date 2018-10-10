<template>
  <div class="card">
    <form class="form-horizontal">
      <div class="card-header">
        <h4 class="card-title">
          Basic Information
        </h4>
      </div>
      <div class="card-content">
        <fieldset>
          <div class="form-group">
            <label class="col-sm-2 control-label">Full Name</label>
            <div class="col-sm-6">
              <input type="text"
                     name="name"
                     v-validate="modelValidations.name"
                     v-model="model.name"
                     class="form-control">
              <small class="text-danger" v-show="name.invalid">
                {{ getError('name') }}
              </small>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <div class="form-group">
            <label class="col-sm-2 control-label">Address</label>
            <div class="col-sm-6">
              <input type="text"
                     name="address"
                     v-validate="modelValidations.address"
                     v-model="model.address"
                     class="form-control">
              <small class="text-danger" v-show="address.invalid">
                {{ getError('address') }}
              </small>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <div class="form-group">
            <label class="col-sm-2 control-label">Contact Number</label>
            <div class="col-sm-6">
              <input type="number"
                     name="number"
                     v-validate="modelValidations.number"
                     v-model="model.number"
                     class="form-control">
              <small class="text-danger" v-show="number.invalid">
                {{ getError('number') }}
              </small>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <div class="form-group">
            <label class="col-sm-2 control-label">Name of Spouse</label>
            <div class="col-sm-6">
              <input type="text"
                     name="name"
                     v-validate="modelValidations.name"
                     v-model="model.name"
                     class="form-control">
              <small class="text-danger" v-show="name.invalid">
                {{ getError('name') }}
              </small>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <div class="form-group">
            <label class="col-sm-2 control-label">Number of Children</label>
            <div class="col-sm-6">
              <input type="number"
                     name="number"
                     v-validate="modelValidations.number"
                     v-model="model.number"
                     class="form-control">
              <small class="text-danger" v-show="number.invalid">
                {{ getError('number') }}
              </small>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <div class="form-group">
            <label class="col-sm-2 control-label">Occupation</label>
            <div class="col-sm-6">
              <input type="text"
                     name="address"
                     v-validate="modelValidations.address"
                     v-model="model.address"
                     class="form-control">
              <small class="text-danger" v-show="address.invalid">
                {{ getError('address') }}
              </small>
            </div>
          </div>
        </fieldset>
        <fieldset>
              <div class="form-group">
                <label class="col-sm-2 control-label">Status</label>
                <div class="col-sm-10">
                  <p-radio label="1" v-model="radios.radio1">Single</p-radio>
                  <p-radio label="2" v-model="radios.radio1">Married</p-radio>
                </div>
              </div>
        </fieldset>
      </div>

      <div class="card-header">
        <h4 class="card-title">
          Applied Location
        </h4>
      </div>

      <div class="card-content">
        <fieldset>
          <div class="form-group">
            <label class="col-sm-2 control-label">Address</label>
            <div class="col-sm-6">
              <input type="text"
                     name="address"
                     v-validate="modelValidations.address"
                     v-model="model.address"
                     class="form-control">
              <small class="text-danger" v-show="address.invalid">
                {{ getError('address') }}
              </small>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <div class="form-group">
            <label class="col-sm-2 control-label">Building Owner</label>
            <div class="col-sm-6">
              <input type="text"
                     name="address"
                     v-validate="modelValidations.address"
                     v-model="model.address"
                     class="form-control">
              <small class="text-danger" v-show="address.invalid">
                {{ getError('address') }}
              </small>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <div class="form-group">
            <label class="col-sm-2 control-label">Lot Owner</label>
            <div class="col-sm-6">
              <input type="text"
                     name="address"
                     v-validate="modelValidations.address"
                     v-model="model.address"
                     class="form-control">
              <small class="text-danger" v-show="address.invalid">
                {{ getError('address') }}
              </small>
            </div>
          </div>
        </fieldset>
      </div>

      <div class="card-header">
        <h4 class="card-title">
          Application Details
        </h4>
      </div>

      <div class="card-content">
        <fieldset>
          <div class="form-group">
            <label class="col-sm-2 control-label">Meter Size</label>
            <div class="col-sm-6">
              <input type="text"
                     name="address"
                     v-validate="modelValidations.address"
                     v-model="model.address"
                     class="form-control">
              <small class="text-danger" v-show="address.invalid">
                {{ getError('address') }}
              </small>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <div class="form-group">
            <label class="col-sm-2 control-label">Meter Number</label>
            <div class="col-sm-6">
              <input type="text"
                     name="address"
                     v-validate="modelValidations.address"
                     v-model="model.address"
                     class="form-control">
              <small class="text-danger" v-show="address.invalid">
                {{ getError('address') }}
              </small>
            </div>
          </div>
        </fieldset>

        <fieldset>
              <div class="form-group">
                <label class="col-sm-2 control-label">Classification</label>
                <div class="col-sm-10">
                  <p-radio label="1" v-model="radios.radio1">Residential</p-radio>
                  <p-radio label="2" v-model="radios.radio1">Government</p-radio>
                  <p-radio label="2" v-model="radios.radio1">Commercial</p-radio>
                  <p-radio label="2" v-model="radios.radio1">Industry</p-radio>
                  <p-radio label="2" v-model="radios.radio1">Bulk Sale</p-radio>
                </div>
              </div>
        </fieldset>
      </div>

      <div class="card-footer text-center">
        <button type="submit" @click.prevent="validate" class="button">Add Account</button>
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
          this.$router.push({ name: 'Accounts' })
        })
      }
    }
  }
</script>
<style>
</style>
