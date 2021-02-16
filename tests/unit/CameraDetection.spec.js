// import { shallowMount } from '@vue/test-utils'
// import CameraDetection from '../../src/views/CameraDetection'
// import SelectWasteCategory from '../../src/components/modal/SelectWasteCategory'
//
// const getKey = 2
// const assignObject = {
//   items: [
//     { truck: 'Truk 1', asn: 'ASN-10/wq/123/tr', loadingDock: 'Ceper', assignDate: '05/07/20', assignStartTime: '05:00', assignEndTime: '07:00', internalStatus: 'Not Assigned', externalStatus: 'Pending' }
//   ]
// }
//
// describe('CameraDetection.vue', () => {
//   it('click Capture button', function () {
//     const wrapper = shallowMount(SelectWasteCategory, {
//       propsData: {
//
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
// })
