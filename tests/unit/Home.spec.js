// import { shallowMount } from '@vue/test-utils'
//
// const getKey = 2
// const assignObject = {
//   items: [
//     { truck: 'Truk 1', asn: 'ASN-10/wq/123/tr', loadingDock: 'Ceper', assignDate: '05/07/20', assignStartTime: '05:00', assignEndTime: '07:00', internalStatus: 'Not Assigned', externalStatus: 'Pending' }
//   ]
// }
//
// describe('Home.vue', () => {
//   it('click emit button', function () {
//     const wrapper = shallowMount(AssignLDList, {
//       propsData: {
//         getKey,
//         assignObject
//       }
//     })
//     wrapper.vm.emitToAssignLd(getKey)
//     expect(wrapper.vm.getKey).toBe(2)
//   })
//
//   it('Click on div card-box', () => {
//     const wrapper = shallowMount(AssignLDList, {
//       propsData: {
//         getKey,
//         assignObject
//       }
//     })
//     wrapper.find('div.card-box').trigger('click')
//     expect(wrapper.emitted().openModal).toBeTruthy()
//     expect(wrapper.emitted().openModal).toEqual([[2]])
//   })
//
//   it('should render to a snapshot when list is empty', () => {
//     const propsData = { todos: [] }
//     const wrapper = shallowMount(TodoList, { propsData })
//     expect(wrapper.element).toMatchSnapshot()
//   })
//
//   it('should render to a snapshot when list has items', () => {
//     const propsData = { todos: [{ id: 1, text: 'Todo #1' }] }
//     const wrapper = shallowMount(TodoList, { propsData })
//     expect(wrapper.element).toMatchSnapshot()
//   })
// })
