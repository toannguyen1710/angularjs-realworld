import angular from 'angular'

// create home module where our functionality can attach to
let authModule = angular.module('app.auth', [])

//include our UI-router config setting
import Authconfig from './auth.config'
authModule.config(Authconfig);

// include controller
import AuthCtrl from './auth.controller'
authModule.controller('AuthCtrl', AuthCtrl)

export default authModule;