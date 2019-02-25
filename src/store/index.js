import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		storecolor: ['#325B69', '#698570', '#AE5548', '#6D9EA8', '#9CC2B0', '#C98769'],
		storeAjaxData: null
	},
	mutations: {
		setStoreAjaxData (state, data){
			state.storeAjaxData = data;
		}
	},
	actions: {
		
	}
})

export default store
