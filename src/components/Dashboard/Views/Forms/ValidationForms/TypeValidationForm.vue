<template>
  <div class="card">
    <form class="form-horizontal">
      <div class="card-header">
        <h4 class="card-title">
          User Information
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
            <label class="col-sm-2 control-label">Username</label>
            <div class="col-sm-6">
              <input type="text"
                     name="username"
                     v-validate="modelValidations.username"
                     v-model="model.username"
                     class="form-control">
              <small class="text-danger" v-show="username.invalid">
                {{ getError('username') }}
              </small>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <div class="form-group column-sizing">
            <label class="col-sm-2 control-label">
              Password
            </label>
            <div class="col-sm-3">
              <input class="form-control"
                     name="password"
                     placeholder="password"
                     v-validate="modelValidations.password"
                     v-model="model.password"
                     type="text">
              <small class="text-danger" v-show="password.invalid">
                {{ getError('password') }}
              </small>

            </div>
            <div class="col-sm-3">
              <input class="form-control"
                     name="confirm_password"
                     placeholder="confirm password"
                     v-validate="modelValidations.confirm_password"
                     v-model="model.confirm_password"
                     type="text">
              <small class="text-danger" v-show="confirm_password.invalid">
                {{ getError('confirm_password') }}
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
            <label class="col-sm-2 control-label">Number</label>
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
                <label class="col-sm-2 control-label">Type</label>
                <div class="col-sm-10">
                  <p-radio label="1" v-model="radios.radio1">Waterworks</p-radio>
                  <p-radio label="2" v-model="radios.radio1">Accounting</p-radio>
                  <p-radio label="3" v-model="radios.radio1">Treaasury</p-radio>
                  <p-radio label="4" v-model="radios.radio1">Admin</p-radio>
                </div>
              </div>
        </fieldset>
      </div>
      <div class="card-footer text-center">
        <button type="submit" @click.prevent="validate" class="button">Save User</button>
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
          this.$router.push({ name: 'Users' })
        })
      }
    }
  }
</script>
<style>
</style>
