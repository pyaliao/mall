import Toast from './Toast'

const toast = {}
toast.install = function (Vue) {
  // 1.创建组件构造器
  // 使用基础Vue构造器，创建一个“子类”。参数是一个包含组件选项的对象。
  const ToastClass = Vue.extend(Toast)

  // 2.创建一个ToastClass实例
  const ToastInstance = new ToastClass()

  // 3.将实例挂载到一个元素上(参数已存在的元素的选择器，或者一个dom元素)
  ToastInstance.$mount(document.createElement('div'))

  // 4.将元素append到HTML结构中
  document.body.appendChild(ToastInstance.$el)

  // 5.将Toast组件对象绑定到Vue的原型对象prototype上
  Vue.prototype.$toast = ToastInstance
}

export default toast
