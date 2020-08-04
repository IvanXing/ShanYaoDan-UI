import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import ButtonGroup from './button-group';
import Input from './input';

Vue.component('s-button', Button);
Vue.component('s-icon', Icon);
Vue.component('s-button-group', ButtonGroup);
Vue.component('s-input', Input);

new Vue({
	el: '#app',
	data: {
		loading1: false,
		loading2: true,
		loading3: false,
	},
	created(){
		setTimeout(()=>{   // 测试 触发input change事件
			let event = new Event('change');
			let inputElement = this.$el.querySelector('input')
			inputElement.dispatchEvent(event)
			console.log('hi')
		},3000)
	},
	methods: {
		inputChange(e) {
			console.log(e);
		}
	}
})

// // console.log(Button);  // Button是一个对象 没有办法通过对象实例化一个函数
// /*
// **  单元测试  vm创建一个实例
// */
// import chai from 'chai';
// import spies from 'chai-spies'
//
// chai.use(spies)
// const expect = chai.expect;
//
// try {
//
// 	/*
// 	**  测试按钮含有icon
// 	*/
// 	{
// 		const Constructor = Vue.extend(Button)
// 		const vm = new Constructor({
// 			propsData: {
// 				icon: 'settings'
// 			}
// 		})
// 		vm.$mount()
// 		let useElement = vm.$el.querySelector('use')
// 		let href = useElement.getAttribute('xlink:href')
// 		expect(href).to.eq('#i-settings')   // 期待href是 i-settings
// 		vm.$el.remove()
// 		vm.$destroy()
// 	}
// 	/*
// 	**  测试loading
// 	*/
// 	{
// 		const Constructor = Vue.extend(Button)
// 		const vm = new Constructor({
// 			propsData: {
// 				icon: 'settings',
// 				loading: true
// 			}
// 		})
// 		vm.$mount()
// 		let useElement = vm.$el.querySelector('use')
// 		let href = useElement.getAttribute('xlink:href')
// 		expect(href).to.eq('#i-loading')
// 		vm.$el.remove()
// 		vm.$destroy()
// 	}
// 	/*
// 	** 测试order，默认1
// 	*/
// 	{
// 		const div = document.createElement('div')
// 		document.body.appendChild(div)
// 		const Constructor = Vue.extend(Button)
// 		const vm = new Constructor({
// 			propsData: {
// 				icon: 'settings'
// 			}
// 		})
// 		vm.$mount(div)
// 		let svg = vm.$el.querySelector('svg')
// 		let {order} = window.getComputedStyle(svg)
// 		expect(order).to.eq('1')
// 		vm.$el.remove()
// 		vm.$destroy()
// 	}
// 	/*
// 	** 测试order，给iconPositon order为2
// 	*/
// 	{
// 		const div = document.createElement('div')
// 		document.body.appendChild(div)
// 		const Constructor = Vue.extend(Button)
// 		const vm = new Constructor({
// 			propsData: {
// 				icon: 'settings',
// 				iconPosition: 'right'
// 			}
// 		})
// 		vm.$mount(div)
// 		let svg = vm.$el.querySelector('svg')
// 		let {order} = window.getComputedStyle(svg)
// 		expect(order).to.eq('2')
// 		vm.$el.remove()
// 		vm.$destroy()
// 	}
// 	/*
// 	** 测试click
// 	*/
// 	{
// 		const Constructor = Vue.extend(Button)
// 		const vm = new Constructor({
// 			propsData: {
// 				icon: 'settings',
// 			}
// 		})
// 		vm.$mount()
// 		let spy = chai.spy(function () {
// 		});
// 		vm.$on('click', spy);
// 		// 希望这个函数被执行
// 		let button = vm.$el;
// 		button.click();
// 		expect(spy).to.have.been.called() // 期待button执行spy被调用
// 	}
//
// } catch(error) {
// 	window.errors = [error];
// } finally {
// 	window.errors && window.errors.forEach(error => {
// 		console.error(error.message);
// 	})
// }

